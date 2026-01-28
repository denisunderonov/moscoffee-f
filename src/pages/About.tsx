import React from 'react';

const About: React.FC = () => {
  return (
    <main style={{ padding: '2rem', minHeight: 'calc(100vh - 100px)' }}>
      <h1>О нас</h1>
      <p>
        МосКофе - это уютная кофейня в самом сердце Москвы, где каждый посетитель 
        ощущает атмосферу уюта и качественное обслуживание.
      </p>
      <h2>Почему мы?</h2>
      <ul>
        <li>Свежий кофе ежедневно</li>
        <li>Опытная команда бариста</li>
        <li>Уютная атмосфера</li>
        <li>Доступные цены</li>
      </ul>
    </main>
  );
};

export default About;
