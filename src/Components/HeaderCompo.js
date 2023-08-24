import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import "./Logo/logo.css";
import { useEffect } from "react";

const HeaderCompo = () => {
  const [show, setShow] = useState(true);

  const handleClick = (e) => {
    setShow(!show);
  };

  const [nav, setNav] = useState(false);
  console.log(nav);

  const handleNavClick = () => {
    setNav(true);
    console.log(nav);
  };
  console.log(handleNavClick)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".menu-icon") && show) {
        setShow(false);
      }
    };
    if (show) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);

  return (
    <div>
      <Logo />

      <div className="a">
        { <NavBar />}

        <img
          className="menu-icon"
          onClick={handleClick}
          src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
          alt="logo"
        />
      </div>

      <div className="mobile">
        {show && <NavBar />}
        <img
          className="menu-icon mob"
          onClick={handleClick}
          src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
          alt="logo"
        />
      </div>
    </div>
  );




};

export default HeaderCompo;
