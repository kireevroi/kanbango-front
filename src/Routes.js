import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import AppHome from "./components/AppHome";
import PrivateRoute from "./PrivateRoute";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<PrivateRoute><AppHome /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}