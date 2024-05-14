import React, { useState } from 'react'


import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
<div className="nav">
          <div>
          <img src={logo} className='logo' alt="Porsche" />
          </div>
          <ul className="nav-menu">
            <li className="nav-button">Home</li>
            <li className="nav-button">Register</li>
            <li className="nav-button">Login</li>
            <li className="nav-button">Explore</li>
            <li className="nav-button">Cart</li>
          </ul>
        </div>
  );
}

export default Navbar
