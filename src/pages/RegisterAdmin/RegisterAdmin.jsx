import React, { useState } from 'react';
import axios from 'axios';
import './RegisterAdmin.css';
import Navbar from '../Navbar/Navbar';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    
  });

  const { username, email, password } = formData;

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
      };

      const response = await axios.post('http://localhost:3000/api/v1/registerAdmin', body);

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
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
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
        
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterAdmin;

