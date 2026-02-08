from io import BytesIO
from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import conn, cursor
from app.routers import users
from app.local import debug, demo, store, faulty
from app.routers import citypos, pubalipos, islami, mtb, standard, pb_wittdraw, pb_replace, city_replace,terminals
from app.utils import logger
from app.tasks import tasks, uit_task, my_task, task_control

# Import routers from task_control
from app.tasks.task_control import banks_router, problem_types_router

app = FastAPI()

# Include routers
app.include_router(users.router)
app.include_router(citypos.router)
app.include_router(pubalipos.router)
app.include_router(islami.router)
app.include_router(mtb.router)
app.include_router(standard.router)
app.include_router(pb_wittdraw.router)
app.include_router(pb_replace.router)
app.include_router(city_replace.router)
app.include_router(terminals.router)

# Include for local routers
app.include_router(store.router)
app.include_router(debug.router)
app.include_router(demo.router)
app.include_router(faulty.router)
app.include_router(logger.router)


# Include the new routers from task_control
app.include_router(banks_router)
app.include_router(problem_types_router)

# Include remaining task routers
app.include_router(tasks.router)
app.include_router(uit_task.router)
app.include_router(my_task.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://127.0.0.1:3000",
        "https://ims.bg-interactive.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to BGI Inventory System"}