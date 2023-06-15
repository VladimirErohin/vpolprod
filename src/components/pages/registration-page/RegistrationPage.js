import React, {useState, useEffect, useRef} from 'react';
import {TextField} from "@mui/material";
import {Button, Typography} from "@material-ui/core";
import axios from "axios";

const RegistrationPage = () => {

    const form = useRef();
    const [check, setCheck] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [dataOfField, setDataOfField] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isEmailUser, setEmailUser] = useState({emailUser: ''});
    const [token, setToken] = useState('');
    const [isShowPage, setIsShowPage] = useState(false)

    useEffect(() => {
        // fetch('http://localhost:5000/api') //работает только так без proxy:
        //     .then(res => res.json())
        //     .then(res => setData(res.message))
        //     //.then(res => console.log(res.message))
        //getData()

        if (isSignUp && !token) {
            registrationUser(dataOfField.email, dataOfField.password)
        }

        if (dataOfField.email && dataOfField.password && token) {
            loginUser(dataOfField.email, dataOfField.password)
            console.log(dataOfField.email, dataOfField.password, 'when response after login')
        }

        if (isSignUp && isShowPage) {
            remoteUser(isEmailUser.emailUser)
            setEmailUser({emailUser: ''})
        }
    }, [isSignUp, check])

    async function registrationUser(email, password) {
        const response = await axios.post("http://localhost:5000/api/user/registration", {
            email: email,
            password: password
        });
        setDataOfField({
            name: '',
            email: '',
            password: '',
        })
         setToken(response.data.token)
        // localStorage.setItem('myToken', response.data.token)
        console.log(response.data, 'response registration email')
    }

    async function loginUser(email, password) {
        const response = await axios.post("http://localhost:5000/api/user/login", {email: email, password: password});
        if (response.status === 200) {
            setIsShowPage(!isShowPage)
        }
        setDataOfField({
            email: '',
            password: '',
        })
        setCheck(!check)
        console.log(response.status)
        console.log(response, "response login")
    }

    async function remoteUser(email) {
        await axios.delete(`http://localhost:5000/api/user/${email}`);
        setDataOfField({
            name: '',
            email: '',
            password: '',
        })
        console.log('REMOTE WORK')
    }

    // async function getData() {
    //     const response = await axios.get("http://localhost:5000/api/user/8");
    //     //const response = await axios.get("http://localhost:5000/api/posts/1");
    //     console.log(response)
    //     //setData(response.data.message);
    //     setData(response.data.name_person);
    // }


    const handleChange = (e) => {
        console.log(e.target)
        if (e.target.name === "email") {
            setEmailUser({emailUser: e.target.value})
        }
        console.log(e.target.name, 'target element')
        setDataOfField(pr => ({
            ...pr,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSignUp) {
            setIsSignUp(!isSignUp)
        }
        setCheck(!check)
    }

    console.log(dataOfField)
    console.log(isSignUp, 'isSignUp')
    console.log(isEmailUser, 'EMAIL')
    console.log(token, 'THIS TOKEN')
    console.log(isShowPage, 'isShowPage')

    return (
        <div style={{
            margin: "90px 0 30px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: "center",
            height: "49vh"
        }}>
            {isShowPage
                ? <div>Hello! You are on your page!</div>
                : <div>
                    <Typography variant="h4" component="h2">
                        {!isSignUp ? "Registration" : "Login"}
                    </Typography>
                    <form ref={form} onSubmit={handleChange} style={{display: "flex", flexDirection: "column"}}>
                        {!isSignUp &&
                        <TextField
                            type="text"
                            variant="outlined"
                            size='small'
                            label={"Имя"}
                            name="name"
                            onChange={handleChange}
                            value={dataOfField.name}
                            required
                            id="outlined-required"
                            margin="dense"
                        />
                        }
                        <TextField
                            type="text"
                            variant="outlined"
                            size='small'
                            label={"email"}
                            name="email"
                            value={dataOfField.email}
                            onChange={handleChange}
                            required
                            id="outlined-required"
                            margin="dense"
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            size='small'
                            label={"Пароль"}
                            name="password"
                            value={dataOfField.password}
                            onChange={handleChange}
                            required
                            id="outlined-required"
                            margin="dense"
                        />
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            type="submit"
                            value="Send"
                            style={{backgroundColor: "#75c7d0", color: 'white'}}
                            // style={!dataOfField.email || !dataOfField.password
                            //     ? {backgroundColor: "#ccecf0", color: 'white'}
                            //     : {backgroundColor: "#75c7d0", color: 'white'}}
                            // disabled={!dataOfField.email || !dataOfField.password}
                        >
                            {!isSignUp ? 'Зарегистрироваться' : 'Логин'}
                        </Button>
                    </form>
                </div>

            }
            <Typography style={{color: "blue"}}
                        onClick={() => setIsSignUp(!isSignUp) && setIsShowPage(!isShowPage)}
            >{!isSignUp ? '' : 'Выйти'}
            </Typography>
            {/*<div>{!data ? <p>LOADING..</p> : data}</div>*/}
        </div>
    );
};

export default RegistrationPage;