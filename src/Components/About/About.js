import React from 'react';

import './about.scss';

// assets
import profilePicture from './assets/profilePicture.jpg'

const About = () => {
  return (
    <section className="p-img-container">
      <div className="p-container">
        <p>A web developer who has a passion for progressive technology, and well-designed products that provide meaningful solutions. My creativity stems from my passion for snowboarding, while my methodical way of thinking relates to following the Toronto Blue Jays. I am a Juno College graduate who takes pride in writing semantic, reusable code that produces web applications that engage with people, providing the best user experience. </p>
        <p>My experience consists of building web applications using HTML, CSS compiled with Sass, JavaScript, and jQuery with a strong focus in React. I am confident in using Git to collaborate, working with API integrations, and manipulating information in a database. Meeting web accessibility standards, responsive design, establishing SEO, and being able to manage a project’s scope are skills I possess. Clean interfaces with smooth transitions are adamant in my projects, all through maintainable stylesheets.</p>
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
