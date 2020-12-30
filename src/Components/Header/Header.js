import React from 'react';
import { Link } from 'react-router-dom';

// scss
import './header.scss';

// assets
import mountains from './assets/mountains.svg';
import { FaMapMarkerAlt } from 'react-icons/fa'


const Header = () => {

  // select active and add opacity to next element sibling
  const onLoad = () => {
    const active = document.querySelector('.active');
    active.nextElementSibling.style.opacity = 1;
  }

  const toggleColor = (e) => {

    const links = document.querySelectorAll('nav ul li a');
    const underlines = document.querySelectorAll('.underline');

    links.forEach(link => {
      link.classList.remove('active');
    })

    underlines.forEach(underline => {
      underline.style.opacity = 0;
    })

    e.target.classList.add('active');
    e.target.nextElementSibling.style.opacity = 1;
  }

  return (
    <header onLoad={onLoad}>
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
        <a href="mailto:degroot.sd@gmail.com" className="button">Message</a>
      </div>
      <nav>
        <ul>
          <li>
            <Link onClick={toggleColor} to="/about">About</Link>
            <span className="underline"></span>
          </li>
          <li>
            <Link onClick={toggleColor} to="/skills">Skills</Link>
            <span className="underline"></span>
          </li>
          <li>
            <Link onClick={toggleColor} to="/" className="active">Projects</Link>
            <span className="underline"></span>
          </li>
          <li>
            <Link onClick={toggleColor} to="/words">Words</Link>
            <span className="underline"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
