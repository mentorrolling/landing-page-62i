import React, { useEffect, useState } from "react";

import imagen from "../assets/02.jpg";

const BuyScreen = ({ darkMode }) => {
  const precio = 600;
  const [total, setTotal] = useState(precio);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    setTotal(precio * inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-8 offset-md-2">
            <div className={`card ${darkMode && "text-bg-dark"} mb-3`}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={imagen}
                    className="img-fluid rounded-start h-100 object-fit-cover"
                    alt="robot kindel"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Robot Kindel</h5>
                    <p className="card-text">
                      Robot autómata entrenado con IA. El paquete viene con
                      accesorios y manuales de uso, también con una garantía
                      extendida.
                    </p>
                    <h4>Precio: $600</h4>
                    <div className="col-12 col-md-6 offset-md-6 d-flex flex-column align-items-end">
                      <input
                        type="number"
                        className="form-control"
                        min={1}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <h4>Total: ${total}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">{/* Sección de pago con tarjeta  */}</div>
      </div>
    </>
  );
};

export default BuyScreen;
