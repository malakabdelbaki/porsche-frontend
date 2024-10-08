import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', {
        username,
        password,
      });

      const { token, msg, userID, type } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userID', userID);
        localStorage.setItem('type', type);

        setErrorMsg(msg);
        navigate('/')
        // You can redirect the user to another page or perform other actions upon successful login
      } else {
        setErrorMsg(msg);
      }
    } catch (error) {
      console.error('Error occurred during login:', error.message);
      setErrorMsg('Error occurred during login. Please try again later.');
    }
  }; 


  return (
    <div className='loginbody'>
      <Navbar />
    <div className="loginContainer">
      <h2>Login</h2>
      <div className="errorMsg">{errorMsg}</div>
      <div className="inputContainer">
        <label className="label">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="inputContainer">
        <label className="label">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin} className="login_button">Login</button>
    </div>
  </div>
  );
  
  

 
}

export default Login;
