import React, { useState, useEffect } from "react";
import { getToken } from "../service/AuthService";
import { useNavigate, Navigate } from "react-router-dom";
import {ValidateToken} from "../service/ValidateToken"; 
import { Auth } from "aws-amplify";


export const PrivateRoute = ({ children }) => {

    let navigate = useNavigate(); 
    async function checkAuthState() {
        try {
          await Auth.currentAuthenticatedUser(); 
        } catch (err) {
        //   props.history.push(route)
          navigate("/sign-in")
        }
      }
      useEffect(() => {
        checkAuthState()
      })

    return children; 
}; 

