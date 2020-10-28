import React from "react"

import FacebookIcon from '../../images/facebook-icon.svg'
import InstagramIcon from '../../images/instagram-icon.svg'


const ContactMainSection = ()  => (
    <section className='contact-main-section'>
        <div className='container'>
            <h2>Kontakt</h2>

            <div className='wrapper'>
                <div className='box box--phone'>
                    <p className='box__title'>Telefon</p>
                    <p className='box__item'>321 222 123</p>
                </div>
                <div className='box box--address'>
                    <p className='box__title'>Adres</p>
                    <p className='box__item'>Wyimaginowana 23, 18-400 Łomża</p>
                </div>
                <div className='box box--opening-hours'>
                    <p className='box__title'>Godziny otwarcia</p>
                    <p className='box__item'><span className='black-font'>Poniedziałek</span> 10-20</p>
                    <p className='box__item'><span className='black-font'>Wtorek - Piątek</span> 8-18</p>
                    <p className='box__item'><span className='black-font'>Sobota</span> 7-13</p>
                </div>
                <div className='box box--social-media'>
                    <p className='box__title'>Portale społecznościowe</p>
                    <a href='https://www.facebook.com/' className='box__item box__item--facebook link'>
                        <FacebookIcon className='icon icon--facebook' />
                        <p>Facebook</p>
                    </a>
                    <a href='https://www.instagram.com/' className='box__item box__item--instagram link'>
                        <InstagramIcon className='icon icon--instagram' />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>

        </div>
    </section>
)

export default ContactMainSection