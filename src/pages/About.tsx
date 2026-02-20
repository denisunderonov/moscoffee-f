import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__header">
        <div className="container">
          <h1 className="about__title">О нас</h1>
          <p className="about__subtitle">История нашей кофейни</p>
        </div>
      </div>

      <div className="container">
        <section className="about__section">
          <div className="about__content">
            <h2 className="about__section-title">Наша миссия</h2>
            <p className="about__text">
              МосКофе — это не просто кофейня, это место, где встречаются люди, идеи и 
              настоящий кофе. Мы открылись в 2020 году с простой целью: делиться любовью 
              к качественному кофе и создавать уютное пространство для наших гостей.
            </p>
            <p className="about__text">
              Каждый день мы обжариваем свежие зерна, готовим напитки с вниманием к деталям 
              и встречаем наших гостей с улыбкой. Мы верим, что хороший кофе может сделать 
              день лучше, а уютная атмосфера — помочь найти вдохновение.
            </p>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Что нас отличает</h2>
          <div className="about__features">
            <div className="about__feature">
              <h3 className="about__feature-title">Собственная обжарка</h3>
              <p className="about__feature-text">
                Мы сами отбираем и обжариваем зерна, чтобы контролировать качество 
                на каждом этапе. Наш мастер-обжарщик создает уникальные смеси специально для МосКофе.
              </p>
            </div>
            <div className="about__feature">
              <h3 className="about__feature-title">Опытная команда</h3>
              <p className="about__feature-text">
                Наши бариста проходят специальное обучение и постоянно совершенствуют 
                свои навыки. Они знают, как приготовить идеальную чашку кофе для каждого гостя.
              </p>
            </div>
            <div className="about__feature">
              <h3 className="about__feature-title">Уютная атмосфера</h3>
              <p className="about__feature-text">
                Мы создали пространство, где комфортно работать, встречаться с друзьями 
                или просто наслаждаться моментом. У нас есть Wi-Fi, розетки и удобные места для работы.
              </p>
            </div>
            <div className="about__feature">
              <h3 className="about__feature-title">Экологичный подход</h3>
              <p className="about__feature-text">
                Мы заботимся об окружающей среде: используем многоразовые стаканы, 
                экологичную упаковку и поддерживаем программы переработки отходов.
              </p>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Контакты</h2>
          <div className="about__contacts">
            <div className="contact__item">
              <h3 className="contact__label">Адрес</h3>
              <p className="contact__value">г. Москва, ул. Примерная, д. 1</p>
            </div>
            <div className="contact__item">
              <h3 className="contact__label">Телефон</h3>
              <p className="contact__value">+7 (495) 123-45-67</p>
            </div>
            <div className="contact__item">
              <h3 className="contact__label">Email</h3>
              <p className="contact__value">info@moscoffee.ru</p>
            </div>
            <div className="contact__item">
              <h3 className="contact__label">Часы работы</h3>
              <p className="contact__value">Пн-Вс: 8:00 - 22:00</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
