import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Challenge from './components/Challenge';
import Share from './components/Share';
import './App.css';



function App() {
  return (
    <Router>
      <div className="title">
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          </Link>
        </div>

        <Navbar />
        <Switch>
          <Route path="/mission" component={Mission} />
          <Route path="/challenge" component={Challenge} />
          <Route path="/share" component={Share} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
