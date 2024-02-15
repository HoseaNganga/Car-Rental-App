import React from "react";
import benz from "../../../ImageAssests/cars-big/benz-box.png";
import audi from "../../../ImageAssests/cars-big/audi-box.png";
import bmw from "../../../ImageAssests/cars-big/bmw-box.png";
import camry from "../../../ImageAssests/cars-big/toyota-box.png";
import golf from "../../../ImageAssests/cars-big/golf6-box.png";
import passat from "../../../ImageAssests/cars-big/passat-box.png";
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";

const VehicleModelsArray = () => {
  const vehicleArray = [
    {
      id: 1,
      name: "Mercedes",
      mark: "Benz-GLK",
      stars: [
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStarHalfStroke />,
      ],
      icon: <FaCarSide />,
      transmission: "manual",
      fuel: "Diesel",
      rent: "50",
      image: benz,
    },
    {
      id: 2,
      name: "BMW 320",
      mark: "Modern-Line",
      stars: [
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStarHalfStroke />,
      ],
      icon: <FaCarSide />,
      transmission: "manual",
      fuel: "Diesel",
      rent: "35",
      image: bmw,
    },
    {
      id: 3,
      name: "VW PASSAT",
      mark: "Passat",
      stars: [
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStarHalfStroke />,
      ],
      icon: <FaCarSide />,
      transmission: "manual",
      fuel: "Diesel",
      rent: "25",
      image: passat,
    },
    {
      id: 4,
      name: "AUDI A1",
      mark: "Audi",
      stars: [
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStarHalfStroke />,
      ],
      icon: <FaCarSide />,
      transmission: "manual",
      fuel: "Diesel",
      rent: "45",
      image: audi,
    },
    {
      id: 5,
      name: "Golf 6",
      mark: "VW",
      stars: [
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStarHalfStroke />,
      ],
      icon: <FaCarSide />,
      transmission: "manual",
      fuel: "Diesel",
      rent: "37",
      image: golf,
    },
    {
      id: 6,
      name: "Camry",
      mark: "Toyota",
      stars: [
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStar />,
        <FaRegStarHalfStroke />,
      ],
      icon: <FaCarSide />,
      transmission: "manual",
      fuel: "Diesel",
      rent: "30",
      image: camry,
    },
  ];
  return vehicleArray;
};

export default VehicleModelsArray;
