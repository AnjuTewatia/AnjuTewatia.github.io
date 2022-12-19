
import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import JS1 from '../../assets/JS1.jpg';
import HTML2 from"../../assets/HTML2.jpg"
import CSS from"../../assets/CSS.jpg"
import Node2 from"../../assets/Node2.jpg"
import Mongo from"../../assets/Mongo.jpg"
import IMG5 from"../../assets/IMG5.jpg"
import Redux from"../../assets/Redux.jpg"
import Chakra from "../../assets/Chakra.jpg";
import Github5 from "../../assets/Github5.jpg"
import EXP2 from "../../assets/EXP2.jpg"



const Experience = () => {
  return (
    <section id="experience">
      <h2 style={{color:"white"}}>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={HTML2} alt="" />

            
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={CSS} alt="" />

             
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={JS1} alt="" />
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={IMG5} alt="" />

            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={Redux} alt="" />

            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={Chakra} alt="" />

            </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={Node2} alt="" />

            </article>
           
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={Github5} alt="" />

            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={Mongo} alt="" />

            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <img style={{width:"30%"}} src={EXP2} alt="" />

            </article>
           
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience