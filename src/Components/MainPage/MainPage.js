import React from "react";
import NavBar from "../HomePage/NavBar/NavBar";
import BookRide from "../HomePage/BookRide/BookRide";
import BookForm from "../HomePage/BookForm/BookForm";
import PlanTrip from "../HomePage/PlanTrip/PlanTrip";
import RentalFleet from "../HomePage/RentalFleet/RentalFleet";
import Save from "../HomePage/Save/Save";
import ChooseUs from "../HomePage/ChooseUs/ChooseUs";
import HomeTestimonials from "../HomePage/HomeTestimonials/HomeTestimonials";
import Faq from "../HomePage/Faq/Faq";
import DownloadApp from "../HomePage/DownloadApp/DownloadApp";
import Footer from "../HomePage/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <BookRide />
      <BookForm />
      <PlanTrip />
      <RentalFleet />
      <Save />
      <ChooseUs />
      <HomeTestimonials />
      <Faq />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default MainPage;
