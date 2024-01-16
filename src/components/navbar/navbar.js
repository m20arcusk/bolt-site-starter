import React from 'react';
import { motion } from "framer-motion";
import styles from './css/navbar.css';
import logo from '../../images/logo/bolt.png';
import LogoLoading from '../loading/loading';
import LoadingLeave from '../loading/loadingLeave';

const Navbar = () => {
    const selected_text_style = {
        color: '#515151',
        margin: '0',
        fontWeight: '800',
        fontSize: '18px',
        position: 'relative',
        top: '11px',
        paddingLeft: '14px',
    }

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
                    <img src={logo} style={logo_style} />
                    <a href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p style={selected_text_style}>Home</p>
                    </a>
                    <div className="nav_bar_rest">
                        <div style={borderLine}></div>
                        <a href={'/aboutus'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="nav_bar_text">
                                About
                            </p>
                        </a>
                        <div style={gap}></div>
                        <a href={'/events'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="nav_bar_text">Events</p>
                        </a>
                        <div style={gap}></div>
                        <p className="nav_bar_text">Team</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;
