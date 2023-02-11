import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let token = localStorage.getItem('idToken');

    return token ? children : <Navigate to='/login' />
};

export default PrivateRoute;
