
import React from "react";
import Navbar from "./components/Navigation/Navbar.js";
import './App.css';
import Home from "./components/Home/FrontPage.js";



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
