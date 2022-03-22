import React, {useEffect} from 'react';
import style from './OptionsPage.module.css';
import Floor1 from '../../../assets/floor1.jpg';
import Floor2 from '../../../assets/floor2.jpg';
import Floor3 from '../../../assets/floor3.jpg';
import Floor4 from '../../../assets/floor4.jpg';
import CardOptions from "../../card/CardOptions";

const OptionsPage = () => {

    let cards = [
        {id: 1, image:Floor1, title: 'Стяжка пола без подготовки',
            description:'Предназначена для выравнивания поверхности перед финишной отделкой пола'},
        {id: 2, image:Floor2, title: 'Подготовка керамзито-армированая под стяжку пола',
            description:'Предназначена для выравнивания "черновой" поверхности, тепло-гидро и шумоизоляции'},
        {id: 3, image:Floor3, title: 'Подготовка из тепло-гидроизоляциионного материала под стяжку пола',
            description:'Данная опция предназначена для тепло-изоляции.\n' +
                'Выполняется из экструдированного пенополистерола(пеноплекс) или пенополистерола(пенопласт) \n'},
        {id: 4, image:Floor4, title: 'Стяжка пола с армирующим фибро волокном',
            description:'Армирующее волокно пришло на смену металлической сетке.\n' +
                'Волокно делает стяжку практичнее и дешевле, если бы Вы использовали сетку \n'}
    ]

    return (
        <div className={style.options_page}>
            <div className={style.options_title}><h1>Услуги</h1></div>
            <div className={style.options_items}>
                {cards.map(card=><CardOptions card={card} key={card.id}/>)}
            </div>
        </div>
    );
};

export default OptionsPage;