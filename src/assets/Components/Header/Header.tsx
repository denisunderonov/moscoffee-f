import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`header ${open ? 'is-open' : ''}`}>
            <div className="header__container">
                <div className="header__logo">
                    <a href="/">МосКофе</a>
                </div>

                <button
                    className="header__burger"
                    aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="burger__box">
                        <span className="burger__inner" />
                    </span>
                </button>

                <nav className="header__nav" aria-hidden={!open}>
                    <div className="header__nav-inner">
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <a href="/job">вакансии</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="/menu">меню</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="/about">о нас</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;