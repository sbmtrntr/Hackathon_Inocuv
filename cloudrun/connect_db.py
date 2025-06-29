import os
import pymysql
from dotenv import load_dotenv

# ローカル環境なら .env.local を読み込む
if os.getenv("GAE_ENV") is None: # Cloud Run 環境では GAE_ENV が設定される
    load_dotenv("../credentials/.env.local")

DB_HOST = os.getenv('DB_HOST')  # Cloud SQLのIPアドレス
DB_PORT = int(os.getenv('DB_PORT'))  # デフォルトは3306
DB_USER = os.getenv('DB_USER')  # Cloud SQLで設定したユーザー名
DB_PASSWORD = os.getenv('DB_PASSWORD') # Cloud SQLで設定したパスワード
DB_NAME = os.getenv('DB_NAME') # 接続したいデータベース名

def get_connection():
    # Cloud SQLインスタンス接続名
    connection = pymysql.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME, # ここで接続するデータベースを指定
        cursorclass=pymysql.cursors.DictCursor # 辞書形式で結果を取得する場合
    )

    return connection