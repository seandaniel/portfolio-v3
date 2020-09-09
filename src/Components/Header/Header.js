import React from 'react';
import { Link } from 'react-router-dom';
import mountains from './assets/mountains.svg';

const Header = () => {
  return (
    <header>
      <div className="img-container">
        <img src={mountains} alt="Three mountains with snow-peaked tops" />
      </div>
      <div className="heading-container">
        <h1>Sean de Groot</h1>
        <h2>Web Developer</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link >About</Link>
          </li>
          <li>
            <Link >Skills</Link>
          </li>
          <li>
            <Link >Projects</Link>
          </li>
          <li>
            <Link >Blog</Link>
          </li>
          <li>
            <Link >Let's Chat</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
