import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-sm navbar-light bg-light">


  <div class="container-fluid">

  <a class="navbar-brand" href="#">Barahona Realty</a> 
    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <span class="navbar-toggler-icon"></span>
    </button>
  

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Casa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/mycontracts">Contratos</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/newcontracts">Nuevo Contrato</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/information">Informacion</a>
        </li>

      <form class="d-flex justify-content-end" action="/sign-in">
        <button class="btn btn-light btn-sm btn-outline-secondary">Ingresar</button>
      </form>
      </ul>
    </div>


  </div>
</nav>
  )
}

export default Navbar; 