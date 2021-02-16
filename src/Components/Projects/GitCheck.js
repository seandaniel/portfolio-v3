import React from 'react';
import { Link } from 'react-router-dom'

import './projects.scss';
import gitCheckDesktop from './assets/mockups/gitCheckDesktop.png';
import gitCheckMobile from './assets/mockups/gitCheckMobile.png';
import { FaArrowLeft } from 'react-icons/fa';

const GitCheck = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content">
          <h2 className="project-content-6">Git Check</h2>
          <p>Search GitHub users to view their details including a list of public repositories, and most used languages showcased through Chart.js. Star your favourites to be viewed later with the help of Firebase, and navigate the application with seamless page transitions thanks to React Router.</p>
          <h4>React / Firebase / Sass / GitHub API</h4>
          <div className="button-container">
            <a href="https://seandaniel.github.io/git-check/" target="_blank" rel="noopener noreferrer" className="button">View</a>
            <a href="https://github.com/seandaniel/git-check" target="_blank" rel="noopener noreferrer" className="button">Code</a>
            <Link to="/" className="button button-back button-mobile" aria-label="Back"><FaArrowLeft /></Link>
          </div>
        </div>
        <Link to="/" className="button button-back button-desktop" aria-label="Back"><FaArrowLeft /></Link>
      </div>
      <div className="mock-img-container mock-img-container-1">
        <div className="individual-img-container">
          <img src={gitCheckDesktop} alt="An Apple desktop showcasing a pie chart with a GitHub user's stats" />
        </div>
        <div className="individual-img-container">
          <img src={gitCheckMobile} alt="An iPhone 5 showcasing GitHub users' information cards" />
        </div>
      </div>
    </section>
  )
}

export default GitCheck;
