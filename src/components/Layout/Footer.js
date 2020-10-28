import React from "react"

import FacebookIcon from '../../images/facebook-icon.svg'
import InstagramIcon from '../../images/instagram-icon.svg'
import AddressIcon from '../../images/address-icon.svg'
import PhoneIcon from '../../images/phone-icon.svg'
import Logo from '../../images/logo.svg'


const Footer = ()  => (
    <section className='footer'>
        <div className='container'>

            <div className='wrapper'>
                <div className='logo'>
                    <Logo />
                </div>

                <div className='info'>
                    <div className='address info__item'>
                        <AddressIcon className='icon' />
                        <p>Wyimaginowana 23, 18-400 Łomża</p>
                    </div>
                    <div className='phone info__item'>
                        <PhoneIcon className='icon' />
                        <p>321 222 123</p>
                    </div>
                    <a href='https://www.facebook.com/' className='link facebook info__item'>
                        <FacebookIcon className='icon' />
                        <p>facebook</p>
                    </a>
                    <a href='https://www.instagram.com/' className='link instagram info__item'>
                        <InstagramIcon className='icon' />
                        <p>instagram</p>
                    </a>
                </div>
            </div>

        </div>
    </section>
)

export default Footer