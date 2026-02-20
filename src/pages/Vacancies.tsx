import React from 'react';

interface Vacancy {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  salary?: string;
}

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: 'Бариста',
    description: 'Ищем опытного бариста, который любит кофе и умеет создавать отличные напитки. Работа в дружной команде, обучение и развитие.',
    requirements: [
      'Опыт работы бариста от 1 года',
      'Знание различных способов заваривания кофе',
      'Коммуникабельность и стрессоустойчивость',
      'Готовность работать в сменном графике'
    ],
    salary: 'от 40 000 ₽'
  },
  {
    id: 2,
    title: 'Повар-кондитер',
    description: 'Нужен творческий кондитер для приготовления десертов и выпечки. Возможность экспериментировать и создавать новые рецепты.',
    requirements: [
      'Опыт работы кондитером от 2 лет',
      'Знание техник приготовления десертов',
      'Творческий подход к работе',
      'Аккуратность и внимание к деталям'
    ],
    salary: 'от 50 000 ₽'
  },
  {
    id: 3,
    title: 'Управляющий кофейни',
    description: 'Ищем ответственного управляющего для координации работы кофейни, управления персоналом и контроля качества обслуживания.',
    requirements: [
      'Опыт управления заведением общепита от 2 лет',
      'Навыки управления персоналом',
      'Организаторские способности',
      'Знание стандартов обслуживания'
    ],
    salary: 'от 60 000 ₽'
  },
  {
    id: 4,
    title: 'Бариста (стажер)',
    description: 'Отличная возможность для тех, кто хочет начать карьеру в кофейной индустрии. Мы обучим всему необходимому.',
    requirements: [
      'Желание учиться и развиваться',
      'Коммуникабельность',
      'Ответственность и пунктуальность',
      'Готовность работать в команде'
    ],
    salary: 'от 35 000 ₽'
  }
];

const Vacancies: React.FC = () => {
  return (
    <div className="vacancies">
      <div className="vacancies__header">
        <div className="container">
          <h1 className="vacancies__title">Вакансии</h1>
          <p className="vacancies__subtitle">Присоединяйтесь к нашей команде</p>
        </div>
      </div>

      <div className="container">
        <section className="vacancies__intro">
          <p className="vacancies__intro-text">
            Мы всегда рады новым талантливым людям в нашей команде! Если вы любите кофе, 
            цените качество и хотите работать в дружной атмосфере — мы ждем вас.
          </p>
        </section>

        <div className="vacancies__list">
          {vacancies.map(vacancy => (
            <div key={vacancy.id} className="vacancy__card">
              <div className="vacancy__header">
                <h2 className="vacancy__title">{vacancy.title}</h2>
                {vacancy.salary && (
                  <div className="vacancy__salary">{vacancy.salary}</div>
                )}
              </div>
              <p className="vacancy__description">{vacancy.description}</p>
              <div className="vacancy__requirements">
                <h3 className="vacancy__requirements-title">Требования:</h3>
                <ul className="vacancy__requirements-list">
                  {vacancy.requirements.map((req, index) => (
                    <li key={index} className="vacancy__requirement-item">{req}</li>
                  ))}
                </ul>
              </div>
              <button className="vacancy__apply-btn">Откликнуться</button>
            </div>
          ))}
        </div>

        <section className="vacancies__contact">
          <h2 className="vacancies__contact-title">Не нашли подходящую вакансию?</h2>
          <p className="vacancies__contact-text">
            Отправьте нам свое резюме на <a href="mailto:jobs@moscoffee.ru">jobs@moscoffee.ru</a>, 
            и мы свяжемся с вами, когда появится подходящая позиция.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Vacancies;
