import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import boltrocket from '../../../../images/logo/boltRocket.png';
function JoinUs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(topPosition < windowHeight - 2550);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isHovered, setIsHovered] = React.useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    return (
        <div style={{ height: '100%', width: '100%', position: 'relative', top: '-950px', overflow: 'hidden' }}>
            <div style={{ height: '150px' }}></div>
            <div style={{ width: '85%', margin: '0 auto' }}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '150px', position: 'relative', margin: '0' }} className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}>Join Us</h1>
                    <p style={{ margin: '0', fontSize: '30px' }} className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}>Start your journey now!</p>
                    <div style={{ height: '180px' }}>
                        {isHovered ? (
                            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                                <div style={{ position: 'relative', width: '100%', height: '100%' }} className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}>
                                    <motion.div initial={{
                                        aspectRatio: '1/1',
                                        width: '50px',

                                    }}
                                        animate={{
                                            opacity: '1',
                                            width: '110%',
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: 'backInOut',
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '50%',
                                            bottom: '0',
                                            position: 'absolute',
                                            translateX: '-50%',
                                            translateY: '50%',
                                            borderRadius: '50%',
                                            backgroundColor: '#623CE8',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >
                                        <motion.h1
                                            initial={{
                                                width: 0,
                                                height: 0,
                                                margin: '0 auto',
                                                opacity: 0,
                                            }}
                                            animate={{
                                                width: "100%",
                                                height: "100%",
                                                opacity: 1,

                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.3,
                                            }}
                                        >
                                           
                                            <h1 style={{ fontSize: '150px', position: 'relative', margin: '0', color: 'white', top: '50px' }} className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}>
                                                Join 
                                                <h1 style={{ fontSize: '150px', position: 'relative', margin: '0', color: '#FFA801', display: 'inline' }}>BOLT</h1>
                                            </h1>
                                            <img src={boltrocket} style={{width: '300px', position: 'relative', left: '200px',  }}/>
                                        </motion.h1>

                                    </motion.div>
                                    <motion.div initial={{
                                        aspectRatio: '1/1',
                                        width: '50px',

                                    }}
                                        animate={{
                                            opacity: '1',
                                            width: '50%',
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: 'backInOut',
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '50%',
                                            bottom: '0',
                                            position: 'absolute',
                                            translateX: '-50%',
                                            translateY: '50%',
                                            borderRadius: '50%',
                                            backgroundColor: '#E3E0F1',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >

                                    </motion.div>
                                </div>

                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', position: 'relative', left: '-2%  ' }}>
                                {isVisible && (
                                    <motion.div
                                        initial={{
                                            position: 'relative',
                                            opacity: '0',
                                            top: '50px',
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        animate={{
                                            top: '50px',
                                            opacity: '1',
                                            width: '10%',
                                            height: '100px',
                                            borderRadius: '25px',
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: 'backInOut',
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '20px',
                                            position: 'relative',
                                            borderRadius: '50%',
                                            backgroundColor: '#E0D9FA',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >
                                        {isVisible && (
                                            <motion.h1
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1,
                                                    ease: 'backInOut',
                                                }}
                                                style={{ fontSize: '90px', position: 'relative', top: '-12px', margin: '0', color: 'white' }}
                                            >⚡</motion.h1>
                                        )}
                                    </motion.div>
                                )}
                                {isVisible && (
                                    <motion.div
                                        initial={{
                                            position: 'relative',
                                            opacity: '0',
                                            top: '50px',
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        animate={{
                                            top: '50px',
                                            opacity: '1',
                                            width: '10%',
                                            height: '100px',
                                            borderRadius: '25px',
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            delay: 0.1,
                                            ease: 'backInOut',
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '20px',
                                            position: 'relative',
                                            borderRadius: '50%', // Adjusted to make a circle
                                            backgroundColor: '#9A81F1',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >
                                        {isVisible && (
                                            <motion.h1
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1,
                                                    ease: 'backInOut',
                                                }}
                                                style={{ fontSize: '90px',margin: '0', color: 'white' }}
                                            >B</motion.h1>
                                        )}
                                    </motion.div>
                                )}
                                {isVisible && (
                                    <motion.div
                                        initial={{
                                            position: 'relative',
                                            opacity: '0',
                                            top: '50px',
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        animate={{
                                            top: '50px',
                                            opacity: '1',
                                            width: '10%',
                                            height: '100px',
                                            borderRadius: '25px',
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            delay: 0.2,
                                            ease: 'backInOut',
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '20px',
                                            position: 'relative',
                                            borderRadius: '50%', // Adjusted to make a circle
                                            backgroundColor: '#A151D7',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >
                                        {isVisible && (
                                            <motion.h1
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1,
                                                    ease: 'backInOut',
                                                }}
                                                style={{ fontSize: '90px', margin: '0', color: 'white' }}
                                            >O</motion.h1>
                                        )}
                                    </motion.div>
                                )}

                                {isVisible && (
                                    <motion.div
                                        initial={{
                                            position: 'relative',
                                            opacity: '0',
                                            top: '50px',
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        animate={{
                                            top: '50px',
                                            opacity: '1',
                                            width: '10%',
                                            height: '100px',
                                            borderRadius: '25px',
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: 'backInOut',
                                            delay: 0.3,
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '20px',
                                            position: 'relative',
                                            borderRadius: '50%', // Adjusted to make a circle
                                            backgroundColor: '#623CE8',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >
                                        {isVisible && (
                                            <motion.h1
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1,
                                                    ease: 'backInOut',
                                                }}
                                                style={{ fontSize: '90px', margin: '0', color: 'white' }}
                                            >L</motion.h1>
                                        )}
                                    </motion.div>
                                )}



                                {isVisible && (
                                    <motion.div
                                        initial={{
                                            position: 'relative',
                                            opacity: '0',
                                            top: '50px',
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        animate={{
                                            top: '50px',
                                            opacity: '1',
                                            width: '10%',
                                            height: '100px',
                                            borderRadius: '25px',
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: 'backInOut',
                                            delay: 0.3,
                                        }}
                                        exit={{
                                            opacity: '0',
                                            width: '50px',
                                            height: '50px',

                                        }}
                                        style={{
                                            left: '20px',
                                            position: 'relative',
                                            borderRadius: '50%', // Adjusted to make a circle
                                            backgroundColor: '#22097B',
                                            padding: '30px',
                                        }}
                                        className={isVisible ? 'fade-in-left visible ' : ' fade-in-left'}
                                    >

                                        {isVisible && (
                                            <motion.h1
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1,
                                                    ease: 'backInOut',
                                                }}
                                                style={{ fontSize: '90px', margin: '0', color: 'white' }}
                                            >T</motion.h1>
                                        )}
                                    </motion.div>
                                )}



                            </div>
                        )}
                    </div>
                    <div className={isVisible ? 'fade-in-buttom visible JoinButton' : ' fade-in-buttom JoinButton'} onMouseEnter={handleHover}
                        onMouseLeave={handleHover}>
                        Click Here
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
