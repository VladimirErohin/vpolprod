import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ContactPage from './components/pages/contacts/ContactPage';
import Main from "./components/main/Main";
import OptionsPage from "./components/pages/options/OptionsPage";
import PricePage from "./components/pages/price/PricePage";

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path='/main' component={Main}/>
                <Route path='/contacts' component={ContactPage}/>
                <Route path='/options' component={OptionsPage}/>
                <Route path='/prices' component={PricePage}/>
                <Redirect to='/main'/>
            </Switch>
        </div>
    );
};

export default AppRouter;