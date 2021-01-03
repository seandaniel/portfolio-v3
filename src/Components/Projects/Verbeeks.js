import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import verbeeksDesktop from './assets/mockups/verbeeksDesktop.png'
import verbeeksMobile from './assets/mockups/verbeeksMobile.png'
import { FaArrowLeft } from 'react-icons/fa';

const Verbeeks = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content project-content-3">
          <h2>Verbeek's Farm and Garden Centre</h2>
          <p>Verbeek's services everyone from the home gardener to the largest farm properties across their residing county. Built and designed through Liquid and Sass utilizing the Shopify platform, showcasing the company's brand and unique products.</p>
          <h4>Liquid / Vanilla JavaScript / Sass</h4>
          <div className="button-container">
            <a href="https://verbeekslandscaping.com/" target="_blank" rel="noopener noreferrer" className="button">View</a>
            <a href="https://github.com/seandaniel/verbeeks-v2" target="_blank" rel="noopener noreferrer" className="button">Code</a>
            <Link to="/" className="button button-back button-mobile" aria-label="Back"><FaArrowLeft /></Link>
          </div>
        </div>
        <Link to="/" className="button button-back button-desktop" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-3">
        <div className="individual-img-container">
          <img src={verbeeksDesktop} alt="A MacBook showcasing a carousel with products to choose from" />
        </div>
        <div className="individual-img-container">
          <img src={verbeeksMobile} alt="An iPhone showcasing a fertilizer product" />
        </div>
      </div>
    </section>
  )
}

export default Verbeeks;