import React from "react";
import { Link } from "react-router-dom";

import "./projects.scss";
import quarantinePursuitDesktop from "./assets/mockups/quarantinePursuitDesktop.png";
import quarantinePursuitMobile from "./assets/mockups/quarantinePursuitMobile.png";
import { FaArrowLeft } from "react-icons/fa";

const QuarantinePursuit = () => {
  return (
    <section>
      <div className="project-button-container">
        <div className="project-content">
          <h2 className="project-content-4">Quarantine Pursuit</h2>
          <p>
            Select from a dozen genres that contain over 2000 questions
            populated through the Open Trivia API. Liked that specific game?
            Through Firebase, save it to be replayed later!
          </p>
          <h4>React / Firebase / Sass / Open Trivia API</h4>
          <div className="three-button-container">
            <a
              href="https://npsj-quarantine-pursuit.github.io/quarantine-pursuit/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View
            </a>
            <a
              href="https://github.com/npsj-quarantine-pursuit/quarantine-pursuit"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Code
            </a>
            <Link
              to="/"
              className="button button-back button-mobile"
              aria-label="Back"
            >
              <FaArrowLeft />
            </Link>
          </div>
        </div>
        <Link
          to="/"
          className="button button-back button-desktop"
          aria-label="Back"
        >
          <FaArrowLeft />
        </Link>
      </div>
      <div className="mock-img-container mock-img-container-4">
        <div className="individual-img-container">
          <img
            src={quarantinePursuitDesktop}
            alt="An Apple desktop showcasing a UI with two buttons and the title 'Quarantine Pursuit'"
          />
        </div>
        <div className="individual-img-container">
          <img
            src={quarantinePursuitMobile}
            alt="An iPhone 5 showcasing different genres of quizes to choose from"
          />
        </div>
      </div>
    </section>
  );
};

export default QuarantinePursuit;
