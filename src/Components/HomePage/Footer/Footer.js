import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="rentalDescription">
        <h3>
          <span>Car</span> Rental
        </h3>
        <div className="holdFooterContent">
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <p className="number">
            <a href="tel:+4733378901">+47 333 78 901</a>
          </p>
          <p className="mail">
            <a href="carrental@gmail.com">
              {" "}
              <FaEnvelope /> carrental@gmail.com
            </a>
          </p>
          <p>Design by XpeedStudio</p>
        </div>
      </div>
      <div className="companyDescription">
        <h3>Company</h3>
        <div className="holdFooterContent">
          <p>
            <a href="/">New York</a>
          </p>
          <p>
            <a href="/">Careers</a>
          </p>
          <p>
            <a href="/">Mobile</a>
          </p>
          <p>
            <a href="/">Blog</a>
          </p>
          <p>
            <a href="/">How we work</a>
          </p>
        </div>
      </div>
      <div className="workingHours">
        <h3>Working Hours</h3>
        <div className="holdFooterContent">
          <p>Mon-Fri:9:00AM-9:00PM</p>
          <p>Sat:9:00AM-19:00PM</p>
          <p>Sun:Closed</p>
        </div>
      </div>
      <div className="subscription">
        <h3>Subscription</h3>
        <div className="holdFooterContent">
          <p>Subscribe your Email address for latest news & updates.</p>
          <form className="subscribeForm">
            <input
              type="email"
              name="mail"
              placeholder="Enter EmailAdress..."
            />
            <button className="subscribeBtn">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
