    import React from 'react';
    import './AboutUs.css';
    import {BsFillHouseFill} from "react-icons/bs";
    import style from "../navbar/Navbar.module.css";
    import logo from "../../assets/logo_site_footer.jpg";

    const AboutUs = () => {
        return (
            <div className='about_us'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1><span>Vpol</span>Prod</h1>
                </div>
                <div className='description'>
                    Опытные специалисты и современное оборудование.<br/>
                    Делаем все виды стяжки пола.
                </div>
            </div>
        );
    };

    export default AboutUs;