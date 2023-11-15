import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import networking from './images/networking.jpg';
import eventBOlt from './images/boltEvent.png';
function Events() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(topPosition < windowHeight - 1800);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '100%', paddingTop: '100px', position: 'relative', top: '-700px' }}>

            <div style={{ width: '85%', margin: '0 auto', position: 'relative' }}>
                <div id="fadeInElement" className={isVisible ? 'fade-in-left visible MainTitle' : 'fade-in-left MainTitle'}>
                    <h2 style={{ margin: '0' }}>Our Events</h2>
                </div>
                <br></br>
                <div className='EventList'>

                    <div className={isVisible ? 'zoom-in visible EventTiles' : 'zoom-in EventTiles'}>
                        <div className='photo'>
                            <img src={eventBOlt} style={{ width: '100%' }} />
                        </div>
                        <div style={{ paddingLeft: '18px', paddingTop: '23px' }}><b style={{ fontSize: '25px', margin: '0' }}>Bolt Connect</b></div>
                        <div style={{ paddingLeft: '18px' }}><p style={{ fontSize: '15px', color: '#666', margin: '0' }}>October 21, 2023</p></div>
                    </div>
                    <div className={isVisible ? 'zoom-in visible EventTiles' : 'zoom-in EventTiles'}>
                        <div className='photo'>
                            <img src={eventBOlt} style={{ width: '100%' }} />
                        </div>
                        <div style={{ paddingLeft: '18px', paddingTop: '23px' }}><b style={{ fontSize: '25px', margin: '0' }}>Bolt Connect</b></div>
                        <div style={{ paddingLeft: '18px' }}><p style={{ fontSize: '15px', color: '#666', margin: '0' }}>October 21, 2023</p></div>
                    </div>
                    <div className={isVisible ? 'zoom-in visible EventTiles' : 'zoom-in EventTiles'}>
                        <div className='photo'>
                            <img src={eventBOlt} style={{ width: '100%' }} />
                        </div>
                        <div style={{ paddingLeft: '18px', paddingTop: '23px' }}><b style={{ fontSize: '25px', margin: '0' }}>Bolt Connect</b></div>
                        <div style={{ paddingLeft: '18px' }}><p style={{ fontSize: '15px', color: '#666', margin: '0' }}>October 21, 2023</p></div>
                    </div>

                </div>
                {isVisible && (
                    <motion.div
                        initial={{
                            width: '40px',
                            height: '35px',
                            padding: '10px'
                        }}
                        animate={{
                            width: '150px',
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: 'backInOut',
                        }}
                        style={{
                            position: 'absolute',
                            borderRadius: '500px',
                            backgroundColor: '#623CE8',
                            translateY: '20%',
                            color: 'white',
                            textAlign: 'center',
                            right: '0'
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
                                className='becomeourpartner'>See More</motion.p>
                        )}
                    </motion.div>

                )}
            </div>

        </div>
    );
}

export default Events;
