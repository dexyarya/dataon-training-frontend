import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const roles = localStorage.getItem("roles");
  if (roles === "ROLE_ADMIN" || roles === "ROLE_USER") {
    return true;
  } else {
    return false;
  }
};
const ProtectedRoute = () => {
  const auth = useAuth();
  return !auth ? <Navigate to="dashboard" /> : <Outlet />;
};

export default ProtectedRoute;
