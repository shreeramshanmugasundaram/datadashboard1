import React from "react";
import "./Nav.css";
import Magna from "../../Images/magna.svg";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="Nav__warpper">
      <div className="Logo">
        <img src={Magna} alt="MagnaLogo" />
      </div>
      <NavLink to="/">Pie Chart</NavLink>
      <NavLink to="/bar">Bar Chart</NavLink>
    </div>
  );
};

export default NavBar;
