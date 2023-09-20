import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, estadoLogin }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  //   if (user == "admin@gmail.com") {
  if (estadoLogin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
