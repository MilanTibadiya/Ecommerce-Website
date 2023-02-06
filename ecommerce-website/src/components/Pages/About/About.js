import React from "react";

import classes from './About.module.css'

const About = () => {
    return (
        <section className={classes.flex}>
        <div className={classes.about}>
            <div className={classes['about-heading']}>
                <h1>The Generics</h1>
            </div>
            <div className={classes['about-content']}>
                <h5>ABOUT</h5>
                <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure. </p>
                <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure. </p>
                <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure. </p>
            </div>
            <div className={classes.footer}>
                <p>footer section</p>
            </div>
        </div>
       
        </section>
    );
};

export default About;