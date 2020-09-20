import React from 'react';

import './GitCheck.scss';
import gitCheckMock from './assets/mockups/gitCheckMockup.png'

const GitCheck = () => {
  return (
    <section className="project-container">
      <div className="project-img-container">
        <div className="project-content project-content-1">
          <h2>Git Check</h2>
          <p>In today's world, it's important to stay in the know. Fetching thousands of up-to-date articles courtesy of The News API, this React app features a smooth browser and device consistency, all under a clean user interface.</p>
          <h4>React / Hooks / Firebase / GitHub API</h4>
          <div className="button-container">
            <a href="https://seandaniel.github.io/git-check/" target="_blank" rel="noopener noreferrer" class="button">Live</a>
            <a href="https://github.com/seandaniel/git-check" target="_blank" rel="noopener noreferrer" class="button">Code</a>
          </div>
        </div>
        <img src={gitCheckMock} alt="" />
      </div>
    </section>
  )
}

export default GitCheck;
