import React, {useRef, useState} from 'react';
import {Button, CircularProgress, TextField} from "@material-ui/core";
import './ContactForm.css';
import emailjs from 'emailjs-com';
import {Alert} from "@mui/material";

export const ContactForm = () => {
    const form = useRef();
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs.sendForm('service_76tw56d', 'template_xopibqi', e.target, 'user_eoZpWLg4KeRR7ElWOr2t0')
            .then((result) => {
                if (result.status === 200) {
                    setAlert(true)
                    setLoading(false)
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='form_email'>
            {loading
                ? <CircularProgress color="inherit" style={{color: '#d2d2d7', marginTop: "10px"}}/>
                : ''}
            {alert
                ? <Alert
                    severity="success"
                    style={{marginTop: "10px", width: '90%'}}>
                    Хорошая работа! <br/>Сообщение отправленно!</Alert>
                : ''}
            <TextField
                type="text"
                variant="outlined"
                size='small'
                label={"Имя"}
                name="name"
                style={{marginTop: "10px", borderRadius: '4px', backgroundColor: 'white', width: '90%'}}
                required
                id="outlined-required"
            />
            <TextField
                type="email"
                variant="outlined"
                size='small'
                label={"Ваш email"}
                name="email"
                style={{marginTop: "10px", borderRadius: '4px', backgroundColor: 'white', width: '90%'}}
                required
                id="outlined-required"
            />
            <TextField
                type="text"
                variant="outlined"
                size='small'
                label={"Тема"}
                name="subject"
                style={{marginTop: "10px", borderRadius: '4px', backgroundColor: 'white', width: '90%'}}
                required
                id="outlined-required"/>
            <TextField
                type="text"
                variant="outlined"
                size='small'
                label={"Сообщение"}
                name="message"
                multiline
                rows={5}
                rowsMax={10}
                style={{marginTop: "10px", borderRadius: '4px', backgroundColor: 'white', width: '90%'}}
                required
                id="outlined-required"/>
            <Button
                variant="contained"
                type="submit"
                value="Send"
                style={{marginTop: "10px", backgroundColor: "#75c7d0", color: 'white'}}
            >
                Отправить
            </Button>
        </form>
    );
};