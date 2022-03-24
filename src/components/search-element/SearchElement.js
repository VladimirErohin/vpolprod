import React from 'react';
import style from './SearchElement.module.css';

const SearchElement = () => {
    return (
        <div className={style.search}>
            <div className={style.content}>
                <h1 className={style.content_title} >Выберите лучший вариант Вашего пола</h1>
                <div className={style.search_text}>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Стяжка пола предназначена</span> для выравнивания поверхности перед  “финишной отделкой” (ламинат, плитка, паркет, линолеум и др.), а также скрывает коммуникации(сантехнические, электрические инженерные линии).<br/>
                    </div>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Подготовка под стяжку - опция,</span> которая  позволяет создать слой тепло-шумо изоляции, из таких материалов как пенополистерол(пенопласт/пеноплекс),  керамзит(сыпучий материал), рулонные материалы(пленка/стенафон).<br/>
                    </div>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Толщина и подготовка под стяжку пола зависит от</span> нескольких факторов:<br/>
                        - какое основание перед подготовкой под стяжку пола,<br/>
                        - дальнейшее эксплуатация помещения в котором производим стяжку пола,<br/>
                        - внешние воздействующие природные/механические факторы.<br/>
                    </div>
                    <div className={style.description_item}>
                        <span className={style.description_step}>Рекомендуемая толщина стяжки пола</span> от 4мм и более, также рекомендуем пользоваться консультацией специалиста, который с практического и технического опыта предложит лучший вариант Вашего будущего пола.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchElement;