import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from '../assets/LOGO.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
        <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;