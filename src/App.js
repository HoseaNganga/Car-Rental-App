import {
  MainPage,
  About,
  VehicleModels,
  TestimonialPage,
  TeamPage,
  ContactPage,
} from "./Pages/ImportPage";
import { NavBar } from "./Components/HomePage/Import";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehiclemodels" element={<VehicleModels />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
