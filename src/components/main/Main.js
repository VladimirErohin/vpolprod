import React from 'react';
import SearchElement from "../search-element/SearchElement";
import SlickBox from "../slick-box/SlickBox";
import {HomeWrapper} from "../style";
import Order from "../order/Order";

const Main = () => {

    return (
        <div>
            <SearchElement/>
            <Order/>
            <HomeWrapper>
                <SlickBox/>
            </HomeWrapper>
        </div>
    );
};

export default Main;