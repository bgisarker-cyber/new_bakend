import os
from dotenv import load_dotenv
from pathlib import Path

# Load .env from the same directory as this file
env_path = Path(__file__).parent / '.env'
load_dotenv(dotenv_path=env_path)

import psycopg2
from psycopg2.extras import RealDictCursor

# Get from environment
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("DB_NAME", "bgi_inventory")
DB_USER = os.getenv("DB_USER", "bgi_user")
DB_PASS = os.getenv("DB_PASS", "123456")

try:
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASS
    )
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    print("Database connected successfully")
except Exception as e:
    raise RuntimeError(f"Failed to connect to the database: {e}")
