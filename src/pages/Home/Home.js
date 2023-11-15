import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import RequiredStyle from '../../styles/required.css';
import Scrollstyle from '../../styles/ScrollAnimation.css';
import style from './css/style.css';
import logo from '../../images/logo/bolt_dog.png';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import FirstPageText from './components/first_page_text/first_page_text';
import Sponsors from './components/Sponsors/sponsors';
import Events from './components/Events/Events';
import OurMission from './components/OurMission/OurMission';
import Loading from '../../components/loading/loading';
import JoinUs from './components/JoinUs/JoinUs';
function Home() {
    const { scrollY } = useViewportScroll();

    // Create a negative scroll value based on current scroll position
    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 300]);


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
                <motion.img src={logo} className='main_dog_image' style={{ y: slowerScroll }} />
                <FirstPageText />
                <div style={{ height: '100%', width: '100%' }}></div>
                <Sponsors />
                <OurMission />
                <Events />
                <JoinUs/>
            </div>
            <Loading />
        </body>
    );
}

export default Home;
