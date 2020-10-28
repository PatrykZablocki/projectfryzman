import React from "react"
import {Link} from 'gatsby'


import ScrollDownButton from '../Buttons/ScrollDownButton'

const HeroSection = ()  => (
  <section id='hero-section' className='hero-section'>
      <div className='hero-section-image'/>

      <div className='container'>
        <div className='wrapper'>
            <h1>Fryzman -<span className='blue-font'> Fryzjer męski</span></h1>
            <h3>Strzyżenie męskie i dziecięce</h3>
            <Link to='/#services-section' className='link'>
              <ScrollDownButton>Nasza oferta</ScrollDownButton>
            </Link>
        </div>
      </div>

  </section>
)

export default HeroSection