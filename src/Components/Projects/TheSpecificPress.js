import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import theSpecificPressDesktop from './assets/mockups/theSpecificPressDesktop.png';
import theSpecificPressMobile from './assets/mockups/theSpecificPressMobile.png';
import { FaArrowLeft } from 'react-icons/fa';

const TheSpecificPress = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content project-content-2">
          <h2>The Specific Press</h2>
          <p>In today's world, it's important to stay in the know. Fetching thousands of up-to-date articles courtesy of The News API, this React app features a smooth browser and device consistency, all under a clean user interface.</p>
          <h4>React / Sass / The News API</h4>
          <div className="button-container">
            <a href="https://seandaniel.github.io/the-specific-press/" target="_blank" rel="noopener noreferrer" className="button">View</a>
            <a href="https://github.com/seandaniel/the-specific-press" target="_blank" rel="noopener noreferrer" className="button">Code</a>
            <Link to="/" className="button button-back button-mobile" aria-label="Back"><FaArrowLeft /></Link>
          </div>
        </div>
        <Link to="/" className="button button-back button-desktop" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-2">
        <div className="individual-img-container">
          <img src={theSpecificPressDesktop} alt="An Apple desktop showcasing articles relating to the topic 'Technology'" />
        </div>
        <div className="individual-img-container">
          <img src={theSpecificPressMobile} alt="An iPhone 5 showcasing The Specific Press logo and an input box" />
        </div>
      </div>
    </section>
  )
}

export default TheSpecificPress;
