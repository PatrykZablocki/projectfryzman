import React from "react"

import '../../styles/layout.scss'

import '../../styles/scrollbar.scss'
import '../../scripts/smoothScroll'

import Helmet from '../Helmet/Helmet'
import Navbar from './Navbar'
import Footer from '../Layout/Footer'
import Menu from '../Layout/Menu'

const Layout = ( { children }) =>(
  <>
  <Helmet />
  <Navbar />
  <Menu />
  {children}
  <Footer />
  </>
)

export default Layout
