# app/utils/logger.py
from datetime import datetime
from app.database import cursor, conn
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel,EmailStr
from datetime import timedelta
from app.database import conn, cursor
from app.utils.auth import hash_password, verify_password, create_access_token, SECRET_KEY, ALGORITHM, get_current_user
from typing import Optional


router=APIRouter(prefix="/logs")

def log_user_action(
    user_email: str,
    user_role: str,
    action: str,
    target_table: str = None,
    target_id: int = None,
    description: str = None
):
    try:
        cursor.execute(
            """
            INSERT INTO user_logs (user_email, user_role, action, target_table, target_id, description, timestamp)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            """,
            (user_email, user_role, action, target_table, target_id, description, datetime.now())
        )
        conn.commit()
    except Exception as e:
        conn.rollback()
        # Don't raise to avoid breaking main flow; print for debugging
        print(f"⚠️ Failed to log user action: {e}")



@router.get("/show", status_code=200)
def get_logs(current_user: dict = Depends(get_current_user)):
    if (current_user.get("role") or "").lower() != "superadmin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Access denied")

    cursor.execute("SELECT * FROM user_logs ORDER BY timestamp DESC;")
    logs = cursor.fetchall()
    return {"data": logs}
