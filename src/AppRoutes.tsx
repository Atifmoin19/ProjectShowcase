import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="">
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
