import React from "react";
import { FaAsterisk, FaEnvelope, FaMobileScreen } from "react-icons/fa6";
import Footer from "../../Components/HomePage/Footer/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPageContainer">
      <div className="backgroundContainer">
        <div className="backgroundContainerHeader">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="contactPageBody">
        <div className="contactPageDescription">
          <h2>Need additional information?</h2>
          <p>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <p className="Contactnumber">
            <a href="tel:+4733378901">+47 333 78 901</a>
          </p>
          <p className="Contactmail">
            <a href="carrental@gmail.com">
              {" "}
              <FaEnvelope /> carrental@gmail.com
            </a>
          </p>
          <p>Design by XpeedStudio</p>
        </div>
        <form className="contactPageForm">
          <div>
            <label htmlFor="fullname">
              Full Name <FaAsterisk size={15} color="#ff4d30" />{" "}
            </label>
            <input
              type="text"
              id="fullname"
              required
              placeholder="John Smith"
              autoComplete="on"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="mail">
              Email <FaAsterisk size={15} color="#ff4d30" />{" "}
            </label>
            <input
              type="email"
              id="mail"
              required
              placeholder="youremail@gmail.com"
              autoComplete="on"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="comment">
              Tell us about it <FaAsterisk size={15} color="#ff4d30" />{" "}
            </label>
            <textarea
              id="comment"
              cols="30"
              rows="10"
              placeholder="Write here..."
            ></textarea>
          </div>
          <button className="contactBtn">
            <FaEnvelope size={24} color="white" />
            Send Message
          </button>
        </form>
      </div>
      <div className="aboutPageBook">
        <h3>
          Book a car by getting in touch with us
          <span>
            <FaMobileScreen /> (123) 456-7869
          </span>
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
