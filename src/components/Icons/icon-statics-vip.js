import React, { memo } from "react"
import { motion } from "framer-motion"


const variants = {
  play: {
    d: "M 18.08735 22.17 L 18.08735 5.845 L 21.58735 5.845 L 21.58735 22.17 L 18.08735 22.17 Z M 12.25 22.17 L 12.25402 10.5 L 15.75402 10.5 L 15.75 22.17 L 12.25 22.17 Z M 6.41667 22.17 L 6.41667 15.126757 L 9.91667 15.126757 L 9.91667 22.17 L 6.41667 22.17 Z",
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.5,
      repeatType: "reverse",
    }
  }
};

export const IconStaticsVip = memo(({active, ...props}) => (
  <motion.svg
    width={28}
    height={28}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 28 28"
    {...props}
  >
    <defs>
      <linearGradient x1="50%" y1="132.336%" x2="50%" y2="0%" id="icon-statics-a">
        <stop stopColor="#8C794E" offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(-0.00201 0.043243)">
        <motion.path 
          variants={variants}
          animate={active ? "play" : "rest"} 
          fill="url(#icon-statics-a)" d="M 18.08735 22.17 L 18.08735 10.5 L 21.58735 10.5 L 21.58735 22.17 L 18.08735 22.17 Z M 12.25 22.17 L 12.25 5.84 L 15.75 5.84 L 15.75 22.17 L 12.25 22.17 Z M 6.41667 22.17 L 6.41667 15.17 L 9.91667 15.17 L 9.91667 22.17 L 6.41667 22.17 Z" />
    </g>
  </motion.svg>
))