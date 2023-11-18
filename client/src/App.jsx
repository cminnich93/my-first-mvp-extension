import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Challenge from "./components/Challenge";
import Share from "./components/Share";
import video from "./video/background-video.mp4";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="title">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1 style={{ fontSize: '6rem' }}>Ecolab</h1> 
            <div className="paragraph">
              <p><b>ECOLAB is a platform that was established to empower the public to create innovative design solutions by, for, and with nature while advancing humanity.</b> </p>
            </div>
          </Link>
          <Navbar />
          <Switch>
            <Route path="/mission" component={Mission} />
            <Route path="/challenge" component={Challenge} />
            <Route path="/share" component={Share} />
            <Route path="/" exact>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
