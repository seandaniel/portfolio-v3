import React from 'react';

import './footer.scss';

// assets
import mountainsFooter from './assets/mountains.svg';
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-container">
          <ul className="icons-ul">
            <li><a href="https://www.linkedin.com/in/sean-de-groot/" target="_blank" rel="noopener noreferrer" aria-label="Linked In"><FaLinkedin /></a></li>
            <li><a href="https://github.com/seandaniel" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaGithub /></a></li>
            <li><a href="https://twitter.com/seandanieldev" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaTwitter /></a></li>
            <li><a href="https://medium.com/@seandanieldev" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a></li>
          </ul>
          <div className="copyright-img-container">
            <div className="copyright-container">
              <p> &lt;img
                src="<a href="https://unsplash.com/@kyawthutun" target="_blank" rel="noopener noreferrer" aria-label="View Kyaw Tun's work" title="Kyaw Tun">KT</a>,
                <a href="https://unsplash.com/@jontyson" target="_blank" rel="noopener noreferrer" aria-label="View Jon Tyson's work" title="Jon Tyson"> JT</a>,
                <a href="https://unsplash.com/@carlheyerdahl" target="_blank" rel="noopener noreferrer" aria-label="View Carl Heyderdahl's work" title="Carl Heyerdahl"> CH</a>"/>
              </p>
              <p>© 2021 Sean de Groot</p>
            </div>
            <img src={mountainsFooter} alt="Three mountains with snow-peaked tops" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
