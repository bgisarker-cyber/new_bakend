# app/routers/task_helpers.py
from fastapi import HTTPException
from psycopg2.extras import RealDictCursor
from app.database import conn

def _get_task_or_404(task_id: int) -> dict:
    """Fetch a task by ID or raise 404 error"""
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("SELECT * FROM tasks WHERE id = %s", (task_id,))
        row = cur.fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Task not found")
    return row