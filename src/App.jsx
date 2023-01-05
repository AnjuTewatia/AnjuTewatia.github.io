
import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Headers from './components/header/Header';
import Intro from './components/intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <>
    <Navbar />
        <Headers />
     
       <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />  
    </>
  )
}

export default App
