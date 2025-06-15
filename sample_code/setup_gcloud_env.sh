#!/bin/bash

# -----------------------------
ENV_NAME="gcloud-token"        # 作成する環境名
PYTHON_VERSION="3.9"          # Pythonのバージョン
# -----------------------------

echo "🛠️ Conda 環境 '$ENV_NAME' を作成中..."

# Conda 初期化（conda activate を使うため）
eval "$(conda shell.bash hook)"

# 既に存在していればスキップ
if conda env list | grep -q "^$ENV_NAME\s"; then
    echo "✅ Conda 環境 '$ENV_NAME' は既に存在します。"
else
    conda create -n "$ENV_NAME" python="$PYTHON_VERSION" -y || {
        echo "❌ 環境作成に失敗しました"; exit 1;
    }
    echo "✅ 環境 '$ENV_NAME' を作成しました。"
fi

echo "📦 環境 '$ENV_NAME' をアクティベートします..."
conda activate "$ENV_NAME"

echo "📚 必要なパッケージをインストールします..."
pip install --quiet google-auth google-auth-oauthlib google-api-python-client requests google-cloud-storage

echo "✅ 環境構築完了！conda activate $ENV_NAME で利用できます。"
