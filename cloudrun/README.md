## Pythonの環境構築
1. python3.9をインストール

2. 以下モジュールをインストール

    `pip install -r requirements.txt`

3. このディレクトリ下に移動し、以下を実行

    `uvicorn main:app --host localhost --port 8000 --reload`

4. http://localhost:8000 でHello Worldが表示されていればOK


## 学生登録
```
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{
           "student_id": "student002",
           "name": "田中花子",
           "grade": 9,
           "school": "西中学校",
           "avatar_id": "avatar_b02",
           "character_type_id": "type-A",
           "email": "hanako.tanaka@example.com",
           "password_hash": "another_hashed_password"
         }' \
     http://127.0.0.1:8000/student/signup
```

## 学生の情報を取得
`http://localhost:8000/student/student002`

## 学生のアバター情報を取得
`http://localhost:8000/student/student002/avatar`

## geminiとの会話
```
curl -X POST -H "Content-Type: application/json" -d '{
    "student_id": "7b8c9d0e-1f2a-3456-7890-abcdef90123",
    "message": "こんにちは、Vertex AI！"
}' http://localhost:8080/chat/vertex_ai
```