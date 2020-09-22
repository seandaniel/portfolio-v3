import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import seamusGolfDesktop from './assets/mockups/seamusGolfDesktop.png'
import seamusGolfMobile from './assets/mockups/seamusGolfMobile.png'
import { FaArrowLeft } from 'react-icons/fa';

const SeamusGolf = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content project-content-6">
          <h2>Seamus Golf.</h2>
          <p>Photoshop design conversion</p>
          <h4>HTML / Sass / Responsive / Accessible</h4>
          <div className="button-container">
            <a href="https://seandaniel.github.io/seamus-golf/" target="_blank" rel="noopener noreferrer" className="button">Live</a>
            <a href="https://github.com/seandaniel/seamus-golf" target="_blank" rel="noopener noreferrer" className="button">Code</a>
          </div>
        </div>
        <Link to="/" className="button button-back" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-6">
        <div className="individual-img-container">
          <img src={seamusGolfDesktop} alt="A MacBook showcasing a black and white photograph of a golfer lining up his shot" />
        </div>
        <div className="individual-img-container">
          <img src={seamusGolfMobile} alt="An iPhone 5 showcasing 6 different colorful headcovers to choose from" />
        </div>
      </div>
    </section>
  )
}

export default SeamusGolf;