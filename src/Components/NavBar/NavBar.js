import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../Logo/logo.css";
function NavBar({ showFunc }) {
  // const handleClick = () => {
  //   showFunc(false);
  // };

  return (
    <>
      <div className="a">
        <div className="navbar-container">
          <Link to="/" className="navbar">
            Home
          </Link>
          <Link to="/bollywood" className="navbar">
            Bollywood
          </Link>
          <Link to="/hollywood" className="navbar">
            Hollywood
          </Link>
          <Link to="/fitness" className="navbar">
            Fitness
          </Link>
          <Link to="/technology" className="navbar">
            Technology
          </Link>
          <Link to="/gaming" className="navbar">
            Gaming
          </Link>
        </div>
      </div>
      <div className="navbar-line"></div>

      <div className="mobile">
        <div className="navbar-container">
          <Link to="/" className="navbar">
            Home
          </Link>
          <Link to="/bollywood" className="navbar">
            Bollywood
          </Link>
          <Link to="/hollywood" className="navbar">
            Hollywood
          </Link>
          <Link to="/fitness" className="navbar">
            Fitness
          </Link>
          <Link to="/technology" className="navbar">
            Technology
          </Link>
          <Link to="/gaming" className="navbar">
            Gaming
          </Link>
        </div>
      <div className="navbar-line"></div>
      </div>
    </>
  );
}
export default NavBar;
