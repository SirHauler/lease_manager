import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">
    Barahona Realty
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Casa
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className ="nav-link" to="/newcontracts">
           Nuevo Contrato
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mycontracts">Mis Contractos</NavLink> 
        </li>
        <li className="nav-item dropdown">
          <NavLink className = "nav-link" to="/information"> Information Addicional </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item navbar-right">
          <NavLink className = "nav-link" to="/sign-in">Ingresar</NavLink>
        </li>
      </ul>
    </div>
  </nav>)
}

export default Navbar; 