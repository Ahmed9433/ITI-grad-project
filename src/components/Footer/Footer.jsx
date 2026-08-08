import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer-wrapper">
      <div id="footer-logo">
        <Link to="/">Home</Link>
      </div>
      <div id="footer-links">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
      <div id="footer-copy">
        <p><sup>&copy;</sup>2026</p>
      </div>
    </div>
  );
};

export default Footer;
