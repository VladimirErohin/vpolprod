import React from 'react';
import SearchElement from "../search-element/SearchElement";
import SlickBox from "../slick-box/SlickBox";
import {HomeWrapper} from "../style";
import Order from "../order/Order";

const Main = () => {

    return (
        <div>
            <SearchElement/>
            <div className="container_app">
                <Order/>
                <HomeWrapper>
                    <SlickBox/>
                </HomeWrapper>
            </div>
        </div>
    );
};

export default Main;