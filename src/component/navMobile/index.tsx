import "./style.scss";

function NavMobile() {
  return (
    <div className="nav__mobile">
      <div className="link__nav">
        <a href="" className="nav__item__mobile">
          HOME
        </a>
        <a href="" className="nav__item__mobile">
          A PROPOS
        </a>
        <a href="" className="nav__item__mobile">
          NOS LOGEMENT
        </a>
      </div>
      <a href="" id="btn_contact">
        Nous contacter
      </a>
    </div>
  );
}

export default NavMobile;
