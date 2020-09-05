import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="signout">
        <div className="signout-label">Sign out</div>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default NavBar;
