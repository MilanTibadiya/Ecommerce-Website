import React, { useState, useEffect, useCallback} from "react";

let logoutTimer;  // when user manually logout we make timer clean

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getDate();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

const retriveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000) {  //1m t  msec
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
    };
}

export const AuthContextProvider = (props) => {
    const tokenData = retriveStoredToken();
    let initialToken;
    if(tokenData) {
        initialToken = tokenData.token; //for when refresh page data set in settoken,dont login again
    }
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token; //!! is trick of js 2nd ! for val available or nor && 1st ! give boolean for that true/false

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token); //inseted data always on string here we already have otherwise sringify data
        localStorage.setItem('expirationTime', expirationTime)
        //Auto logout & above find, follow firefox .........n

       const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(loginHandler, remainingTime); // cal in mili sec
    };
  
   useEffect(() => {
    if (tokenData) {
        console.log(tokenData.duration);
        logoutTimer = setTimeout(loginHandler, tokenData.duration); 
    }
   }, [tokenData, loginHandler]);

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