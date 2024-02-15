import React from "react";
import TeamPageArray from "./TeamPageArray/TeamPageArray";
import Footer from "../../Components/HomePage/Footer/Footer";
import { FaMobileScreen } from "react-icons/fa6";
import "./TeamPage.css";

const TeamPage = () => {
  const myTeam = TeamPageArray();

  return (
    <div className="teamContainer">
      <div className="backgroundContainer">
        <div className="backgroundContainerHeader">
          <h2>Our Team</h2>
        </div>
      </div>
      <ul className="teamContainerList">
        {myTeam.map((val) => (
          <li className="teamMember" key={val.id}>
            <div className="memberImageContainer">
              <img src={val.image} alt={val.name} />
            </div>
            <h2>{val.name}</h2>
            <p>{val.position}</p>
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

export default TeamPage;
