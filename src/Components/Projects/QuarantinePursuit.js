import React from 'react';

import './projects.scss';
import quarantinePursuitDesktop from './assets/mockups/quarantinePursuitDesktop.png'
import quarantinePursuitMobile from './assets/mockups/quarantinePursuitMobile.png'

const QuarantinePursuit = () => {
  return (
    <section>
      <div className="project-content project-content-4">
        <h2>Quarantine Pursuit</h2>
        <p>Select from a dozen genres that contain over 2000 questions populated through the Open Trivia API. Liked that specific game? Through Firebase, save it to be replayed later!</p>
        <h4>React / Firebase / Git Collaboration / Open Trivia API</h4>
        <div className="button-container">
          <a href="https://npsj-quarantine-pursuit.github.io/quarantine-pursuit/" target="_blank" rel="noopener noreferrer" className="button">Live</a>
          <a href="https://github.com/npsj-quarantine-pursuit/quarantine-pursuit" target="_blank" rel="noopener noreferrer" className="button">Code</a>
        </div>
      </div>
      <div className="mock-img-container mock-img-container-4">
        <div className="individual-img-container">
          <img src={quarantinePursuitDesktop} alt="" />
        </div>
        <div className="individual-img-container">
          <img src={quarantinePursuitMobile} alt="" />
        </div>
      </div>
    </section>
  )
}

export default QuarantinePursuit;