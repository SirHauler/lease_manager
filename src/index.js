import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Addinformation from './tabs/AddInfo/Addinformation';
import Signup from './tabs/Register';
import Signin from './tabs/Signin';
import Mycontracts from './tabs/Mycontracts';
import Newcontracts from './tabs/Newcontract';
import { PrivateRoute } from './routes/PrivateRoute';
import ConfirmSignUp from './tabs/Confirmsignup';
import FrontPage from './components/Home/FrontPage'; 
import {createRoot} from 'react-dom/client'; 
import { PubSub } from 'aws-amplify';
import { Amplify, Auth, API} from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import amplify from './aws-exports';




Amplify.configure(amplify);
Auth.configure(amplify); 
PubSub.configure(amplify); 
DataStore.configure(amplify); 
API.configure(amplify); 
DataStore.start(); 

const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement); 

// const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/mycontracts" element={
        <PrivateRoute>
          <Mycontracts/>
        </PrivateRoute>
      }/>
      <Route path="/newcontracts" element = {
        <PrivateRoute>
          <Newcontracts/>
        </PrivateRoute>
      }/>
      <Route path="/information" element = {<Addinformation/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/confirm-sign-up" element={<ConfirmSignUp/>}/>      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();