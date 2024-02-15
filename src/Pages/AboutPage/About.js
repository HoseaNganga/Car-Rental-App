import React from "react";
import icon2 from "../../ImageAssests/about/about-main.jpg";
import icon3 from "../../ImageAssests/about/icon1.png";
import icon4 from "../../ImageAssests/about/icon2.png";
import icon5 from "../../ImageAssests/about/icon3.png";
import PlanTrip from "../../Components/HomePage/PlanTrip/PlanTrip";
import Footer from "../../Components/HomePage/Footer/Footer";
import { FaMobileScreen } from "react-icons/fa6";
import "./AboutPage.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutHeader">
        <div className="aboutImgContainer">
          <h2>About</h2>
        </div>
      </div>
      <div className="aboutPageBody">
        <div className="aboutPageBodyContainer">
          <div className="aboutPageBodyImgContainer">
            <img src={icon2} alt="icon 2" />
          </div>
          <div className="aboutPageBodyDescription">
            <h3>About Company</h3>
            <h4>You start the engine and your adventure begins</h4>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="aboutPageBodyIconContainer">
              <div className="carTypes">
                <img src={icon3} alt="icon3" />
                <h5>20 Car Types</h5>
              </div>
              <div className="rentalOutlets">
                <img src={icon4} alt="icon4" />
                <h5>85 Rental Outlets</h5>
              </div>
              <div className="repairShop">
                <img src={icon5} alt="icon5" />
                <h5>75 Repair Shops</h5>
              </div>
            </div>
          </div>
        </div>
        <PlanTrip />
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
    </div>
  );
};

export default About;
