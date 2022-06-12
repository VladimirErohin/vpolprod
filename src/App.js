import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./AppRouter";


function App() {
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
