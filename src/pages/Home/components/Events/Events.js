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


function Events() {


    return (
        <div className='eventPageBorder'>
            <div className='PaddingEvents'>
                <motion.h1
                    className='OurEvents'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
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
                >Our Events
                </motion.h1>
                <motion.div className='eventBorder'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}>
                    <div className='eventImg'>
                        <img src={img1} style={{ width: '100%' }} />
                    </div>
                    <div >
                        <p className='eventTitle'>Bolt Connect</p>

                        <p className='eventContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </motion.div>
                <br></br>
                <motion.div className='eventBorder'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}>
                    <div className='eventImg'>
                        <img src={img2} style={{ height: '100%' }} />
                    </div>
                    <div>
                        <p className='eventTitle'>Data Beyond</p>

                        <p className='eventContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </motion.div>
                <br></br>
                <motion.div className='eventBorder'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}>
                    <div className='eventImg'>
                        <img src={img3} style={{ height: '100%' }} />
                    </div>
                    <div>
                        <p className='eventTitle'>First Byte</p>

                        <p className='eventContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Events;
