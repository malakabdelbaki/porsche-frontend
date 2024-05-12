import React, { useEffect, useState } from 'react'

import './Landing.css'
const Landing = () => {
  let data = [
    {text1:"Elevate your drive", text2:"to a symphony of opulence."},
    {text1:"Indulge in the artistry ", text2:"of automotive luxury."},
    {text1:"Where sophistication meets", text2:"exhilaration on every road."},
    {text1:"Luxury redefined, ", text2:"one mile at a time."},
  ]
  const [cnt, setCnt] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setCnt((cnt)=>{return cnt===2?0:cnt+1})
    }, 3000)
  })
  return (
    <div>
      <Background playStatus = {playStatus} cnt = {cnt}/>
      <Navbar/>
      <Landing
      setPlayStatus = {setPlayStatus}
      data = {data[cnt]}
      cnt = {cnt}
      playStatus = {playStatus}
      />
    </div>
  )
}

export default Landing