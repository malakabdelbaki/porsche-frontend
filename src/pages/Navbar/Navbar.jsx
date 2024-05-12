import React, { useState } from 'react'

import './Navbar.css'
const Navbar = () => {
  return (
    
<div className="nav">
          <div>
          <img src={logo} alt="Logo" />
          </div>
          <ul className="nav-menu">
            <li className="nav-button">Home</li>
            <li  className="nav-button">Explore</li>
            <li  className="nav-button">Cart</li>
          </ul>
        </div>
  )
}

export default Navbar
