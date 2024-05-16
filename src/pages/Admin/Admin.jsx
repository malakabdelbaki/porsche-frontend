
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Admin.css'

const Admin = () => {
  return (
    <div className="product">
      <h2> What would you like to do?</h2>
          <br />
          <Link to='create'>
          <button>Create a new product</button>
          </Link>
          <br />
          <Link to='delete'>
           <button>Update a product</button>
           </Link>
           <br />
           <Link to='update'>
          <button> Delete a product</button>
          </Link>
    </div>

  )
}

export default Admin
