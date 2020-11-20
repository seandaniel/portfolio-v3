import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import funPlaceDesktop from './assets/mockups/funPlaceDesktop.png';
import funPlaceMobile from './assets/mockups/funPlaceMobile.png';
import { FaArrowLeft } from 'react-icons/fa';

const FunPlace = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content project-content-7">
          <h2>Fun Place</h2>
          <p>A Photoshop design conversion.</p>
          <h4>HTML / Sass / Responsive / Accessible</h4>
          <div className="button-container">
            <a href="https://seandaniel.github.io/fun-place/" target="_blank" rel="noopener noreferrer" className="button">View</a>
            <a href="https://github.com/seandaniel/fun-place" target="_blank" rel="noopener noreferrer" className="button">Code</a>
            <Link to="/" className="button button-back button-mobile" aria-label="Back"><FaArrowLeft /></Link>
          </div>
        </div>
        <Link to="/" className="button button-back button-desktop" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-7">
        <div className="individual-img-container">
          <img src={funPlaceDesktop} alt="A MacBook showcasing a blue slide with a boy doing an ollie" />
        </div>
        <div className="individual-img-container">
          <img src={funPlaceMobile} alt="An iPhone 5 showcasing 3 seperate icons with lorem ipsum text" />
        </div>
      </div>
    </section>
  )
}

export default FunPlace;