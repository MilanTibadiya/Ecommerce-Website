import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [loading , setLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

 setLoading(true);
 let url;
    if (isLogin) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken : true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
         setLoading(false);

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
      authCtx.login(data.idToken);
    })
    .catch((err) => {
      alert(err.message)
    })
  }
// console.log(loading)
  
return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={classes.actions}>
          {loading && <p>Sending request...</p> }
          {!loading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;