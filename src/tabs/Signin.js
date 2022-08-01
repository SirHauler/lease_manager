import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Signin.css'
import Navbar from '../components/Navigation/Navbar';
import { Auth } from 'aws-amplify';


const Signin = (props) => {
    
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(null); 
    const navigate = useNavigate(); 

    // const submitHandler = (event) => {
      
    //   event.preventDefault(); 
    //   if (email.trim() === '' || password.trim() === '') {
    //     setErrorMessage('Both username and password are required');
    //     return; 
    //   }
    //   setErrorMessage(null);

    //   const requestConfig = {
    //     headers: {
    //       "x-api-key": x_api_key
    //     }
    //   }
    //   const requestBody = { 
    //     email: email, 
    //     password: password
    //   }

    //   axios.post(loginAPIURL, requestBody, requestConfig).then((response) => {
    //     console.log(response.data.user); 
    //     console.log(response.data.token); 
    //     setUserSession(response.data.user, response.data.token);  
    //     navigate('/mycontracts'); 
  
    //   }).catch((error) => {
    //     if (error.response.status === 401 || error.response.status === 403) {
    //       setErrorMessage(error.response.data.message); 
    //     } else {
    //       setErrorMessage('Server is down.'); 
    //     }
    //   })
    // }


    async function signIn(event) {
        try {
            event.preventDefault(); 
            let username = email; 
            await Auth.signIn(username, password);
            navigate('/mycontracts')
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    return (
      <div>
        <Navbar/>
        <form onSubmit={signIn} className='container'>
          <div className='sign-in-box'>
            <h2>Ingresar</h2>
              <label for="uname"><b>Correo</b></label>
              <input type="text" placeholder='Correo Electronico' name='uname' value={email} onChange={event => setEmail(event.target.value)}/>

              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder='Contraseña' name='psw' value={password}  onChange={event => setPassword(event.target.value)}/>

              <button type='submit'>Ingresar</button>
              <div className='center'>
                <a className="register-link"href='/sign-up'>
                    Registrar
                </a>
              </div>
              {errorMessage && <p className='message'>{errorMessage}</p>}
              
          </div>
        </form>
      </div>
        
    )
}
export default Signin;
