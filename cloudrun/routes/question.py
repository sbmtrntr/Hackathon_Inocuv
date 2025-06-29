from fastapi import APIRouter

router = APIRouter()

@router.get("/student/{student_id}/problem/{problem_id}")
def get_problem(student_id: str, problem_id: int):
    return None