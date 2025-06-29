from google.oauth2 import service_account
from google.cloud import storage, firestore

# サービスアカウントキーの読み込み
credentials = service_account.Credentials.from_service_account_file(
    "credentials/ogp-owner.json",
    scopes=["https://www.googleapis.com/auth/cloud-platform"]
)

# 明示的にプロジェクトIDを指定（必要なら）
project_id = credentials.project_id  # ← 実際のGCPプロジェクトIDに置き換えてください
#print(project_id)
# Cloud Storage クライアント
storage_client = storage.Client(credentials=credentials, project=project_id)
# バケット名を指定
bucket = storage_client.bucket("our-growth-bucket")

# Firestore クライアント
db = firestore.Client(credentials=credentials, project=project_id)

# ドキュメント取得と確認
doc_ref = db.collection("sample-collection").document("sample-id")
doc = doc_ref.get()
metadata = doc.to_dict()
print("✅ file_path:", metadata["file_path"])

# BLOB(binary large object)なので,
# 「ディレクトリ(仮想)+保存するファイル」としてプレフィックスを登録
file_path = metadata["file_path"] + "empty.txt"
blob = bucket.blob(file_path)
# Cloud Storageへアップロード
# ※登録したプレフィックスの末ディレクトリにデータが保存される
blob.upload_from_filename("sample_code/empty.txt")

# Firestoreにメタデータ登録
db.collection("sample-collection").document("sample-id").update({
    "file_path": file_path,
    "user_id": "student_1212",
    "uploaded_at": firestore.SERVER_TIMESTAMP,
    "file_type": "txt"
})