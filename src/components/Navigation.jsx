import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#jsx">JSX</a>
        </li>
        <li>
          <a href="#component">コンポーネント</a>
        </li>
        <li>
          <a href="#event">イベント</a>
        </li>
      </ul>
    </nav>
  );
};

// Gửi linh kiện này ra ngoài để file khác dùng
export default Navigation;