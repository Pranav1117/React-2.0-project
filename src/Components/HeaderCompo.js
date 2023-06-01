import React from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import { useState } from "react";
import "./Logo/logo.css";
const HeaderCompo = () => {
  return (
    <div>
      <Logo />
      <NavBar />
      <img
        className="menu-icon"
        src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
        alt="logo"
      />
    </div>
  );
};

export default HeaderCompo;
