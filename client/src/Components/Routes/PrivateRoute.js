import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  // const location=useLocation();
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;