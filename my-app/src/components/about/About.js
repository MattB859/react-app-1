import React from 'react'
import './About.css'


const About = () => {
  return (
    <>
        <article className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 p-0'>
                    <div className='box-1'>
                        <h1 className='about-title'>
                            We pride ourselves in choosing 
                            the very best coffe beans
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

                <div className='col-lg-6 col-md-12 p-0'>
                    <div className='box-2'>
                        <div className='about-img'></div>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default About