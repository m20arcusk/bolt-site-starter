import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import Dots from '../dots/dots';
import Dates from '../dates/dates';
import Info from '../info/info';
function Timeline() {
   


    return (
        <div style={{ height: '100%', width: '100%' }}>
            <div>
                <motion.div
                    initial={{
                        height: '0px'

                    }}
                    animate={{
                        height: '3000px'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',

                    }}
                    style={{
                        borderLeft: '4px dotted #ccc',
                        position: 'relative',
                        left: '20%',
                        top: '120px',
                    }}
                >
                </motion.div>
            </div>
            <div style={{position: 'absolute', top: 0, width: '100%', height: '100%'}}>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Oct 21, 2023"/> 
                <Info multiplyer={300-58} image="1" title="Bolt Connect" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                
                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Mar 17th, 2023"/> 
                <Info multiplyer={300-58} image="2" title="Data & Beyond" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            
                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Mar 17th, 2023"/> 
                <Info multiplyer={300-58} image="3" title="First Byte" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            
                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Sept 12-16, 2023"/> 
                <Info multiplyer={300-58} image="4" title="Bizweek" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            
                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Mar 17-26, 2023"/> 
                <Info multiplyer={300-58} image="5" title="Bolt Bootcamp" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            
            </div>
            <div style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
}

export default Timeline;
