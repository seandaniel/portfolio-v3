import React from 'react';

import './projects.scss';
import funPlaceDesktop from './assets/mockups/funPlaceDesktop.png'
import funPlaceMobile from './assets/mockups/funPlaceMobile.png'

const FunPlace = () => {
  return (
    <section>
      <div className="project-content project-content-7">
        <h2>Fun Place</h2>
        <p>Photoshop design conversion.</p>
        <h4>HTML / Sass / Responsive / Accessible</h4>
        <div className="button-container">
          <a href="https://seandaniel.github.io/fun-place/" target="_blank" rel="noopener noreferrer" className="button">Live</a>
          <a href="https://github.com/seandaniel/fun-place" target="_blank" rel="noopener noreferrer" className="button">Code</a>
        </div>
      </div>
      <div className="mock-img-container mock-img-container-7">
        <div className="individual-img-container">
          <img src={funPlaceDesktop} alt="" />
        </div>
        <div className="individual-img-container">
          <img src={funPlaceMobile} alt="" />
        </div>
      </div>
    </section>
  )
}

export default FunPlace;