import React from 'react';
import {BsFillHouseFill} from "react-icons/bs";
import style from './Test.module.css'

const Test = () => {
    return (
        <div className={style.navbar}>
            <div></div><h1><span><BsFillHouseFill/>Vpol</span>Prod</h1>
        </div>
    );
};

export default Test;