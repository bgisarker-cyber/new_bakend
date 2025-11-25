import datetime
from io import BytesIO
from typing import Dict, Any
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException, status
from fastapi.responses import StreamingResponse
import pandas as pd
from app.database import conn, cursor
import traceback
from app.utils.auth import get_current_user
from app.utils.logger import log_user_action
from app.utils.role_check import check_role

router = APIRouter(prefix="/standard", tags=["standard"])

# --------------------------------------------------
# UTIL
# --------------------------------------------------
def _truncate(value: Any, max_len: int = 255):
    if value is None:
        return None
    value = str(value).strip()
    return value[:max_len] if value else None

# --------------------------------------------------
# 1️⃣  GET ALL RECORDS
# --------------------------------------------------
@router.get("/all", status_code=status.HTTP_200_OK)
def get_all_standard(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["support", "admin", "superadmin"])
    try:
        cursor.execute('SELECT * FROM standard ORDER BY "SL" ASC;')
        rows = cursor.fetchall()
        return {"data": rows}          # ← MUST return the rows
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# --------------------------------------------------
# 2️⃣  UPLOAD EXCEL  →  INSERT / UPDATE
# --------------------------------------------------
@router.post("/upload", status_code=status.HTTP_201_CREATED)
def upload_standard_excel(file: UploadFile = File(...), current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    try:
        df = pd.read_excel(BytesIO(file.file.read()))
        df.columns = [c.strip().upper() for c in df.columns]
        df = df.fillna("")

        required_key = "POS SERIAL"
        if required_key not in df.columns:
            raise HTTPException(status_code=400, detail=f"Missing '{required_key}' column in Excel")

        db_cols = {
            "SL", "PURPOSE", "CONFIGDATE", "MID", "TID", "DBA NAME", "ADDRESS",
            "CITY", "LOCATION", "POS TYPE", "POS MODEL", "POS SERIAL",
            "APP VERSION", "ROLL OUT DATE", "ENGINEER NAME", "IP ADDRESS",
            "PORT NUMBER", "CONTACT NUMBER", "HANDOVER TO", "HANDOVER DATE"
        }

        inserted = updated = skipped = failed = 0

        for _, row in df.iterrows():
            try:
                record = {col: _truncate(row[col]) for col in df.columns if col in db_cols}
                pos_serial = record.get("POS SERIAL")
                if not pos_serial:
                    skipped += 1
                    continue

                cursor.execute('SELECT "SL" FROM standard WHERE "POS SERIAL" = %s;', (pos_serial,))
                exists = cursor.fetchone()

                if exists:
                    set_clause = ", ".join([f'"{k}" = %s' for k in record])
                    cursor.execute(
                        f'UPDATE standard SET {set_clause}, update_time = NOW() WHERE "POS SERIAL" = %s;',
                        (*record.values(), pos_serial)
                    )
                    updated += 1
                else:
                    columns = ", ".join([f'"{k}"' for k in record.keys()])
                    placeholders = ", ".join(["%s"] * len(record))
                    cursor.execute(
                        f'INSERT INTO standard ({columns}, create_time, update_time) '
                        f'VALUES ({placeholders}, NOW(), NOW());',
                        tuple(record.values())
                    )
                    inserted += 1

            except Exception:
                traceback.print_exc()
                conn.rollback()
                failed += 1

        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="upload_excel",
            target_table="standard",
            description=f"Bulk upload: {inserted} inserted, {updated} updated, {skipped} skipped, {failed} failed"
        )

        return {
            "message": "✅ Standard Excel Upload Completed",
            "summary": {"inserted": inserted, "updated": updated, "failed": failed, "skipped": skipped},
        }

    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        file.file.close()

# --------------------------------------------------
# 3️⃣  DOWNLOAD ALL RECORDS AS EXCEL
# --------------------------------------------------
@router.get("/download", status_code=status.HTTP_200_OK)
def download_standard_excel(current_user: dict = Depends(get_current_user)):
    check_role(current_user, ["support", "admin", "superadmin"])
    try:
        columns = [
            "SL", "PURPOSE", "CONFIGDATE", "MID", "TID", "DBA NAME", "ADDRESS",
            "CITY", "LOCATION", "POS TYPE", "POS MODEL", "POS SERIAL",
            "APP VERSION", "ROLL OUT DATE", "ENGINEER NAME", "IP ADDRESS",
            "PORT NUMBER", "CONTACT NUMBER", "HANDOVER TO", "HANDOVER DATE"
        ]
        quoted_cols = [f'"{c}"' for c in columns]
        cursor.execute(f'SELECT {", ".join(quoted_cols)} FROM standard ORDER BY "SL";')
        rows = cursor.fetchall()
        df = pd.DataFrame(rows, columns=columns)

        output = BytesIO()
        with pd.ExcelWriter(output, engine="openpyxl") as writer:
            df.to_excel(writer, index=False, sheet_name="Standard_POS_Data")
        output.seek(0)

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="download_excel",
            target_table="standard",
            description=f"Downloaded all Standard records, count: {len(df)}"
        )

        headers = {"Content-Disposition": 'attachment; filename="standard_pos_data.xlsx"'}
        return StreamingResponse(
            output,
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            headers=headers
        )

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# --------------------------------------------------
# 4️⃣  EXCEL TEMPLATE
# --------------------------------------------------
@router.get("/template")
def download_standard_template(current_user: dict = Depends(get_current_user)):
    cols = [
        "SL", "PURPOSE", "CONFIGDATE", "MID", "TID", "DBA NAME", "ADDRESS",
        "CITY", "LOCATION", "POS TYPE", "POS MODEL", "POS SERIAL",
        "APP VERSION", "ROLL OUT DATE", "ENGINEER NAME", "IP ADDRESS",
        "PORT NUMBER", "CONTACT NUMBER", "HANDOVER TO", "HANDOVER DATE"
    ]
    df = pd.DataFrame(columns=cols)
    buf = BytesIO()
    df.to_excel(buf, index=False)
    buf.seek(0)

    log_user_action(
        user_email=current_user["email"],
        user_role=current_user["role"],
        action="download_template",
        target_table="standard",
        description="Downloaded Standard Excel template"
    )

    headers = {"Content-Disposition": 'attachment; filename="standard_template.xlsx"'}
    return StreamingResponse(
        buf,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers=headers
    )