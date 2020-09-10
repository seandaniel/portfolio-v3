import React from 'react';
import { Link } from 'react-router-dom';

// scss
import './header.scss';

// assets
import mountains from './assets/mountains.svg';
import { FaMapMarkerAlt } from 'react-icons/fa'


const Header = () => {

  const toggleColor = (e) => {

    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
      link.classList.remove('active');
    })

    e.target.classList.add('active');
  }

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
            <Link onClick={toggleColor} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={toggleColor} to="/skills">Skills</Link>
          </li>
          <li>
            <Link onClick={toggleColor} to="/" className="active">Projects</Link>
          </li>
          <li>
            <Link onClick={toggleColor} to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
