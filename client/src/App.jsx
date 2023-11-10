import './app.css'
import React from 'react';
import Navbar from "./Navbar";
import Resources from "./components/Resources";
import SignUp from "./components/Signup";
import Mission from "./components/Mission";
import Create from "./components/Create";
import { Route, Routes } from "react-router-dom"


function App() {
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = <App />
      break
    case "/mission":
      Component = <Mission />
      break
    case "resources":
      Component = <Resources />
      break
    case "create":
      Component = <Create />
      break
    case "signup":
      Component = <SignUp />
      break 
  }


  return (
     <>
      <Navbar />
     <div className="container">{component}</div>
    </>
  )   
}

export default App;
