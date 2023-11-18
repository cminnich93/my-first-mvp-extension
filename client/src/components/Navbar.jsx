import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ecolab</h1>
      <div className="links">
        <ul>
          <li><Link to="/mission">Mission</Link></li>
          <li><Link to="/challenge">Challenge</Link></li>
          <li><Link to="/share">Share</Link></li>
        </ul>
      </div>
      <div className="bio">
        <p><b>ECOLAB is a platform that was established to empower the public to create innovative design solutions by, for, and with nature while advancing humanity.</b></p>
      </div>
    </nav>
  );
}

export default Navbar;
