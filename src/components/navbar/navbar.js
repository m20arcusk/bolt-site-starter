import React from 'react';
import { motion } from "framer-motion";
import styles from './css/navbar.css';
import logo from '../../images/logo/bolt.png';
import LogoLoading from '../loading/loading';
import LoadingLeave from '../loading/loadingLeave';

const Navbar = () => {
  

    const gap = {
        width: '20px',
    }

    const borderLine = {
        width: '20px',
        borderRight: '2px solid #515151',
        opacity: '0.5',
    }
    const logo_style = {
        width: '30px',
    };

    window.onbeforeunload = function () {
        var page = document.getElementById("page");

    };

    return (
        <div id="page">
            <div className="nav_bar" id="NavBar">
                <div className="nav_bar_content" id="NavBarContents">

                    <div className='NavBarHome'>
                        <img src={logo} style={logo_style} />
                        <a href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className='selected_text_style'>Home</p>
                        </a>
                    </div>
                    <div className="nav_bar_rest">
                        <div style={borderLine} className='hideForMobile'></div>
                        <div className='NavBarContentParts'>
                            <a href={'/aboutus'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className="nav_bar_text">
                                    About
                                </p>
                            </a>
                        </div>
                        <div className='NavBarContentParts'>
                            <div style={gap} className='hideForMobile'></div>
                            <a href={'/events'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className="nav_bar_text">Events</p>
                            </a>
                        </div>
                        <div className='NavBarContentParts'>
                            <div style={gap} className='hideForMobile'></div>
                            <p className="nav_bar_text">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;
