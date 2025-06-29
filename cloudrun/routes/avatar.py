from fastapi import APIRouter
from connect_db import get_connection
from pydantic import BaseModel
import vertexai
from vertexai.generative_models import GenerativeModel, Part, FinishReason
import vertexai.preview.generative_models as generative_models
from google.oauth2 import service_account
from google.auth.transport.requests import Request
from google.cloud import storage

# --- サービスアカウント認証情報のロード ---
# アプリケーションの起動時に一度だけロードするのが効率的
try:
    credentials = service_account.Credentials.from_service_account_file(
        "../credentials/ogp-owner.json",
        scopes=["https://www.googleapis.com/auth/cloud-platform"]
    )
    print("サービスアカウント認証情報を正常にロードしました。")
except Exception as e:
    print(f"サービスアカウント認証情報のロード中にエラーが発生しました: {e}")
    # アプリケーションの起動を停止するか、エラーハンドリングを適切に行うことを検討してください
    credentials = None # ロード失敗時はNoneを設定

router = APIRouter()

@router.get("/student/{student_id}/avatar")
def get_avatar_info(student_id: str):
    """
    ユーザーのアバター情報を取得するエンドポイント
    """
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = """
            SELECT
                avatar_id,
                student_id,
                character_type_id,
                level,
                experience,
                created_at
            FROM
                avatars
            WHERE
                student_id = %s
        """
        cursor.execute(query, (student_id,))
        avatar_info = cursor.fetchone()

        if avatar_info:
            return avatar_info
        else:
            return {"message": "Avatar not found for this student_id"}, 404
        
    except Exception as e:
        return {"error": str(e)}, 500
    
    finally:
        cursor.close()
        conn.close()


class ChatRequest(BaseModel):
    """
    チャットリクエストのペイロードを定義するPydanticモデル
    """
    student_id: str
    message: str

@router.post("/chat/vertex_ai")
async def chat_with_vertex_ai(request: ChatRequest):
    """
    Vertex AIと対話するためのエンドポイント

    Args:
        request (ChatRequest): 学生IDとメッセージを含むリクエストボディ

    Returns:
        dict: Vertex AIからの応答、またはエラーメッセージ
    """

    if credentials is None:
        return {"error": "Vertex AI認証情報がロードされていません。設定を確認してください。"}, 500

    try:
        # Vertex AIの初期化（プロジェクトIDとロケーション、そして認証情報を設定）
        vertexai.init(project="excellent-shard-461012-t7", location="global", credentials=credentials) 

        # 使用するモデルを指定 (例: "gemini-pro")
        model = GenerativeModel("gemini-2.5-flash")

        # チャットセッションの開始
        chat = model.start_chat()

        # Vertex AIへのメッセージ送信
        response = chat.send_message(
            [request.message],
            generation_config={
                "max_output_tokens": 2048,
                "temperature": 0.9,
                "top_p": 1,
            },
            safety_settings={
                generative_models.HarmCategory.HARM_CATEGORY_HATE_SPEECH: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                generative_models.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                generative_models.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                generative_models.HarmCategory.HARM_CATEGORY_HARASSMENT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        )

        # 応答のテキストを抽出
        vertex_ai_response = response.text

        return {"student_id": request.student_id, "response": vertex_ai_response}

    except Exception as e:
        # Vertex AI APIからのエラーもここでキャッチされます
        return {"error": f"Vertex AIとの対話中にエラーが発生しました: {str(e)}"}, 500