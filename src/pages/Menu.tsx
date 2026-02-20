import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'drinks' | 'desserts';
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Эспрессо',
    description: 'Классический крепкий кофе, сваренный под давлением',
    price: 150,
    category: 'drinks'
  },
  {
    id: 2,
    name: 'Капучино',
    description: 'Эспрессо с молочной пеной и молоком',
    price: 200,
    category: 'drinks'
  },
  {
    id: 3,
    name: 'Латте',
    description: 'Эспрессо с большим количеством вспененного молока',
    price: 220,
    category: 'drinks'
  },
  {
    id: 4,
    name: 'Американо',
    description: 'Эспрессо с горячей водой',
    price: 180,
    category: 'drinks'
  },
  {
    id: 5,
    name: 'Флэт Уайт',
    description: 'Двойной эспрессо с молоком и тонкой пеной',
    price: 240,
    category: 'drinks'
  },
  {
    id: 6,
    name: 'Раф кофе',
    description: 'Кофе со сливками и ванильным сиропом',
    price: 250,
    category: 'drinks'
  },
  {
    id: 7,
    name: 'Круассан',
    description: 'Свежая французская выпечка с маслом',
    price: 120,
    category: 'desserts'
  },
  {
    id: 8,
    name: 'Тирамису',
    description: 'Классический итальянский десерт с кофе и маскарпоне',
    price: 280,
    category: 'desserts'
  },
  {
    id: 9,
    name: 'Чизкейк',
    description: 'Нежный творожный торт с ягодным соусом',
    price: 260,
    category: 'desserts'
  },
  {
    id: 10,
    name: 'Брауни',
    description: 'Шоколадный пирог с орехами',
    price: 200,
    category: 'desserts'
  },
  {
    id: 11,
    name: 'Медовик',
    description: 'Медовый торт со сметанным кремом',
    price: 240,
    category: 'desserts'
  },
  {
    id: 12,
    name: 'Маффин',
    description: 'Свежий маффин с шоколадом или ягодами',
    price: 140,
    category: 'desserts'
  }
];

const Menu: React.FC = () => {
  const drinks = menuItems.filter(item => item.category === 'drinks');
  const desserts = menuItems.filter(item => item.category === 'desserts');

  return (
    <div className="menu">
      <div className="menu__header">
        <div className="container">
          <h1 className="menu__title">Наше меню</h1>
          <p className="menu__subtitle">Выберите свой любимый напиток или десерт</p>
        </div>
      </div>

      <div className="container">
        {/* Drinks Section */}
        <section className="menu__section">
          <h2 className="menu__section-title">Напитки</h2>
          <div className="menu__grid">
            {drinks.map(item => (
              <div key={item.id} className="menu__card">
                <div className="menu__card-content">
                  <h3 className="menu__card-title">{item.name}</h3>
                  <p className="menu__card-description">{item.description}</p>
                  <div className="menu__card-price">{item.price} ₽</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Desserts Section */}
        <section className="menu__section">
          <h2 className="menu__section-title">Десерты</h2>
          <div className="menu__grid">
            {desserts.map(item => (
              <div key={item.id} className="menu__card">
                <div className="menu__card-content">
                  <h3 className="menu__card-title">{item.name}</h3>
                  <p className="menu__card-description">{item.description}</p>
                  <div className="menu__card-price">{item.price} ₽</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
