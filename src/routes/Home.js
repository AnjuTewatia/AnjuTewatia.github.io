
import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from '../components/Footer'
import Work from "../components/work";
import AboutContact from "../components/AboutContact"
import Form from "../components/Form"
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <h1 style={{textalign:"center"}} className="pro">Projects</h1>
      <Work />
      {/* <AboutContact /> */}
      <About />
      <Form/>
      <Footer />
    </div>
  )
}

export default Home