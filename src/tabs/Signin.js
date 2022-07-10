import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Signin.css'
import Navbar from '../components/Navigation/Navbar';

function Signin() {
    return (
      <div>
        <Navbar/>
        <form method='post' className='container'>
          <div className='sign-in-box'>
            <h2>Ingresar</h2>
              <label for="uname"><b>Correo</b></label>
              <input type="text" placeholder='Correo Electronico' name='uname' required/>

              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder='Contraseña' name='psw' required/>

              <button type='submit'>Ingresar</button>
              <div className='center'>
                <a className="register-link"href='/sign-up'>
                    Registrar
                </a>
              </div>
              
          </div>
        </form>
      </div>
        
    )
}
export default Signin;
