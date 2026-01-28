import React from 'react';

const Menu: React.FC = () => {
  return (
    <main style={{ padding: '2rem', minHeight: 'calc(100vh - 100px)' }}>
      <h1>Меню</h1>
      <h2>Напитки</h2>
      <ul>
        <li>Эспрессо</li>
        <li>Капучино</li>
        <li>Латте</li>
        <li>Американо</li>
      </ul>
      <h2>Десерты</h2>
      <ul>
        <li>Круассан</li>
        <li>Тирамису</li>
        <li>Чизкейк</li>
      </ul>
    </main>
  );
};

export default Menu;
