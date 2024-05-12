import './Hero.css'
import arrow from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause from '../../assets/pause_icon.png'

const Background = ({data, setCnt, cnt, setPlayStatus, playStatus}) =>{
return(
  <div className='hero'>
    <div className='hero-text'>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
    </div>
    <div className='"hero-explore'>
      <p>Explore the features</p>
      <img src={arrow} alt = ""/>
    </div>
    <div className='hero-dot-play'>
      <ul className='hero-dots'>
        <li onClick={()=>setCnt(0)}className={cnt===0?"hero-dot-orange":"hero-dot"}></li>
        <li onClick={()=>setCnt(1)} className={cnt===1?"hero-dot-orange":"hero-dot"}></li>
        <li onClick={()=>setCnt(2)} className={cnt===2?"hero-dot-orange":"hero-dot"}></li>
      </ul>
    <div className='play'>
      <img onClick={()=>setPlayStatus(!playStatus)} src = {playStatus?pause:play_icon} alt = ""/>
    </div>
    </div>
  </div>
)

}