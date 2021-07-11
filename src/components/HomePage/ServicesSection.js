import React from "react"
import {Link} from 'gatsby'

import MainImage from '../../images/services-section-main-image.jpg'

import ScrollDownButton from '../Buttons/ScrollDownButton'
import {PrimaryButton} from '../Buttons/Button'

const ServicesSection = ()  => (
    <section id='services-section' className='services-section'>
        <div className='container'>

            <div className='content'>
                <h2>Nasza oferta</h2>
                <div className='sticky-wrapper'>
                    <h4>
                        Nie tylko włosy
                    </h4>
                    <p>
                        Oprócz typowych dla salonu fryzjerskiego usług dotyczących strzyżenia włosów, oferujemy również
                        <span className='blue-font'> usługi barberskie</span>, czyli zadbamy też o twoją brodę.</p>
                    <p>
                        Strzyżemy także dzieci, więc ojcowie z dziećmi są mile widziani, a posiadamy również specjalną ofertę
                        <span className='blue-font'> tata+syn</span>.</p>
                    <p>
                        Wszystko znajdziesz w naszym cenniku.</p>
                    <div className='buttons'>
                        <Link to='/services' className='link'>
                            <PrimaryButton>Zobacz cennik</PrimaryButton>
                        </Link>
                        <Link to='/#info-section' className='link link--scroll-down'>
                            <ScrollDownButton>Informacje</ScrollDownButton>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='image-box'>
                <img src={MainImage} alt='' />
                <div className='image-box__description'>
                    <p className='title'>Fotel dla dzieci</p>
                    <p>Specjalny fotel na którym strzyżemy dzieci, aby umilić im korzystanie z naszych usług</p>
                </div>
            </div>

        </div>
    </section>
)

  export default ServicesSection