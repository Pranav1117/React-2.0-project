import React from "react";
import "../Logo/logo.css";
import "../../icon/Menu_icon_icon-icons.com_71858.png";
const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <div className="the">The</div>
        <div className="siren">Siren</div>
        <img
          className="menu-icon"
          src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Logo;
