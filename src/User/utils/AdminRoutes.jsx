import Cookies from "js-cookie";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoutes = () => {
  return (Cookies.get("isLoggedIn") && Cookies.get("isAdmin")) ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
