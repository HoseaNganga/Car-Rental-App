import audi from "../../../ImageAssests/cars-big/audia1.jpg";
import benz from "../../../ImageAssests/cars-big/benz.jpg";
import bmw from "../../../ImageAssests/cars-big/bmw320.jpg";
import golf from "../../../ImageAssests/cars-big/golf6.jpg";
import passat from "../../../ImageAssests/cars-big/passatcc.jpg";
import camry from "../../../ImageAssests/cars-big/toyotacamry.jpg";
const FleetArray = () => {
  const myFleet = [
    {
      id: 1,
      model: "Audi",
      name: "AUDI A1 S-LINE",
      mark: "A1",
      year: 2012,
      doors: "4",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Gasoline",
      rent: 45,
      img: audi,
    },
    {
      id: 2,
      model: "Golf 6",
      name: "VW GOLF 6",
      mark: "Volkswagen",
      year: 2008,
      doors: "4",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Diesel",
      rent: 37,
      img: golf,
    },
    {
      id: 3,
      model: "320",
      name: "BMW 320 MODERNLINE",
      mark: "Bmw",
      year: 2012,
      doors: "4",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Diesel",
      rent: 35,
      img: bmw,
    },
    {
      id: 4,
      model: "Camry",
      name: "Toyota Camry",
      mark: "Toyota",
      year: 2006,
      doors: "4",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Hybrid",
      rent: 37,
      img: camry,
    },
    {
      id: 5,
      model: "Benz GLK",
      name: "Mercedes Benz-GLK",
      mark: "mercedes",
      year: 2006,
      doors: "4 ",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Diesel",
      rent: 50,
      img: benz,
    },
    {
      id: 6,
      model: "Golf 6",
      name: "VW PASSAT CC",
      mark: "Volkswagen",
      year: 2008,
      doors: "4",
      AC: "Yes",
      Transmission: "Automatic",
      Fuel: "Diesel",
      rent: 25,
      img: passat,
    },
  ];

  return myFleet;
};

export default FleetArray;
