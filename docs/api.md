# ロボット部品管理 API 仕様書

## 1. 部品一覧取得
- **URL:** `/api/parts`
- **Method:** `GET`
- **Response:** 部品データのJSON配列

## 2. 新しい部品の登録
- **URL:** `/api/parts`
- **Method:** `POST`
- **Request Body (JSON):**
  ```json
  {
    "name": "文字列",
    "category": "文字列",
    "quantity": 数値
  }