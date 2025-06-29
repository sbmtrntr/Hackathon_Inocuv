from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from connect_db import get_connection
import uuid

router = APIRouter()

# 学生登録用のリクエストボディの構造を定義
class StudentCreate(BaseModel):
    name: str
    grade: int
    school: str
    character_type_id: int

@router.post("/student/signup")
def create_student(student: StudentCreate):
    """ 学生の情報を登録するエンドポイント
    """
    conn = get_connection()
    cursor = conn.cursor()
    try:
        student_uuid = uuid.uuid4()
        avatar_uuid = uuid.uuid4()

        # 1. 学生情報の登録
        query = """
            INSERT INTO students (student_id, name, grade, school, avatar_id)
            VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (
            student_uuid,
            student.name,
            student.grade,
            student.school,
            avatar_uuid,
        ))

        # 2. アバター情報の登録
        # 初期値の設定
        initial_level = 1
        initial_experience = 0

        avatar_query = """
            INSERT INTO avatars (avatar_id, student_id, character_type_id, level, experience)
            VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(avatar_query, (
            avatar_uuid, 
            student_uuid,
            student.character_type_id, # リクエストボディから取得
            initial_level,
            initial_experience,
        ))
        
        conn.commit() # 両方の操作が成功した場合のみコミット

        return {"message": "Student and avatar created successfully"}, 201
        
    except Exception as e:
        conn.rollback() # どちらかの操作で失敗した場合、両方をロールバック
        raise HTTPException(status_code=500, detail=str(e)) # HTTPException を使用
        
    finally:
        cursor.close()
        conn.close()


@router.get("/student/{student_id}")
def get_student_info(student_id: str):
    """
    学生の情報を取得するエンドポイント
    """
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = """
            SELECT
                student_id,
                name,
                grade,       
                school,  
                avatar_id,
                created_at
            FROM
                students
            WHERE
                student_id = %s
        """
        cursor.execute(query, (student_id,))
        student_info = cursor.fetchone()

        if student_info:
            return student_info
        else:
            return {"message": "Student not found"}, 404
        
    except Exception as e:
        return {"error": str(e)}, 500
    
    finally:
        cursor.close()
        conn.close()