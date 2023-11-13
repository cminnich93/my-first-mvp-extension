import React from 'react';
import Navbar from './components/Navbar';
import video from "./video/background-video.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="title">
        <h1>ECO LAB</h1>
        <Navbar />
        <p className='bottom-text'>NATURE TECHNOLOGY DESIGN</p>
      </div>
    </div>
  );
}







export default App;
