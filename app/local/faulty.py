# app/routers/faulty.py

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

router = APIRouter(prefix="/faulty", tags=["faulty"])

# ===========================
# Faulty table column max lengths
# ===========================
COLUMN_MAX_LENGTHS: Dict[str, int] = {
    "fault_type": 555,
    "fault_cause": 555,
    "approach": 555,
    "replaced_part": 555,
    "pos_serial": 255
}

# ===========================
# Helpers
# ===========================
def _truncate_value(value: Optional[str], max_len: int) -> Optional[str]:
    if value is None:
        return None
    s = str(value).strip()
    if len(s) > max_len:
        print(f"⚠️ Truncating value '{s}' to {max_len} chars")
        return s[:max_len]
    return s

def clean_value(v: Any) -> Optional[str]:
    if v is None:
        return None
    s = str(v).strip()
    if not s or s.upper() in ["N/A", "NA", "NONE", "NULL"]:
        return None
    return s

# ===========================
# Routes
# ===========================

# 🔹 Get all faulty records
@router.get("/all", status_code=status.HTTP_200_OK)
def get_all_faulty(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        cursor.execute("SELECT * FROM faulty ORDER BY id DESC;")
        rows = cursor.fetchall()
        return {"data": rows}
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# 🔹 Add new faulty record
@router.post("/add", status_code=status.HTTP_201_CREATED)
def add_faulty_record(data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        data = {k.lower(): v for k, v in data.items()}
        pos_serial = _truncate_value(clean_value(data.get("pos_serial")), COLUMN_MAX_LENGTHS["pos_serial"])
        fault_type = _truncate_value(clean_value(data.get("fault_type")), COLUMN_MAX_LENGTHS["fault_type"])
        fault_cause = _truncate_value(clean_value(data.get("fault_cause")), COLUMN_MAX_LENGTHS["fault_cause"])
        approach = _truncate_value(clean_value(data.get("approach")), COLUMN_MAX_LENGTHS["approach"])
        replaced_part = _truncate_value(clean_value(data.get("replaced_part")), COLUMN_MAX_LENGTHS["replaced_part"])

        if not all([pos_serial, fault_type, fault_cause, approach]):
            raise HTTPException(status_code=400, detail="pos_serial, fault_type, fault_cause, and approach are required.")

        cursor.execute(
            """
            INSERT INTO faulty (pos_serial, fault_type, fault_cause, approach, replaced_part, create_time, update_time)
            VALUES (%s, %s, %s, %s, %s, NOW(), NOW())
            RETURNING id;
            """,
            (pos_serial, fault_type, fault_cause, approach, replaced_part),
        )
        new = cursor.fetchone()
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="add_faulty",
            target_table="faulty",
            target_id=new["id"] if isinstance(new, dict) else (new[0] if new else None),
            description=f"Added new faulty record: {fault_type}",
        )

        return {"message": "Record added successfully", "id": new["id"] if new else None}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# 🔹 Edit faulty record
@router.put("/edit/{id}", status_code=status.HTTP_200_OK)
def edit_faulty_record(id: int, data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        fields = []
        values = []
        for col in ["pos_serial", "fault_type", "fault_cause", "approach", "replaced_part"]:
            if col in data:
                val = _truncate_value(clean_value(data[col]), COLUMN_MAX_LENGTHS[col])
                fields.append(f"{col} = %s")
                values.append(val)

        if not fields:
            raise HTTPException(status_code=400, detail="No fields provided for update.")

        values.append(id)
        query = f"""
            UPDATE faulty
            SET {', '.join(fields)}, update_time = NOW()
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
            action="edit_faulty",
            target_table="faulty",
            target_id=id,
            description=f"Edited faulty record ID {id}",
        )

        return {"message": "Record updated successfully", "updated_data": updated}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# 🔹 Delete faulty record
@router.delete("/delete/{id}", status_code=status.HTTP_200_OK)
def delete_faulty_record(id: int, current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["superadmin"])
    try:
        cursor.execute("DELETE FROM faulty WHERE id = %s RETURNING id;", (id,))
        deleted = cursor.fetchone()
        if not deleted:
            raise HTTPException(status_code=404, detail="Record not found.")
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="delete_faulty",
            target_table="faulty",
            target_id=id,
            description=f"Deleted faulty record ID {id}",
        )

        return {"message": "Record deleted successfully", "id": id}

    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# 🔹 Download Excel template
@router.get("/template", status_code=status.HTTP_200_OK)
def download_faulty_template(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["support", "admin", "superadmin"])
    try:
        df = pd.DataFrame(columns=["pos_serial", "fault_type", "fault_cause", "approach", "replaced_part"])
        output = BytesIO()
        df.to_excel(output, index=False)
        output.seek(0)
        headers = {"Content-Disposition": 'attachment; filename="faulty_upload_template.xlsx"'}
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
def upload_faulty_excel(file: UploadFile = File(...), current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        contents = file.file.read()
        df = pd.read_excel(BytesIO(contents))
        df.columns = [c.strip().lower() for c in df.columns]

        required_columns = ["pos_serial", "fault_type", "fault_cause", "approach", "replaced_part"]
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

                if not record["pos_serial"] or not record["fault_type"]:
                    skipped += 1
                    skipped_rows.append(row_no)
                    continue

                cursor.execute(
                    "SELECT * FROM faulty WHERE pos_serial = %s AND fault_type = %s AND fault_cause = %s;",
                    (record["pos_serial"], record["fault_type"], record["fault_cause"])
                )
                existing = cursor.fetchone()

                if existing:
                    updates = []
                    values = []
                    for key in ["approach", "replaced_part"]:
                        if record[key] != existing.get(key):
                            updates.append(f"{key} = %s")
                            values.append(record[key])
                    if updates:
                        updates.append("update_time = NOW()")
                        values.append(existing["id"] if isinstance(existing, dict) else existing[0])
                        query = f"UPDATE faulty SET {', '.join(updates)} WHERE id = %s;"
                        cursor.execute(query, tuple(values))
                        updated += 1
                    else:
                        skipped += 1
                        skipped_rows.append(row_no)
                else:
                    columns = list(record.keys())
                    placeholders = ", ".join(["%s"] * len(columns))
                    query = f"INSERT INTO faulty ({', '.join(columns)}, create_time, update_time) VALUES ({placeholders}, NOW(), NOW());"
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
            action="upload_faulty_bulk",
            target_table="faulty",
            description=f"Bulk uploaded faulty Excel: {inserted} inserted, {updated} updated, {skipped} skipped, {failed} failed",
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
