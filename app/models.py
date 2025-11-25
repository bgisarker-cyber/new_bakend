from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


# ===============================
# BASE MODELS
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


class TaskResponse(TaskBase):
    id: int
    status: str
    assigned_time: datetime
    start_time: Optional[datetime] = None
    finish_time: Optional[datetime] = None
    create_time: datetime
    update_time: datetime
    assigned_to_name: Optional[str] = None 

    class Config:
        orm_mode = True


# ===============================
# TASK UPDATES (History)
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