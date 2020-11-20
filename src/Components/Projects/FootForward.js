import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import footForwardDesktop from './assets/mockups/footForwardDesktop.png';
import footForwardMobile from './assets/mockups/footForwardMobile.png';
import { FaArrowLeft } from 'react-icons/fa';

const FootForward = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content project-content-5">
          <h2>Foot Forward</h2>
          <p>A Photoshop design conversion.</p>
          <h4>HTML / Sass / Responsive / Accessible</h4>
          <div className="button-container">
            <a href="https://seandaniel.github.io/foot-forward/" target="_blank" rel="noopener noreferrer" className="button">View</a>
            <a href="https://github.com/seandaniel/foot-forward" target="_blank" rel="noopener noreferrer" className="button">Code</a>
            <Link to="/" className="button button-back button-mobile" aria-label="Back"><FaArrowLeft /></Link>
          </div>
        </div>
        <Link to="/" className="button button-back button-desktop" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-5">
        <div className="individual-img-container">
          <img src={footForwardDesktop} alt="A MacBook showcasing a grey nike shoe over an orange geometric background" />
        </div>
        <div className="individual-img-container">
          <img src={footForwardMobile} alt="An iPhone 5 showcasing a wall of shoes with text underneath" />
        </div>
      </div>
    </section>
  )
}

export default FootForward;