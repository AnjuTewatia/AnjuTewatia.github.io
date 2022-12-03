
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from "../components/work"

const Project = () => {
  return (
    <div className='App'>
      <Navbar />
      <HeroImg2  heading ="PROJECTS." text="someof my recent work" />
      
    <Work/>
    <PricingCard />
      <Footer />

    </div>
  )
}

export default Project