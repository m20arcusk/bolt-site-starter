import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import RequiredStyle from '../../styles/required.css';
import Scrollstyle from '../../styles/ScrollAnimation.css';
import style from './css/style.css';
import logo from '../../images/logo/bolt_dog.png';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import BoltUBCTitle from './components/BoltUBCTitle/BoltUBCTitle';
import Sponsors from './components/Sponsors/sponsors';
import Events from './components/Events/Events';
import OurMission from './components/OurMission/OurMission';
import JoinUs from './components/JoinUs/JoinUs';

import BoltUBCTitleMobile from './components/BoltUBCTitleMobile/BoltUBCTitleMobile';
import SponsorsMobile from './components/SponsorsMobile/sponsorsMobile';
import EventsMobile from './components/EventsMobile/EventsMobile';
import OurMissionMobile from './components/OurMissionMobile/OurMissionMobile';
import JoinUsMobile from './components/JoinUsMobile/JoinUsMobile';


function Home() {
    const { scrollY } = useViewportScroll();

    // Create a negative scroll value based on current scroll position
    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 300]);



    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;

    /* Creating a regular expression  
    containing some mobile devices keywords  
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details 
    it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
        // mobile
        return (
            <body>
                <div className="area">

                    <motion.ul
                        className="circles"
                        style={{ y: fasterScroll }}
                    >
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </motion.ul>
                </div>
                <div className="context">

                    <Navbar />
                    <BoltUBCTitleMobile />
                    <SponsorsMobile />
                    <OurMissionMobile />
                    <div style={{ height: '50px' }}></div>
                    <EventsMobile />
                    <div style={{ height: '100px' }}></div>
                    <JoinUs />
                </div>
            </body>
        );
    } else {
        //desktop
        return (
            <body >
                <div className="area">

                    <motion.ul
                        className="circles"
                        style={{ y: fasterScroll }}
                    >
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </motion.ul>
                </div>

                <div className="context">

                    <Navbar />
                    <BoltUBCTitle />
                    <Sponsors />
                    <OurMission />
                    <div style={{ height: '100px' }}></div>
                    <Events />
                    <JoinUs />
                </div>
            </body>
        );
    }

}

export default Home;
