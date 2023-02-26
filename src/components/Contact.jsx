
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

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
            <h5  style={{color:"white"}}>anjutewatia008@gmail.com</h5>
            <a href="anjutewatia008@gmail.com">Send a message</a>
           
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4 style={{color:"white"}}>Contact Number</h4>
           
            <h5 style={{color:"white"}}>9991730427</h5>
            
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
