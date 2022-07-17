import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Addinformation from './tabs/Addinformation';
import Signup from './tabs/Register';
import Signin from './tabs/Signin';
import Mycontracts from './tabs/Mycontracts';
import Newcontracts from './tabs/Newcontract';
import { PrivateRoute } from './routes/PrivateRoute';


const verifyTokenAPIURL = "https://spsnp9xeei.execute-api.us-east-1.amazonaws.com/prod/verify";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
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
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();