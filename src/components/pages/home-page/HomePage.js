import React from 'react';
import {Redirect} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{marginTop:'100px', minHeight:'100vh'}}>
            This is your Home page!
            {/*<Redirect to="/login" />*/}
        </div>
    );
};

export default HomePage;