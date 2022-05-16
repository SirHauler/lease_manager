import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from './logo.svg';
import Navbar from "./Navigation/Navbar.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Better late than never?</h1>
      </header>
    </div>
  );
}

export default App;
