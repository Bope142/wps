import "./style.scss";
import logo from "../../assets/images/logo.webp";

const HeaderNavigation = () => {
  return (
    <nav className="header__nav">
      <a href="/" className="nav__item">
        HOME
      </a>
      <a href="/" className="nav__item">
        A PROPOS
      </a>
      <a href="/" className="nav__item">
        NOS LOGEMENTS
      </a>
    </nav>
  );
};
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo du site" />
      </div>
      <HeaderNavigation />
      <a href="" id="link__btn_contact">
        Nous contacter
      </a>
    </header>
  );
}

export default Header;
