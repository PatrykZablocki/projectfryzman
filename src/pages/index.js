import React from "react"

import '../styles/index.scss'

import Layout from "../components/Layout/Layout"
import HeroSection from '../components/HomePage/HeroSection'
import ServicesSection from '../components/HomePage/ServicesSection'
import InfoSection from '../components/HomePage/InfoSection'
import SocialMediaSection from '../components/HomePage/SocialMediaSection'

const Home = ()  => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <InfoSection />
    <SocialMediaSection />
  </Layout>
)

export default Home


