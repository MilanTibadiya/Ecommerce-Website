import React, { useState} from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('ID'); //for when refresh page data set in settoken,dont login again
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token; //!! is trick of js 2nd ! for val available or nor && 1st ! give boolean for that true/false

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('ID', token); //inseted data always on string here we already have otherwise sringify data
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('ID');
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
    <AuthContext.Provider value={contextValue}> 
      {props.children} 
    </AuthContext.Provider>)
};

export default AuthContext;