import React from 'react';

import './projects.scss';
import seamusGolfDesktop from './assets/mockups/seamusGolfDesktop.png'
import seamusGolfMobile from './assets/mockups/seamusGolfMobile.png'

const SeamusGolf = () => {
  return (
    <section>
      <div className="project-content project-content-6">
        <h2>Seamus Golf</h2>
        <p>Photoshop design conversion</p>
        <h4>HTML / Sass / Responsive / Accessible</h4>
        <div className="button-container">
          <a href="https://seandaniel.github.io/seamus-golf/" target="_blank" rel="noopener noreferrer" className="button">Live</a>
          <a href="https://github.com/seandaniel/seamus-golf" target="_blank" rel="noopener noreferrer" className="button">Code</a>
        </div>
      </div>
      <div className="mock-img-container mock-img-container-6">
        <div className="individual-img-container">
          <img src={seamusGolfDesktop} alt="" />
        </div>
        <div className="individual-img-container">
          <img src={seamusGolfMobile} alt="" />
        </div>
      </div>
    </section>
  )
}

export default SeamusGolf;