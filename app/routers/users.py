import traceback
from fastapi import APIRouter, HTTPException, Depends, Request, status
from pydantic import BaseModel, EmailStr
from datetime import timedelta
from typing import Any, Dict, Optional, List
import io
import pandas as pd

from app.database import conn, cursor
from app.local.debug import COLUMN_MAX_LENGTHS, _truncate_value, clean_value
from app.utils.auth import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
)
from app.utils.logger import log_user_action

router = APIRouter(prefix="/auth", tags=["Authentication"])

# ---------- Schemas ----------
class UserRegister(BaseModel):
    username: str
    password: str
    role: str
    email: EmailStr


class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    role: str


# ---------- Role-based helpers ----------
def require_role(allowed_roles: List[str]):
    """Decorator to restrict route access based on role."""
    def dependency(current_user: dict = Depends(get_current_user)):
        user_role = (current_user.get("role") or "").lower()
        if user_role not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Access denied: {user_role} not allowed.",
            )
        return current_user
    return dependency


# ---------- Helpers ----------
def get_user_by_email(email: EmailStr):
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    return cursor.fetchone()


# ---------------- Register User (Superadmin only) ----------------
@router.post("/create", status_code=status.HTTP_201_CREATED)
def register_user(user: UserRegister, current_user: dict = Depends(require_role(["superadmin"]))):
    """Create a new user (only superadmin)."""
    role = user.role.lower()
    if role not in ["superadmin", "admin", "support"]:
        raise HTTPException(status_code=400, detail="Invalid role")

    hashed_pwd = hash_password(user.password)
    try:
        cursor.execute(
            """
            INSERT INTO users (username, email, password, role)
            VALUES (%s, %s, %s, %s)
            RETURNING id;
            """,
            (user.username, user.email, hashed_pwd, user.role),
        )
        new = cursor.fetchone()
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="create_user",
            target_table="users",
            target_id=new["id"] if isinstance(new, dict) else (new[0] if new else None),
            description=f"Created user '{user.username}' with role '{user.role}'",
        )

        return {"message": f"User '{user.username}' created successfully"}
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")


# ---------- Login ----------
@router.post("/login")
def login(form_data: LoginRequest):
    cursor.execute("SELECT * FROM users WHERE email = %s", (form_data.email,))
    user = cursor.fetchone()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    if isinstance(user, tuple):
        user = {"id": user[0], "username": user[1], "email": user[2], "password": user[3], "role": user[4]}

    if not verify_password(form_data.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    db_role = (user.get("role") or "").lower()
    if db_role != form_data.role.lower():
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Unauthorized role")

    access_token = create_access_token(
        data={"sub": user["email"], "role": user["role"]},
        expires_delta=timedelta(minutes=60),
    )

    log_user_action(
        user_email=user["email"],
        user_role=user["role"],
        action="login",
        description="User logged in successfully",
    )

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "email": user["email"],
        "role": user["role"],
    }


# ---------- Logout ----------
jwt_blacklist = set()

@router.post("/logout")
def logout(request: Request, current_user: dict = Depends(get_current_user)):
    """Logout user by blacklisting their token."""
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")

    token = auth_header.split(" ")[1]
    jwt_blacklist.add(token)

    log_user_action(
        user_email=current_user["email"],
        user_role=current_user["role"],
        action="logout",
        description="User logged out successfully",
    )
    return {"message": "Logout successful"}


# ---------- Admin Dashboard ----------
@router.get("/admin/dashboard")
def admin_dashboard(current_user=Depends(require_role(["admin", "superadmin"]))):
    log_user_action(
        user_email=current_user["email"],
        user_role=current_user["role"],
        action="view_dashboard",
        description=f"{current_user.get('username')} accessed the admin dashboard",
    )
    return {"message": f"Welcome Admin {current_user.get('username') or current_user.get('email')}"}


# ---------- View All Users (admin + superadmin + support) ----------
@router.get("/all", status_code=status.HTTP_200_OK)
def get_all_user(current_user=Depends(require_role(["superadmin", "admin", "support"]))):
    try:
        cursor.execute("SELECT id, username, email, role FROM users ORDER BY id DESC;")
        rows = cursor.fetchall()
        return {"data": rows}
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


# ---------- Download Users (Excel) — admin + superadmin + support ----------
@router.get("/download", status_code=status.HTTP_200_OK)
def download_users(current_user=Depends(require_role(["superadmin", "admin", "support"]))):
    try:
        cursor.execute("SELECT id, username, email, role FROM users ORDER BY id DESC;")
        rows = cursor.fetchall()
        if not rows:
            raise HTTPException(status_code=404, detail="No user data found")

        df = pd.DataFrame(rows, columns=["ID", "Username", "Email", "Role"])
        buffer = io.BytesIO()
        with pd.ExcelWriter(buffer, engine="xlsxwriter") as writer:
            df.to_excel(writer, index=False, sheet_name="Users")

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="download_users",
            description="Downloaded user list as Excel file",
        )

        return {
            "message": "User data exported successfully",
            "file": "base64 or downloadable file endpoint (implement in frontend)",
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Error exporting users: {str(e)}")


# ---------- Edit User (Superadmin only) ----------
@router.put("/edit/{id}", status_code=status.HTTP_200_OK)
def edit_user(id: int, data: Dict[str, Any], current_user: dict = Depends(require_role(["superadmin"]))):
    try:
        fields = []
        values = []
        for col in ["username", "email", "password", "role"]:
            if col in data:
                val = clean_value(data[col])
                if col == "password":
                    val = hash_password(val)
                val = _truncate_value(val, COLUMN_MAX_LENGTHS[col])
                fields.append(f"{col} = %s")
                values.append(val)

        if not fields:
            raise HTTPException(status_code=400, detail="No valid fields provided for update.")

        values.append(id)
        query = f"""
            UPDATE users
            SET {', '.join(fields)}
            WHERE id = %s
            RETURNING *;
        """
        cursor.execute(query, tuple(values))
        updated = cursor.fetchone()
        if not updated:
            raise HTTPException(status_code=404, detail="User not found.")

        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="edit_user",
            target_table="users",
            target_id=id,
            description=f"Edited user ID {id}",
        )

        return {"message": "User updated successfully", "updated_data": updated}
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")


# ---------- Delete User (Superadmin only) ----------
@router.delete("/delete/{id}", status_code=status.HTTP_200_OK)
def delete_user(id: int, current_user: dict = Depends(require_role(["superadmin"]))):
    try:
        cursor.execute("SELECT id, username FROM users WHERE id = %s;", (id,))
        user = cursor.fetchone()
        if not user:
            raise HTTPException(status_code=404, detail="User not found.")

        username = user["username"] if isinstance(user, dict) else user[1]
        cursor.execute("DELETE FROM users WHERE id = %s RETURNING id;", (id,))
        deleted = cursor.fetchone()
        conn.commit()

        log_user_action(
            user_email=current_user["email"],
            user_role=current_user["role"],
            action="delete_user",
            target_table="users",
            target_id=id,
            description=f"Deleted user '{username}' (ID {id})",
        )

        return {"message": f"User '{username}' deleted successfully", "id": id}
    except Exception as e:
        conn.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")


class UserOut(BaseModel):
    id: int
    username: str
    role: str

    class Config:
        orm_mode = True   # allows .fetchone() dict/tuple

# ---------- route ----------
@router.get("/userlist", response_model=List[UserOut])
def list_users(
    role: Optional[str] = None,          # ?role=support,admin
    current_user=Depends(get_current_user)   # admin/superadmin only (optional)
):
    """
    Return users filtered by comma-separated roles.
    Used by task-manager dropdown.
    """
    roles = [r.strip() for r in role.split(",")] if role else []
    sql = "SELECT id, username, role FROM users"
    params: tuple = ()
    if roles:
        placeholders = ",".join(["%s"] * len(roles))
        sql += f" WHERE role IN ({placeholders})"
        params = tuple(roles)

    with conn.cursor() as cur:
        cur.execute(sql, params)
        rows = cur.fetchall()
    return [UserOut(id=r[0], username=r[1], role=r[2]) for r in rows]