import React from 'react';
import './Featured.css';

import House1 from '../../assets/house1.png';
import Bed1 from '../../assets/bed1.png';
import Bed2 from '../../assets/bed2.png';
import Kitchen from '../../assets/kitchen.png';
import Bathroom from '../../assets/bath2.png';

import House2 from '../../assets/house2.png';
import Bed3 from '../../assets/bed3.png';
import Bed4 from '../../assets/bed4.png';
import Bathroom1 from '../../assets/bath1.png';
import LivingRoom from '../../assets/living-room.png';


const Featured = () => {
    return (
        <div className='featured'>
            <h1 className="featured-text">Top Featured Listings</h1>
            <p className="featured-text">Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className="span-3 image-grid-row-2" src={House1} alt=""/>
                <img src={Bed1} alt=""/>
                <img src={Bed2} alt=""/>
                <img src={Kitchen} alt=""/>
                <img src={Bathroom} alt=""/>
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Asme St.Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>201 000 BYN</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bathroom:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bedroom:</p><p>3</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8.1</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>14BYN</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='span-2 right-img-details'>
                <p> Good Floor to Save Your Money</p>
                <button className='btn'>View Listing</button>
            </div>
            </div>


            <div className='container'>
                <img src={Bed4} alt="" className='order-2'/>
                <img src={Bed3} alt="" className='order-3'/>

                <img className='span-3 image-grid-row-2  order-1' src={House2} alt=""/>

                <img src={Bathroom1} alt="" className='order-4'/>
                <img src={LivingRoom} alt="" className='order-5'/>

                <div className='span-2 right-img-details order-7'>
                    <p> Good Floor to Save Your Money</p>
                    <button className='btn'>View Listing</button>
                </div>

                <div className='span-3 right-img-details order-6'>
                    <div className='top'>
                        <h2>123 Asme St.Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>100 000 BYN</p>
                    </div>

                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bathroom:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bedroom:</p><p>3</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8.1</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>14BYN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Featured;