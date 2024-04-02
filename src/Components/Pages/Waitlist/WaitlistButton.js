import React from "react";
import { motion, easeOut } from "framer-motion";
import Down from '../../Icons/icons8-chevron-down-50.png';


const bounceTransition = {
    type: "spring",
    stiffness: 100,
    repeat: Infinity,
    repeatType: "reverse"
};

const WaitlistButton = ({scrollDown}) => {
    
    return (
            <div>
                <motion.img 
                    src={Down} 
                    transition={bounceTransition}
                    whileHover={{scale: 1.2 }}
                    whileTap={{ scale: 0.5 }}
                    animate={{y: 50}} 
                    className="waitlist-icon" 
                    alt="down" 
                    onClick={scrollDown}
                />
            </div>
        )
}

export default WaitlistButton;