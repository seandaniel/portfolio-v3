import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './about.scss';

// assets
import profilePicture from './assets/profilePicture.jpg'

const About = () => {
  return (
    <section className="p-img-container">
      <div className="p-container">
        <p>A web developer who has a passion for creating well-designed websites and web applications. My creativity stems from my passion for snowboarding, while my methodical way of thinking relates to my time on the golf course and following the Toronto Blue Jays.</p>
        <p>I build sites and apps using HTML, Sass, JavaScript, and React, as well as Shopify stores through Liquid.</p>
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
