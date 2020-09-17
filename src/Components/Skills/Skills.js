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
import PhotoShopImg from './assets/photoshop-plain.svg';
import { FaDatabase, FaUniversalAccess, FaMobile, FaSearchPlus } from 'react-icons/fa'

const Skills = () => {
  return (
    <section class="skills-container">
      <ul className="main-skills-container">
        <li className="skills-1-card">
          <img src={JavaScriptImg} alt="" />
        </li>
        <li className="skills-1-card">
          <img src={ReactImg} alt="" />
        </li>
        <li className="skills-1-card">
          <img src={SassImg} alt="" />
        </li>
        <li className="skills-1-card">
          <img src={WordPressImg} alt="" />
        </li>
        <li className="skills-1-card">
          <img src={ShopifyImg} alt="" />
        </li>
      </ul>
      <ul className="secondary-skills-container">
        <li className="skills-2-card">
          <img src={HTMLImg} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={CSSImg} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={jQueryImg} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={FirebaseImg} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={GitImg} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={NodeImg} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={NpmImage} alt="" />
        </li>
        <li className="skills-2-card">
          <img src={GulpImg} alt="" />
        </li>
        <li className="skills-2-card">
          <FaDatabase />
        </li>
        <li className="skills-2-card">
          <img src={PhotoShopImg} alt="" />
        </li>
        <li className="skills-2-card">
          <FaUniversalAccess />
        </li>
        <li className="skills-2-card">
          <FaMobile />
        </li>
        <li className="skills-2-card">
          <FaSearchPlus />
        </li>
      </ul>
    </section>
  )
}

export default Skills;
