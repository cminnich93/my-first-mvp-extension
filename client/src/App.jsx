import React from 'react';
import videoBg from "./videoBg.mp4"
import Navbar from "./Navbar";
import Mission from "./components/Mission";
import Resources from "./components/Resources";
import Create from "./components/Create";
import SignUp from "./components/Signup";
import "./App.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/mission":
      Component = <Mission />;
      break;
    case "/resources":
      Component = <Resources />;
      break;
    case "/create":
      Component = <Create />;
      break;
    case "/signup":
      Component = <SignUp />;
      break;
    default:
      Component = null; 
  }

  return (
    <>
      <Navbar />
      <Main />
      <div className="container">{Component}
      <div className="App">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
      
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <div className="bottom-text">
        NATURE • TECHNOLOGY • DESIGN
      </div>
    </>
  );
}


export default App;