# app/routers/uit_task.py
from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, Path, status, Query, Response, Body
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel, Field
from pathlib import Path
from jinja2 import Template

import datetime as dt

from app.database import conn
from app.models import (
    UitTaskCreate,
    UitTaskUpdateCreate,
    UitTaskResponse,
    UitTaskUpdateResponse,
)
from app.utils.auth import get_current_user
from app.utils.role_check import check_role

router = APIRouter(prefix="/uit-tasks", tags=["UIT Tasks"])

# ------------------------------------------------------------------
# helper: fetch one task or 404
# ------------------------------------------------------------------
def _get_task_or_404(task_id: int) -> dict:
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("SELECT * FROM uit_task WHERE id = %s", (task_id,))
        row = cur.fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Task not found")
    return row

# ------------------------------------------------------------------
# 1. LIST  (open to any authenticated user)
# ------------------------------------------------------------------
@router.get("/", response_model=List[UitTaskResponse])
def list_tasks(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=500),
    current_user=Depends(get_current_user),
):
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            """
            SELECT id, dept, bank, issue, responsible, status, remark, created_at, updated_at
            FROM uit_task
            ORDER BY id DESC
            LIMIT %s OFFSET %s
            """,
            (limit, skip),
        )
        rows = cur.fetchall()
    return rows

# ------------------------------------------------------------------
# 2. CREATE  (super-admin only)
# ------------------------------------------------------------------
@router.post("/", response_model=UitTaskResponse, status_code=status.HTTP_201_CREATED)
def create_task(
    data: UitTaskCreate,
    current_user=Depends(get_current_user),
):
    check_role(current_user, ["superadmin"])
    sql = """
        INSERT INTO uit_task (dept, bank, issue, responsible, status, remark, created_at, updated_at)
        VALUES (%s, %s, %s, %s, %s, %s, NOW(), NOW())
        RETURNING *;
    """
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            sql,
            (
                data.dept,
                data.bank,
                data.issue,
                data.responsible,
                data.status,
                data.remark,
            ),
        )
        row = cur.fetchone()
    conn.commit()
    return row

# ------------------------------------------------------------------
# 3. SINGLE TASK
# ------------------------------------------------------------------
@router.get("/{task_id}", response_model=UitTaskResponse)
def get_task(
    task_id: int,
    current_user=Depends(get_current_user),
):
    return _get_task_or_404(task_id)

# ------------------------------------------------------------------
# 4. UPDATE  (super-admin only)
# ------------------------------------------------------------------
@router.put("/{task_id}", response_model=UitTaskResponse)
def update_task(
    task_id: int,
    data: UitTaskCreate,
    current_user=Depends(get_current_user),
):
    check_role(current_user, ["superadmin"])
    _get_task_or_404(task_id)
    sql = """
        UPDATE uit_task
        SET dept=%s, bank=%s, issue=%s, responsible=%s, status=%s, remark=%s, updated_at=NOW()
        WHERE id=%s
        RETURNING *;
    """
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            sql,
            (
                data.dept,
                data.bank,
                data.issue,
                data.responsible,
                data.status,
                data.remark,
                task_id,
            ),
        )
        row = cur.fetchone()
    conn.commit()
    return row

# ------------------------------------------------------------------
# 5. DELETE  (super-admin only)
# ------------------------------------------------------------------
@router.delete("/{task_id}", response_model=dict)
def delete_task(
    task_id: int,
    current_user=Depends(get_current_user),
):
    check_role(current_user, ["superadmin"])
    _get_task_or_404(task_id)
    with conn.cursor() as cur:
        cur.execute("DELETE FROM uit_task WHERE id=%s", (task_id,))
    conn.commit()
    return {"message": "Task deleted"}

# ------------------------------------------------------------------
# 6. ADD UPDATE  (any authenticated user)
# ------------------------------------------------------------------
@router.post("/{task_id}/updates", response_model=UitTaskUpdateResponse)
def add_update(
    task_id: int,
    data: UitTaskUpdateCreate,
    current_user=Depends(get_current_user),
):
    _get_task_or_404(task_id)

    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            """
            INSERT INTO uit_task_updates (task_id, updated_by, status, update_text, created_at)
            VALUES (%s, %s, %s, %s, NOW())
            RETURNING id, status, update_text, created_at;
            """,
            (task_id, current_user["id"], data.status, data.update_text),
        )
        row = cur.fetchone()

    with conn.cursor() as cur:
        cur.execute("SELECT username FROM users WHERE id = %s", (current_user["id"],))
        user_row = cur.fetchone()

    conn.commit()

    return UitTaskUpdateResponse(
        id=row["id"],
        status=row["status"],
        update_text=row["update_text"],
        created_at=row["created_at"],
        updated_by_name=user_row[0] if user_row else "Unknown",
    )

# ------------------------------------------------------------------
# 7. LIST UPDATES
# ------------------------------------------------------------------
@router.get("/{task_id}/updates", response_model=List[UitTaskUpdateResponse])
def list_updates(
    task_id: int,
    current_user=Depends(get_current_user),
):
    _get_task_or_404(task_id)
    sql = """
        SELECT tu.id,
               tu.status,
               tu.update_text,
               tu.created_at,
               u.username AS updated_by_name
        FROM uit_task_updates tu
        JOIN users u ON u.id = tu.updated_by
        WHERE tu.task_id = %s
        ORDER BY tu.id DESC;
    """
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql, (task_id,))
        rows = cur.fetchall()
    return rows

# ------------------------------------------------------------------
# 8. MARK COMPLETED (support / admin / super-admin)
# ------------------------------------------------------------------
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
        cur.execute(
            """
            UPDATE uit_task
            SET status = 'completed',
                updated_at = NOW()
            WHERE id = %s
            """,
            (task_id,),
        )
        cur.execute(
            """
            INSERT INTO uit_task_updates (task_id, updated_by, status, update_text, created_at)
            VALUES (%s, %s, %s, %s, NOW())
            """,
            cur.execute(
    """
    INSERT INTO uit_task_updates (task_id, updated_by, status, update_text, created_at)
    VALUES (%s, %s, %s, %s, NOW())
    """,
    (task_id, current_user["id"], "completed", body.note.strip() or "Marked complete"),
)
        )
    conn.commit()
    return {"message": "Task completed"}

# ------------------------------------------------------------------
# 9. PDF EXPORT (same as before, pdfkit version)
# ------------------------------------------------------------------
from pydantic import BaseModel as PDFBaseModel, Field as PDFField
from pathlib import Path
from jinja2 import Template
import pdfkit

class ExportPDFRequest(PDFBaseModel):
    task_ids: List[int] = PDFField(..., description="Which tasks to include")

@router.post("/export-pdf")
def export_tasks_pdf(
    payload: ExportPDFRequest,
    current_user=Depends(get_current_user),
):
    if not payload.task_ids:
        raise HTTPException(status_code=400, detail="No task ids supplied")

    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            """
            SELECT id, dept, bank, issue, responsible, status, remark
            FROM uit_task
            WHERE id = ANY(%s)
            ORDER BY id DESC
            """,
            (payload.task_ids,),
        )
        rows = cur.fetchall()

    if not rows:
        raise HTTPException(status_code=404, detail="No tasks found with supplied ids")

    template_path = Path(__file__).parent.parent / "templates" / "tasks_pdf.html"
    tpl = Template(template_path.read_text())
    html_out = tpl.render(tasks=rows, ts=dt.datetime.now().strftime("%Y-%m-%d %H:%M"))

    pdf_bytes = pdfkit.from_string(html_out, False)  # requires wkhtmltopdf on PATH
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f"inline; filename=UIT_tasks_{dt.date.today()}.pdf"},
    )