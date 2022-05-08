import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footerColumn">
        <img src={Logo} alt="" />
      </div>
      <ul className="footerStyle">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/me">Profile</Link>
        </li>
        <li>
          <Link to="/mission">Our Mission</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
