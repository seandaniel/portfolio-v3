import React, { Link } from 'react';

import './projects.scss'

// assets
import pieChart from './assets/stats-pie.svg';
import article from './assets/file-article.svg';
import flower from './assets/growth.svg';
import questionMark from './assets/mario-surprise.svg';
import shoe from './assets/sprint.svg';
import golfBall from './assets/golf.svg';
import skateboard from './assets/skateboard.svg';

const Projects = () => {
  return (
    <ul className="projects-container">
      <li><a className="project project1">
        <img src={pieChart} alt="" />
        <h3>Git Check</h3>
      </a></li>
      <li><a className="project project2">
        <img src={article} alt="" />
        <h3>The Specific Press</h3>
      </a></li>
      <li><a className="project project3">
        <img src={flower} alt="" />
        <h3>Verbeek's</h3>
      </a></li>
      <li><a className="project project4">
        <img src={questionMark} alt="" />
        <h3>Quarantine Pursuit</h3>
      </a></li>
      <li><a className="project project5">
        <img src={shoe} alt="" />
        <h3>Foot Forward</h3>
      </a></li>
      <li><a className="project project6">
        <img src={golfBall} alt="" />
        <h3>Seamus Golf</h3>
      </a></li>
      <li><a className="project project7">
        <img src={skateboard} alt="" />
        <h3>Fun Place</h3>
      </a></li>
    </ul>
  )
}

export default Projects;
