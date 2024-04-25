import "./style.scss";
import logo from "../../assets/images/logo.webp";
import { useState } from "react";

interface ButtonMenuMobileProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const ButtonMenuMobile: React.FC<ButtonMenuMobileProps> = ({
  setIsActive,
  isActive,
}) => {
  const handleClick = () => {
    setIsActive(!isActive);
    const navMobile = document.querySelector(".nav__mobile");
    if (navMobile) {
      navMobile.classList.toggle("nav__mobile_show");
    }
  };

  return (
    <button
      className={`btn btn-menu btn-clic-effect ${isActive && "active"}`}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};
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
  const [isNavMobileActive, setIsNavMobileActive] = useState(false);
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo du site" />
      </div>
      <HeaderNavigation />
      <a href="" id="link__btn_contact">
        Nous contacter
      </a>
      <ButtonMenuMobile
        setIsActive={setIsNavMobileActive}
        isActive={isNavMobileActive}
      />
    </header>
  );
}

export default Header;
