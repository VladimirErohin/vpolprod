import React, {useState} from 'react';
import {IoIosMenu} from 'react-icons/io';
import {FaRegTimesCircle} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {RiFacebookCircleLine} from 'react-icons/ri';
import style from './Navbar.module.css';
import {Link} from "react-router-dom";
import logo from "../../assets/logo_site.png";
import {BiPhone} from "react-icons/bi";
import Currency from "../currency/Currency";
import Weather from "../weather/Weather";

const Navbar = () => {

    const [isShowMenu, setIsShowMenu] = useState(false);
    const handleIsShowMenu = () => setIsShowMenu(!isShowMenu);

    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <Link to='/main'>
                    <div className={style.logo}>
                        <img src={logo} style={{width: 150, height: 84}} alt="logo"/><h1><span>Vpol</span>Prod</h1>
                    </div>
                </Link>


                <ul className={isShowMenu ? style.nav_menu && style.active : style.nav_menu}>
                    <li onClick={handleIsShowMenu}><a href='/main'>Главная</a></li>
                    <li onClick={handleIsShowMenu}><a href='/options'>Услуги</a></li>
                    <li onClick={handleIsShowMenu}><a href='/prices'>Цены</a></li>
                    <li onClick={handleIsShowMenu}><a href='/contacts'>Контакты</a></li>
                    <li className={style.header_phone}><a href="tel:+375291684450">
                        <span>+375(29) 168-44-50</span>
                    </a></li>
                    <li style={{fontFamily:'Arial', color:'#75c7d0'}}><Currency/></li>
                    <li style={{fontFamily:'Arial', cursor:'pointer'}}><Weather/></li>
                    <li onClick={handleIsShowMenu}>
                        <div className={style.mail}>
                            {isShowMenu
                                ? <a href="https://www.facebook.com/vpolprod/" target="_blank"><RiFacebookCircleLine
                                    className={style.icon}/></a>
                                : <a href="https://www.facebook.com/vpolprod/"><RiFacebookCircleLine
                                    className={style.icon}/></a>
                            }
                            {isShowMenu
                                ? <a href="https://www.instagram.com/vpolprod/" target="_blank"><AiOutlineInstagram
                                    className={style.icon}/></a>
                                : <a href="https://www.instagram.com/vpolprod/"><AiOutlineInstagram
                                    className={style.icon}/></a>
                            }

                            <a href='/contacts'><HiOutlineMail className={style.icon}/></a>
                        </div>
                    </li>
                </ul>
                <div className={style.hamburger} onClick={handleIsShowMenu}>
                    {isShowMenu ? (<FaRegTimesCircle className={style.icon}/>) : (<IoIosMenu className={style.icon}/>)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;