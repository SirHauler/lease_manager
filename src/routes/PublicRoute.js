import React from "react";
import { Route } from "react-router-dom";
import { getToken } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ element: Element, ...rest}) => {
    const navigate = useNavigate(); 
    return (
        <Route
        {...rest}
        render = {(props) => {
            return !getToken() ? Element: 
            navigate('/mycontracts'); 
        }}
        />
    )
}

export default PublicRoute; 