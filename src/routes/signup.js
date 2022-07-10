import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import './Signin.css'; 


const Signup = () => {
    return (
        <div>
        <Navbar/>
        <form method='post' className='container'>
          <div className='sign-up-box'>
              <label for="uname"><b>Nombre de Usuario</b></label>
              <input type="text" placeholder='Nombre De Usuario' name='uname' required/>


              <label for="email"><b>Correo Electronico</b></label>
              <input type="text" placeholder='Correo Electronico' name='psw' required/>

              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder='Contraseña' name='psw' required/>
              

              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder='Ingrese Contraseña De Nuevo' name='psw' required/>

              <button type='submit'>Registrar</button>
              <a href='/sign-in'>Eres Usuario?</a>
          </div>
        </form>
      </div>
    )
}

export default Signup;