import React from 'react'
import pro1 from "../assests/pro1.png"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroImg2 from "../components/HeroImg2"
import AboutContact from '../components/AboutContact'
import pro4 from "../assests/pro4.gif"
const About = () => {
  return (
    <div >
      <Navbar />
      {/* <img src={pro4} /> */}
      {/* <HeroImg2   heading="ABOUT" text="I am a Front-End Developer"/> */}
      <div className='about' style={{display:"flex",gridTemplateColumns:"repeat(2,1fr)" ,backgroundColor:"grey"}} >   <div>
  <img src={pro1} />
 </div>
 <div  className="about2"style={{margin:"100px"}}>
 <h1>About My self</h1>
 <h1>Hello My name is Anju Tewatia </h1>
 <p>I nm  a full stack web developer </p> 

  </div>
 </div>



      {/* <AboutContact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default About



 {/* <div className='about' style={{display:"flex",gridTemplateColumns:"repeat(2,1fr)"}}> */}
//  <div>
 {/* <img src={pro1} />
 </div>
 <div  className="about2"style={{margin:"100px"}}>
 <h1>About My self</h1>
 <h1>Hello My name is Anju Tewatia </h1>
 <p>I nm  a full stack web developer </p> */}

 {/* </div>
 </div> */}