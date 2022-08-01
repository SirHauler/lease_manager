import React from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate(); 

  const RouteToSignIn = (event) =>  {
    event.preventDefault(); 
    
    navigate('/sign-in'); 
  }

  return (
    <div className='mainDiv' >
      <div className='homePage' id='background'>
      </div>


      <div className="slide-right"  id='logoid' onClick={event => RouteToSignIn(event)}>
      <h1 id= "logoName">Barahona Realty</h1>
      </div>

      <button type='submit' id="fixedButton" onClick={event=> RouteToSignIn(event)}>
        Ingresar
      </button>


    </div>
  );
};

export default Home;