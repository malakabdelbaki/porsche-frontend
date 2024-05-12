import './Background.css'
import img1 from '../../assets/porsche-car-1.webp'
import img2 from '../../assets/porsche-car-2.webp'
import img3 from '../../assets/porsche-car-3.webp'
import img4 from '../../assets/porsche-car-4.webp'

const Background = ({playStatus, cnt}) =>{

  if(playStatus){
    return(
      <video className='Background fade-in' autoPlay loop muted>
        <source src={vid1} type = 'video/mp4'/>
      </video>
    )
  }
  else if(cnt==0){
    return <img src = {img1} className='Background fade-in' alt = ""/>
  }
  else if(cnt==1){
    return <img src = {img2} className='Background fade-in' alt = ""/>
  }
  else if(cnt==2){
    return <img src = {img3} className='Background fade-in' alt = ""/>
  }
  else if(cnt==3){
    return <img src = {img4} className='Background fade-in' alt = ""/>
  }

}