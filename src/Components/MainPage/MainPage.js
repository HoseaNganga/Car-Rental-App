import React from "react";
import NavBar from "../HomePage/NavBar/NavBar";
import BookRide from "../HomePage/BookRide/BookRide";
import BookForm from "../HomePage/BookForm/BookForm";
import PlanTrip from "../HomePage/PlanTrip/PlanTrip";
import RentalFleet from "../HomePage/RentalFleet/RentalFleet";
import Save from "../HomePage/Save/Save";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <BookRide />
      <BookForm />
      <PlanTrip />
      <RentalFleet />
      <Save />
    </>
  );
};

export default MainPage;
