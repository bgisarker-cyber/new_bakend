# app/routers/tasks.py
from datetime import datetime
from typing import List

from fastapi import APIRouter, HTTPException, status, Body, Depends
from psycopg2.extras import RealDictCursor

from app.database import conn, cursor
from app.models import (
    TaskCreate, TaskUpdate, TaskResponse,
    TaskUpdateCreate, TaskUpdateResponse
)
from app.utils.auth import get_current_user   # JWT guard
from app.utils.role_check import check_role


router = APIRouter(prefix="/tasks", tags=["Tasks"])

# ------------------------------------------------------------------
# helper: fetch one task or 404
# ------------------------------------------------------------------
def _get_task_or_404(task_id: int) -> dict:
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("SELECT * FROM tasks WHERE id = %s", (task_id,))
        row = cur.fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Task not found")
    return row

# ------------------------------------------------------------------
# 1. CREATE TASK (no notifier)
# ------------------------------------------------------------------
@router.post("/create", response_model=dict, status_code=status.HTTP_201_CREATED)
def create_task(data: TaskCreate,current_user=Depends(get_current_user)):
    check_role(current_user, [ "admin", "superadmin"])  
    sql = """
        INSERT INTO tasks (
            title, merchant_name, merchant_phone, bank, location,
            problem_type, problem_details, instructions,
            task_type, assigned_to, assigned_by, priority,
            status, create_time, update_time
        )
        VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
            'open', NOW(), NOW()
        )
        RETURNING id;
    """
    try:
        with conn.cursor() as cur:
            cur.execute(sql, (
                data.title, data.merchant_name, data.merchant_phone,
                data.bank, data.location, data.problem_type,
                data.problem_details, data.instructions,
                data.task_type, data.assigned_to, current_user["id"],
                data.priority
            ))
            (new_id,) = cur.fetchone()
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"DB insert error: {e}")

    # ❌  REMOVED: notify_assignee(...)
    return {"message": "Task created successfully", "task_id": new_id}

# ------------------------------------------------------------------
# 2. LIST ALL TASKS (admin / super-admin only)
@router.get("/all", response_model=List[TaskResponse])
def get_all_tasks(current_user=Depends(get_current_user)):
    check_role(current_user, ["admin", "superadmin"])
    sql = """
        SELECT t.*,
               u.username AS assigned_to_name          -- ← new column
        FROM   tasks t
        LEFT JOIN users u ON u.id = t.assigned_to
        ORDER  BY t.id DESC;
    """
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql)
        rows = cur.fetchall()
    return [TaskResponse(**row) for row in rows]
# ------------------------------------------------------------------
# 3. TASKS ASSIGNED TO ME (portal view)
# ------------------------------------------------------------------
@router.get("/my", response_model=List[TaskResponse])
def my_tasks(current_user=Depends(get_current_user)):
    check_role(current_user, ["support", "admin"])  
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            "SELECT * FROM tasks WHERE assigned_to = %s ORDER BY id DESC",
            (current_user["id"],)
        )
        rows = cur.fetchall()
    return [TaskResponse(**row) for row in rows]

# ------------------------------------------------------------------
# 4. UPDATE MY TASK STATUS (+ optional note)
# ------------------------------------------------------------------
@router.put("/my/{task_id}/status", response_model=dict)
def update_my_task_status(
    task_id: int,
    status_val: str = Body(..., regex="^(open|in_progress|completed)$"),
    note: str = Body("", max_length=500),
    current_user=Depends(get_current_user),
):
    check_role(current_user, ["support", "admin", "superadmin"])  
    task = _get_task_or_404(task_id)
    if task["assigned_to"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Task not found or not yours")

    with conn.cursor() as cur:
        cur.execute("""
            UPDATE tasks
            SET status = %s, update_time = NOW()
            WHERE id = %s
        """, (status_val, task_id))

        if note.strip():
            cur.execute("""
                INSERT INTO task_updates (task_id, updated_by, status, update_text, create_time)
                VALUES (%s, %s, %s, %s, NOW())
            """, (task_id, current_user["id"], status_val, note.strip()))

    conn.commit()
    return {"message": "Status updated"}

# ------------------------------------------------------------------
# 5. GET HISTORY OF A TASK
# ------------------------------------------------------------------
@router.get("/updates/{task_id}", response_model=List[TaskUpdateResponse])
def get_update_logs(task_id: int, current_user=Depends(get_current_user)):
    check_role(current_user, ["support", "admin"])  
    _ = _get_task_or_404(task_id)
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            "SELECT * FROM task_updates WHERE task_id = %s ORDER BY id ASC",
            (task_id,)
        )
        rows = cur.fetchall()
    return [TaskUpdateResponse(**row) for row in rows]

# ------------------------------------------------------------------
# 6. MARK COMPLETED (kept for compatibility – can use #4 too)
# ------------------------------------------------------------------
@router.put("/complete/{task_id}", response_model=dict)
def complete_task(
    task_id: int,
    observation: str = Body(..., min_length=1),
    current_user=Depends(get_current_user),
):
    check_role(current_user, ["support", "admin", "superadmin"])  
    task = _get_task_or_404(task_id)
    if task["assigned_to"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Task not found or not yours")
    if task["status"] == "completed":
        raise HTTPException(status_code=400, detail="Task already completed")

    with conn.cursor() as cur:
        cur.execute("""
            UPDATE tasks
            SET status = 'completed',
                finish_time = NOW(),
                update_time = NOW(),
                observation = %s
            WHERE id = %s
        """, (observation, task_id))
        cur.execute("""
            INSERT INTO task_updates (task_id, updated_by, status, update_text, create_time)
            VALUES (%s, %s, %s, %s, NOW())
        """, (task_id, current_user["id"], 'completed', observation))
    conn.commit()
    return {"message": "Task marked as completed"}

# app/routers/tasks.py
@router.get("/{task_id}/timeline", response_model=List[TaskUpdateResponse])
def task_timeline(task_id: int, current_user=Depends(get_current_user)):
    _ = _get_task_or_404(task_id)          # exists check
    sql = """
        SELECT tu.*,
               u.username AS assigned_to_name   -- updater name
        FROM   task_updates tu
        JOIN   users u ON u.id = tu.updated_by
        WHERE  tu.task_id = %s
        ORDER  BY tu.id DESC;
    """
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql, (task_id,))
        rows = cur.fetchall()
    return [TaskUpdateResponse(**row) for row in rows]




from pydantic import BaseModel, Field

class CompleteIn(BaseModel):
    note: str = Field("", max_length=500)


@router.post("/my/{task_id}/complete", response_model=dict)
def mark_my_task_complete(
    task_id: int,
    body: CompleteIn = Body(...),
    current_user=Depends(get_current_user),
):
    task = _get_task_or_404(task_id)
    if task["assigned_to"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Task not found or not yours")
    if task["status"] == "completed":
        raise HTTPException(status_code=400, detail="Already completed")

    with conn.cursor() as cur:
        cur.execute("""
            UPDATE tasks
            SET status = 'completed',
                finish_time = NOW(),
                update_time = NOW()
            WHERE id = %s
        """, (task_id,))
        cur.execute("""
            INSERT INTO task_updates (task_id, updated_by, status, update_text, create_time)
            VALUES (%s, %s, %s, %s, NOW())
        """, (task_id, current_user["id"], 'completed', body.note.strip() or "Marked complete"))
    conn.commit()
    return {"message": "Task completed"}