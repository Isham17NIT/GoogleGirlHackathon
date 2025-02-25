import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MediScan AI</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
