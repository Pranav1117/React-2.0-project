import React, { useState } from "react";
import "../Logo/logo.css";
import "../../icon/Menu_icon_icon-icons.com_71858.png";
import NavBar from "../NavBar/NavBar";
const Logo = (props) => {
  console.log(props);
  return (
    <>
      <div className="logo-container">
        <div className="the">The</div>
        <div className="siren">Siren</div>
        <img
          className="menu-icon"
          onClick={props.func}
          src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
          alt="logo"
        />
      </div>
      <hr className="below-logo-hr" />
    </>
  );
};

export default Logo;
