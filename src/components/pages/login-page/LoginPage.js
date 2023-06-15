import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const LoginPage = () => {

    return (
        <>
            <Link to='/registration' >
                <Button
                    variant="contained"
                    type="submit"
                    value="Send"
                    style={{width:"100%"}}
                >Войти
                </Button>
            </Link>

        </>
    );
};

export default LoginPage;