import React from 'react';

const Vacancies: React.FC = () => {
  return (
    <main style={{ padding: '2rem', minHeight: 'calc(100vh - 100px)' }}>
      <h1>Вакансии</h1>
      <p>Ищем в команду:</p>
      <ul>
        <li>Бариста</li>
        <li>Повара</li>
        <li>Управляющего кофейни</li>
      </ul>
    </main>
  );
};

export default Vacancies;
