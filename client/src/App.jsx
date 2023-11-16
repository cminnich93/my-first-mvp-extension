import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Create from "./components/Create";
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
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1 style={{ fontSize: '4rem' }}>ECOLAB</h1>
          </Link>
          <Navbar />
          <Switch>
            <Route path="/mission" component={Mission} />
            <Route path="/projects" component={Projects} />
            <Route path="/create" component={Create} />
            <Route path="/" exact>
              <p className='bottom-text'>NATURE • TECHNOLOGY • DESIGN</p>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
