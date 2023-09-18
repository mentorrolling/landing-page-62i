import React from "react";
import CardApp from "../components/CardApp";
import Carousel from "../components/Carousel";
import { detalleCard } from "../data/info";

const HomeScreen = ({ darkMode }) => {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row mt-5 pb-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
