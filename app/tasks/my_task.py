from datetime import datetime
from typing import List, Optional
from fastapi import APIRouter, HTTPException, status, Body, Depends
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel, Field

from app.database import conn
from app.models import TaskResponse, TaskUpdateResponse
from app.utils.auth import get_current_user
from app.utils.role_check import check_role
from app.routers.task_helpers import _get_task_or_404
import logging

router = APIRouter(prefix="/my-tasks", tags=["MyTasks"])
logger = logging.getLogger(__name__)

# ==================== MODELS ====================
class StatusUpdateInput(BaseModel):
    status_val: str = Field(..., pattern="^(open|in_progress|completed)$")
    note: str = Field("", max_length=500)

class CompleteInput(BaseModel):
    note: str = Field("", max_length=500)

# NEW MODEL for my-tasks update - assigned_to is optional
class TaskUpdateMy(BaseModel):
    bank: str
    merchant_name: Optional[str] = None
    tid: str
    mid: str
    address: Optional[str] = None
    task_type: str
    phone: Optional[str] = None
    operator: Optional[str] = None
    problem_type: Optional[str] = None
    comment: Optional[str] = None
    sim_serial: Optional[str] = None
    assigned_to: Optional[int] = None  # Make it optional

# ==================== GET MY TASKS ====================
@router.get("", response_model=List[TaskResponse])
def get_my_tasks(current_user=Depends(get_current_user)):
    """Get tasks assigned to current user"""
    check_role(current_user, ["support", "admin", "superadmin"])
    
    sql = """
        SELECT 
            t.*,
            u.username AS assigned_to_name
        FROM tasks t
        LEFT JOIN users u ON u.id = t.assigned_to
        WHERE t.assigned_to = %s 
        ORDER BY t.id DESC
    """
    
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql, (current_user["id"],))
        rows = cur.fetchall()
    
    # Convert datetime objects to strings before creating TaskResponse
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

# ==================== UPDATE MY TASK STATUS ====================
@router.put("/{task_id}/status", response_model=dict)
def update_my_task_status(
    task_id: int,
    body: StatusUpdateInput,
    current_user=Depends(get_current_user),
):
    """Update status of a task assigned to current user"""
    check_role(current_user, ["support", "admin", "superadmin"])
    
    task = _get_task_or_404(task_id)
    if task["assigned_to"] != current_user["id"]:
        raise HTTPException(status_code=403, detail="Task not assigned to you")

    try:
        with conn.cursor() as cur:
            cur.execute("""
                UPDATE tasks
                SET status = %s, update_time = NOW()
                WHERE id = %s
            """, (body.status_val, task_id))
            
            if body.note.strip():
                cur.execute("""
                    INSERT INTO task_updates (task_id, updated_by, status, update_text, create_time, update_time)
                    VALUES (%s, %s, %s, %s, NOW(), NOW())
                """, (task_id, current_user["id"], body.status_val, body.note.strip()))
        
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Update error: {e}")
    
    return {"message": "Status updated successfully"}

# ==================== COMPLETE MY TASK ====================
@router.post("/{task_id}/complete", response_model=dict)
def mark_my_task_complete(
    task_id: int,
    body: CompleteInput = Body(...),
    current_user=Depends(get_current_user),
):
    """Complete a task assigned to current user"""
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
                VALUES (%s, %s, %s, %s, NOW(), NOW())
            """, (task_id, current_user["id"], 'completed', body.note.strip() or "Task marked complete"))
        
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Complete error: {e}")
    
    return {"message": "Task marked as completed"}

# ==================== GET MY TASK TIMELINE ====================
@router.get("/{task_id}/timeline", response_model=List[TaskUpdateResponse])
def my_task_timeline(task_id: int, current_user=Depends(get_current_user)):
    """Get complete timeline of updates for my task"""
    check_role(current_user, ["support", "admin", "superadmin"])
    
    task = _get_task_or_404(task_id)
    if task["assigned_to"] != current_user["id"]:
        raise HTTPException(status_code=403, detail="Task not assigned to you")
    
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

# ==================== UPDATE MY TASK (FULL) ====================
@router.put("/{task_id}", response_model=dict)
def update_my_task(
    task_id: int, 
    data: TaskUpdateMy,  # Use the new model with optional assigned_to
    current_user=Depends(get_current_user)
):
    """Update task assigned to current user"""
    check_role(current_user, ["support", "admin", "superadmin"])
    
    task = _get_task_or_404(task_id)
    if task["assigned_to"] != current_user["id"] and current_user["role"] not in ["admin", "superadmin"]:
        raise HTTPException(status_code=403, detail="Task not assigned to you")
    
    # Validation
    if len(data.tid) != 8:
        raise HTTPException(status_code=400, detail="TID must be exactly 8 characters")
    if len(data.mid) != 15:
        raise HTTPException(status_code=400, detail="MID must be exactly 15 characters")
    if data.sim_serial and len(data.sim_serial) > 30:
        raise HTTPException(status_code=400, detail="SIM Serial must be 30 characters or less")
    
    if data.task_type == "Call" and not data.problem_type:
        raise HTTPException(status_code=400, detail="Problem type required for Call tasks")
    
    # Use existing assigned_to if not provided (for my-tasks, we don't allow reassigning)
    assigned_to = data.assigned_to if data.assigned_to is not None else task["assigned_to"]
    
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
                assigned_to, data.comment, data.sim_serial, task_id
            ))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Update error: {e}")
    
    return {"message": "Task updated successfully", "task_id": task_id}