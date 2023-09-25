import React from "react";
import CardApp from "../components/CardApp";
import Carousel from "../components/Carousel";
import { detalleCard } from "../data/info";
import ProductosScreen from "../components/ProductosScreen";

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
        <div className="mt-3">
          <h3>Productos</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4">
          <ProductosScreen darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
