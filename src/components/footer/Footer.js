import React from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa';
import {BiPhone} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {ContactForm} from "../form-contact/ContactForm";
import AboutUs from "../about-us/AboutUs";
import ContactList from "../contact-list/ContactList";
import {Link} from "react-router-dom";

const Footer = () => {

    const options = [
        {id:1, option:'Стяжка пола без подготовки'},
        {id:2, option:'Стяжка пола с подготовкой'},
        {id:3, option:'Стяжка пола армированная'},
        {id:4, option:'Стяжка пола керамзитобетонная'},
    ];

    return (
        <div className='footer'>
            <div className="container">
                <div className="col">
                    <Link to='./main'><AboutUs/></Link>
                </div>
                <div className="col">
                    <h3>Услуги</h3>
                    {options.map(el=><p key={el.id}><Link to='./options' className="info">{el.option}</Link></p>)}
                </div>
                <div className="col">
                    <ContactList color={true}/>
                </div>
                <div className="col">
                    <h3>Информация</h3>
                    <p><a href = '/main' className="info">Главная</a></p>
                    <p><a href = '/options' className="info">Услуги</a></p>
                    <p><a href = '/prices' className="info">Цены</a></p>
                    <p><a href = '/contacts' className="info">Контакты</a></p>
                </div>
            </div>
            {/*<div className="social">*/}
            {/*    <FaFacebook className='icon'/>*/}
            {/*    <FaInstagram className='icon'/>*/}
            {/*    <FaTwitter className='icon'/>*/}
            {/*    <FaPinterest className='icon'/>*/}
            {/*</div>*/}
            <div className="downs_block">
                <div><h1><span>Vpol</span>Prod</h1></div>
                <div>Все права защищены © 2022 г.</div>
                <div>vyultidis.сom</div>
            </div>
        </div>
    );
};

export default Footer;

//                    <p><Link to='./main' className="info">Главная</Link></p>
//                     <p><Link to='./options' className="info">Услуги</Link></p>
//                     <p><Link to='./prices' className="info">Цены</Link></p>
//                     <p><Link to='./contacts' className="info">Контакты</Link></p>