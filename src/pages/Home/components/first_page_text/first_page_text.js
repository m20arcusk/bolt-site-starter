import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

function FirstPageText() {
    const { scrollY } = useViewportScroll();
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 450]);
    return (
        <motion.div style={{
            y: slowerScroll,
            position: 'absolute',
            right: '15%',
            top: '40%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1 style={{ fontSize: '100px', margin: '0', fontWeight: 'bold', }}><h1 style={{ fontSize: '100px', margin: '0', fontWeight: 'bold', color: '#623CE8', display: 'inline' }}>BOLT</h1> UBC</h1>
            <p style={{ fontSize: '30px', margin: '0' }}>Unleash the power of data analytics</p>
        </motion.div>
    );
}

export default FirstPageText;
