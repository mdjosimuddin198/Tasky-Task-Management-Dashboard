import React from "react";
import { Navigate } from "react-router-dom";

const HomeRedirect = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default HomeRedirect;
