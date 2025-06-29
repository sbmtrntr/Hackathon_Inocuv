## Pythonの環境構築
1. python3.9をインストール

2. 以下モジュールをインストール

    `pip install -r requirements.txt`

3. このディレクトリ下に移動し、以下を実行

    `uvicorn main:app --host localhost --port 8000 --reload`

4. http://localhost:8000 でHello Worldが表示されていればOK


## 学生登録
```
curl -X POST "http://localhost:8000/student/signup" \
-H "Content-Type: application/json" \
-d '{
  "name": "山田 太郎",
  "grade": 1,
  "school": "私立X高校",
  "character_type_id": 1
}'
```

## 学生の情報を取得
`http://localhost:8000/student/645807b2-6c70-47bd-bbc7-9b25fd19dcfd`

## 学生のアバター情報を取得
`http://localhost:8000/student/645807b2-6c70-47bd-bbc7-9b25fd19dcfd/avatar`

## geminiとの会話
```
curl -X POST -H "Content-Type: application/json" -d '{
    "student_id": "645807b2-6c70-47bd-bbc7-9b25fd19dcfd",
    "message": "こんにちは、Vertex AI！"
}' http://localhost:8000/chat/vertex_ai
```