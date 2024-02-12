import { useState } from "react";
import "./RentalFleet.css";
import FleetArray from "../FleetArray/FleetArray";

const RentalFleet = () => {
  const myFleet = FleetArray();
  const [selectedCar, setSelectedCar] = useState(null);
  const handleCarSelect = (carId) => {
    const car = myFleet.find((car) => car.id === carId);
    setSelectedCar(car);
  };
  return (
    <div className="rentalFleet">
      <h3>Vehicle Models</h3>
      <p className="styleBold">Our rental fleet</p>
      <p>
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className="flexFleetContainer">
        <div className="buttonContainer">
          {Array.from(myFleet).map((val) => (
            <div className="btnDiv" key={val.id}>
              <button onClick={() => handleCarSelect(val.id)} key={val.id}>
                {val.name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
        <div className="tableFlex">
          <div className="imageContainer">
            {selectedCar && (
              <img src={selectedCar.img} alt={selectedCar.name} />
            )}
          </div>
          <div className="tableDescription">
            <table border="1">
              <thead>
                <tr>
                  <td colSpan="2">
                    ${selectedCar ? selectedCar.rent : ""}/rent per Day
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Model</td>
                  <td>{selectedCar ? selectedCar.model : ""}</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>{selectedCar ? selectedCar.mark : ""}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{selectedCar ? selectedCar.year : ""}</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td>{selectedCar ? selectedCar.doors : ""}</td>
                </tr>
                <tr>
                  <td>Ac</td>
                  <td>{selectedCar ? selectedCar.AC : ""}</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td>{selectedCar ? selectedCar.Transmission : ""}</td>
                </tr>
                <tr>
                  <td>Fuel</td>
                  <td>{selectedCar ? selectedCar.Fuel : ""}</td>
                </tr>
              </tbody>
            </table>
            <button className="reserveBtn">
              <a href="#book">Reserve</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalFleet;
