import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./home";
import UploadPage from "./upload";
import Navbar from "./navbar";
import AboutPage from "./about";
import "./App.css";
// hh
const AnimatedRoutes = () => {
  return (
    <div className="app-container">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload/:type" element={<UploadPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
