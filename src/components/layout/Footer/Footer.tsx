import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">МосКофе</h3>
            <p className="footer__text">
              Настоящий кофе в сердце Москвы. Мы готовим кофе с любовью и заботой.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Навигация</h4>
            <ul className="footer__links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/menu">Меню</Link></li>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/job">Вакансии</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Контакты</h4>
            <ul className="footer__contacts">
              <li>г. Москва, ул. Примерная, д. 1</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@moscoffee.ru</li>
              <li>Пн-Вс: 8:00 - 22:00</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Социальные сети</h4>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">Instagram</a>
              <a href="#" className="footer__social-link" aria-label="VK">VK</a>
              <a href="#" className="footer__social-link" aria-label="Telegram">Telegram</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} МосКофе. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
