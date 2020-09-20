import React from 'react';

import './projects.scss';
import theSpecificPressDesktop from './assets/mockups/theSpecificPressDesktop.png'
import theSpecificPressMobile from './assets/mockups/theSpecificPressMobile.png'

const TheSpecificPress = () => {
  return (
    <section>
      <div className="project-content project-content-2">
        <h2>The Specific Press</h2>
        <p>In today's world, it's important to stay in the know. Fetching thousands of up-to-date articles courtesy of The News API, this React app features a smooth browser and device consistency, all under a clean user interface.</p>
        <h4>React / Sass / The News API</h4>
        <div className="button-container">
          <a href="https://seandaniel.github.io/the-specific-press/" target="_blank" rel="noopener noreferrer" className="button">Live</a>
          <a href="https://github.com/seandaniel/the-specific-press" target="_blank" rel="noopener noreferrer" className="button">Code</a>
        </div>
      </div>
      <div className="mock-img-container mock-img-container-2">
        <div className="individual-img-container">
          <img src={theSpecificPressDesktop} alt="" />
        </div>
        <div className="individual-img-container">
          <img src={theSpecificPressMobile} alt="" />
        </div>
      </div>
    </section>
  )
}

export default TheSpecificPress;
