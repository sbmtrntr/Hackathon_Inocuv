from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import root, avatar, student

app = FastAPI()

# CORS 設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーターを追加
app.include_router(root.router)
app.include_router(student.router)  
app.include_router(avatar.router) 

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)