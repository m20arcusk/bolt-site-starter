import React from 'react';
import { motion } from "framer-motion";
import styles from './css/navbar.css';
import logo from '../../images/logo/bolt.png';
import LogoLoading from '../loading/loading';


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
    
    const handleAboutClick = () => {
        const logoElement = document.getElementById('logo');
        const NavBar = document.getElementById('NavBar');
        const NavBarContents = document.getElementById('NavBarContents');
        const NavBarLogo = document.getElementById('logo_animation');


        NavBar.classList.remove("nav_bar");
        NavBar.classList.add("nav_bar_close");
        NavBarContents.classList.remove("nav_bar_content");
        NavBarContents.classList.add("nav_bar_content_show_none");
        NavBarLogo.classList.remove("nav_bar_logo");
        NavBarLogo.classList.add("nav_bar_logo_animate");
    }

    return (
        <div>
            <div className="nav_bar" id="NavBar">
                <div className="nav_bar_content" id="NavBarContents">
                    <img src={logo} style={logo_style} />
                    <p style={selected_text_style}>Home</p>
                    <div className="nav_bar_rest">
                        <div style={borderLine}></div>
                        <p
                            className="nav_bar_text"
                            onClick={handleAboutClick}
                        >
                            About
                        </p>
                        <div style={gap}></div>
                        <p className="nav_bar_text">Events</p>
                        <div style={gap}></div>
                        <p className="nav_bar_text">Team</p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Navbar;
