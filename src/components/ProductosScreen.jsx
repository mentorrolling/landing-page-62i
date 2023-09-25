import React from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import imagen from "../assets/03.jpg";

const ProductosScreen = ({ darkMode }) => {
  return (
    <>
      {productos.map((item) => (
        <div className="col  mb-3" key={item.id}>
          <div className={`card h-100 ${darkMode && "text-bg-dark"}`}>
            <img src={imagen} className="card-img-top" alt="robots" />
            <div className="card-body">
              <h5 className="card-title">{item.producto}</h5>
              <p className="card-text">{item.detalle}</p>
            </div>
            <div className="card-footer">
              <Link className="nav-link" to={`/product/${item.id}`}>
                Ver más...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductosScreen;
