import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import style from './style.css';
import logo from '../../../../images/logo/bolt_dog.png';

function BoltUBCTitleMobile() {
    const { scrollY } = useViewportScroll();
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 450]);
    return (
        <div className='MobileTitleBorder'>

            <img src={logo} className='main_dog_image_mobile' />

            <h1 className='BoltUBCTitle'><div style={{ color: '#623CE8', display: 'inline' }}>BOLT</div> UBC</h1>
            <p className='BoltUBCCatchPhrase'>Unleash the power of data analytics</p>
        </div>
    );
}

export default BoltUBCTitleMobile;

