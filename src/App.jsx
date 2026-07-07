import React from 'react';
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import CategoryMenu from "./components/CategoryMenu";
import PartList from "./components/PartList";

// ==========================================
// BÀI TẬP ①: Component Section (Kết hợp props và children)
// ==========================================
function Section({ title, children }) {
  return (
    <div style={{ border: "2px solid #4A90E2", padding: "15px", margin: "15px 0", borderRadius: "8px" }}>
      {/* Hiển thị tiêu đề từ props */}
      <h2 style={{ color: "#333", marginTop: 0 }}>{title}</h2> 
      
      {/* Hiển thị nội dung bất kỳ từ children */}
      <div style={{ color: "#555" }}>{children}</div>
    </div>
  );
}

// ==========================================
// BÀI TẬP ②: Component Item (Nhận props 'name' để hiển thị thẻ li)
// ==========================================
function Item({ name }) {
  return <li style={{ padding: "4px 0", fontSize: "16px" }}>{name}</li>;
}

// ==========================================
// COMPONENT CHÍNH (Gộp cả code cũ của bạn và bài tập mới)
// ==========================================
function App() {
  // Mảng dữ liệu dùng cho Bài tập ②
  const hocPhan = ["HTML/CSS", "JavaScript基礎", "React入門", "Next.js"];

  return (
    <div className="app" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      {/* --- Giữ lại các Component cũ của dự án robot --- */}
      <Header />
      <main>
        <SearchBox />
        <CategoryMenu />
        <PartList />
      </main>

      <hr style={{ margin: "40px 0", border: "1px dashed #ccc" }} />

      {/* --- PHẦN BÀI TẬP WEEK 11 CỦA BẠN --- */}
      <h1 style={{ textAlign: "center", color: "#2C3E50" }}>React Homework (Week 11)</h1>

      {/* Kiểm tra Bài tập ①: Dùng Section lần 1 */}
      <Section title="1. Giới thiệu bản thân">
        <p>Chào mọi người, mình đang tự tay viết những dòng code React đầu tiên!</p>
      </Section>

      {/* Kiểm tra Bài tập ①: Dùng Section lần 2 */}
      <Section title="2. Kế hoạch học tập tuần này">
        <ul>
          <li>Ôn tập kỹ về props và children để làm bàn đạp cho Week 12.</li>
          <li>Thực hành tự gõ code nhiều lần cho quen tay.</li>
        </ul>
      </Section>

      {/* Kiểm tra Bài tập ②: Dùng map() kết hợp với Component Item */}
      <Section title="3. Danh sách các bài học (Sử dụng map & Item)">
        <ul style={{ paddingLeft: "20px" }}>
          {hocPhan.map((item, index) => (
            <Item key={index} name={item} />
          ))}
        </ul>
      </Section>
    </div>
  );
}

export default App;