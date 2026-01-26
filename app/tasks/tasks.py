from datetime import datetime
from typing import List, Optional, Dict, Any
from fastapi import APIRouter, HTTPException, status, Body, Depends, Query
from psycopg2.extras import RealDictCursor
from app.database import conn
from app.models import (
    TaskResponse, 
    TaskUpdateResponse, 
    TaskCreateNew, 
    Bank, 
    ProblemType
)
from app.utils.auth import get_current_user
from app.utils.role_check import check_role
from app.routers.task_helpers import _get_task_or_404
import logging

router = APIRouter(prefix="/tasks", tags=["Tasks"])
logger = logging.getLogger(__name__)

# ==================== SCHEMA VALIDATION HELPER ====================
def validate_task_schema():
    """Check if tasks table has all required columns"""
    required_cols = {
        'bank': 'VARCHAR(100)',
        'merchant_name': 'VARCHAR(200)',
        'tid': 'VARCHAR(8)',
        'mid': 'VARCHAR(15)',
        'address': 'TEXT',
        'task_type': 'VARCHAR(50)',
        'phone': 'VARCHAR(20)',
        'operator': 'VARCHAR(100)',
        'problem_type': 'VARCHAR(100)',
        'assigned_to': 'INTEGER',
        'assigned_by': 'INTEGER',
        'status': 'VARCHAR(20)',
        'create_time': 'TIMESTAMP',
        'update_time': 'TIMESTAMP',
        'comment': 'TEXT',
        'sim_serial': 'VARCHAR(30)'
    }
    
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("""
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'tasks'
        """)
        existing_cols = {row['column_name']: row['data_type'] for row in cur.fetchall()}
    
    missing = [col for col in required_cols if col not in existing_cols]
    if missing:
        raise HTTPException(
            status_code=500,
            detail=f"Database schema error: Missing columns {missing}. Please run: ALTER TABLE tasks ADD COLUMN tid VARCHAR(8), ADD COLUMN mid VARCHAR(15), ADD COLUMN sim_serial VARCHAR(30);"
        )

# ==================== DYNAMIC DROPDOWN ENDPOINTS ====================
@router.get("/banks", response_model=List[Bank])
def get_banks(current_user=Depends(get_current_user)):
    """Get all banks dynamically from banks table"""
    check_role(current_user, ["admin", "superadmin", "support"])
    
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("SELECT id, name FROM banks ORDER BY name ASC")
        banks = cur.fetchall()
    return [Bank(**b) for b in banks]

@router.get("/problem-types", response_model=List[ProblemType])
def get_problem_types(current_user=Depends(get_current_user)):
    """Get all problem types dynamically from problem_types table"""
    check_role(current_user, ["admin", "superadmin", "support"])
    
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("SELECT id, name FROM problem_types ORDER BY name ASC")
        problem_types = cur.fetchall()
    return [ProblemType(**pt) for pt in problem_types]

# ==================== CREATE TASK ====================
@router.post("/create", response_model=dict, status_code=status.HTTP_201_CREATED)
def create_task(data: TaskCreateNew, current_user=Depends(get_current_user)):
    """Create a new task with dynamic selections"""
    check_role(current_user, ["admin", "superadmin"])
    
    validate_task_schema()
    
    if data.task_type not in ["New Install", "Replacement", "Call"]:
        raise HTTPException(status_code=400, detail="Invalid task_type")
    
    if data.task_type == "Call" and not data.problem_type:
        raise HTTPException(status_code=400, detail="Problem type required for Call tasks")
    
    if len(data.tid) != 8:
        raise HTTPException(status_code=400, detail="TID must be exactly 8 characters")
    if len(data.mid) != 15:
        raise HTTPException(status_code=400, detail="MID must be exactly 15 characters")
    if data.sim_serial and len(data.sim_serial) > 30:
        raise HTTPException(status_code=400, detail="SIM Serial must be 30 characters or less")
    
    sql = """
        INSERT INTO tasks (
            bank, merchant_name, tid, mid, address, task_type, phone, operator, problem_type,
            assigned_to, assigned_by, status, create_time, update_time, comment, sim_serial
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 'open', NOW(), NOW(), %s, %s)
        RETURNING id;
    """
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (
                data.bank, data.merchant_name, data.tid, data.mid, data.address, 
                data.task_type, data.phone, data.operator, 
                data.problem_type if data.task_type == "Call" else None,
                data.assigned_to, current_user["id"], 
                data.comment, data.sim_serial
            ))
            (new_id,) = cur.fetchone()
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"DB error: {e}")
    
    return {"message": "Task created successfully", "task_id": new_id}

# ==================== GET ALL TASKS ====================
# ✅ FIXED: Moved BEFORE /{task_id} route to avoid path conflicts
@router.get("/all", response_model=List[TaskResponse])
def get_all_tasks(current_user=Depends(get_current_user)):
    """Get all tasks with assigned user names"""
    check_role(current_user, ["admin", "superadmin"])
    sql = """
        SELECT t.*,
               u.username AS assigned_to_name
        FROM   tasks t
        LEFT JOIN users u ON u.id = t.assigned_to
        ORDER  BY t.id DESC;
    """
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql)
        rows = cur.fetchall()
    
    # ✅ CRITICAL FIX: Convert datetime objects to strings before creating TaskResponse
    tasks = []
    for row in rows:
        task_dict = dict(row)
        
        # Convert datetime to ISO string for Pydantic
        if isinstance(task_dict.get('create_time'), datetime):
            task_dict['create_time'] = task_dict['create_time'].isoformat()
        if isinstance(task_dict.get('update_time'), datetime):
            task_dict['update_time'] = task_dict['update_time'].isoformat()
        
        # Ensure required string fields are never None
        task_dict['bank'] = task_dict.get('bank') or ''
        task_dict['status'] = task_dict.get('status') or 'open'
        task_dict['task_type'] = task_dict.get('task_type') or 'Call'
        
        tasks.append(TaskResponse(**task_dict))
    
    return tasks

# ==================== GET SINGLE TASK ====================
@router.get("/{task_id}", response_model=TaskResponse)
def get_task(task_id: int, current_user=Depends(get_current_user)):
    """Get single task for editing"""
    check_role(current_user, ["admin", "superadmin"])
    task = _get_task_or_404(task_id)
    
    # Convert datetime objects to strings
    if isinstance(task.get('create_time'), datetime):
        task['create_time'] = task['create_time'].isoformat()
    if isinstance(task.get('update_time'), datetime):
        task['update_time'] = task['update_time'].isoformat()
    
    return TaskResponse(**task)

# ==================== UPDATE TASK ====================
@router.put("/{task_id}", response_model=dict)
def update_task(task_id: int, data: TaskCreateNew, current_user=Depends(get_current_user)):
    """Update an existing task"""
    check_role(current_user, ["admin", "superadmin"])
    
    validate_task_schema()
    
    if data.task_type not in ["New Install", "Replacement", "Call"]:
        raise HTTPException(status_code=400, detail="Invalid task_type")
    
    if data.task_type == "Call" and not data.problem_type:
        raise HTTPException(status_code=400, detail="Problem type required for Call tasks")
    
    if len(data.tid) != 8:
        raise HTTPException(status_code=400, detail="TID must be exactly 8 characters")
    if len(data.mid) != 15:
        raise HTTPException(status_code=400, detail="MID must be exactly 15 characters")
    if data.sim_serial and len(data.sim_serial) > 30:
        raise HTTPException(status_code=400, detail="SIM Serial must be 30 characters or less")
    
    _ = _get_task_or_404(task_id)
    
    sql = """
        UPDATE tasks
        SET bank = %s, merchant_name = %s, tid = %s, mid = %s, address = %s, task_type = %s,
            phone = %s, operator = %s, problem_type = %s,
            assigned_to = %s, update_time = NOW(), comment = %s, sim_serial = %s
        WHERE id = %s;
    """
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (
                data.bank, data.merchant_name, data.tid, data.mid, data.address, 
                data.task_type, data.phone, data.operator, 
                data.problem_type if data.task_type == "Call" else None,
                data.assigned_to, data.comment, data.sim_serial, task_id
            ))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Update error: {e}")
    
    return {"message": "Task updated successfully", "task_id": task_id}

# ==================== GET UPDATE LOGS ====================
@router.get("/updates/{task_id}", response_model=List[TaskUpdateResponse])
def get_update_logs(task_id: int, current_user=Depends(get_current_user)):
    """Get all update logs for a task"""
    check_role(current_user, ["support", "admin", "superadmin"])
    _ = _get_task_or_404(task_id)
    
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("""
            SELECT 
                tu.*,
                u.username AS assigned_to_name
            FROM task_updates tu
            LEFT JOIN users u ON u.id = tu.updated_by
            WHERE tu.task_id = %s 
            ORDER BY tu.id ASC
        """, (task_id,))
        rows = cur.fetchall()
    
    # Convert datetime objects to strings
    updates = []
    for row in rows:
        update_dict = dict(row)
        if isinstance(update_dict.get('create_time'), datetime):
            update_dict['create_time'] = update_dict['create_time'].isoformat()
        if isinstance(update_dict.get('update_time'), datetime):
            update_dict['update_time'] = update_dict['update_time'].isoformat()
        updates.append(TaskUpdateResponse(**update_dict))
    
    return updates

# ==================== COMPLETE TASK ====================
@router.post("/my/{task_id}/complete", response_model=dict)
def complete_task(
    task_id: int, 
    note: str = Body(..., embed=True),
    current_user=Depends(get_current_user)
):
    """Mark a task as completed"""
    check_role(current_user, ["support", "admin", "superadmin"])
    task = _get_task_or_404(task_id)
    
    if task["assigned_to"] != current_user["id"]:
        raise HTTPException(status_code=403, detail="Task not assigned to you")
    if task["status"] == "completed":
        raise HTTPException(status_code=400, detail="Task already completed")
    
    try:
        with conn.cursor() as cur:
            cur.execute("""
                UPDATE tasks 
                SET status = 'completed', update_time = NOW()
                WHERE id = %s
            """, (task_id,))
            
            cur.execute("""
                INSERT INTO task_updates (task_id, updated_by, status, update_text, create_time, update_time)
                VALUES (%s, %s, 'completed', %s, NOW(), NOW())
            """, (task_id, current_user["id"], note or "Task completed"))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Error completing task: {e}")
    
    return {"message": "Task marked as completed"}

# ==================== GET TASK TIMELINE ====================
@router.get("/{task_id}/timeline", response_model=List[TaskUpdateResponse])
def task_timeline(task_id: int, current_user=Depends(get_current_user)):
    """Get complete timeline of task updates"""
    _ = _get_task_or_404(task_id)
    
    sql = """
        SELECT 
            tu.*,
            u.username AS assigned_to_name
        FROM task_updates tu 
        LEFT JOIN users u ON u.id = tu.updated_by
        WHERE tu.task_id = %s 
        ORDER BY tu.id DESC;
    """
    
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql, (task_id,))
        rows = cur.fetchall()
    
    # Convert datetime objects to strings
    timeline = []
    for row in rows:
        update_dict = dict(row)
        if isinstance(update_dict.get('create_time'), datetime):
            update_dict['create_time'] = update_dict['create_time'].isoformat()
        if isinstance(update_dict.get('update_time'), datetime):
            update_dict['update_time'] = update_dict['update_time'].isoformat()
        timeline.append(TaskUpdateResponse(**update_dict))
    
    return timeline