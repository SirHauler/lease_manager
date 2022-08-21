import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
//import {NavLink} from "react-router-dom";
import "./Navbar.css"; 
import { Auth } from "aws-amplify";

const Navbar = (props) => {


  const navigate = useNavigate();
  async function signOut() {
      try {
          await Auth.signOut();
          await DataStore.clear(); // remove local data
          navigate("/sign-in"); 
      } catch (error) {
          console.log('error signing out: ', error);
      }
  } 


  const [name, setName] = useState(); 
  const [email, setEmail] = useState(); 
  
  useEffect(() => {
      Auth.currentAuthenticatedUser().then((user) => {
          setName(user.attributes.name); 
          setEmail(user.attributes.email); 
        }); 
  }, []); 


    return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">


  <div className="container-fluid">

  <a className="navbar-brand" href="/">Barahona Realty</a> 
    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <span className="navbar-toggler-icon"></span>
    </button>
  
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Casa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mycontracts">Contratos</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/newcontracts">Nuevo Contrato</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/information">Informacion</a>
        </li>

        <form className="d-flex justify-content-end">
          {!props.showSignOut && <button className="btn btn-secondary btn-sm" id="sign-in-button">Ingresar</button>}
        </form>

          {props.showSignOut && <button className="btn btn-secondary btn-sm" id="sign-in-button" onClick={signOut}>Terminar Session</button>}
        <form className="d-flex justify-content-end">
          {props.showSignOut && <button className="btn btn-primary btn-sm" id="personalInfoButton">Hola, {name}</button>}
        </form>


      </ul>
    </div>


  </div>
</nav>
  )
}

export default Navbar; 