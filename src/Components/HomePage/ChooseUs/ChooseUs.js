import React from "react";
import icon1 from "../../../ImageAssests/chooseUs/icon1.png";
import icon2 from "../../../ImageAssests/chooseUs/icon2.png";
import icon3 from "../../../ImageAssests/chooseUs/icon3.png";
import { FaAngleRight } from "react-icons/fa6";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="chooseUsDiv">
      <div className="chooseUsHeader">
        <h2>Why Choose Us</h2>
        <h3 className="styleEl"> Best valued deals you will ever find</h3>
        <p>
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big.
        </p>
        <button className="detailsBtn">
          <a href="#book">
            Find Details <FaAngleRight />
          </a>
        </button>
      </div>
      <div className="chooseUsBody">
        <div className="ChooseUsflexDiv">
          <div className="chooseUsIcon">
            <img src={icon1} alt="icon 1" />
          </div>
          <div className="chooseUsDescription">
            <h3>Cross Country Drive</h3>
            <p>
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </p>
          </div>
        </div>
        <div className="ChooseUsflexDiv">
          <div className="chooseUsIcon">
            <img src={icon2} alt="icon 2" />
          </div>
          <div className="chooseUsDescription">
            <h3>All Inclusive Pricing</h3>
            <p>
              Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy.
            </p>
          </div>
        </div>
        <div className="ChooseUsflexDiv">
          <div className="chooseUsIcon">
            <img src={icon3} alt="icon 3" />
          </div>
          <div className="chooseUsDescription">
            <h3>No Hidden Charges</h3>
            <p>
              Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
