import React from 'react';

// Nhận vào tham số props để hứng dữ liệu từ App.jsx gửi sang
 export const ProfileCard = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      {/* Lấy name từ props hiển thị ra đây */}
      <h3>氏名: {props.name}</h3>
      
      {/* Lấy role từ props hiển thị ra đây */}
      <p>役割: {props.role}</p>
    </div>
  );
};

