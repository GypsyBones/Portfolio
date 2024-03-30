import React from "react";
import { motion } from "framer-motion";
import Down from '../../Icons/icons8-chevron-down-50.png';

const WaitlistButton = ({scrollDown}) => {
    console.log(scrollDown.scrollDown)
    const bounceTransition = {
        y: {
        duration: 1.2,
        yoyo: Infinity,
        ease: "easeOut"
        }
    };

        return (
            <div>
                <button className="trans-btn">
                    <motion.img src={Down} 
                    transition={{y: {
                        duration: 1.2,
                        yoyo: Infinity,
                        ease: "easeOut"
                    }}}
                    whileHover={{scale: 1.2 }}
                    whileTap={{ scale: 0.5 }}
                    animate={{y: ["100%", "-100%"]}} 
                    initial={{scale: 0.5}} 
                    className="waitlist-icon" 
                    alt="down" 
                    onClick={scrollDown}
                    />
                </button>
            </div>
        )
}

export default WaitlistButton;