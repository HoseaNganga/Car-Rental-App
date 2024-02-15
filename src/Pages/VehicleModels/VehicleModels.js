import React from "react";
import VehicleModelsArray from "./VehicleModelsArray/VehicleModelsArray";
import "./VehicleModels.css";
import { Link } from "react-router-dom";
import { FaMobileScreen } from "react-icons/fa6";
import Footer from "../../Components/HomePage/Footer/Footer";

const VehicleModels = () => {
  const myVehicles = VehicleModelsArray();
  return (
    <div className="vehicleModelsContainer">
      <div className="backgroundContainer">
        <div className="backgroundContainerHeader">
          <h2>Vehicle Models</h2>
        </div>
      </div>
      <ul className="vehiclesContainer">
        {myVehicles.map((val) => (
          <li className="vehicleBox" key={val.id}>
            <div className="vehicleImage">
              <img src={val.image} alt={val.name} />
            </div>
            <div className="vehicleDescription">
              <div className="flexVehicle1">
                <h2>{val.name}</h2>
                <p>{val.stars.map((star) => star)}</p>
                <p>
                  {val.icon} {val.mark}
                </p>
                <p>
                  {val.icon} {val.transmission}
                </p>
              </div>
              <div className="flexVehicle2">
                <h2>${val.rent}</h2>
                <p className="styleRent">per Day</p>
                <p>{val.icon}</p>
                <p>
                  {val.icon} {val.fuel}
                </p>
              </div>
            </div>
            <div className="coverBtn">
              <div className="vehicleBookBtn">
                <Link to={"/"}>Book Ride</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
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

export default VehicleModels;
