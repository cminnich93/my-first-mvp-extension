import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Challenge from './components/Challenge';
import Share from './components/Share';
import Designs from './components/Designs';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';




function App() {
  return (
    <>
      <div className="title">
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          </Link>
        </div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/challenge" element={<Challenge/>} />
          <Route path="/share" element={<Share/>} />
          <Route path="/designs" element={<Designs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
