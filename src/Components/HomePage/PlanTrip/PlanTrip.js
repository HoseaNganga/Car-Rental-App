import React from "react";
import icon1 from "../../../ImageAssests/plan/icon1.png";
import icon2 from "../../../ImageAssests/plan/icon2.png";
import icon3 from "../../../ImageAssests/plan/icon3.png";
import "./PlanTrip.css";

const PlanTrip = () => {
  return (
    <div className="planTrip">
      <h3>Plan your trip now</h3>
      <p className="boldStyle">quick & easy car rental</p>
      <div className="flexIcons">
        <div className="icon">
          <div className="img">
            <img src={icon1} alt="icon1.png" />
          </div>
          <h4> Select Car</h4>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="icon">
          <div className="img">
            <img src={icon2} alt="icon2.png" />
          </div>
          <h4> Contact Operator</h4>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="icon">
          <div className="img">
            <img src={icon3} alt="icon3.png" />
          </div>
          <h4> Let's Drive</h4>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
