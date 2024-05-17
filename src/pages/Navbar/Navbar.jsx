import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [type, setType] = useState('customer');
  useEffect(()=>{
    setType(localStorage.getItem('type'));
  },[])

  function handleLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    setType(null);
    window.location.reload()
  }

  return (
<div className="nav">
          <div>
          <img src={logo} className='logo' alt="Porsche" />
          </div>
          <ul className="nav-menu">
            <Link to="/">
            <li className="nav-button">Home</li>
            </Link>
            
            {!type && (
              <>
              <Link to='/register'>
            <li className="nav-button">Register</li>
            </Link>
            <Link to='/login'>
            <li className="nav-button">Login</li>
            </Link>
            </>
            )}
            
            
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
        {type && (
              <li onClick={()=>handleLogout()} className="nav-button">Logout</li>
            )}
          </ul>
</div>
  );
}

export default Navbar
