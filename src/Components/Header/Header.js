import React from 'react';
import { Link } from 'react-router-dom';

// scss
import './header.scss';

// assets
import golfBag from './assets/golfbag.svg';
import { FaMapMarkerAlt } from 'react-icons/fa'


const Header = () => {

  // select active and add opacity to next element sibling
  // CI=false npm run build
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
      <div className="header-img-container">
        <img src={golfBag} alt="A golfbag with three irons sticking out" />
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
