import { useState, useEffect } from "react";
import obtenerClima from "../helpers/obtener-clima";
import "../css/navbar.css";
const NavBar = ({ darkMode, changeMode }) => {
  const [tiempo, setTiempo] = useState(null);

  //Cuando se monta el componente
  useEffect(() => {
    clima();
  }, []);

  //funcion que devuelva el clima según nuestra ubicación
  const clima = () => {
    //Obtener mis coordenadas
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;
      //llamar a la función obtenerClima y obtener los datos
      obtenerClima(lat, long)
        .then((resultado) => {
          const { main, weather } = resultado;

          setTiempo({
            temp: main.temp,
            clima: weather[0],
          });
        })
        .catch((error) => console.log(error));
    });

    //guardar esos datos en el estado
  };

  return (
    <div className="sticky-top">
      <nav
        className={`navbar navbar-expand-lg  ${
          darkMode ? "bg-dark navbar-dark" : "bg-body-tertiary"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fa fa-ravelry" aria-hidden="true"></i>
            Kindel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            {tiempo ? (
              <div className="d-flex gap-2 align-items-center justify-content-center me-2">
                <img
                  src={`https://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
                  alt={tiempo.clima.description}
                  className="icon-tiempo bg-dark"
                  title={tiempo.clima.description}
                />
                <span>{Math.round(tiempo.temp)}°C</span>
              </div>
            ) : (
              <div className="spinner-border me-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={changeMode}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
