import React from 'react';
import style from './ContactList.module.css';
import {BiPhone} from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import {RiFacebookCircleLine} from "react-icons/ri";
import {AiOutlineInstagram} from "react-icons/ai";
import {Link} from "react-router-dom";

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
            <p className={style.contacts}><Link to='/contacts' className={style.contacts}><HiOutlineMail
                className={style.icon}/>vpolprod@gmail.com</Link></p>
            <p className={style.contacts}>
                <a href="https://www.facebook.com/vpolprod/" target="_blank" className={style.contacts}><RiFacebookCircleLine
                    className={style.icon}/><span>facebook</span></a>
            </p>
            <p className={style.contacts}><a href="https://www.instagram.com/vpolprod/"
                                             target="_blank"
                                             className={style.contacts}><AiOutlineInstagram
                className={style.icon}/><span>instagram</span></a>
            </p>
        {/*    <div>*/}
        {/*        <a*/}
        {/*            className={style.order_number}*/}
        {/*            href="tel:+375291684450">*/}
        {/*            <div><BiPhone className={style.order_icon}/></div>*/}
        {/*            +375(29)1684450*/}
        {/*        </ a>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <a*/}
        {/*            className={style.order_number}*/}
        {/*            href="https://www.facebook.com/vpolprod/" target="_blank">*/}
        {/*            <RiFacebookCircleLine className={style.order_icon}/>*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*    <div><a href="https://www.instagram.com/vpolprod/" target="_blank"><AiOutlineInstagram*/}
        {/*        className={style.order_icon}/></a></div>*/}
        {/*    <div><Link to='/contacts'><HiOutlineMail className={style.order_icon}/></Link></div>*/}
        </div>
    );
};

export default ContactList;


//        <div className={style.contact_list}>
//             <h3>Контакты</h3>
//             <p className={style.contacts}><span className={style.contacts}><BiPhone className={style.icon}/>+375(29)1684450</span>
//             </p>
//             <p className={style.contacts}><Link to='/contacts' className={style.contacts}><HiOutlineMail
//                 className={style.icon}/>vpolprod@gmail.com</Link></p>
//             <p className={style.contacts}>
//                 <a href="https://www.facebook.com/vpolprod/" target="_blank" className={style.contacts}><RiFacebookCircleLine
//                     className={style.icon}/><span>facebook</span></a>
//             </p>
//             <p className={style.contacts}><a href="https://www.instagram.com/vpolprod/"
//                                              target="_blank"
//                                              className={style.contacts}><AiOutlineInstagram
//                 className={style.icon}/><span>instagram</span></a>
//             </p>
//         </div>


//        <div className='contact_list'>
//             <h3>Contacts</h3>
//                 <p className='contacts'><BiPhone className='icon'/>+375(29)<span className='phone_nums'>7579733</span></p>
//                 <p className='contacts'><HiOutlineMail className='icon'/><span
//                     className='email_nums'>vpolprod@gmail.com</span></p>
//                 <a href="https://www.facebook.com/vpolprod/" className='contacts'><RiFacebookCircleLine
//                     className='icon'/><span className='email_nums'>www.facebook.com/vpolprod</span></a>
//                 <a href="https://www.instagram.com/vpolprod/" className='contacts'><AiOutlineInstagram
//                     className='icon'/><span className='email_nums'>https://www.instagram.com/vpolprod</span></a>
//         </div>