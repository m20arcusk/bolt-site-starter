import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import style from './style.css';
import logo from '../../../../images/logo/bolt_dog.png';

function BoltUBCTitle() {
    const { scrollY } = useViewportScroll();
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 450]);
    return (

        <div className="BoltUBCBorder" >
            <img src={logo} className='main_dog_image'/>
            <div className='first_text_position'>
                <div>
                    <h1 className='ubc'><h1 className='bolt'>BOLT</h1> UBC</h1>
                    <p className='catchPhrase'>Unleash the power of data analytics</p>
                </div>
            </div>
        </div>
    );
}

export default BoltUBCTitle;

