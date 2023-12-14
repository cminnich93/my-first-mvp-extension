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
          <Route path="/" component={Home} />
          <Route path="/mission" component={Mission} />
          <Route path="/challenge" component={Challenge} />
          <Route path="/share" component={Share} />
          <Route path="/designs" component={Designs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </div>
    </>
  );
}

export default App;
