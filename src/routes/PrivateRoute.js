import React from "react";
import { getToken } from "../service/AuthService";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    if (!getToken()) {
        return <Navigate to="/sign-in"/>
    }
    return children; 
}; 

