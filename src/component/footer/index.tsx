import "./style.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 appart-cosy.com</p>
      <div className="social__media">
        <a href="" className="social__media__footer">
          <FaInstagram />
        </a>
        <a href="" className="social__media__footer">
          <FaFacebook />
        </a>
        <a href="" className="social__media__footer">
          <FaSquareXTwitter />
        </a>
        <a href="" className="social__media__footer">
          <FaYoutube />
        </a>
      </div>
      <p>Powered by appart-cosy.com</p>
    </footer>
  );
}

export default Footer;
