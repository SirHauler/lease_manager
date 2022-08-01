import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation/Navbar";
import "./Mycontracts.css"; 
import { getUser, resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../service/GetUser";
import { Auth } from "aws-amplify";
import { ConsoleLogger } from "@aws-amplify/core";





const Mycontracts = () => {


    const navigate = useNavigate();
    ;(async() => {
        try {
            await Auth.currentAuthenticatedUser(); 
        } catch(err) {
            navigate('/sign-in')
            console.log(err);  
        }
        
    })() 


    async function signOut() {
        try {
            await Auth.signOut();
            navigate("/sign-in"); 
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const [name, setName] = useState(); 
    const [email, setEmail] = useState(); 
    
    console.log("This is the user object")
    Auth.currentAuthenticatedUser().then((user) => {
        setName(user.attributes.name); 
        setEmail(user.attributes.email); 
      }); 

 
    return (
        <div>
            <Navbar/>
            <div className="contracts-container">
                <h1>
                    My Contracts. Hello {name}, {email}. 
                </h1>
                <input type='button' value='Logout' onClick={signOut}></input>
            </div>
        </div>

    ); 
}


export default Mycontracts;