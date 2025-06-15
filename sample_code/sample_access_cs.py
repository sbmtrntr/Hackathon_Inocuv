from google.oauth2 import service_account
from google.auth.transport.requests import Request
from google.cloud import storage

# サービスアカウントのJSONキーを指定
credentials = service_account.Credentials.from_service_account_file(
    "credentials/ogp-owner.json",
    scopes=["https://www.googleapis.com/auth/cloud-platform"]
)

# トークンを取得（必要な場合）
credentials.refresh(Request())
token = credentials.token
print("✅ 成功：アクセストークン取得 →", token[:20], "...")

# storage.Client に credentials を渡す
storage_client = storage.Client(credentials=credentials, project=credentials.project_id)
bucket = storage_client.bucket("our-growth-bucket")

# Cloud Storage 上の相対パス（オブジェクト名）を指定
blob_path = "workbook/math/20250610/work/math_normal.png"
blob = bucket.blob(blob_path)

# ローカルに保存
blob.download_to_filename("math_normal.png")

# メモリ上に読み込み（例: Webアプリで返す）
file_bytes = blob.download_as_bytes()
