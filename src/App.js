import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./AppRouter";


function App() {
    return (
        <div className='main_wrapper'>
            <BrowserRouter>
            <Navbar/>
            <div className="container_app">
                <AppRouter/>
            </div>
           <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
