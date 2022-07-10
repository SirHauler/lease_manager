import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navigation/Navbar';
import './Signup.css'; 

const Signup = () => {
    return (
        <div>
        <Navbar/>
        <form method='post' className='container'>
          <div class='sign-up-box' id='box'>
              <h2>Usuario Nuevo</h2>
              <div className='names-container'>
                <label for="fname"><b>Nombre</b></label>
                <input className='sign-up-input' type="text" placeholder='Nombre' name='fname' required></input>

                <label for="fname"><b>Apellido</b></label>
                <input className='sign-up-input' type="text" placeholder='Apellido' name='lname' required></input>
              </div>

              <label for="email"><b>Correo Electronico</b></label>
              <input className='sign-up-input' type="text" placeholder='Correo Electronico' name='psw' required/>

              <label for="psw"><b>Contraseña</b></label>
              <input className='sign-up-input'type="password" placeholder='Contraseña' name='psw' required/>
              
              <label for="psw"><b>Contraseña</b></label>
              <input className='sign-up-input' type="password" placeholder='Ingrese Contraseña De Nuevo' name='psw' required/>

              <button type='submit'>Registrar</button>
              <div className='center'>
                <a href='/sign-in'>Usuario Existente</a>
              </div>
          </div>
        </form>
      </div>
    )
}

export default Signup;