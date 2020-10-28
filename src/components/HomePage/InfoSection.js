import React from "react"
import {Link} from 'gatsby'

import {SecondaryButton} from '../Buttons/Button'

import InfoSectionImage from '../../images/info-section-image.jpg'

const InfoSection = ()  => (
    <section id='info-section' className='info-section'>
        <div className='container'>
            <img className='info-section-image' src={InfoSectionImage} alt='' />

            <div className='wrapper'>
                <div className='info'>
                    <h2>Adres</h2>
                    <div className='info__box info__box--flex'>
                        <p>Nasz lokal znajduje się pod adresem</p>
                        <p className='yellow-font'>Wyimaginowana 23, 18-400 Łomża</p>
                    </div>
                </div>

                <div className='info'>
                    <h2>Godziny otwarcia</h2>
                    <div className='info__box info__box--grid'>
                        <p>Poniedziałek</p>
                        <p className='yellow-font'> 10-20</p>
                        <p>Wtorek-Piątek</p>
                        <p className='yellow-font'> 8-18</p>
                        <p>Sobota</p>
                        <p className='yellow-font'> 7-13</p>
                    </div>
                </div>

                <div className='info'>
                    <h2>Kontakt</h2>
                    <div className='info__box info__box--flex'>
                        <p>Prosimy umawiać się telefonicznie</p>
                        <p className='yellow-font'>321 222 123</p>
                        <Link to='/contact' className='link'>
                            <SecondaryButton>Kontakt</SecondaryButton>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default InfoSection