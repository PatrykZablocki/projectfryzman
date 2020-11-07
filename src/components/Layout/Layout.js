import React from "react"
import {Helmet} from "react-helmet"

import '../../styles/layout.scss'

import '../../styles/scrollbar.scss'
import '../../scripts/smoothScroll'

import Navbar from './Navbar'
import Footer from '../Layout/Footer'
import Menu from '../Layout/Menu'

const Layout = ( { children }) =>(
  <>
  <Helmet>
    <title>Fryzman - salon fryzjerski</title>
    <meta name='author' content='Patryk Zabłocki'/>
  </Helmet>

  <Navbar />
  <Menu />
  {children}
  <Footer />
  </>
)

export default Layout

