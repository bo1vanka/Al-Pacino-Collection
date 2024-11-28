import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MovieDetails from "../pages/MovieDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie-details" element={<MovieDetails />} /> 
    </Routes>
  );
};

export default AppRoutes;
