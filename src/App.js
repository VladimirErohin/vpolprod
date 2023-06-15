import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./AppRouter";
import {useDispatch} from "react-redux";
import {getCurrency} from "./redux/slices/currency/slice";
import CurrencyService from "./api/CurrencyServices";


function App() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            fetchDataCurrency()
        },
        []);

    async function fetchDataCurrency() {
        const currency = await CurrencyService.getCurrencyData();
        dispatch(getCurrency(currency))
    }

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
