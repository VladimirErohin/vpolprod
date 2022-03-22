import React, { useRef } from 'react';
import {Button, TextField} from "@material-ui/core";
import './ContactForm.css';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_76tw56d', 'template_xopibqi', e.target, 'user_eoZpWLg4KeRR7ElWOr2t0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='form_email' >
            <TextField
                type="text"
                variant="outlined"
                size='small'
                label={"Name"}
                name="name"
                style={{ marginTop: "10px", borderRadius:'4px', backgroundColor:'white', width:'60%'}}/>
            <TextField
                type="email"
                variant="outlined"
                size='small'
                label={"Email"}
                name="email"
                style={{ marginTop: "10px", borderRadius:'4px', backgroundColor:'white', width:'60%'}}/>
                <TextField
                    type="text"
                    variant="outlined"
                    size='small'
                    label={"Subject"}
                    name="subject"
                    style={{ marginTop: "10px",borderRadius:'4px', backgroundColor:'white', width:'60%'}}/>
                <TextField
                    type="text"
                    variant="outlined"
                    size='small'
                    label={"Message"}
                    name="message"
                    multiline
                    rows={5}
                    rowsMax={10}
                    style={{ marginTop: "10px", borderRadius:'4px', backgroundColor:'white'}}/>
            <Button variant="outlined" type="submit" value="Send" style={{marginTop: "10px", backgroundColor:'#75c7d0', color:'white'}}>Отправить</Button>
        </form>
    );
};