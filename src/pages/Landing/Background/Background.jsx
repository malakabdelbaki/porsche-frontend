
import './Background.css'

import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'

const Background = ({playStatus, cnt}) =>{
  
   if(cnt===0){
    return (
      <div id = "wrapper">
    <img src = {img1} className='background fade-in' alt = ""/>
      <div className='displayText'>
        <h5>Elevate your drive</h5>
        <h5>to a symphony of opulence.</h5>
      </div>
    </div>
    )
  }
  else if(cnt===1){
    return (
      <div  id = "wrapper">
    <img src = {img2} className='background fade-in' alt = ""/>
      <div className='displayText'>
        <h5>Indulge in the artistry</h5>
        <h5>of automotive luxury.</h5>
      </div>
    </div>
    )
  }
  else if(cnt===2){
    return (
      <div  id = "wrapper">
    <img src = {img3} className='background fade-in' alt = ""/>
      <div className='displayText'>
        <h5>Where sophistication</h5>
        <h5>meets exhilaration on every road.</h5>
      </div>
    </div>
    )
  }
  else if(cnt===3){
    return (
      <div  id = "wrapper">
    <img src = {img4} className='background fade-in' alt = ""/>
      <div className='displayText'>
        <h5>Luxury redefined,</h5>
        <h5>one mile at a time.</h5>
      </div>
    </div>
    )
  }

}

export default Background;