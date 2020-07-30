import React from 'react'
import logo from '../../images/logo.png';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="signout">
        <div>Sign out</div>
        <span className="line"></span>
      </div>
    </nav>
  )
}

export default NavBar
