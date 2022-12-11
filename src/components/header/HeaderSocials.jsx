import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/anju-tewatia-0759b6246/" ><BsLinkedin /></a>
      <a href="https://github.com/AnjuTewatia" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/anjutewatia_28" ><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials