import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import photo2 from './photo2.jpg';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Ecolab</h1>
      <div className="links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/mission">MISSION</Link></li>
          <li><Link to="/challenge">CHALLENGE</Link></li>
          <li><Link to="/share">SHARE</Link></li>
        </ul>
      </div>
      {location.pathname === '/' && (
        <div>
          <div className="bio">
            <p>
              <span></span>
              <span>Ecolab is a platform that was established to empower people of</span>
              <span> all disciplines to create innovative design solutions by, for, and</span>
              <span>with nature while advancing humanity.</span>
            </p>
          </div>
          <img src={photo2} alt="My Photo" style={{ width: '580px', height: '700px' }} />
           <p className="specific-paragraph-style">Neri Oxman: Material Ecology, 2020, The Museum of Modern Art, New York </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
