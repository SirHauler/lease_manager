import React, { useState } from "react";
import Navbar from "../components/Navigation/Navbar";
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";

const ConfirmSignUp = () => {
    const [username, setUsername] = useState(''); 
    const [code, setCode] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(null); 
    let navigate = useNavigate(); 

    async function confirmSignUp(event) {
        console.log('is this accessed'); 
        try {
        event.preventDefault(); 
        await Auth.confirmSignUp(username, code);
        console.log('Success')

        // if you get this far then the confirmation is done
        navigate('/')
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <div>
        <Navbar/>
        <form onSubmit={confirmSignUp} className='container'>
          <div className='sign-in-box'>
            <h2>Confirmar Registro</h2>
              <label for="uname"><b>Correo</b></label>
              <input type="text" placeholder='Correo Electronico' name='uname' value={username} onChange={event => setUsername(event.target.value)}/>

              <label for="psw"><b>Codigo</b></label>
              <input type="text" placeholder='Codigo' name='code' value={code}  onChange={event => setCode(event.target.value)}/>

              <button type='submit'>Confirmar</button>
              {errorMessage && <p className='message'>{errorMessage}</p>}
              
          </div>
        </form>
      </div>

    )
}

export default ConfirmSignUp; 