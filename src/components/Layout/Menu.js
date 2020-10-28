import React from "react"
import { Link } from "gatsby"

import FacebookIcon from '../../images/facebook-icon.svg'
import InstagramIcon from '../../images/instagram-icon.svg'


const Menu = () => (
    <section className='menu-section'>
        <div className='menu'>

            <div className='nav-links'>
                <Link className='link' to="/" activeClassName='link--active'>Strona główna</Link>
                <Link className='link' to="/services" activeClassName='link--active'>Usługi i cennik</Link>
                <Link className='link' to="/contact" activeClassName='link--active'>Kontakt</Link>
            </div>
            <div className='menu-social-media'>
                <a href="https://www.facebook.com" className='facebook link'>
                    <FacebookIcon className='icon icon--facebook' />
                    <p>facebook</p>
                </a>
                <span className='vertical-line' />
                <a href="https://www.instagram.com" className='instagram link'>
                    <p>instagram</p>
                    <InstagramIcon className='icon icon--instagram' />
                </a>
            </div>

        </div>

        <span className='menu-back-layer' />
    </section>

)

export default Menu