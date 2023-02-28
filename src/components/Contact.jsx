
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import {BsTelephone} from "react-icons/bs"
import './contact.css';
import { Link,Flex} from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from "react-icons/bs"

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    
    e.target.reset();
  };
  return (
    <section id="contact">
     
      <h1 style={{color:"white",fontSize:"50px",marginBottom:"50px",marginTop:"60px"}}>Contact Me</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4 style={{color:"white"}}>Email</h4>
            <h5  style={{color:"white"}} fontSize={"20px"}>anjutewatia008@gmail.com</h5>
            <a  style={{color:"white"}} href="anjutewatia008@gmail.com">Send a message</a>
           
          </article>
          <article className="contact__option">
            <BsTelephone className="contact__option-icon" />
            <h4 style={{color:"white"}}>Contact Number</h4>
           
            <h5 style={{color:"white"}}>9991730427</h5>
            
          </article>

          <article className="contact__option">
          <Flex mt={3} gap={5} ml={51}>
          <Link href='https://www.linkedin.com/in/anju-tewatia-0759b6246' isExternal>
          <BsLinkedin fontSize="2em" color='white'/>
          </Link>
          <Link href='https://github.com/AnjuTewatia' isExternal>
          <BsGithub fontSize="2em" color='white'/>
          </Link> 
          </Flex> 
          
          </article>



        </div>
        <form action="https://formspree.io/f/xknedydb" method='POST' className='forms'>
          <textarea
            type="text"
            placeholder="Your Full Name"
            rows="2"
            name="user_name"
            required
          />
          <textarea
            type="text"
            placeholder="Your Email"
            rows="2"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I will reply Your message</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
