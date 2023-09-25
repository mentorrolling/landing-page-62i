import React, { useState } from "react";

const CardBuyApp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="col-12 col-md-4 offset-md-2 mb-3">{/* Tarjeta  */}</div>
      <div className="col-12 col-md-4">
        <form onSubmit="">
          <input
            type="tel"
            name="number"
            className="form-control"
            placeholder="Número de Tarjeta"
            value=""
            onChange=""
            onFocus=""
          />
          <div className="my-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre del titular"
              required
              value=""
              onChange=""
              onFocus=""
            />
          </div>
          <div className="d-flex gap-2 mb-3">
            <input
              type="tel"
              name="expiry"
              max={"4"}
              value=""
              className="form-control"
              placeholder="Fecha de vencimiento"
              required
              onChange=""
              onFocus=""
            />
            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              required
              value=""
              onChange=""
              onFocus=""
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-success">Pagar</button>
          </div>
        </form>
        {showMessage && (
          <div className="mt-3">
            <div className="alert alert-success" role="alert">
              El pago está siendo procesado, en breve recibirá la respuesta😉
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardBuyApp;
