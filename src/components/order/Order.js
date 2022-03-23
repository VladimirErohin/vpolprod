import React from 'react';
import './Order.css';
import Picture from '../../assets/order.jpg';
import {RiFacebookCircleLine} from "react-icons/ri";
import {AiOutlineInstagram} from "react-icons/ai";
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/hi";
import {BiPhone} from "react-icons/bi";

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
                            <a href="https://www.facebook.com/vpolprod/" target="_blank"><RiFacebookCircleLine className='order_icon'/></a>
                            <a href="https://www.instagram.com/vpolprod/" target="_blank"><AiOutlineInstagram className='order_icon'/></a>
                            <Link to='/contacts'><HiOutlineMail className='order_icon'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;