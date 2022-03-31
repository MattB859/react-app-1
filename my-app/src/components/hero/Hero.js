import React from 'react'
import './Hero.css'

let title = 'The Coffee Factory';
let paragraph = 'Taste The Best Coffee Around...'

const Hero = () => {
  return (
    <>
      <div className='hero-image'></div>
      <div className='hero-image-2'></div>
      <div className='title wrapper'>
        <h1>{title}</h1> 
        <p>{paragraph}</p>
        <button className='hero-btn' type="submit" value="Submit">Book A Table</button>
        <button className='hero-btn2'type="submit" value="Submit">Learn More</button>     
      </div>
 
      <div className='waves'></div>
     
         
    </>    
  )
}

export default Hero