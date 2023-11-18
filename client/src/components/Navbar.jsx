import React from 'react';
import { ScrollLink } from 'react-scroll';
import './Navbar.css';
import photo2 from './photo2.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ecolab</h1>
      <div className="links">
        <ul>
          <li><ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500}>HOME</ScrollLink></li>
          <li><ScrollLink to="mission" spy={true} smooth={true} offset={50} duration={500}>MISSION</ScrollLink></li>
          <li><ScrollLink to="challenge" spy={true} smooth={true} offset={50} duration={500}>CHALLENGE</ScrollLink></li>
          <li><ScrollLink to="share" spy={true} smooth={true} offset={50} duration={500}>SHARE</ScrollLink></li>
        </ul>
      </div>
      <div className="bio">
        <p>
          <span></span>
          <span>Ecolab is a platform that was established to empower people of all</span>
          <span> disciplines to create innovative design solutions by, for, and with</span>
          <span>nature while advancing humanity.</span>
        </p>
      </div>
      <img src={photo2} alt="My Photo" style={{ width: '580px', height: '600px' }} />
      <p>Neri Oxman: Material Ecology, 2020, The Museum of Modern Art, New York </p>
    </nav>
  );
}

export default Navbar;
