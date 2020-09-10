import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ handleHomepageRegister }) {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="signout">
        <div onClick={handleHomepageRegister} className="signout-label">
          Sign out
        </div>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default NavBar;
