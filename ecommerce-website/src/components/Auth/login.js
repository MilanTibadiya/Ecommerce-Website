import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import classes from './login.module.css';

const Login = () => {
    const history = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
     console.log(enteredEmail,enteredPassword)

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTnveV-dKqhrKgMvNHcGtpIcy3EqFBPMc",
    {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true, //always 
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(res => {

   if (res.ok) {
     return res.json();
   } else {
     res.json().then(data => {   // Json also return promises milan
       let errorMessage = 'Authentication failed'
       if(data && data.error && data.error.message) {
       errorMessage = data.error.message
       }
     throw new Error(errorMessage);
     })
   }
 })
 .then((data) => {                          
  console.log(data.idToken);  
  localStorage.setItem('token', data.idToken);
   history('/products');
 })
 .catch((err) => {
   alert(err.message)
 })
    };

    return (
        <React.Fragment>
      <h1 className={classes.contactHeading}>Login</h1>
      <form onSubmit={submitHandler} className={classes.contactform}>
        
        <div className={classes.contactField}>
          <label className={classes.contactLable}>Email address</label>
          <input
            ref={emailInputRef}
            className={classes.contactInput}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div className={classes.contactField}>
          <label className={classes.contactLable}>Password</label>
          <input
            ref={passwordInputRef}
            className={classes.contactInput}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className={classes.contactSubmit}>Submit</button>
      </form>
    </React.Fragment>
    );
};

export default Login;