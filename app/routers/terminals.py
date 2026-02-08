from fastapi import APIRouter, Depends, HTTPException, status
from psycopg2.extras import RealDictCursor
from app.database import conn
from app.utils.auth import get_current_user
from app.utils.role_check import check_role
import traceback

router = APIRouter(prefix="/terminals", tags=["Terminals"])

@router.get("/counts", status_code=status.HTTP_200_OK)
def get_terminal_counts(current_user: dict = Depends(get_current_user)):
    """
    Get terminal counts for all bank tables (city, pubali, islami, mtb, standard)
    Returns: {"citybank": 42, "pbl": 15, "ibbl": 23, "mtb": 8, "sdb": 12}
    """
    check_role(current_user, ["support", "admin", "superadmin"])
    
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            # Map table names to response keys that frontend expects
            table_mapping = {
                "city": "citybank",      # city table → citybank key
                "pubali": "pbl",         # pubali table → pbl key
                "islami": "ibbl",        # islami table → ibbl key
                "mtb": "mtb",            # mtb table → mtb key
                "standard": "sdb"        # standard table → sdb key
            }
            
            result = {}
            
            # Count records in each table
            for table_name, response_key in table_mapping.items():
                try:
                    cursor.execute(f'SELECT COUNT(*) as count FROM {table_name};')
                    row = cursor.fetchone()
                    result[response_key] = row['count'] if row else 0
                except Exception as e:
                    print(f"Error counting {table_name}: {e}")
                    result[response_key] = 0
            
            return result
    
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch terminal counts: {str(e)}"
        )