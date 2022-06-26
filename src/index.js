import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mycontracts from './routes/mycontracts';
import Newcontracts from './routes/newcontract';
import Addinformation from './routes/addinformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/mycontracts" element={<Mycontracts/>}/>
      <Route path="/newcontracts" element = {<Newcontracts/>}/>
      <Route path="/information" element = {<Addinformation/>}/>
    </Routes>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();