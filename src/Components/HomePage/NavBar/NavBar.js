import React from "react";
import logo from "../../../ImageAssests/logo/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const handleHamburger = () => {
    const hamburger = document.querySelector(`.hamburger`);
    console.log(hamburger);
    hamburger.classList.toggle("is-active");
    const ulLinksEl = document.querySelector(`.links`);
    ulLinksEl.classList.toggle("is-active");
  };

  return (
    <nav className="nav">
      <div className="logoImg">
        <img src={logo} alt="car rental logo" />
      </div>
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
        <button className="sign_in_Btn">Sign In</button>
        <button className="register_Btn">Register</button>
      </div>

      <button className="hamburger" onClick={handleHamburger}>
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default NavBar;
