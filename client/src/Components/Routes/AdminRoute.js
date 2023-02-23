import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  // const location=useLocation();
  const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin == "true" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;