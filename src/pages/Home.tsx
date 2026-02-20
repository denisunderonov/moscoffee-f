import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">МосКофе</h1>
          <p className="hero__subtitle">Настоящий кофе в сердце Москвы</p>
          <p className="hero__description">
            Добро пожаловать в нашу уютную кофейню, где каждый глоток — это путешествие 
            в мир изысканных вкусов и ароматов. Мы готовим кофе с любовью и заботой.
          </p>
          <div className="hero__buttons">
            <Link to="/menu" className="btn btn--primary">Посмотреть меню</Link>
            <Link to="/about" className="btn btn--secondary">О нас</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section__title">Почему выбирают нас</h2>
          <div className="features__grid">
            <div className="feature__card">
              <div className="feature__icon">☕</div>
              <h3 className="feature__title">Свежеобжаренный кофе</h3>
              <p className="feature__text">
                Мы обжариваем зерна сами, чтобы гарантировать свежесть и качество каждой чашки
              </p>
            </div>
            <div className="feature__card">
              <div className="feature__icon">👨‍🍳</div>
              <h3 className="feature__title">Опытные бариста</h3>
              <p className="feature__text">
                Наши мастера знают секреты приготовления идеального кофе и создают напитки с душой
              </p>
            </div>
            <div className="feature__card">
              <div className="feature__icon">🌱</div>
              <h3 className="feature__title">Экологично</h3>
              <p className="feature__text">
                Мы заботимся об окружающей среде и используем только экологичные материалы
              </p>
            </div>
            <div className="feature__card">
              <div className="feature__icon">❤️</div>
              <h3 className="feature__title">С любовью</h3>
              <p className="feature__text">
                Каждая чашка готовится с вниманием к деталям и заботой о наших гостях
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">Готовы начать свой день с идеальной чашки кофе?</h2>
            <p className="cta__text">Приходите к нам или закажите доставку</p>
            <Link to="/menu" className="btn btn--primary btn--large">Заказать сейчас</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
