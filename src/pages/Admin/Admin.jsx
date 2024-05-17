
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Admin.css'
import Navbar from '../Navbar/Navbar';

const Admin = () => {
  return (
    <div>
      <Navbar />
      <main className='background'>
    <div className="controller">
      <div className='question'> What would you like to do today?</div>
        <div className='admin_buttons'>

        
          <br />
          <Link to='create'>
          <button>Create a new product</button>
          </Link>
          <Link to='update'>
           <button>Update a product</button>
           </Link>
           <Link to='delete'>
          <button> Delete a product</button>
          </Link>
          </div>
    </div>
    </main>
</div>
  )
}

export default Admin
