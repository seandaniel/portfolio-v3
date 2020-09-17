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
import NpmImage from './assets/npm-original-wordmark.svg';
import GulpImg from './assets/gulp-plain.svg';
import { FaDatabase, FaUniversalAccess, FaMobile, FaSearchPlus } from 'react-icons/fa'
import shred from './assets/shredOptimized.mp4';
import shredPreview from './assets/shredPreview.jpg';

const Skills = () => {
  return (
    <section class="skills-container">
      <ul className="main-skills-container">
        <li className="skills-1-card">
          <img src={JavaScriptImg} alt="" />
          <p><h3>JavaScript</h3> dolor sit amet consectetur, adipisicing elit. Beatae necessitatibus, amet consectetur autem quaerat accusantium harum iure expedita sit iste?</p>
        </li>
        <li className="skills-1-card">
          <img src={ReactImg} alt="" />
          <p><h3>React</h3> dolor sit amet consectetur, adipisicing elit. Beatae necessitatibus, amet consectetur autem quaerat accusantium harum iure expedita sit iste?</p>
        </li>
        <li className="skills-1-card">
          <img src={SassImg} alt="" />
          <p><h3>Sass</h3> sit amet consectetur, adipisicing elit. Beatae necessitatibus, amet consectetur autem quaerat accusantium harum iure expedita sit iste?</p>
        </li>
        <li className="skills-1-card">
          <img src={WordPressImg} alt="" />
          <p><h3>WordPress</h3> dolor sit amet consectetur, adipisicing elit. Beatae necessitatibus, amet consectetur autem quaerat accusantium harum iure expedita sit iste?</p>
        </li>
        <li className="skills-1-card">
          <img src={ShopifyImg} alt="" />
          <p><h3>Shopify</h3> dolor sit amet consectetur, adipisicing elit. Beatae necessitatibus, amet consectetur autem quaerat accusantium harum iure expedita sit iste?</p>
        </li>
      </ul>
      <ul className="secondary-skills-container">
        <li className="row-1">
          <ul>
            <li className="skills-2-card">
              <img src={HTMLImg} alt="" />
              <h3>HTML</h3>
            </li>
            <li className="skills-2-card">
              <img src={CSSImg} alt="" />
              <h3>CSS</h3>
            </li>
            <li className="skills-2-card">
              <img src={jQueryImg} alt="" />
              <h3>jQuery</h3>
            </li>
            <li className="skills-2-card">
              <img src={FirebaseImg} alt="" />
              <h3>Firebase</h3>
            </li>
          </ul>
        </li>
        <li className="row-2">
          <ul>
            <li className="skills-2-card">
              <img src={GitImg} alt="" />
              <h3>Git</h3>
            </li>
            <li className="skills-2-card">
              <img src={NodeImg} alt="" />
              <h3>Node.js</h3>
            </li>
            <li className="skills-2-card">
              <img src={NpmImage} alt="" />
              <h3>npm</h3>
            </li>
            <li className="skills-2-card last-skill">
              <img src={GulpImg} alt="" />
              <h3>Gulp</h3>
            </li>
          </ul>
        </li>
        <li className="row-3">
          <ul>
            <li className="skills-2-card">
              <FaDatabase />
              <h3>APIs</h3>
            </li>
            <li className="skills-2-card">
              <FaUniversalAccess />
              <h3>Accessibility</h3>
            </li>
            <li className="skills-2-card">
              <FaMobile />
              <h3>Responsive</h3>
            </li>
            <li className="skills-2-card last-skill">
              <FaSearchPlus />
              <h3>SEO</h3>
            </li>
          </ul>
        </li>
        <li class="video-container">
          <video poster={shredPreview} src={shred}
            alt="A snowboarder doing a 360 off a natural jump" autoplay controls loop muted></video>
          <div className="video-content">
            <p>Snowboarding skills included</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills;
