import React from 'react'
import './Hero.css'

let title = 'Clairs Coffee Shop';
let paragraph = 'Taste The Best Coffee Around'

const Hero = () => {
  return (
    <>
      <div className='hero-image'></div>
      <div className='hero-image-2'></div>
      <div className='title'>
        <h1>{title}</h1> 
        <p>{paragraph}</p>     
      </div>    
    </>    
  )
}

export default Hero