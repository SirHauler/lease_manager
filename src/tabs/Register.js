import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navigation/Navbar';
import './Register.css'; 
import axios from 'axios';



const registerAPIURL = REACT_APP_registerAPIURL || process.env.REACT_APP_registerAPIURL; 
const x_api_key = REACT_APP_x_api_key || process.env.REACT_APP_x_api_key; 


const Register = () => {

    const [fname, setFname] = useState(''); 
    const [lname, setLname] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [message, setMessage] = useState(null); 

    const submitHandler = (event) => {
      event.preventDefault(); 
      if (email.trim() === '' || fname.trim() === '' || lname.trim() === '' || password.trim() === '') {
        setMessage('All fields are required');
      }
      setMessage(null); 
      const requestConfig = {
        headers: {
          "x-api-key": x_api_key
        }
      }

      const requestBody = {
        email: email, 
        fname: fname, 
        lname: lname, 
        password: password
      }
      axios.post(registerAPIURL, requestBody, requestConfig).then(response => {
        setMessage('Registration Successful'); 
        

      }).catch(error => {
        if (error.response.status === 401 || error.response.status === 403) {
          setMessage(error.response.data.message); 
        } else {
          setMessage('sorry...backend is down. try again later')
        }
      }); 
    }
    return (
        <div>
        <Navbar/>
        <form onSubmit={submitHandler} className='container'>
          <div class='sign-up-box' id='box'>
              <h2>Usuario Nuevo</h2>
              <div className='names-container'>
                <label for="fname"><b>Nombre</b></label>
                <input className='sign-up-input' type="text" placeholder='Nombre' name='fname' value={fname} onChange={event => setFname(event.target.value)}/>

                <label for="fname"><b>Apellido</b></label>
                <input className='sign-up-input' type="text" placeholder='Apellido' name='lname' value={lname}  onChange={event => setLname(event.target.value)}/>
              </div>
              <label for="email"><b>Correo Electronico</b></label>
              <input className='sign-up-input' type="text" placeholder='Correo Electronico' name='psw' value={email} onChange={event => setEmail(event.target.value)}/>

              <label for="psw"><b>Contraseña</b></label>
              <input className='sign-up-input'type="password" placeholder='Contraseña' name='psw' value={password} onChange={event => setPassword(event.target.value)}/>


              <button type='submit' value="Register">Registrar</button>
              {message && <p className='message'>{message}</p>}
              <div className='center'>
                <a href='/sign-in'>Usuario Existente</a>
              </div>
              
          </div>
        </form>
        
      </div>
    )
}

export default Register;