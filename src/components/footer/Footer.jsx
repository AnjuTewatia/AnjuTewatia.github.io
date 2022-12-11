

import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Anju Tewatia</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/anju-tewatia-0759b6246" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/AnjuTewatia" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/atewatia_28/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer