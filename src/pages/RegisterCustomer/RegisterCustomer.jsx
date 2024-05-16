import React, { useState } from 'react';
import axios from 'axios';
import './RegisterCustomer.css';
import Navbar from '../Navbar/Navbar';

const RegisterCustomer = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    DOB: '',
    city: '',
    state: '',
    streetAddress: ''
  });

  const { username, email, password, DOB, city, state, streetAddress } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        username,
        email,
        password,
        DOB,
        city,
        state,
        streetAddress
      };

      const response = await axios.post('http://localhost:3000/api/v1/registerCustomer', body);

      console.log('Registration successful:', response.data);
      // Optionally, you can redirect the user to a different page or show a success message
    } catch (error) {
      console.error('Registration failed:', error); // Log the entire error object
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
    <div className="register">

    
    <div className="register-container">
      <h2 className="register-heading">Sign in</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username" className="label">Username</label>
          <input type="text" id="username" className="input-field" placeholder="Enter your username" name="username" value={username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" id="email" className="input-field" placeholder="Enter your email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" className="input-field" placeholder="Enter your password" name="password" value={password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="DOB" className="label">Date of Birth</label>
          <input type="text" id="DOB" className="input-field" placeholder="YYYY-MM-DD" name="DOB" value={DOB} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="label">City</label>
          <input type="text" id="city" className="input-field" placeholder="Enter your city" name="city" value={city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="label">State</label>
          <input type="text" id="state" className="input-field" placeholder="Enter your state" name="state" value={state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress" className="label">Street Address</label>
          <input type="text" id="streetAddress" className="input-field" placeholder="Enter your street address" name="streetAddress" value={streetAddress} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegisterCustomer;
