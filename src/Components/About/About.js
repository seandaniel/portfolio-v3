import React from 'react';

import './about.scss';

// assets
import profilePicture from './assets/profilePicture.jpg'

const About = () => {
  return (
    <section className="p-img-container">
      <div className="p-container">
        <p>A web developer who has a passion for well-designed web applications that provide meaningful solutions. My creativity stems from my passion for snowboarding, while my methodical way of thinking relates to my time on the golf course and following the Toronto Blue Jays.</p>
        <p>I build web applications using HTML, Sass, JavaScript, and React, as well as Shopify stores through Liquid. Learning about a new project excites me, as I look forward to aligning with the partner's vision in providing an intuitive digital product. Clean interfaces with smooth transitions are adamant in my projects, including a seamless user experience at the forefront.</p>
      </div>
      <div className="img-container">
        <div className="toolbar">
          <ul className="button-container">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>web-developer.jpg</p>
        </div>
        <img src={profilePicture} alt="A headshot of Sean de Groot" />
      </div>
    </section>
  )
}

export default About;
