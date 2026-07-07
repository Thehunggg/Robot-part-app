import React from 'react';

// Sử dụng Named Export để xuất bản component Card
export const Card = (props) => {
  return (
    // Thêm một chút style CSS để giao diện tạo thành một chiếc khung hình cái thẻ (Card)
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      {/* Đây là nơi nội dung nằm giữa cặp thẻ <Card>...</Card> sẽ được lấp đầy */}
      {props.children}
    </div>
  );
};