import React from 'react';
import './Order.css';
import Picture from '../../assets/order.jpg';
import {RiFacebookCircleLine} from "react-icons/ri";
import {AiOutlineInstagram} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {BiPhone} from "react-icons/bi";
import {SiViber} from "react-icons/si";

const Order = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom:'26px'}}>Выезд-консультация</h1>
            <div className='order'>
                <div className='order_picture'><img src={Picture} alt=""/></div>
                <div className='order_description'><span className='description_step'>Выезд-консультация </span> специалиста на Ваш объект:<br/>
                    Обеспечит полную и объективную информацию, о количестве материала и времени на выполнения работ по стяжке пола.<br/>
                    Позволит уточнить и откорректировать другие строительные процессы/работы касающихся успешного выполнения устройство стяжки пола.<br/>
                    Звоните или пишите, будем рады Вам помочь.
                    <div>
                        <div className='order_contacts'>
                            <a
                                className='order_phone'
                                href="tel:+375291684450">
                                <BiPhone className='order_icon'/>
                                <span className='order_number'>+375(29)1684450</span>
                            </ a>
                            <a href="viber://mobile?number=+375297579733"><SiViber className='order_icon' style={{marginTop:1}}/></a>
                            <a href="https://www.facebook.com/vpolprod/" target="_blank"><RiFacebookCircleLine className='order_icon'/></a>
                            <a href="https://www.instagram.com/vpolprod/" target="_blank"><AiOutlineInstagram className='order_icon'/></a>
                            <a href='/contacts'><HiOutlineMail className='order_icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;