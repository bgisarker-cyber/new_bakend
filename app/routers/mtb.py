import datetime
from io import BytesIO
from typing import Dict, Any
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException, status
from fastapi.responses import StreamingResponse
import pandas as pd
import traceback

from app.database import conn, cursor
from app.utils.auth import get_current_user
from app.utils.logger import log_user_action
from app.utils.role_check import check_role

router = APIRouter(prefix="/mtb", tags=["MTB POS"])

# ================================
# Utility function
# ================================
def _truncate(value: Any, max_len: int = 255, column_type: str = "text"):
    if value is None or str(value).strip() == "":
        return None if column_type == "date" else " "
    s = str(value).strip()
    if column_type == "text":
        return s[:max_len]
    elif column_type == "date":
        try:
            return pd.to_datetime(s).date()
        except Exception:
            return None
    return s


# ================================
# 1️⃣ Get all MTB records
# ================================
@router.get("/all", status_code=status.HTTP_200_OK)
def get_all_mtb(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["support", "admin", "superadmin"])
    try:
        cursor.execute('SELECT * FROM mtb ORDER BY "Id" ASC;')
        rows = cursor.fetchall()

        # Log user action
      

        return {"data": rows}
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# ================================
# 2️⃣ Add new MTB record
# ================================
@router.post("/add", status_code=status.HTTP_201_CREATED)
def add_mtb_record(data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        pos_serial = _truncate(data.get("POS SERIAL"))
        if not pos_serial:
            raise HTTPException(status_code=400, detail="POS SERIAL is required.")

        cursor.execute('SELECT "Id" FROM mtb WHERE "POS SERIAL" = %s;', (pos_serial,))
        if cursor.fetchone():
            raise HTTPException(status_code=409, detail="POS SERIAL already exists.")

        columns = list(data.keys())
        placeholders = ", ".join(["%s"] * len(columns))
        col_names = ", ".join([f'"{c}"' for c in columns])
        cursor.execute(
            f'INSERT INTO mtb ({col_names}, "create_time", "update_time") VALUES ({placeholders}, NOW(), NOW()) RETURNING "Id";',
            tuple(data.values())
        )
        new_id = cursor.fetchone()[0]
        conn.commit()

        # Log user action
        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="add_mtb",
            target_table="mtb",
            target_id=new_id,
            description=f"Added new MTB record: {pos_serial}"
        )

        return {"message": "Record added successfully", "id": new_id}
    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))





# ================================
# 5️⃣ Upload Excel (Bulk)
# ================================
@router.post("/upload", status_code=status.HTTP_201_CREATED)
def upload_mtb_excel(file: UploadFile = File(...), current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        df = pd.read_excel(BytesIO(file.file.read()))
        df.columns = [c.strip() for c in df.columns]
        df = df.fillna("").dropna(how="all")

        inserted = updated = skipped = failed = 0
        for _, row in df.iterrows():
            try:
                pos_serial = _truncate(row.get("POS SERIAL"))
                if not pos_serial:
                    skipped += 1
                    continue

                cursor.execute('SELECT * FROM mtb WHERE "POS SERIAL" = %s;', (pos_serial,))
                existing = cursor.fetchone()
                record = {col: _truncate(row[col]) for col in df.columns if col in row}

                if existing:
                    set_clause = ", ".join([f'"{k}" = %s' for k in record])
                    cursor.execute(
                        f'UPDATE mtb SET {set_clause}, "update_time" = NOW() WHERE "POS SERIAL" = %s;',
                        (*record.values(), pos_serial)
                    )
                    updated += 1
                else:
                    placeholders = ", ".join(["%s"] * len(record))
                    columns = ", ".join([f'"{k}"' for k in record.keys()])
                    cursor.execute(
                        f'INSERT INTO mtb ({columns}, "create_time", "update_time") VALUES ({placeholders}, NOW(), NOW());',
                        tuple(record.values())
                    )
                    inserted += 1
            except Exception:
                traceback.print_exc()
                conn.rollback()
                failed += 1
                continue

        conn.commit()

        # Log user action
        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="upload_mtb_bulk",
            target_table="mtb",
            description=f"Bulk uploaded MTB Excel: {inserted} inserted, {updated} updated, {skipped} skipped, {failed} failed"
        )

        return {
            "message": "Bulk upload completed",
            "summary": {"inserted": inserted, "updated": updated, "skipped": skipped, "failed": failed}
        }

    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        file.file.close()


# ================================
# 6️⃣ Download Excel
# ================================
@router.get("/download", status_code=status.HTTP_200_OK)
def download_all_mtb_records():
    
    try:
        cursor.execute('SELECT * FROM mtb ORDER BY "Id";')
        rows = cursor.fetchall()
        df = pd.DataFrame(rows, columns=[desc[0] for desc in cursor.description])

        output = BytesIO()
        df.to_excel(output, index=False)
        output.seek(0)

        # Log user action
        

        headers = {"Content-Disposition": 'attachment; filename="mtb_pos_data.xlsx"'}
        return StreamingResponse(output, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", headers=headers)
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Failed to generate Excel: {e}")


# ================================
# 7️⃣ Download Template
# ================================
@router.get("/template")
def download_mtb_template():
    
    cols = [
        "SL.", "TID", "MID", "CLIENT ID", "OUTLET NAME/DBA NAME", "MERCHANT NAME", "ADDRESS", "STATUS",
        "TENURE", "City", "ZONE AREA", "POS MODEL", "POS SERIAL", "TELCO", "SIM SERIAL NUMBER",
        "APP VERSION", "INSTALLATION DATE", "IP ADDRESS", "CONFIGURED", "HANDOVER TO", "HANDOVER DATE",
        "DEPLOYMENT DATE", "VENDOR", "PORT NUMBER", "REASON", "MERCHAN CONTACT PERSON",
        "MERCHAN CONTACT NUMBER", "ROLL OUT BY", "ROLL OUT DATE", "APP RELEASE DATE", "Statas",
        "Description", "TMS OPERATING", "TMS DATE", "UPDAT TYPE", "New per file add"
    ]
    df = pd.DataFrame(columns=cols)
    buf = BytesIO()
    df.to_excel(buf, index=False)
    buf.seek(0)

    # Log user action
  

    headers = {"Content-Disposition": 'attachment; filename="mtb_template.xlsx"'}
    return StreamingResponse(buf, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", headers=headers)
