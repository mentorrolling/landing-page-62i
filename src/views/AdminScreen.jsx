import React from "react";
import NewProductApp from "../components/NewProductApp";

const AdminScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Administrador 👍</h1>
          <NewProductApp></NewProductApp>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
