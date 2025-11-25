

# app/database.py
import os
import psycopg2
from psycopg2.extras import RealDictCursor

# Prefer environment variables for credentials
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("DB_NAME", "bgi_inventory")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASS = os.getenv("DB_PASS", "1234")

# Create connection and a "global" cursor using RealDictCursor for JSON-friendly dict rows.
# In production consider using a connection pool (psycopg2.pool.SimpleConnectionPool)
try:
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASS
    )
    # autocommit False by default; we will commit/rollback manually
    cursor = conn.cursor(cursor_factory=RealDictCursor)
except Exception as e:
    # If connection fails, raise so app startup reveals the problem
    raise RuntimeError(f"Failed to connect to the database: {e}")

