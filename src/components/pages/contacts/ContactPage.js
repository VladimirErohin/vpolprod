import React from 'react';
import './ContactPage.css';
import {ContactForm} from "../../form-contact/ContactForm";
import ContactList from "../../contact-list/ContactList";

const ContactPage = () => {
    return (
        <div className='contact_page'>
            <div className='contacts_data'>
                <ContactList/>
            </div>
            <div className='form'>
                <h1>Отправить сообщение</h1>
                <ContactForm/>
            </div>
        </div>
    );
};

export default ContactPage;