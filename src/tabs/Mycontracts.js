import React from "react";
import Navbar from "../components/Navigation/Navbar";
import "./Mycontracts.css"; 
import { getUser, resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
const Mycontracts = () => {
    const user = getUser(); 
    const fname = user !== 'undefined' && user ? user.fname: ''; 
    const lname = user !== 'undefined' && user ? user.lname: ''; 
    const navigate = useNavigate();
    const logoutHandler = () => {
        resetUserSession(); 
        navigate('/sign-in'); 
    }
    return (
        <div>
            <Navbar/>
            <div className="contracts-container">
                <h1>
                    My Contracts. Hello {fname}, {lname}.
                </h1>
                <input type='button' value='Logout' onClick={logoutHandler}></input>
            </div>
        </div>

    ); 
}


export default Mycontracts;