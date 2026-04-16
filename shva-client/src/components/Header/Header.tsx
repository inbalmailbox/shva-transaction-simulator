import LanguageToggle from '../LanguageToggle/LanguageToggle';
import logo from '../../assets/shva_logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-wrap">
          <img className="header__logo-image" src={logo} alt="Shva logo" />
        </div>

        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;