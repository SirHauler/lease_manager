
import React from "react";
import Navbar from "./components/Navigation/Navbar.js";
import './App.css';
import Home from "./components/Home/home.js";


// function App() {
//   return (
//     <div className="App">
//       <Navbar/>  
//       <Home/>
//     </div>
//   );
// }

import { Amplify } from 'aws-amplify';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>

  );
}

export default App; 
