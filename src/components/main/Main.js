import React, {useEffect} from 'react';
import Best from "../best/Best";
import SearchElement from "../search-element/SearchElement";
import SlickBox from "../slick-box/SlickBox";
import {HomeWrapper} from "../style";
import Order from "../order/Order";

const Main = () => {

    return (
        <div>
            <SearchElement/>
            <Order/>
            {/*<Best/>*/}
            <HomeWrapper>
                <SlickBox/>
            </HomeWrapper>
        </div>
    );
};

export default Main;