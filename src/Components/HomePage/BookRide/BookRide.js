import React from "react";
import heroCar from "../../../ImageAssests/hero/main-car.png";
import { FaCircleCheck } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import "./BookRide.css";

const BookRide = () => {
  return (
    <div className="bookTrip">
      <div className="bookTripDescription">
        <h3>Plan your trip now</h3>
        <h4 className="boldEl">
          Save <span>big</span> with our car rental{" "}
        </h4>
        <h5>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </h5>
        <div className="bookTripLinks">
          <div className="bookride">
            <a href="#book">
              Book Ride <FaCircleCheck />{" "}
            </a>
          </div>
          <div className="learnmore">
            <a href="/">
              Learn More <FaAnglesRight />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="bookTripImg">
        <img src={heroCar} alt="hero car" />
      </div>
    </div>
  );
};

export default BookRide;
