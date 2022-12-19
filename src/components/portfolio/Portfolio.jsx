
import React from 'react';
import IMG1 from '../../assets/IMG1.jpg';
import IMG2 from '../../assets/IMG2.jpg';
import IMG3 from '../../assets/IMG3.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Youtube',
      img: IMG1,
      description:
        'Youtube Clone where user can search any song and any movies',
      technologies: 'HTML | CSS |JAVASCRIPT',
      link: 'https://prismatic-stardust-06f7c7.netlify.app/',
      github: 'https://github.com/AnjuTewatia/Youbtube_clone',
    },
    {
      id: 2,
      title: 'Big Basket',
      img:IMG2,
      description:
        'Ecommerce Website where user can buy anything using Login oR Signup',
      technologies: 'HTML |CSS | JAVASCRIPT',
      link: 'https://fascinating-syrniki-299085.netlify.app/',
      github: 'https://github.com/AnjuTewatia/abrupt-cough-2319',
    },
    {
      id: 3,
      title: 'Reliance Digitial',
      img: IMG3,
      description:
        'Ecommerce Website where user can buy any Electronic Products',
      technologies: 'React | JAVASCRIPT',
      link: 'https://ornate-bonbon-dab792.netlify.app/',
      github: 'https://github.com/AnjuTewatia/great-account-499/tree/main/my-app',
    },
   
   
     
  ];

  return (
    <section id="portfolio">
      <h2 style={{color:"white"}}>PROJECTS</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img  style={{height:"100%"}}src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
