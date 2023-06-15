import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ContactPage from './components/pages/contacts/ContactPage';
import Main from "./components/main/Main";
import OptionsPage from "./components/pages/options/OptionsPage";
import PricePage from "./components/pages/price/PricePage";
import HomePage from "./components/pages/home-page/HomePage";
import LoginPage from "./components/pages/login-page/LoginPage";
import RegistrationPage from "./components/pages/registration-page/RegistrationPage";

const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route path='/main' component={Main}/>
                <Route path='/contacts' component={ContactPage}/>
                <Route path='/options' component={OptionsPage}/>
                <Route path='/prices' component={PricePage}/>
                <Route path='/home' component={HomePage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/registration' component={RegistrationPage}/>
                <Redirect to='/main'/>
            </Switch>
        </>
    );
};

export default AppRouter;