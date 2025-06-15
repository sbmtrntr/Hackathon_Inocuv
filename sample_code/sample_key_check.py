from google.oauth2 import service_account
from google.auth.transport.requests import Request

# 正しいJSONファイルを読み込む
credentials = service_account.Credentials.from_service_account_file(
    "ogp-owner.json",
    scopes=["https://www.googleapis.com/auth/cloud-platform"]
)

# トークンを取得
credentials.refresh(Request())
token = credentials.token
print("✅ 成功：アクセストークン取得 →", token[:20], "...")
