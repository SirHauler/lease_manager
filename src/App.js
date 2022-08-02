
import React from "react";
import Navbar from "./components/Navigation/Navbar.js";
import './App.css';
import Home from "./components/Home/home.js";

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Home/>
    </div>
  );
}

// import { Amplify } from 'aws-amplify';


// // import '@aws-amplify/ui-react/styles.css';

// // import awsExports from './aws-exports';
// // Amplify.configure(awsExports);

// function App({ signOut, user }) {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//     </div>

//   );
// }

export default App; 
