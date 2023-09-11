import React from "react";

const NavBar = ({ darkMode, changeMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
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
            <li className="nav-item">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onChange={changeMode}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
