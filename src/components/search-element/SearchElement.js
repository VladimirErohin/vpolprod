import React from 'react';
import style from './SearchElement.module.css';
import {SiViber} from "react-icons/si";
import {RiFacebookCircleLine} from "react-icons/ri";
import {AiOutlineInstagram} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import Currency from "../currency/Currency";
import Weather from "../weather/Weather";

const SearchElement = () => {
    return (
        <div className={style.search}>
            <div className={style.content}>
                <h1 className={style.content_title}>Стяжка пола</h1>
                <div className={style.dismantling_title}>Демонтаж</div>
                <div className={style.contacts}>
                    <div className={style.contacts_title}><span>Выезд-консультация</span> специалиста на Ваш объект
                    </div>
                    <div className={style.contacts_list}>
                        <a
                            className={style.order_phone}
                            href="tel:+375291684450">
                            <span className='order_number'>+375(29)168-44-50</span>
                        </ a>
                        <div className={style.list_icons}>
                            <a href="viber://chat?number=%2B375291684450"><SiViber className={style.contact_icon_viber}/></a>
                            <a href="https://www.facebook.com/vpolprod/" target="_blank"><RiFacebookCircleLine className={style.contact_icon}/></a>
                            <a href="https://www.instagram.com/vpolprod/" target="_blank"><AiOutlineInstagram className={style.contact_icon}/></a>
                            <a href='/contacts'><HiOutlineMail className={style.contact_icon}/></a>
                        </div>
                    </div>
                </div>

                <div className={style.general_info}>
                    <div><Currency/></div>
                    <div className={style.general_info_weather}><Weather/></div>
                </div>

                <div className={style.search_text}>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Стяжка пола предназначена</span> для выравнивания
                        поверхности перед “финишной отделкой” (ламинат, плитка, паркет, линолеум и др.), а также
                        скрывает коммуникации(сантехнические, электрические инженерные линии).<br/>
                    </div>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Подготовка под стяжку - опция,</span> которая позволяет
                        создать слой тепло-шумо изоляции, из таких материалов как пенополистерол(пенопласт/пеноплекс),
                        керамзит(сыпучий материал), рулонные материалы(пленка/стенафон).<br/>
                    </div>
                    <div className={style.description_item}>
                        <span
                            className={style.description_step}>Толщина и подготовка под стяжку пола зависит от</span> нескольких
                        факторов:<br/>
                        - какое основание перед подготовкой под стяжку пола,<br/>
                        - дальнейшее эксплуатация помещения в котором производим стяжку пола,<br/>
                        - внешние воздействующие природные/механические факторы.<br/>
                    </div>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Рекомендуемая толщина стяжки пола</span> от 4мм и
                        более, также рекомендуем пользоваться консультацией специалиста, который с практического и
                        технического опыта предложит лучший вариант Вашего будущего пола.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchElement;