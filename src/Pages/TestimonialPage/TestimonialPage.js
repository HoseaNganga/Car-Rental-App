import React from "react";
import HomeTestimonials from "../../Components/HomePage/HomeTestimonials/HomeTestimonials";
import Footer from "../../Components/HomePage/Footer/Footer";
import { FaMobileScreen } from "react-icons/fa6";

const TestimonialPage = () => {
  return (
    <div className="testimonialPageContainer">
      <div className="backgroundContainer">
        <div className="backgroundContainerHeader">
          <h2>Testimonials</h2>
        </div>
      </div>
      <HomeTestimonials />
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

export default TestimonialPage;
