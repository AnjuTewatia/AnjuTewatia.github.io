import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import profile from '../../assets/profile.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2 style={{color:"white"}}>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
             <h5>BCA Graduation</h5>
              <small style={{color:"white"}}>MDU Rohtak</small> 
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small style={{color:"white"}}>20+ Completed Projects</small>
            </article>
          </div>
          <p>I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript,React,Redux,Next.js,Typescript. Building everything from landing pages Masai School helped me to become  web Developer.</p>
          <a href="#contact" className="btn btn-primary">Contact ME</a>
        </div>
      </div>
    </section>
  )
}

export default Intro