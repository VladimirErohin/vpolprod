import React from 'react';
import {useSelector} from "react-redux";

const Currency = () => {

    const currencyData = useSelector((store) => store.currency.currencyData);

    const usd = currencyData.length > 0 ? currencyData.filter(el => el["Cur_ID"] === 431)[0]['Cur_OfficialRate'] : 'Валюта'

    console.log("USD", currencyData.filter(el => el["Cur_ID"] === 431))
    console.log("EUR", currencyData.filter(el => el["Cur_ID"] === 451))
    console.log("RUB", currencyData.filter(el => el["Cur_Abbreviation"] === "RUB"))
    //console.log(usd)

    return (
        <div>
            <div>$ {usd}</div>
        </div>
    );
};

export default Currency;