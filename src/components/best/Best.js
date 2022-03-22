import React from 'react';
import style from './Best.module.css';
import  Apt from '../../assets/1img.png';
import  Apt1 from '../../assets/2img.png';
import  Apt2 from '../../assets/3img.png';

const Best = () => {
    return (
        <div className={style.best}>
            <h1>Find The Best Option For Your Floor</h1>
            <div>
                <p><span className={style.bold}>All</span></p>
                <p>Stiazhka</p>
                <p>Stiazhka with options</p>
            </div>
            <div className={style.container}>
                <img src={Apt} alt=""/>
                <img src={Apt1} alt=""/>
                <img src={Apt2} alt=""/>
            </div>
        </div>
    );
};

export default Best;