import Cookies from "js-cookie";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const UserRoutes = () => {
  return Cookies.get("isLoggedIn") ? <Outlet /> : <Navigate to="/" />;
};

export default UserRoutes;
