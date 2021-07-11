import React from "react"
import { Link } from "gatsby"

import Logo from '../../images/logo.svg'

import openMenu from '../../scripts/openMenu'

const Navbar = () => (
    <section className='navigation'>

        <div className='navbar'>
            <div className='container navbar-wrapper'>
                <Link to="/#" className='link' aria-label="Go to top of the home page">
                    <Logo />
                </Link>
                <button className='hamburger-menu' onClick={openMenu} aria-label="menu">
                    <span className='hamburger-menu__item top-line' />
                    <span className='hamburger-menu__item bottom-line' />
                </button>
            </div>
        </div>

    </section>
)

export default Navbar