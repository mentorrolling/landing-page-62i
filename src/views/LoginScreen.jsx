import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ setEstadoLogin }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.removeItem("user");
    setEstadoLogin(false);
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.name);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  //   const cosas = ["Papeles", "Computadoras", "Mesas"];

  //   const cosasNuevas = [];

  //   cosasNuevas = cosas;

  //   //operador spread
  //   cosasNuevas = [...cosas, "sillas", "vasos"];
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "admin@gmail.com" && password == "12345678") {
      localStorage.setItem("user", JSON.stringify(email));
      setEstadoLogin(true);
      navigate("/admin");
    } else {
      alert("Correo y contraseña incorrectos 😭");
    }
  };

  return (
    <div className="container vh-100">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 bg-light p-3 rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 d-grid">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
