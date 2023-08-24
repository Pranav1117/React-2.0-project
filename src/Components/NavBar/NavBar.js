import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../Logo/logo.css";
function NavBar({ closeNav }) {
  // const handleClick = () => {
  //   showFunc(false);
  // };

  return (
    <>
      <div className="a1">
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

      <div className="mobile1">
        <div className="navbar-container">
          <Link to="/" className="navbar">
            Home
          </Link>
          <Link to="/bollywood" className="navbar" onClick={closeNav}>
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
