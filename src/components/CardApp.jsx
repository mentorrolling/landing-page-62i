import React from "react";
import "../css/card.css";

const CardApp = ({ item, darkMode }) => {
  console.log(item);
  return (
    <div className="col-12 col-md">
      <div className={`card h-100 ${darkMode && "bg-dark"}`}>
        <div className="card-body d-flex flex-column align-items-center">
          <i
            className={`fa ${item.icono} fa-4x text-primary`}
            aria-hidden="true"
          ></i>
          <p className="text-muted fs-3 fs-md-2">{item.texto1}</p>
          <p className="text-muted">{item.texto2}</p>
        </div>
      </div>
    </div>
  );
};

export default CardApp;
