import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/menu', label: 'меню' },
  { to: '/about', label: 'о нас' },
  { to: '/job', label: 'вакансии' },
] as const;

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close();
      };
      document.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [open, close]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          МосКофе
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="header__menu-item">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header__burger ${open ? 'is-active' : ''}`}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="header__burger-line" />
        </button>
      </div>

      <div
        className={`header__overlay ${open ? 'is-visible' : ''}`}
        aria-hidden="true"
        onClick={close}
      />

      <nav
        className={`header__drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Навигационное меню"
      >
        <ul className="header__drawer-menu">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="header__drawer-item">
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
