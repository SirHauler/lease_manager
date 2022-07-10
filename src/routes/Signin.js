import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './signup.css'
import Navbar from '../components/Navigation/Navbar';

function Signin() {
    return (
      
      <div>
        <Navbar/>
        <form method='post' className='container'>
          <div className='sign-up-box'>
              <label for="uname"><b>Usuario</b></label>
              <input type="text" placeholder='Nombre De Usuario' name='uname' required/>

              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder='Contraseña' name='psw' required/>

              <button type='submit'>Ingresar</button>
              <a className= "register-link" href='/sign-up'>
                Registrar
              </a>
          </div>
        </form>
      </div>
        
    )
}
export default Signin;
