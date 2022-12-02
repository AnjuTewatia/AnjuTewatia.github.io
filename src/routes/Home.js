
import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from '../components/Footer'
import Work from "../components/work";
import AboutContact from "../components/AboutContact"
import Form from "../components/Form"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <AboutContact />
      <Form/>
      <Footer />
    </div>
  )
}

export default Home