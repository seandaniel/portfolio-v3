import React from 'react';

import './projects.scss';
import footForwardDesktop from './assets/mockups/footForwardDesktop.png'
import footForwardMobile from './assets/mockups/footForwardMobile.png'

const FootForward = () => {
  return (
    <section>
      <div className="project-content project-content-5">
        <h2>Foot Forward</h2>
        <p>Photoshop design conversion</p>
        <h4>HTML / Sass / Responsive / Accessible</h4>
        <div className="button-container">
          <a href="https://seandaniel.github.io/foot-forward/" target="_blank" rel="noopener noreferrer" className="button">Live</a>
          <a href="https://github.com/seandaniel/foot-forward" target="_blank" rel="noopener noreferrer" className="button">Code</a>
        </div>
      </div>
      <div className="mock-img-container mock-img-container-5">
        <div className="individual-img-container">
          <img src={footForwardDesktop} alt="" />
        </div>
        <div className="individual-img-container">
          <img src={footForwardMobile} alt="" />
        </div>
      </div>
    </section>
  )
}

export default FootForward;