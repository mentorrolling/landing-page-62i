import { detalleCard } from "./data/info";

import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import CardApp from "./components/CardApp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <NavBar darkMode={darkMode} changeMode={changeMode} />
      {/* navbar
      carousel */}
      <Carousel />
      <div className="container">
        <div className="row mt-5 pb-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
