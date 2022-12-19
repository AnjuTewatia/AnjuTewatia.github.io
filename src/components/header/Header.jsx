import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Headers = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anju Tewatia</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
       
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Headers;
