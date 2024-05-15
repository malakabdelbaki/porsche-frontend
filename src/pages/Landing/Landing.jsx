import React, { useEffect, useState } from 'react'
import Background from './Background/Background';
import Navbar from '../Navbar/Navbar';

import './Landing.css'
const Landing = () => {
  const [cnt, setCnt] = useState(0);

  const handleChangeCount = ()=>{
    console.log(cnt);
    if(cnt>=3){
      setCnt(0);
    }
    else{
      setCnt((cnt)=>cnt+1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeCount();
    }, 5000);
    return () => clearInterval(interval);
  }, [cnt]);
  
  return (
    <div>
      <Navbar />
      <Background cnt = {cnt} />
    </div>
  )
}

export default Landing;