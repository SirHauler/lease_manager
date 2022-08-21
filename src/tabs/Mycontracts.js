import React, { useState, useEffect} from "react";
import Navbar from "../components/Navigation/Navbar";
import "./Mycontracts.css"; 
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import PropertyBox from "../components/PropertyBox";
import { DataStore } from "@aws-amplify/datastore";
import { Todo, Properties} from "../models";


const Mycontracts = () => {
    const navigate = useNavigate();

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [address, setAddress] = useState(''); 
    const [cost, setCost] = useState(0); 
    const [isRented, setIsRented] = useState(false); 
    const [rentAmount, setRentAmount] = useState(0); 
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false); 
    const [buttonName, setButtonName] = useState('Nueva Propiedad')
    const [contractList, setContractList] = useState([]); 
    
    useEffect(() => {
        Auth.currentAuthenticatedUser().then((user) => {
            setName(user.attributes.name); 
            setEmail(user.attributes.email); 
            setUsername(user.attributes.name + "_" + user.attributes.email); 

          });

          setItems(); 
        // createItem(); 
    }, []);



    async function setItems() {
        console.log('this is the username', username); 
        const models2 = await DataStore.query(Properties, c => c.username('eq', username)); 
        console.log('These are the results of the query', models2); 
        console.log('This is the length of the model', models2.length); 
        for (let i = 0; i < models2.length; i++) {
          setContractList([...contractList, <PropertyBox address={address} cost={cost} rentAmount={rentAmount} description={description} username={username}/>]); 
        }
    }
    function updateButtonName() {
        if (buttonName === 'Nueva Propiedad') {
            setButtonName('Cancelar'); 
        } else {
            setButtonName('Nueva Propiedad'); 
        }
    }



    function createNewContract () {
        setContractList([...contractList, <PropertyBox address={address} cost={cost} rentAmount={rentAmount} description={description} username={username}/>]); 
        UpdateDropDown(); 
    }; 

    function clearForm() {
        setAddress(''); 
        setCost(''); 
    }

    function UpdateDropDown() {
        if (show) {
            setShow(false); 
        } else {
            setShow(true); 
        }
        updateButtonName(); 
    }
    
    return (
        <div>
            <Navbar showSignOut={true}/>
            <p>Here you go {username}</p>

            {show && <form onSubmit={createNewContract} className='container'>
          <div className='sign-in-box'>
            <h2>Crear Propiedad</h2>
            
              <label for="uname"><b>Direccion</b></label>
              <input type="text" placeholder='Direccion' name='uname' value={address} onChange={event => setAddress(event.target.value)}/>

              <label for="psw"><b>Costo</b></label>
              <input type="number" placeholder='Costo' name='cost' value={cost} onChange={event => setCost(parseInt(event.target.value))}/>

              <label for="psw"><b>Monto de Renta</b></label>
              <input type="text" placeholder='Monto de Renta' name='montoderenta' value={rentAmount} onChange = {event => setRentAmount(event.target.value)}/>

              <label for="psw"><b>Actualmente Rentado</b></label>
              <input type="text" placeholder='Costo' name='isRented' value={isRented} onChange={event=>setIsRented(event.target.value)}/>

              <label for="psw"><b>Descripcion</b></label>
              <input type="text" placeholder='Descripcion' name='isRented' value={description} onChange={event=>setDescription(event.target.value)}/>

              <select name="cars" id="cars">
                <option value="volvo">True</option>
                <option value="saab">False</option>
              </select>

              <button type='submit'>Ingresar</button>
              <div className='center'>
                <a className="register-link"href='/sign-up'>
                    Registrar
                </a>
              </div>
          </div>
        </form>}
            <div className="contracts-container">
                <button className="btn btn-secondary btn-lg" id="createPropertyButton" onClick={UpdateDropDown}>{buttonName}</button>
                <div className="itemContainer">
                    {
                        contractList
                        // contractList.map(contract => (
                        //     <PropertyBox address={contract.address} cost={contract.price} rentAmount={contract.rent} description={contract.description} username={contract.username}/>
                        // ))
                    }
                    
                </div>
            </div>

        </div>

    ); 
}

// () => setCount() syntax is ideal for using it inline

export default Mycontracts;