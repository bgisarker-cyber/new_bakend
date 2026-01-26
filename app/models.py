from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


# ===============================
# BASE MODELS (Legacy - kept for compatibility)
# ===============================

class TaskBase(BaseModel):
    title: Optional[str] = None
    merchant_name: str
    merchant_phone: Optional[str] = None
    bank: Optional[str] = None
    location: Optional[str] = None
    problem_type: Optional[str] = None
    problem_details: Optional[str] = None
    instructions: Optional[str] = None
    task_type: Optional[str] = None
    assigned_to: Optional[int] = None
    assigned_by: Optional[int] = None   # NOTE: Backend will override this
    priority: Optional[str] = "normal"


class TaskCreate(BaseModel):
    title: Optional[str] = None
    merchant_name: str                  # required
    merchant_phone: Optional[str] = None
    bank: Optional[str] = None
    location: Optional[str] = None
    problem_type: Optional[str] = None
    problem_details: Optional[str] = None
    instructions: Optional[str] = None
    task_type: Optional[str] = None
    assigned_to: Optional[int] = None
    assigned_by: Optional[int] = None
    priority: Optional[str] = "normal"


class TaskUpdate(BaseModel):
    status: Optional[str] = None
    start_time: Optional[datetime] = None
    finish_time: Optional[datetime] = None
    update_time: Optional[datetime] = None


# ===============================
# TASK UPDATES (History/Activity Logs)
# ===============================

class TaskUpdateCreate(BaseModel):
    updated_by: int
    status: Optional[str] = None
    update_text: Optional[str] = None


class TaskUpdateResponse(TaskUpdateCreate):
    id: int
    update_time: datetime
    assigned_to_name: str 

    class Config:
        orm_mode = True


# ===============================
# UIT TASK MODELS (Separate workflow)
# ===============================

class UitTaskCreate(BaseModel):
    dept: Optional[str] = None
    bank: Optional[str] = None
    issue: Optional[str] = None
    responsible: Optional[str] = None
    status: str = "Open"
    remark: Optional[str] = None


class UitTaskUpdateCreate(BaseModel):
    status: Optional[str] = None
    update_text: Optional[str] = Field(None, max_length=1000)


class UitTaskResponse(BaseModel):
    id: int
    
    dept: Optional[str]
    bank: Optional[str]
    issue: Optional[str]
    responsible: Optional[str]
    status: str
    remark: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class UitTaskUpdateResponse(BaseModel):
    id: int
    status: Optional[str]
    update_text: Optional[str]
    created_at: datetime
    updated_by_name: str

    class Config:
        orm_mode = True


# =============================== 
# NEW TASK MODELS (Current Implementation)
# ===============================

class TaskResponse(BaseModel):
    id: int
    task_type: str
    merchant_name: Optional[str] = None
    phone: Optional[str] = None
    bank: str
    address: Optional[str] = None
    problem_type: Optional[str] = None
    comment: Optional[str] = None
    status: str
    assigned_to_name: Optional[str] = None  # ✅ FIXED: Added this field from JOIN
    create_time: str
    update_time: str
    tid: Optional[str] = None
    mid: Optional[str] = None
    sim_serial: Optional[str] = None
    operator: Optional[str] = None

    class Config:
        from_attributes = True


# ✅ NEW: Response model for /all endpoint with assigned user name
class TaskAllResponse(TaskResponse):
    """Response model for /tasks/all endpoint - inherits all fields from TaskResponse"""
    pass


class TaskUpdateResponse(BaseModel):
    id: int
    task_id: int
    updated_by: int
    status: str
    update_text: Optional[str] = None
    create_time: str
    update_time: str
    assigned_to_name: Optional[str] = None

    class Config:
        from_attributes = True


class TaskCreateNew(BaseModel):
    bank: str
    merchant_name: Optional[str] = None
    tid: str = Field(..., min_length=8, max_length=8)
    mid: str = Field(..., min_length=15, max_length=15)
    address: Optional[str] = None
    task_type: str
    phone: Optional[str] = None
    operator: Optional[str] = None
    problem_type: Optional[str] = None
    assigned_to: int
    comment: Optional[str] = None
    sim_serial: Optional[str] = Field(None, max_length=30)


# ===============================
# DROPDOWN MODELS
# ===============================

class Bank(BaseModel):
    id: int
    name: str


class ProblemType(BaseModel):
    id: int
    name: str


# ===============================
# BANK CRUD MODELS
# ===============================

class BankCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=300)

class BankUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=300)

class BankResponse(BaseModel):
    id: int
    name: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# ===============================
# PROBLEM TYPE CRUD MODELS
# ===============================

class ProblemTypeCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=500)

class ProblemTypeUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=500)

class ProblemTypeResponse(BaseModel):
    id: int
    name: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True