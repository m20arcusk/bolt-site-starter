import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';


function Dots({ style }) {
   


    return (
        <motion.div style={style} className={'dots'}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 }
            }}
            transition={{
                duration: 0.5,
                ease: 'backInOut',
            }}
            exit={{
                opacity: '0',
                scale: 0.5
            }}
        >
            <motion.div className={'dotsInner'}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.5 }
                }}
                transition={{
                    duration: 0.9,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    scale: 0.5
                }}>

            </motion.div>
        </motion.div>
    );
}

export default Dots;
