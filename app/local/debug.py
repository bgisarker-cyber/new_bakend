from typing import Optional, Dict, Any, List
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from fastapi.responses import FileResponse
from datetime import datetime
import traceback
import pandas as pd
import io
import os

from app.database import conn, cursor
from app.utils.auth import get_current_user
from app.utils.logger import log_user_action
from app.utils.role_check import check_role  # ✅ Added: role-based access

router = APIRouter(prefix="/debug", tags=["debug"])

# ===========================
# Debug table column max lengths
# ===========================
COLUMN_MAX_LENGTHS: Dict[str, int] = {
    "pos_serial": 200,
    "model": 200,
    "oem": 200,
    "assigned_bank": 200,
}

# ===========================
# Helpers
# ===========================
def _truncate_value(value: Optional[str], max_len: int) -> Optional[str]:
    """Trim string to max length and strip spaces."""
    if value is None:
        return None
    s = str(value).strip()
    if len(s) > max_len:
        print(f"⚠️ Truncating value '{s}' to {max_len} chars")
        return s[:max_len]
    return s


def clean_value(v: Any) -> Optional[str]:
    """Normalize value, treat empty strings or null-like values as None."""
    if v is None:
        return None
    s = str(v).strip()
    if not s or s.upper() in ["N/A", "NA", "NONE", "NULL"]:
        return None
    return s


# ===========================
# Routes
# ===========================

# Get all debug records
@router.get("/all", status_code=status.HTTP_200_OK)
def get_all_debug(current_user: dict = Depends(get_current_user)):
    # ✅ Allow all authenticated users (support, admin, superadmin)
    check_role(current_user, [ "admin", "superadmin"])

    try:
        cursor.execute("SELECT * FROM debug ORDER BY id DESC;")
        rows = cursor.fetchall()
        return {"data": rows}
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# Add debug record (admin/superadmin)
@router.post("/add", status_code=status.HTTP_201_CREATED)
def add_debug_record(data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    # ✅ Restrict: only admin & superadmin can add
    check_role(current_user, ["admin", "superadmin"])

    try:
        data = {k.lower(): v for k, v in data.items()}
        pos_serial = _truncate_value(clean_value(data.get("pos_serial")), COLUMN_MAX_LENGTHS["pos_serial"])
        model = _truncate_value(clean_value(data.get("model")), COLUMN_MAX_LENGTHS["model"])
        oem = _truncate_value(clean_value(data.get("oem")), COLUMN_MAX_LENGTHS["oem"])
        assigned_bank = _truncate_value(clean_value(data.get("assigned_bank")), COLUMN_MAX_LENGTHS["assigned_bank"])

        if not all([pos_serial, model, oem, assigned_bank]):
            raise HTTPException(status_code=400, detail="All fields (pos_serial, model, oem, assigned_bank) are required.")

        cursor.execute("SELECT id FROM debug WHERE pos_serial = %s;", (pos_serial,))
        if cursor.fetchone():
            raise HTTPException(status_code=409, detail="POS serial already exists.")

        cursor.execute(
            """
            INSERT INTO debug (pos_serial, model, oem, assigned_bank, create_at, update_at)
            VALUES (%s, %s, %s, %s, NOW(), NOW())
            RETURNING id;
            """,
            (pos_serial, model, oem, assigned_bank),
        )
        new = cursor.fetchone()
        conn.commit()

        new_id = new["id"] if isinstance(new, dict) else new[0] if new else None

        log_user_action(
            user_email=current_user.get("email"),
            user_role=current_user.get("role"),
            action="add_debug",
            target_table="debug",
            target_id=new_id,
            description=f"Added new debug terminal: {pos_serial}",
        )

        return {"message": "Record added successfully", "id": new_id}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")


# Edit debug record (admin/superadmin)
@router.put("/edit/{id}", status_code=status.HTTP_200_OK)
def edit_debug_record(id: int, data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])

    try:
        fields, values = [], []
        for col in ["model", "oem", "assigned_bank"]:
            if col in data:
                val = _truncate_value(clean_value(data[col]), COLUMN_MAX_LENGTHS[col])
                fields.append(f"{col} = %s")
                values.append(val)

        if not fields:
            raise HTTPException(status_code=400, detail="No fields provided for update.")

        values.append(id)
        query = f"""
            UPDATE debug
            SET {', '.join(fields)}, update_at = NOW()
            WHERE id = %s
            RETURNING *;
        """
        cursor.execute(query, tuple(values))
        updated = cursor.fetchone()
        if not updated:
            raise HTTPException(status_code=404, detail="Record not found.")

        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="edit_debug",
            target_table="debug",
            target_id=id,
            description=f"Edited debug terminal ID {id}",
        )

        return {"message": "Record updated successfully", "updated_data": updated}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# Delete debug record (superadmin only)
@router.delete("/delete/{id}", status_code=status.HTTP_200_OK)
def delete_debug_record(id: int, current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["superadmin"])

    try:
        cursor.execute("DELETE FROM debug WHERE id = %s RETURNING id;", (id,))
        deleted = cursor.fetchone()
        if not deleted:
            raise HTTPException(status_code=404, detail="Record not found.")
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="delete_debug",
            target_table="debug",
            target_id=id,
            description=f"Deleted debug terminal ID {id}",
        )

        return {"message": "Record deleted successfully", "id": id}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# ==============================
# Bulk Upload (Admin / Superadmin)
# ==============================
@router.post("/bulk-upload", status_code=status.HTTP_201_CREATED)
async def bulk_upload(file: UploadFile = File(...), current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])

    try:
        contents = await file.read()
        df = pd.read_excel(io.BytesIO(contents))

        required_cols = {"pos_serial", "model", "oem", "assigned_bank"}
        if not required_cols.issubset(df.columns.str.lower()):
            raise HTTPException(status_code=400, detail=f"Excel must contain columns: {', '.join(required_cols)}")

        count = 0
        for _, row in df.iterrows():
            pos_serial = _truncate_value(clean_value(row.get("pos_serial")), COLUMN_MAX_LENGTHS["pos_serial"])
            model = _truncate_value(clean_value(row.get("model")), COLUMN_MAX_LENGTHS["model"])
            oem = _truncate_value(clean_value(row.get("oem")), COLUMN_MAX_LENGTHS["oem"])
            assigned_bank = _truncate_value(clean_value(row.get("assigned_bank")), COLUMN_MAX_LENGTHS["assigned_bank"])

            if not all([pos_serial, model, oem, assigned_bank]):
                continue  # skip invalid rows

            cursor.execute("SELECT id FROM debug WHERE pos_serial = %s;", (pos_serial,))
            if cursor.fetchone():
                continue  # skip duplicates

            cursor.execute(
                """
                INSERT INTO debug (pos_serial, model, oem, assigned_bank, create_at, update_at)
                VALUES (%s, %s, %s, %s, NOW(), NOW());
                """,
                (pos_serial, model, oem, assigned_bank),
            )
            count += 1

        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="bulk_upload_debug",
            target_table="debug",
            description=f"Bulk uploaded {count} debug records from {file.filename}",
        )

        return {"message": f"Bulk upload complete. {count} records inserted."}

    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Bulk upload error: {str(e)}")


# ==============================
# Download Debug Data (Support/Admin/Superadmin)
# ==============================
@router.get("/download", response_class=FileResponse)
def download_debug_data(current_user: dict = Depends(get_current_user)):
    check_role(current_user, [ "admin", "superadmin"])

    try:
        cursor.execute("SELECT * FROM debug ORDER BY id DESC;")
        rows = cursor.fetchall()
        if not rows:
            raise HTTPException(status_code=404, detail="No data available to download.")

        df = pd.DataFrame(rows)
        output_path = "debug_export.xlsx"
        df.to_excel(output_path, index=False)

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="download_debug_data",
            target_table="debug",
            description="Downloaded debug data as Excel",
        )

        return FileResponse(output_path, filename="debug_export.xlsx", media_type="application/vnd.ms-excel")

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Download failed: {str(e)}")
