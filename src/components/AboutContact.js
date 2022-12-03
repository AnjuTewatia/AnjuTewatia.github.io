
import "./AboutContact.css"

import React from 'react'
import { Link } from "react-router-dom"
import pro5 from "../assests/pro5.jpg"
import pro2 from "../assests/pro2.jpeg"


const AboutContact = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who I m </h1>
        <p>i m a react front-end developer . 
            I create responsive secured website
             for my clients</p>
             <Link to="/contact">
                <button className="btn">contact</button>
             </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <div className="img-stack-top">
                <img src={pro5} className="img" alt="true" />
        </div>
        {/* <div className="img-stack-bottem">
                <img src={pro2} className="img" alt="true" />
        </div> */}
    </div>
    </div>
</div>

  )
}

export default AboutContact