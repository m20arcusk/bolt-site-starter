import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import networking from './images/networking.jpg';
import eventBOlt from './images/boltEvent.png';

import img1 from '../../../events-page/images/1.jpg';
import img2 from '../../../events-page/images/2.jpg';
import img3 from '../../../events-page/images/3.jpg';
import img4 from '../../../events-page/images/4.jpg';
import img5 from '../../../events-page/images/5.jpg';


function EventsMobile() {


    return (
        <div className='eventsBorderMobile'>
            <motion.h1
                className='OurEventsMobile'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 20 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 0.5,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >Our Events
            </motion.h1>

            <motion.div className='mobileEventTile'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 10 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                <div className='eventImgMobile'>
                    <img src={img1} style={{ width: '100%' }} />
                </div>
                <div className='eventContentMobile'>
                    <div>
                        <h2>Bolt Connect</h2>
                        <p style={{ margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                        </p>
                    </div>
                </div>
            </motion.div>
            <div style={{ height: '15px' }}></div>
            <motion.div className='mobileEventTile'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 10 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                <div className='eventImgMobile'>
                    <img src={img2} style={{ width: '100%' }} />
                </div>
                <div className='eventContentMobile'>
                    <div>
                        <h2>Data Beyond</h2>
                        <p style={{ margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                        </p>
                    </div>
                </div>
            </motion.div>
            <div style={{ height: '15px' }}></div>
            <motion.div className='mobileEventTile'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 10 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                <div className='eventImgMobile'>
                    <img src={img3} style={{ width: '100%' }} />
                </div>
                <div className='eventContentMobile'>
                    <div>
                        <h2>First Byte</h2>
                        <p style={{ margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default EventsMobile;
