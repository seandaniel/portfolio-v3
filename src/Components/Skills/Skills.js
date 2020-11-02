import React from 'react';
import './skills.scss';

// assets
import JavaScriptImg from './assets/javascript-plain.svg';
import ReactImg from './assets/react-original.svg';
import SassImg from './assets/sass-original.svg';
import WordPressImg from './assets/wordpress-plain.svg';
import ShopifyImg from './assets/shopify.png';
import HTMLImg from './assets/html5-plain.svg';
import CSSImg from './assets/css3-plain.svg';
import jQueryImg from './assets/jquery-plain.svg';
import FirebaseImg from './assets/firebase.png';
import GitImg from './assets/git-plain.svg';
import NodeImg from './assets/nodejs-plain.svg';
import GulpImg from './assets/gulp-plain.svg';
import PHPImg from './assets/php-plain.svg';
import { FaDatabase, FaUniversalAccess, FaMobile, FaSearchPlus } from 'react-icons/fa'
import shred from './assets/shredOptimized.mp4';
import shredPreview from './assets/shredPreview.jpg';

const Skills = () => {
  return (
    <section className="skills-video-container">
      <div>
        <ul className="main-skills-container">
          <li className="skills-1-card">
            <div>
              <img src={JavaScriptImg} alt="JavaScript" />
            </div>
            <p>JavaScript</p>
          </li>
          <li className="skills-1-card">
            <div>
              <img src={ReactImg} alt="React" />
            </div>
            <p>React</p>
          </li>
          <li className="skills-1-card">
            <div>
              <img src={SassImg} alt="Sass" />
            </div>
            <p>Sass</p>
          </li>
          <li className="skills-1-card">
            <div>
              <img src={ShopifyImg} alt="Shopify" />
            </div>
            <p>Shopify/Liquid</p>
          </li>
          <li className="skills-1-card">
            <div>
              <img src={WordPressImg} alt="WordPress" />
            </div>
            <p>WordPress</p>
          </li>
        </ul>
        <ul className="secondary-skills-container">
          <li className="row-1">
            <ul>
              <li className="skills-2-card">
                <div>
                  <img src={HTMLImg} alt="HTML" />
                </div>
                <p>HTML</p>
              </li>
              <li className="skills-2-card">
                <div>
                  <img src={CSSImg} alt="CSS" />
                </div>
                <p>CSS</p>
              </li>
              <li className="skills-2-card">
                <div>
                  <img src={jQueryImg} alt="jQuery" />
                </div>
                <p>jQuery</p>
              </li>
              <li className="skills-2-card last-skill">
                <div>
                  <img src={PHPImg} alt="PHP" />
                </div>
                <p>PHP</p>
              </li>
            </ul>
          </li>
          <li className="row-2">
            <ul>
              <li className="skills-2-card">
                <div>
                  <img src={GitImg} alt="Git" />
                </div>
                <p>Git</p>
              </li>
              <li className="skills-2-card">
                <div>
                  <img src={NodeImg} alt="Node.js" />
                </div>
                <p>Node.js</p>
              </li>
              <li className="skills-2-card">
                <div>
                  <img src={GulpImg} alt="Gulp" />
                </div>
                <p>Gulp</p>
              </li>
              <li className="skills-2-card">
                <div>
                  <img src={FirebaseImg} alt="Firebase" />
                </div>
                <p>Firebase</p>
              </li>
            </ul>
          </li>
          <li className="row-3">
            <ul>
              <li className="skills-2-card">
                <FaDatabase />
                <p>APIs</p>
              </li>
              <li className="skills-2-card">
                <FaUniversalAccess />
                <p>Accessibility</p>
              </li>
              <li className="skills-2-card">
                <FaMobile />
                <p>Responsive</p>
              </li>
              <li className="skills-2-card last-skill">
                <FaSearchPlus />
                <p>SEO</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="video-container">
        <video poster={shredPreview} src={shred}
          alt="A snowboarder doing a 360 off a natural jump" autoPlay controls loop muted></video>
        <div className="video-content">
          <p>Snowboard skills</p>
        </div>
      </div>
    </section>
  )
}

export default Skills;
