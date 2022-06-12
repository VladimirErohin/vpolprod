import React from 'react';
import style from './ContactList.module.css';
import {BiPhone} from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import {RiFacebookCircleLine} from "react-icons/ri";
import {AiOutlineInstagram} from "react-icons/ai";
import {SiViber} from "react-icons/si";

const ContactList = ({}) => {

    return (
        <div className={style.contact_list}>
            <h3>Контакты</h3>
            <a href="tel:+375291684450"
               className={style.contacts}>
                <span className={style.contacts}>
                    <BiPhone className={style.icon}/>
                    <span className={style.order_number}>+375(29)1684450</span>
                </span>
            </a>
    <p className={style.contacts}><a href='/contacts' className={style.contacts}><HiOutlineMail
        className={style.icon}/>vpolprod@gmail.com</a></p>
    <p className={style.contacts}>
        <a href="https://www.facebook.com/vpolprod/" target="_blank" className={style.contacts}><RiFacebookCircleLine
            className={style.icon}/><span>facebook</span></a>
    </p>
    <p className={style.contacts}><a href="https://www.instagram.com/vpolprod/"
                                     target="_blank"
                                     className={style.contacts}><AiOutlineInstagram
        className={style.icon}/><span>instagram</span></a>
    </p>
            <a className={style.contacts}
               href="viber://chat?number=%2B375291684450">
            <span className={style.contacts}>
                    <SiViber className={style.icon}/>
                <span>viber</span>
                </span>
            </a>
</div>
)
    ;
};

export default ContactList;