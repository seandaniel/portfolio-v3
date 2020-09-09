import React from 'react';
import { Link } from 'react-router-dom';

// scss
import './header.scss';

// assets
import mountains from './assets/mountains.svg';
import { FaMapMarkerAlt } from 'react-icons/fa'


const Header = () => {
  return (
    <header>
      <div className="img-container">
        <img src={mountains} alt="Three mountains with snow-peaked tops" />
      </div>
      <div className="heading-container">
        <h1>Sean de Groot</h1>
        <h2>Web Developer</h2>
        <div className="location-container">
          <FaMapMarkerAlt />
          <h3>Kitchener-Waterloo</h3>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/letschat">Let's Chat</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
