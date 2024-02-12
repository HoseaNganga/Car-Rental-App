import React from "react";
import { FaCarSide } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import "./BookForm.css";

const BookForm = () => {
  return (
    <form id="book">
      <h2>Book a Car</h2>
      <div className="flexContainer">
        <div className="selectCarType">
          <label htmlFor="carType">
            Select Your Car Type <FaCarSide />
          </label>
          <select id="carType" required>
            <option value="">Select your car Type</option>
            <option value="Audi">Audi A1 S-Line</option>
            <option value="Golf">VW Golf 6</option>
            <option value="Toyota">Toyota Camry</option>
            <option value="Bmw">BMW 320 ModernLine</option>
            <option value="Mercedes">Mercedes Benz GLK</option>
            <option value="Passat"> VW Passat</option>
          </select>
        </div>
        <div className="locationSelect">
          <label htmlFor="location">
            Pick-Up <FaLocationPin />{" "}
          </label>
          <select id="location" required>
            <option value="">Select your car Location</option>
            <option value="Rus">Belgrade</option>
            <option value="Ke">Kenya</option>
            <option value="Na">Nairobi</option>
            <option value="Thi">Thika</option>
            <option value="Mom">Mombasa</option>
          </select>
        </div>
        <div className="dropoffSelect">
          <label htmlFor="dropOff">
            Pick-Up <FaLocationPin />{" "}
          </label>
          <select id="dropOff" required>
            <option value="">Select your Drop-Off</option>
            <option value="Rus">Belgrade</option>
            <option value="Ke">Kenya</option>
            <option value="Na">Nairobi</option>
            <option value="Thi">Thika</option>
            <option value="Mom">Mombasa</option>
          </select>
        </div>
        <div className="datePickUp">
          <label htmlFor="datepick-up">
            Pick-up Date <FaCalendar />{" "}
          </label>
          <input type="date" id="datepick-up" required />
        </div>
        <div className="dateDropOff">
          <label htmlFor="datedrop-off">
            Drop-Off <FaCalendar />{" "}
          </label>
          <input type="date" id="datedrop-off" required />
        </div>
        <div className="btn">
          <button className="searchBtn">Search</button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
