import React, { useState, useEffect } from 'react';
import styles from './css/about.css';
import Header from './about-page-components/header-about/header';
import { motion } from "framer-motion"
import alexy from "../../images/bolt pfp/alexy-no-back.png"
import TeamsPage from './about-page-components/team-components/team-page';

function AboutPage() {

    const isVisible = true;

    return (
        <div className="about-body header-body">
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ scale: 1.01 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.75 }}
                mode="wait">
                <motion.div
                    initial={{
                        opacity: '0'
                    }}
                    animate={{
                        width: '600px',
                        height: '600px',
                        opacity: '1'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    style={{
                        translateY: '-50%',
                        top: '350px',
                        left: '55%',
                        translateX: '-50%',
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: '#FBF4FF',
                        width: '500px',
                        height: '500px',
                        zIndex: '-10',
                    }}
                    className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                >
                </motion.div>

                <motion.div
                    initial={{
                        opacity: '0'
                    }}
                    animate={{
                        width: '200px',
                        height: '200px',
                        opacity: '1'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    style={{
                        translateY: '-10%',
                        top: '350px',
                        right: '15%',
                        translateX: '-10%',
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: '#F5E7FF',
                        width: '10px',
                        height: '10px',
                        zIndex: '-1',
                    }}
                    className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                >
                </motion.div>

                <motion.div
                    initial={{
                        opacity: '0'
                    }}
                    animate={{
                        width: '400px',
                        height: '400px',
                        opacity: '1'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    style={{
                        translateY: '-50%',
                        top: '200px',
                        left: '35%',
                        translateX: '-50%',
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: '#E5D4FF',
                        width: '300px',
                        height: '300px',
                        zIndex: '-10',
                    }}
                    className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                >
                </motion.div>
                <div className="word-from-pres">
                    <div className='pres-bg'>
                        <img src={alexy} className="pres-image" alt="pres-image" />
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ x: 50, opacity: 1 }}
                            transition={{ delay: 0, duration: 1.25 }}
                            className="pres-text">
                            Alexy Woo
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ x: 50, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1.25 }}
                            className="pres-text">
                            - President
                        </motion.h3>
                    </div>
                    <div className='pres-message'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </motion.div>
            <div className='header-body'>
                <TeamsPage />
            </div>
        </div >
    );
}

export default AboutPage;