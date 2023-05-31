import React from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import { useState } from "react";
const HeaderCompo = () => {
  const [show, setShow] = useState(true);

  const handleNavbar = () => {
    setShow(!show);
  };
  return (
    <div>
      <Logo func={handleNavbar} />
      {show && <NavBar />}
    </div>
  );
};

export default HeaderCompo;
