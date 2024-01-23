import React, { useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import dog from '../../../../images/logo/bolt_dog_no_background.png';

function OurMissionMobile() {
    const { scrollY } = useViewportScroll();

    // Create a negative scroll value based on current scroll position
    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 300]);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(topPosition < windowHeight - 900);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='MissionContentBorderMobile'>
            
                <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', y: slowerScroll }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', }}>  

                        {isVisible && (
                            <motion.div
                                initial={{
                                    opacity: '0.9',
                                    scale: '0'
                                }}
                                animate={{
                                    scale: '1',
                                    opacity: '1'
                                }}
                                transition={{
                                    duration: 1,
                                    ease: 'backInOut',
                                }}
                               
                                className={isVisible ? 'fade-in-bottom visible MissionBackground1Mobile' : ' fade-in-bottom MissionBackground1Mobile'}
                            >
                            </motion.div>


                        )}
                        {isVisible && (
                            <motion.div
                                initial={{
                                    opacity: '0'
                                }}
                                animate={{
                                    width: '500px',
                                    height: '500px',
                                    opacity: '1'
                                }}
                                transition={{
                                    duration: 1,
                                    ease: 'backInOut',
                                }}
                               
                                className={isVisible ? 'fade-in-bottom visible MissionBackground2Mobile' : ' fade-in-bottom MissionBackground2Mobile'}
                            >
                            </motion.div>
                        )}

                    </div>
                </div>
                <div style={{ width: '85%', margin: '0 auto', y: fasterScroll }}>
                    <div style={{ display: 'flex' }}>
                        <h1 className={isVisible ? 'fade-in-left visible missionTitleMobile' : ' fade-in-left missionTitleMobile'}>Our Mission</h1>
                        <img src={dog} className={isVisible ? 'fade-in-bottom visible missionDogMobile' : ' fade-in-bottom missionDogMobile'} />
                        {isVisible && (
                            <motion.div
                                initial={{
                                    position: 'relative',
                                    left: '-900px', // Start off the screen to the left
                                    opacity: '0'
                                }}
                                animate={{
                                    left: '-200px', // Move to the right
                                    opacity: '1'
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.5,
                                    ease: 'backInOut',
                                }}

                                className='missionDotMobile'
                            >
                            </motion.div>


                        )}
                    </div>
                    <p className={isVisible ? 'fade-in-top visible missionContentMobile' : ' fade-in-top missionContentMobile'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu odio. Sit amet nulla facilisi morbi tempus iaculis urna id. Et netus et malesuada fames ac turpis. Ipsum consequat nisl vel pretium lectus.</p>
                </div>


        </div>
    );
}

export default OurMissionMobile;
