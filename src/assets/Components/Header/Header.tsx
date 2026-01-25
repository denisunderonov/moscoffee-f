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

                        <nav className="header__nav" aria-hidden={!open}>
                            {/* overlay and drawer for mobile; desktop keeps displaying the nav normally via CSS */}
                            <div
                                className={`header__overlay ${open ? 'is-visible' : ''}`}
                                onClick={() => setOpen(false)}
                            />

                            <div className={`header__drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
                                <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Закрыть меню">×</button>
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
        </header>
    );
};

export default Header;