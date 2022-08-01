import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navigation/Navbar';
import './Register.css'; 
//import { SignUp } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [fname, setFname] = useState(''); 
    const [lname, setLname] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');  
    let navigate = useNavigate(); 

    const[errorMessage, setErrorMessage] = useState(null); 

    async function signUp(event) {

      try {
          event.preventDefault(); 
          let name = fname + " " + lname;
          let username = email; 
          const { user } = await Auth.signUp({ 
              username,
              password, 
              attributes: {
                name, 
                email
              }
          });
          console.log(user);
          navigate('/'); 

      } catch (error) {
          setErrorMessage(error); 
          console.log('error signing up:', error[0]);
      }
}

// onSubmit={signUp} 
    return (
        <div>
        <Navbar/>
        <form onSubmit={signUp} className='container'>
          <div class='sign-up-box' id='box'>
              <h2>Usuario Nuevo</h2>
              <div className='names-container'>
                <label for="fname"><b>Nombre</b></label>
                <input className='sign-up-input' type="text" placeholder='Nombre' name='fname' value={fname} onChange={event => setFname(event.target.value)}/>

                <label for="lname"><b>Apellido</b></label>
                <input className='sign-up-input' type="text" placeholder='Apellido' name='lname' value={lname}  onChange={event => setLname(event.target.value)}/>
              </div>
              <label for="email"><b>Correo Electronico</b></label>
              <input className='sign-up-input' type="text" placeholder='Correo Electronico' name='psw' value={email} onChange={event => setEmail(event.target.value)}/>

              <label for="psw"><b>Contraseña</b></label>
              <input className='sign-up-input'type="password" placeholder='Contraseña' name='psw' value={password} onChange={event => setPassword(event.target.value)}/>


              <button type='submit' value="Register">Registrar</button>
              
              <div className='center'>
                <a href='/sign-in'>Usuario Existente</a>
              </div>
              
          </div>
        </form>
        
      </div>
    )
}

export default Register;