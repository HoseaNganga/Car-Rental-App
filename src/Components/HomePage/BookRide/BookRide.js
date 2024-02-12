import React from "react";
import heroCar from "../../../ImageAssests/hero/main-car.png";
import "./BookRide.css";

const BookRide = () => {
  return (
    <div className="bookTrip">
      <div className="bookTripDescription">
        <h3>Plan your trip now</h3>
        <p className="boldEl">
          Save <span>big</span> with our car rental{" "}
        </p>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="bookTripLinks">
          <div className="bookride">
            <a href="#book">Book Ride</a>
          </div>
          <div className="learnmore">
            <a href="/">Learn More</a>
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
