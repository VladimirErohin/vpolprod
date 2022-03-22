import React from 'react';
import style from './PricePage.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomizedTables from "../../table/Table";
import {BiPhone} from "react-icons/bi";

const PricePage = () => {
    return (
        <div className={style.prices_page}>
            <div className={style.prices_title}><h1>Цены</h1></div>
            <StyledEngineProvider injectFirst>
            <CustomizedTables/>
            </StyledEngineProvider>
            <div className={style.correct_price}>
               <div><span className={style.star}>*</span>точная цена за метр кв. по телефону</div>
               <div>
                   <a
                       className={style.order_phone}
                       href="tel:+375291684450">
                       <BiPhone className={style.order_icon}/>
                       <span className='order_number'>+375(29)1684450</span>
                   </ a>
               </div>
            </div>
        </div>
    );
};

export default PricePage;