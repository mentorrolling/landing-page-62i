import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-secondary" : ""}>
      <NavBar darkMode={darkMode} changeMode={changeMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen darkMode={darkMode} />} />
          <Route
            path="/contact"
            element={<ContactScreen darkMode={darkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
