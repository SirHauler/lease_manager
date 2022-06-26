import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navigation/Navbar.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        
        <h1> Better late than never?</h1>
        <text> Actually this might have been a bad idea... </text>
        <text> On another note this site is under construction!</text>
      </header>
    </div>
  );
}

export default App;
