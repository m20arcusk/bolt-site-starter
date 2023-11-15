import React, { useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import dog from '../../../../images/logo/bolt_dog_no_background.png';

function OurMission() {
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
        <div style={{ height: '100%', width: '100%', paddingTop: '100px', position: 'relative', top: '-600px' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', y: slowerScroll }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', }}>

                    {isVisible && (
                        <motion.div
                            initial={{
                                opacity: '0'
                            }}
                            animate={{
                                width: '800px',
                                height: '800px',
                                opacity: '1'
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            style={{
                                translateY: '-50%',
                                top: '500px',
                                left: '60%',
                                translateX: '-50%',
                                position: 'absolute',
                                borderRadius: '50%',
                                backgroundColor: '#FBF4FF',
                                width: '600px',
                                height: '600px',
                            }}
                            className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
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
                            style={{
                                translateY: '-50%',
                                top: '300px',
                                left: '30%',
                                translateX: '-50%',
                                position: 'absolute',
                                borderRadius: '50%',
                                backgroundColor: '#F5E7FF',
                                width: '400px',
                                height: '400px',
                            }}
                            className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                        >
                        </motion.div>
                    )}

                </div>
            </div>
            <div style={{ width: '85%', margin: '0 auto', y: fasterScroll }}>
                <div style={{ display: 'flex' }}>
                    <h1 style={{ fontSize: '150px' }} className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}>Our Mission</h1>
                    <img src={dog} style={{ height: '200px', position: 'relative', top: '50px', left: '50px' }} className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'} />
                    {isVisible && (
                        <motion.div
                            initial={{
                                position: 'relative',
                                left: '-1000px', // Start off the screen to the left
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
                            style={{
                                top: '220px',
                                position: 'relative',
                                borderRadius: '50%', // Adjusted to make a circle
                                backgroundColor: '#623CE8',
                                width: '30px',
                                height: '30px',
                            }}
                        >
                        </motion.div>


                    )}
                </div>
                <p style={{ fontSize: '35px', margin: '0', position: 'relative', top: '-70px', color: '#666' }} className={isVisible ? 'fade-in-top visible ' : ' fade-in-top'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu odio. Sit amet nulla facilisi morbi tempus iaculis urna id. Et netus et malesuada fames ac turpis. Ipsum consequat nisl vel pretium lectus.</p>
            </div>

        </div>
    );
}

export default OurMission;
