import React, { useRef } from "react";

import classes from "./ContactUs.module.css";

const ContactUS = () => {
    const name = useRef('');
    const email = useRef('');
    const phoneNumber = useRef('');

    const contactFormSubmitHandler = async (event) => {
        event.preventDefault();

        const userData = {
            name: name.current.value,
            email: email.current.value,
            phoneNumber: phoneNumber.current.value,
        }; 
        // console.log('contactus',userData);
        const response = await fetch('https://react-http-2e904-default-rtdb.firebaseio.com/userData/userData.json', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
        const data =await response.json();
        console.log(data);
    }

  return (
    <React.Fragment>
      <h1 className={classes.contactHeading}>Contact Us</h1>
      <form onSubmit= {contactFormSubmitHandler} className={classes.contactform}>
        <div className={classes.contactField}>
          <label className={classes.contactLable}>Name</label>
          <input
            ref={name} 
            className={classes.contactInput}
            type="text"
            placeholder="name"
            required
          />
        </div>
        <div className={classes.contactField}>
          <label className={classes.contactLable}>Email address</label>
          <input
            ref={email}
            className={classes.contactInput}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div className={classes.contactField}>
          <label className={classes.contactLable}>Phone Number</label>
          <input
            ref={phoneNumber}
            className={classes.contactInput}
            type="tel"
            placeholder="phone number"
            required
          />
        </div>
        <button className={classes.contactSubmit}>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default ContactUS;
