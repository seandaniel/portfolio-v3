import React from 'react';

import './blog.scss';

// assets
import article1Image from './assets/article1Image.jpeg';
import article2Image from './assets/article2Image.jpeg';
import article3Image from './assets/article3Image.jpeg';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="blog-container">
      <a href="https://medium.com/dev-genius/modern-loops-in-javascript-9980ee4ae9e3" target="_blank" rel="noopener noreferrer">
        <img src={article3Image} alt="A ferris wheeling spinning imitating a loop" />
        <div className="h3-icon-container">
          <h3>Modern Loops in JavaScript</h3>
          <p><FaExternalLinkAlt /></p>
        </div>
      </a>
      <a href="https://medium.com/dev-genius/javascript-array-methods-6a0f4dd28767" target="_blank" rel="noopener noreferrer">
        <img src={article1Image} alt="Looking down at a hopscotch game that goes up to the number 10" />
        <div className="h3-icon-container">
          <h3>[JavaScript] Array Methods</h3>
          <p><FaExternalLinkAlt /></p>
        </div>
      </a>
      <a href="https://medium.com/@seandanieldev/3-free-tools-that-will-help-you-as-a-web-developer-af86cf297b5c" target="_blank" rel="noopener noreferrer">
        <img src={article2Image} alt="An apple computer monitor that displays the words 'Do More'" />
        <div className="h3-icon-container">
          <h3>3 Free Tools That Will Help You as a Web Developer</h3>
          <p><FaExternalLinkAlt /></p>
        </div>
      </a>
    </div>
  )
}

export default Blog;