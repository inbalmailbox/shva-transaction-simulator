import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-wrap">
          <div className="header__logo-icon">S</div>
          <div className="header__logo-text">shva</div>
        </div>

        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;