import React from 'react'
import  "./Home.scss"
import gitIcon from '../../assets/cv.png'

export default function Home() {

  const clickHandler = (event: React.MouseEvent<HTMLElement>) : void =>{
    window.open("/dnizfor", '_blank');
}
    
  return (
    <div className='container'>

      <div className='title'>
        <h1>Convert Your Github Profile  <br/> to Greate Resume!</h1>
        <p>No registration required.<br/>Just add your username end of our domain!</p>
        <button onClick={clickHandler} className='try-button'>Let's see!</button>
      </div>
      
      <div className='image'>
        <img  src={gitIcon} alt='img'/>
      </div>
      

    </div>
  )
}
