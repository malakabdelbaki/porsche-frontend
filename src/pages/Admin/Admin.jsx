import React, { useState } from 'react';
import axios from 'axios';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    department: ''
  });

  const { username, password, department } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ username, password, department });

      const res = await axios.post('/api/v1/registerAdmin', body, config);

      console.log(res.data); // Log response from the server

      // Handle any other actions after successful registration
    } catch (err) {
      console.error(err.response.data); // Log error response from the server
    }
  };

  return (
    <div>
      <h1>Register Admin</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type='text'
            name='department'
            value={department}
            onChange={e => onChange(e)}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegisterAdmin;
