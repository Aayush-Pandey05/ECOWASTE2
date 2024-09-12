import React from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="nav">
      <nav class="navbar navbar-container">
        <div class="icon">
          <a href="index.html" class="navbar-logo">
            <img src={assets.logo} alt="" />
          </a>
        </div>
        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
