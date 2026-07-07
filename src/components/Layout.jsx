import React from 'react';

// Tên component viết hoa chữ cái đầu theo Named Export
export const Layout = (props) => {
  return (
    <div style={{ border: '2px solid #7c3aed', padding: '20px', borderRadius: '8px', margin: '20px' }}>
      <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px', fontWeight: 'bold' }}>
        【共通枠】ロボットパーツ管理システム
      </header>
      
      {/* Nơi nội dung bên trong cặp thẻ <Layout>...</Layout> sẽ hiển thị */}
      <main>{props.children}</main>
      
      <footer style={{ marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #ccc', fontSize: '12px', color: '#666' }}>
        © 2026 Robot Parts App
      </footer>
    </div>
  );
};