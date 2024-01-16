import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';


function Dates({ multiplyer, date}) {
  
    const posY = String(multiplyer+15) + 'px';
    const posYN = String(multiplyer-50) + 'px';
    return (
        <motion.div  className={'dates'}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
                visible: { opacity: 1, top: posY,},
                hidden: { opacity: 0, top: posYN,}
            }}
            transition={{
                delay: 0.4,
                duration: 0.8,
                ease: 'backInOut'
            }}
            exit={{
                opacity: '0',
                top: posYN,
                scale: 0
            }}
        >
            <p style={{margin: 0, position: 'relative', left: '30px'}}>{date}</p>
        </motion.div>
    );
}

export default Dates;
