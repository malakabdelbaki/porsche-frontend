import React, { useEffect, useState } from 'react'
import Background from './Background/Background';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero/Hero';

import './Landing.css'
const Landing = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCnt((cnt) => cnt === 4 ? 0 : cnt + 1);
      console.log(cnt);
    }, 5000);
  }, []);
  
  return (
    <div>
      <Navbar />
      <Background cnt = {cnt} />
    </div>
  )
}

export default Landing;