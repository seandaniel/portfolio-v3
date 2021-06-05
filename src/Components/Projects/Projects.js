import React from "react";
import { Link } from "react-router-dom";

import "./projects.scss";

// assets
import pieChart from "./assets/stats-pie.svg";
import article from "./assets/file-article.svg";
import flower from "./assets/growth.svg";
import questionMark from "./assets/mario-surprise.svg";
import shoe from "./assets/sprint.svg";
import golfBall from "./assets/golf.svg";
import rocket from "./assets/rocket.svg";
import skateboard from "./assets/skateboard.svg";

// language icons
import JavaScriptImg from "./assets/language-icons/javascript-plain.svg";
import HTMLImg from "./assets/language-icons/html5-plain.svg";
import ReactImg from "./assets/language-icons/react-original.svg";
import SassImg from "./assets/language-icons/sass-original.svg";
import WordPressImg from "./assets/language-icons/wordpress-plain.svg";
import ShopifyImg from "./assets/language-icons/shopify.png";

const Projects = () => {
  return (
    <section>
      <ul className="projects-container">
        <li>
          <Link
            to="/verbeeks"
            className="project project1"
            aria-label="View Verbeek's"
          >
            <img
              className="project-icon"
              src={flower}
              alt="A flower standing tall"
            />
            <h3>
              Verbeek's <br></br>Farm & Garden Centre
            </h3>
            <ul className="icon-container">
              <li>
                <img src={ShopifyImg} alt="Shopify" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/the-specific-press"
            className="project project2"
            aria-label="View The Specific Press"
          >
            <img
              className="project-icon"
              src={article}
              alt="A piece of paper with writing and a photograph"
            />
            <h3>The Specific Press</h3>
            <ul className="icon-container">
              <li>
                <img src={ReactImg} alt="React" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/seamus-golf"
            className="project project3"
            aria-label="View Seamus Golf"
          >
            <img
              className="project-icon"
              src={golfBall}
              alt="A golf ball teed up"
            />
            <h3>Seamus Golf</h3>
            <ul className="icon-container">
              <li>
                <img src={HTMLImg} alt="HTML" />
              </li>
              <li>
                <img src={SassImg} alt="Sass" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/quarantine-pursuit"
            className="project project4"
            aria-label="View Quarantine Pursuit"
          >
            <img
              className="project-icon"
              src={questionMark}
              alt="A question mark on a plaque"
            />
            <h3>Quarantine Pursuit</h3>
            <ul className="icon-container">
              <li>
                <img src={ReactImg} alt="React" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/foot-forward"
            className="project project5"
            aria-label="View Foot Forward"
          >
            <img
              className="project-icon"
              src={shoe}
              alt="A running shoe with the toes pressed down"
            />
            <h3>Foot Forward</h3>
            <ul className="icon-container">
              <li>
                <img src={HTMLImg} alt="HTML" />
              </li>
              <li>
                <img src={SassImg} alt="Sass" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/git-check"
            className="project project6"
            aria-label="View Git Check"
          >
            <img
              className="project-icon"
              src={pieChart}
              alt="A pie chart with a third and quarter sticking out"
            />
            <h3>Git Check</h3>
            <ul className="icon-container">
              <li>
                <img src={ReactImg} alt="React" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/rocket-vision"
            className="project project8"
            aria-label="View Rocket Vision"
          >
            <img
              className="project-icon"
              src={rocket}
              alt="A rocket blasting off"
            />
            <h3>Rocket Vision</h3>
            <ul className="icon-container">
              <li>
                <img src={WordPressImg} alt="WordPress" />
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link
            to="/fun-place"
            className="project project7"
            aria-label="View Fun Place"
          >
            <img
              className="project-icon"
              src={skateboard}
              alt="A view underneath a skateboard"
            />
            <h3>Fun Place</h3>
            <ul className="icon-container">
              <li>
                <img src={HTMLImg} alt="HTML" />
              </li>
              <li>
                <img src={SassImg} alt="Sass" />
              </li>
            </ul>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
