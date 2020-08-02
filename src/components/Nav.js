import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={logo} alt="" className="nav__logo" />
      <img src={avatar} alt="" className="nav__avatar" />
    </div>
  );
}

export default Nav;
