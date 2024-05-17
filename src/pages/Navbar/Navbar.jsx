import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const type = localStorage.getItem('type');
  return (
<div className="nav">
          <div>
          <img src={logo} className='logo' alt="Porsche" />
          </div>
          <ul className="nav-menu">
            <Link to="/">
            <li className="nav-button">Home</li>
            </Link>
            <Link to='/register'>
            <li className="nav-button">Register</li>
            </Link>
            <Link to='/login'>
            <li className="nav-button">Login</li>
            </Link>
            <Link to='/home'>
            <li className="nav-button">Explore</li>
            </Link>
           { type=='customer' && (
           <Link to ='/cart'>
            <li className="nav-button">Cart</li>
            </Link>
            )}
            {type == 'admin' && (
          <Link to='/admin'>
            <li className="nav-button">Admin</li>
          </Link>
        )}
          </ul>
</div>
  );
}

export default Navbar
