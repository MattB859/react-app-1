import React from 'react';
import './About.css';


const About = () => {
  return (
    <>
        <article className='container mx-auto mb-5' id='about'>
            <div className='wrapper'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 xs:grid-cols-1'>
                    <div className='about-img'></div>
                    <div className='content'>
                        <h1 className='about-title'>
                            We pride ourselves in choosing 
                            the very best coffee beans
                        </h1>
                        <p className='about-paragraph'>
                            Coffee is a brewed drink prepared from roasted 
                            coffee beans, the seeds of berries from certain 
                            flowering plants in the Coffea genus. From the 
                            coffee fruit, the seeds are separated to produce 
                            a stable, raw product.
                        </p> 
                    </div> 
                </div>
            </div>   
        </article>
    </>
  )
}

export default About