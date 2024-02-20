import React from "react";
import logo from "../../../ImageAssests/logo/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const handleHamburger = () => {
    const hamburger = document.querySelector(`.hamburger`);
    hamburger.classList.toggle("is-active");
    const holdLinksContainer = document.querySelector(`.holdLinksRegister`);
    holdLinksContainer.classList.toggle("is-active");
  };

  return (
    <nav className="nav">
      <div className="logoImg">
        <img src={logo} alt="car rental logo" />
      </div>
      <div className="holdLinksRegister">
        <ul className="links">
          <li className="linkItem">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="linkItem">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="linkItem">
            <Link to={"/vehiclemodels"}>Vehicle Models</Link>
          </li>
          <li className="linkItem">
            <Link to={"/testimonials"}>Testimonials</Link>
          </li>
          <li className="linkItem">
            <Link to={"/team"}>Our Team</Link>
          </li>
          <li className="linkItem">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="signLinks">
          <div className="sign_in_Btn">
            <Link to={"/signin"}>Sign In</Link>
          </div>
          <div className="register_Btn">
            <Link to={"/signup"}>Register</Link>
          </div>
        </div>
      </div>

      <button className="hamburger" onClick={handleHamburger}>
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default NavBar;
