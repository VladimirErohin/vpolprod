import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import Test from "./test/Test";
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
                {/*<Featured/>*/}
            </div>
           <Footer/>
            {/*<Test/>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
