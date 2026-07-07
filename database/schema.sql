-- ロボット部品管理テーブルの定義
CREATE TABLE IF NOT EXISTS robot_parts (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT NOW()
);