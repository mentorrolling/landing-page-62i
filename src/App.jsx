import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import ErrorScreen from "./views/ErrorScreen";
import AdminScreen from "./views/AdminScreen";
import LoginScreen from "./views/LoginScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [estadoLogin, setEstadoLogin] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-secondary" : ""}>
      <BrowserRouter>
        <NavBar
          darkMode={darkMode}
          changeMode={changeMode}
          estadoLogin={estadoLogin}
        />
        <Routes>
          <Route path="/" element={<HomeScreen darkMode={darkMode} />} />
          <Route
            path="/login"
            element={<LoginScreen setEstadoLogin={setEstadoLogin} />}
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoutes estadoLogin={estadoLogin}>
                <AdminScreen darkMode={darkMode} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/contact"
            element={<ContactScreen darkMode={darkMode} />}
          />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
