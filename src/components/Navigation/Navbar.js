import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Barahona Realty
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
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
    </div>
  </nav>)
}

export default Navbar; 