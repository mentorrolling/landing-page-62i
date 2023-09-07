import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const generarInforme = () => {
//   return new Promise((resolve, reject) => {
//     let informe = null;
//     setTimeout(() => {
//       informe = true;
//       if (informe) {
//         resolve("Recibimos el informe 😍");
//       } else {
//         reject("ERROR!!😭");
//       }
//     }, 2000);
//   });
// };

// generarInforme()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.log(error));

//HTTP

//GET Traer información del server
//POST guardar información en el server
//PUT Actualizar infromación en el server
//DELETE Borrar datos del server

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat=-26,78&lon=-65,23&units=metric&appid=e3e500cbb8977b4c121b9a50e5f059a1"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ASYNC

// const obtenerClima = async () => {
//   const response = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=-26,78&lon=-65,23&units=metric&appid=e3e500cbb8977b4c121b9a50e5f059a1"
//   );
//   const data = await response.json();

//   return data;
// };

// obtenerClima().then((respuesta) => {
//   const { main } = respuesta;
//   console.log(main);
// });
