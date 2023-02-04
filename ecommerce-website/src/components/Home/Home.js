import React from "react";

import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
        <header className={classes.header1}> 
        <h1>The Generics</h1>
        <button className={classes['latest-album']}>Get our Latest Album</button>
        <button className={classes['play-btn']}>►</button>
    </header>
    <section id="tours" className={classes['tour-container']}>
        <h2>TOURS</h2>
        <div>
            <div className={classes['tour-item']}>
                <span className={classes['tour-date']}>JUL16</span>
                <span className={classes['tour-place']}>DETROIT, MI</span>
                <span className={classes['tour-spec-place']}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes['buy-btn']}>BUY TICKETS</button>
            </div>

            <div className={classes['tour-item']}>
                <span className={classes['tour-date']}>JUL19</span>
                <span className={classes['tour-place']}>TORONTO,ON</span>
                <span className={classes['tour-spec-place']}>BUDWEISER STAGE</span>
                <button className={classes['buy-btn']}>BUY TICKETS</button>
            </div>
            <div className={classes['tour-item']}>
                <span className={classes['tour-date']}>JUL 22</span>
                <span className={classes['tour-place']}> BRISTOW, VA</span>
                <span className={classes['tour-spec-place']}>JIGGY LUBE LIVE</span>
                <button className={classes['buy-btn']}>BUY TICKETS</button>
            </div>
            <div className={classes['tour-item']}>
                <span className={classes['tour-date']}>JUL 29</span>
                <span className={classes['tour-place']}>PHOENIX, AZ</span>
                <span className={classes['tour-spec-place']}> AK-CHIN PAVILION</span>
                <button className={classes['buy-btn']}>BUY TICKETS</button>
            </div>
            <div className={classes['tour-item']}>
                <span className={classes['tour-date']}>AUG 2</span>
                <span className={classes['tour-place']}>LAS VEGAS, NV</span>
                <span className={classes['tour-spec-place']}>T-MOBILE ARENA</span>
                <button className={classes['buy-btn']}>BUY TICKETS</button>
            </div>
        </div>
    </section>
    </div>
    );
}

export default Home;