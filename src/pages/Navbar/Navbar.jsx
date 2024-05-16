import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
<div className="nav">
          <div>
          <img src={logo} className='logo' alt="Porsche" />
          </div>
          <ul className="nav-menu">
            <Link to='register'>
            <li className="nav-button">Register</li>
            </Link>
            <Link to='login'>
            <li className="nav-button">Login</li>
            </Link>
            <Link to='home'>
            <li className="nav-button">Explore</li>
            </Link>
            <Link to = 'cart'>
            <li className="nav-button">Cart</li>
            </Link>
          </ul>
        </div>
  );
}

export default Navbar
