import React from 'react';
import style from "./CardOptions.module.css";

const CardOptions = (props) => {
    const {card} = props;

    return (
        <div className={style.options_item} key={card.id}>
            <div className={style.tooltip}>
                <div>
                    <div className={style.description_info}>{card.description}</div>
                    <img src={card.image} alt=""/>
                </div>
            </div>
            <div className={style.description_wrapper}>
                <div className={style.item_title}>{card.title}</div>
            </div>
        </div>
    );
};

export default CardOptions;