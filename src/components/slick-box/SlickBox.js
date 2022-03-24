    import React from 'react';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Carousel from "react-elastic-carousel";
    import style from './SlickBox.module.css';

    import Floor1 from '../../assets/floor1.jpg';
    import Floor2 from '../../assets/floor2.jpg';
    import Floor3 from '../../assets/floor3.jpg';
    import Floor4 from '../../assets/floor4.jpg';
    import Floor5 from '../../assets/spreed_floor2.png';
    import Floor6 from '../../assets/spreed_floor1.jpg';
    import Floor7 from '../../assets/spredd-floor3.jpg';
    import Floor8 from '../../assets/spreed_floor4.jpg';

    const SlickBox = () => {

        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 300, itemsToShow: 2},
            { width: 600, itemsToShow: 3},
            { width: 900, itemsToShow: 4},
            { width: 1200, itemsToShow: 5},
            { width: 1500, itemsToShow: 6},
        ]

        return (
            < div className={style.slick_box}>
                <h1 style={{ textAlign: "center", marginBottom:'26px'}}>Галерея</h1>
                    <Carousel breakPoints={breakPoints}>
                        <img src={Floor1} alt=""/>
                        <img src={Floor5} alt=""/>
                        <img src={Floor6} alt=""/>
                        <img src={Floor4} alt=""/>
                        <img src={Floor7} alt=""/>
                        <img src={Floor8} alt=""/>
                        <img src={Floor2} alt=""/>
                        <img src={Floor3} alt=""/>
                    </Carousel>
            </div>
        );
    };

    export default SlickBox;