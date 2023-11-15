import React from 'react';
import { motion } from "framer-motion";
import styles from './css/loading.css';
import logo from '../../images/logo/bolt.png';

const Loading = () => {


    return (
        <div style={{ display: 'flex', position: 'absolute', zIndex: '800' }}>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.5,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.6,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '10%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.7,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '20%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.8,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '30%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.9,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '40%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 1,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '50%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 1.1,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '60%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 1.2,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '70%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 1.3,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '80%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            <motion.div
                initial={{
                    top: 0,
                }}
                animate={{
                    top: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 1.4,
                    ease: 'easeIn'
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '90%',
                    background: '#292929',
                    width: '10%',
                    height: '100%'
                }}
            >
            </motion.div>
            
        </div>

    );
};

export default Loading;
