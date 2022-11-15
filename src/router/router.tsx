import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const NotFound = lazy(() => import("src/components/NotFound"));

const Home = () => {
  return (
    <div>
      <h2>Maneno</h2>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
};

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate replace to="/404" />} />
  </Routes>
);

export default AppRouter;
