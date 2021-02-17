import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import rocketVisionDesktop from './assets/mockups/rocketVisionDesktop.png';
import rocketVisionMobile from './assets/mockups/rocketVisionMobile.png';
import { FaArrowLeft } from 'react-icons/fa';

const RocketVision = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content">
          <h2 className="project-content-7">Rocket Vision</h2>
          <p>A WordPress Photoshop design conversion.</p>
          <h4>WordPress / PHP / Sass</h4>
          <div className="three-button-container">
            <a href="mailto:degroot.sd@gmail.com" className="button">Request</a>
            <a href="https://github.com/seandaniel/rocket-vision" target="_blank" rel="noopener noreferrer" className="button">Code</a>
            <Link to="/" className="button button-back button-mobile" aria-label="Back"><FaArrowLeft /></Link>
          </div>
        </div>
        <Link to="/" className="button button-back button-desktop" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-8">
        <div className="individual-img-container">
          <img src={rocketVisionDesktop} alt="An Apple desktop showcasing a landing page explaining the company with pink rockets" />
        </div>
        <div className="individual-img-container">
          <img src={rocketVisionMobile} alt="An iPhone 5 showcasing the agency's team members" />
        </div>
      </div>
    </section>
  )
}

export default RocketVision;