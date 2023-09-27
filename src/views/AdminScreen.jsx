import React from "react";
import Registroapp from "../components/Registroapp";

const AdminScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Administrador 👍</h1>
          <h2>Nuevo producto</h2>
          <Registroapp></Registroapp>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
