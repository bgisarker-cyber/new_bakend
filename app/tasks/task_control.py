from datetime import datetime
from typing import List

from fastapi import APIRouter, HTTPException, status, Depends
from psycopg2.extras import RealDictCursor

from app.database import conn
from app.models import BankCreate, BankUpdate, BankResponse, ProblemTypeCreate, ProblemTypeUpdate, ProblemTypeResponse
from app.utils.auth import get_current_user
from app.utils.role_check import check_role

# Export both routers for main.py to import
banks_router = APIRouter(prefix="/banks", tags=["Banks"])
problem_types_router = APIRouter(prefix="/problem-types", tags=["Problem Types"])

# ============================================================
# BANKS CRUD (Superadmin Only)
# ============================================================

@banks_router.post("/", response_model=dict, status_code=status.HTTP_201_CREATED)
def create_bank(data: BankCreate, current_user=Depends(get_current_user)):
    """Create a new bank (superadmin only)"""
    check_role(current_user, ["superadmin"])
    
    sql = """
        INSERT INTO banks (name, created_at, updated_at)
        VALUES (%s, NOW(), NOW())
        RETURNING id;
    """
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (data.name,))
            (new_id,) = cur.fetchone()
        conn.commit()
    except Exception as e:
        conn.rollback()
        if "duplicate key" in str(e):
            raise HTTPException(status_code=400, detail="Bank name already exists")
        raise HTTPException(status_code=500, detail=f"DB insert error: {e}")
    
    return {"message": "Bank created successfully", "bank_id": new_id}

@banks_router.get("/", response_model=List[BankResponse])
def get_all_banks(current_user=Depends(get_current_user)):
    """List all banks (superadmin only)"""
    check_role(current_user, ["admin", "superadmin"])
    
    sql = "SELECT * FROM banks ORDER BY name;"
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql)
        rows = cur.fetchall()
    return [BankResponse(**row) for row in rows]

@banks_router.put("/{bank_id}", response_model=dict)
def update_bank(bank_id: int, data: BankUpdate, current_user=Depends(get_current_user)):
    """Update a bank (superadmin only)"""
    check_role(current_user, ["superadmin"])
    
    updates = []
    values = []
    
    if data.name is not None:
        updates.append("name = %s")
        values.append(data.name)
    
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    updates.append("updated_at = NOW()")
    values.append(bank_id)
    
    sql = f"UPDATE banks SET {', '.join(updates)} WHERE id = %s RETURNING id;"
    
    try:
        with conn.cursor() as cur:
            cur.execute(sql, values)
            row = cur.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="Bank not found")
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"DB update error: {e}")
    
    return {"message": "Bank updated successfully", "bank_id": row[0]}

@banks_router.delete("/{bank_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_bank(bank_id: int, current_user=Depends(get_current_user)):
    """Delete a bank (superadmin only)"""
    check_role(current_user, ["superadmin"])
    
    check_sql = "SELECT 1 FROM tasks WHERE bank_id = %s LIMIT 1;"
    with conn.cursor() as cur:
        cur.execute(check_sql, (bank_id,))
        if cur.fetchone():
            raise HTTPException(status_code=400, detail="Cannot delete bank used in tasks")
    
    sql = "DELETE FROM banks WHERE id = %s;"
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (bank_id,))
            if cur.rowcount == 0:
                raise HTTPException(status_code=404, detail="Bank not found")
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"DB delete error: {e}")

# ============================================================
# PROBLEM TYPES CRUD (Superadmin Only - No Description)
# ============================================================

@problem_types_router.post("/", response_model=dict, status_code=status.HTTP_201_CREATED)
def create_problem_type(data: ProblemTypeCreate, current_user=Depends(get_current_user)):
    """Create a new problem type (superadmin only)"""
    check_role(current_user, ["superadmin"])
    
    # ✅ FIXED: Only pass name parameter
    sql = """
        INSERT INTO problem_types (name, created_at, updated_at)
        VALUES (%s, NOW(), NOW())
        RETURNING id;
    """
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (data.name,))  # ✅ Only one parameter
            (new_id,) = cur.fetchone()
        conn.commit()
    except Exception as e:
        conn.rollback()
        if "duplicate key" in str(e):
            raise HTTPException(status_code=400, detail="Problem type already exists")
        raise HTTPException(status_code=500, detail=f"DB insert error: {e}")
    
    return {"message": "Problem type created successfully", "problem_type_id": new_id}

@problem_types_router.get("/", response_model=List[ProblemTypeResponse])
def get_all_problem_types(current_user=Depends(get_current_user)):
    """List all problem types (superadmin only)"""
    check_role(current_user, ["admin", "superadmin"])
    
    sql = "SELECT * FROM problem_types ORDER BY name;"
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql)
        rows = cur.fetchall()
    return [ProblemTypeResponse(**row) for row in rows]

@problem_types_router.put("/{problem_type_id}", response_model=dict)
def update_problem_type(problem_type_id: int, data: ProblemTypeUpdate, current_user=Depends(get_current_user)):
    """Update a problem type (superadmin only)"""
    check_role(current_user, ["superadmin"])
    
    updates = []
    values = []
    
    if data.name is not None:
        updates.append("name = %s")
        values.append(data.name)
    
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    updates.append("updated_at = NOW()")
    values.append(problem_type_id)
    
    sql = f"UPDATE problem_types SET {', '.join(updates)} WHERE id = %s RETURNING id;"
    
    try:
        with conn.cursor() as cur:
            cur.execute(sql, values)
            row = cur.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="Problem type not found")
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"DB update error: {e}")
    
    return {"message": "Problem type updated successfully", "problem_type_id": row[0]}

@problem_types_router.delete("/{problem_type_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_problem_type(problem_type_id: int, current_user=Depends(get_current_user)):
    """Delete a problem type (superadmin only)"""
    check_role(current_user, ["superadmin"])
    
    check_sql = "SELECT 1 FROM tasks WHERE problem_type_id = %s LIMIT 1;"
    with conn.cursor() as cur:
        cur.execute(check_sql, (problem_type_id,))
        if cur.fetchone():
            raise HTTPException(status_code=400, detail="Cannot delete problem type used in tasks")
    
    sql = "DELETE FROM problem_types WHERE id = %s;"
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (problem_type_id,))
            if cur.rowcount == 0:
                raise HTTPException(status_code=404, detail="Problem type not found")
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"DB delete error: {e}")