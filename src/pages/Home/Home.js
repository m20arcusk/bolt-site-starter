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
function Home() {
    const { scrollY } = useViewportScroll();

    // Create a negative scroll value based on current scroll position
    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 300]);


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
                <div style={{height: '100px'}}></div>
                <Events />
                <JoinUs/>
            </div>
        </body>
    );
}

export default Home;
