import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`header ${open ? 'is-open' : ''}`}>
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">МосКофе</Link>
                </div>

                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link to="/job">вакансии</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/menu">меню</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/about">о нас</Link>
                        </li>
                    </ul>
                </nav>

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
            </div>

            <div
                className={`header__overlay ${open ? 'is-visible' : ''}`}
                onClick={() => setOpen(false)}
            />

            <div className={`header__drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
                <button
                    className="drawer__burger"
                    aria-label="Закрыть меню"
                    onClick={() => setOpen(false)}
                >
                    <span className="burger__box">
                        <span className="burger__inner" />
                    </span>
                </button>
                <ul className="drawer__menu">
                    <li className="drawer__menu-item">
                        <Link to="/job">вакансии</Link>
                    </li>
                    <li className="drawer__menu-item">
                        <Link to="/menu">меню</Link>
                    </li>
                    <li className="drawer__menu-item">
                        <Link to="/about">о нас</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;