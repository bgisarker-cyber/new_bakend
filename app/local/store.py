# app/routers/store.py

from io import BytesIO
from typing import Optional, Dict, Any
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException, status
from fastapi.responses import StreamingResponse
from datetime import datetime
import pandas as pd
import traceback

from app.database import conn, cursor
from app.utils.auth import get_current_user
from app.utils.logger import log_user_action
from app.utils.role_check import check_role

router = APIRouter(prefix="/store", tags=["store"])

# ===========================
# Store table column max lengths
# ===========================
COLUMN_MAX_LENGTHS: Dict[str, int] = {
    "pos_serial": 100,
    "model": 100,
    "oem": 100,
    "assigned": 100,
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

# 🔹 Get all store records
@router.get("/all", status_code=status.HTTP_200_OK)
def get_all_store(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        cursor.execute("SELECT * FROM store ORDER BY sl DESC;")
        rows = cursor.fetchall()
        return {"data": rows}
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# 🔹 Add new store record
@router.post("/add", status_code=status.HTTP_201_CREATED)
def add_store_record(data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        data = {k.lower(): v for k, v in data.items()}
        pos_serial = _truncate_value(clean_value(data.get("pos_serial")), COLUMN_MAX_LENGTHS["pos_serial"])
        model = _truncate_value(clean_value(data.get("model")), COLUMN_MAX_LENGTHS["model"])
        oem = _truncate_value(clean_value(data.get("oem")), COLUMN_MAX_LENGTHS["oem"])
        assigned = _truncate_value(clean_value(data.get("assigned")), COLUMN_MAX_LENGTHS["assigned"])

        if not all([pos_serial, model, oem]):
            raise HTTPException(status_code=400, detail="pos_serial, model, and oem are required.")

        cursor.execute("SELECT sl FROM store WHERE pos_serial = %s;", (pos_serial,))
        if cursor.fetchone():
            raise HTTPException(status_code=409, detail="POS serial already exists.")

        cursor.execute(
            """
            INSERT INTO store (pos_serial, model, oem, assigned, created_at, updated_at)
            VALUES (%s, %s, %s, %s, NOW(), NOW())
            RETURNING sl;
            """,
            (pos_serial, model, oem, assigned),
        )
        new = cursor.fetchone()
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="add_store",
            target_table="store",
            target_id=new["sl"] if new else None,
            description=f"Added new store record: {pos_serial}",
        )

        return {"message": "Record added successfully", "id": new["sl"] if new else None}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# 🔹 Edit store record
@router.put("/edit/{sl}", status_code=status.HTTP_200_OK)
def edit_store_record(sl: int, data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        fields, values = [], []
        for col in ["model", "oem", "assigned"]:
            if col in data:
                val = _truncate_value(clean_value(data[col]), COLUMN_MAX_LENGTHS[col])
                fields.append(f"{col} = %s")
                values.append(val)

        if not fields:
            raise HTTPException(status_code=400, detail="No fields provided for update.")

        values.append(sl)
        query = f"""
            UPDATE store
            SET {', '.join(fields)}, updated_at = NOW()
            WHERE sl = %s
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
            action="edit_store",
            target_table="store",
            target_id=sl,
            description=f"Edited store record ID {sl}",
        )

        return {"message": "Record updated successfully", "updated_data": updated}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# 🔹 Delete store record
@router.delete("/delete/{sl}", status_code=status.HTTP_200_OK)
def delete_store_record(sl: int, current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["superadmin"])
    try:
        cursor.execute("DELETE FROM store WHERE sl = %s RETURNING sl;", (sl,))
        deleted = cursor.fetchone()
        if not deleted:
            raise HTTPException(status_code=404, detail="Record not found.")
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="delete_store",
            target_table="store",
            target_id=sl,
            description=f"Deleted store record ID {sl}",
        )

        return {"message": "Record deleted successfully", "id": sl}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# 🔹 Download Excel template
@router.get("/template", status_code=status.HTTP_200_OK)
def download_store_template(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["support", "admin", "superadmin"])
    try:
        df = pd.DataFrame(columns=["pos_serial", "model", "oem", "assigned"])
        output = BytesIO()
        df.to_excel(output, index=False)
        output.seek(0)
        headers = {"Content-Disposition": 'attachment; filename="store_upload_template.xlsx"'}
        return StreamingResponse(
            output,
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            headers=headers,
        )
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# 🔹 Bulk Upload Excel
@router.post("/upload", status_code=status.HTTP_201_CREATED)
def upload_store_excel(file: UploadFile = File(...), current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        contents = file.file.read()
        df = pd.read_excel(BytesIO(contents))
        df.columns = [c.strip().lower() for c in df.columns]

        required_columns = ["pos_serial", "model", "oem", "assigned"]
        missing = [c for c in required_columns if c not in df.columns]
        if missing:
            raise HTTPException(status_code=400, detail=f"Missing columns: {', '.join(missing)}")

        df = df.fillna("").dropna(how="all")
        if df.empty:
            raise HTTPException(status_code=400, detail="Excel file is empty")

        inserted = updated = skipped = failed = 0
        skipped_rows, failed_rows = [], []

        for idx, row in df.iterrows():
            row_no = idx + 2
            try:
                record = {}
                for col in required_columns:
                    record[col] = _truncate_value(clean_value(row[col]), COLUMN_MAX_LENGTHS[col])

                pos_serial = record["pos_serial"]
                if not pos_serial:
                    skipped += 1
                    skipped_rows.append(row_no)
                    continue

                cursor.execute("SELECT * FROM store WHERE pos_serial = %s;", (pos_serial,))
                existing = cursor.fetchone()

                if existing:
                    updates, values = [], []
                    for key in ["model", "oem", "assigned"]:
                        if record[key] != existing.get(key):
                            updates.append(f"{key} = %s")
                            values.append(record[key])
                    if updates:
                        updates.append("updated_at = NOW()")
                        values.append(pos_serial)
                        query = f"UPDATE store SET {', '.join(updates)} WHERE pos_serial = %s;"
                        cursor.execute(query, tuple(values))
                        updated += 1
                    else:
                        skipped += 1
                        skipped_rows.append(row_no)
                else:
                    columns = list(record.keys())
                    placeholders = ", ".join(["%s"] * len(columns))
                    query = f"INSERT INTO store ({', '.join(columns)}, created_at, updated_at) VALUES ({placeholders}, NOW(), NOW());"
                    cursor.execute(query, tuple(record.values()))
                    inserted += 1

            except Exception:
                conn.rollback()
                failed += 1
                failed_rows.append(row_no)
                continue

        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="upload_store_bulk",
            target_table="store",
            description=f"Bulk uploaded store Excel: {inserted} inserted, {updated} updated, {skipped} skipped, {failed} failed",
        )

        return {
            "message": "Bulk upload completed",
            "summary": {
                "total_rows": len(df),
                "inserted": inserted,
                "updated": updated,
                "skipped": skipped,
                "failed": failed,
                "skipped_rows": skipped_rows,
                "failed_rows": failed_rows,
            },
        }

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        file.file.close()
