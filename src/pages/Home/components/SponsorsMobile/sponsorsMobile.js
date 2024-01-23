import React, { useState, useEffect } from 'react';
import { backInOut, motion, useTransform, useViewportScroll } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import ams from '../../../../images/Sponsors/ams.png';
import cus from '../../../../images/Sponsors/cus.png';
import mastercard from '../../../../images/Sponsors/mastercard.png';
import CPABC from '../../../../images/Sponsors/CPABC.png';
import uoft from '../../../../images/Sponsors/uoft.png';
function SponsorsMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(topPosition < windowHeight + 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '90%', position: 'relative', top: '30px' }}>
            {isVisible && (
                <motion.div

                    initial={{
                        width: '40px',
                        height: '35px'
                    }}
                    animate={{
                        width: '250px',
                        padding: '10px'
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: 'backInOut',
                    }}
                    style={{
                        margin: '0 auto',
                        borderRadius: '500px',
                        backgroundColor: '#623CE8',
                        translateY: '-25%',
                        color: 'white',
                        textAlign: 'center',

                    }}
                >


                    {isVisible && (
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 1.1,
                                ease: 'backInOut',
                            }}
                            className='becomeourpartner'>Become our partner</motion.p>
                    )}
                </motion.div>

            )}

            <motion.div id="fadeInElement" className={isVisible ? 'zoom-in visible' : ' zoom-in'} >
                <div className='SponsorListMobile'>
                    <h1 style={{ color: '#454545' }}>Title Sponsor </h1>
                    <img src={mastercard} className='mastercardStyleMobile' />
                    <div style={{ height: '30px' }}></div>
                    <hr></hr>
                    <h1 style={{ color: '#454545' }}>Sponsors </h1>
                    <img src={CPABC} className='cpabcStyleMobile' />
                    <img src={uoft} className='torontoStyleMobile' />
                    <div style={{ height: '180px' }}></div>
                    <hr></hr>
                    <h1 style={{ color: '#454545' }}>Affiliated </h1>
                    <img src={cus} className='cusStyleMobile' />
                    <img src={ams} className='amsStyleMobile' />
                </div>
            </motion.div>

        </div>
    );
}

export default SponsorsMobile;
