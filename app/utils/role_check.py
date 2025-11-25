from fastapi import HTTPException, status

def check_role(current_user: dict, allowed_roles: list):
    user_role = (current_user.get("role") or "").lower()
    if user_role not in [r.lower() for r in allowed_roles]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Access denied: Only {', '.join(allowed_roles)} allowed.",
        )
