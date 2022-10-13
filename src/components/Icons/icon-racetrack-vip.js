import React, { memo } from "react"
import { motion } from 'framer-motion'

const rectAVariants = {
    rest: {
      x: 0,
      y: 0
    },
    play: {
      x: 2,
      y: -1,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const rectBVariants = {
    rest: {
      x: 0,
      y: 0
    },
    play: {
      x: -2,
      y: 1,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const rectCVariants = {
    rest: {
      y: 0,
      x: 0
    },
    play: {
      x: -2,
      y: -1,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const rectDVariants = {
    rest: {
      y: 0,
      x: 0
    },
    play: {
      x: 2,
      y: 1,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const pathEVariants = {
    rest: {
      x: 0,
      y: 0
    },
    play: {
      x: -2,
      y: -2,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const pathFVariants = {
    rest: {
      x: 0,
      y: 0,
    },
    play: {
      x: 2,
      y: -2,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const pathHVariants = {
    rest: {
      x: 0,
      y: 0,
    },
    play: {
      x: -2,
      y: 2,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

const pathGVariants = {
    rest: {
      x: 0,
      y: 0,
    },
    play: {
      x: 2,
      y: 2,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
      }
    }
};

export const IconRaceTrackVip = memo(({active, ...props}) => (
  <motion.svg
    height="28"
    width="28"
    className="icon-race-track"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    {...props}
  >
    <defs>
      <linearGradient
        id="icon-racetrack-a"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#dcdad7" />
        <stop offset="100%" stopColor="#cac7c2" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-b"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#bdbab4" />
        <stop offset="100%" stopColor="#aba8a0" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-c"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#dcdad7" />
        <stop offset="100%" stopColor="#cac7c2" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-d"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#bdbab4" />
        <stop offset="100%" stopColor="#aba8a0" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-e"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#aeaeac" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-f"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#aeaeac" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-g"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#898478" />
        <stop offset="100%" stopColor="#9f9a91" />
      </linearGradient>
      <linearGradient
        id="icon-racetrack-h"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={1}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#898478" />
        <stop offset="100%" stopColor="#9f9a91" />
      </linearGradient>
    </defs>
    <motion.rect
      variants={rectAVariants}
      animate={active ? "play" : "rest"} 
      width={2.2}
      height={2.917}
      rx={0}
      ry={0}
      fill="url(#icon-racetrack-a)"
      y="10.583" x="16.739"
    />
    <motion.rect
      variants={rectBVariants}
      animate={active ? "play" : "rest"} 
      width={2.2}
      height={2.917}
      rx={0}
      ry={0}
      fill="url(#icon-racetrack-b)"
      y="14.5" x="9.059"
    />
    <motion.rect
      variants={rectCVariants}
      animate={active ? "play" : "rest"} 
      width={2.2}
      height={2.917}
      rx={0}
      ry={0}
      fill="url(#icon-racetrack-c)"
      y="10.583" x="9.059"
    />
    <motion.rect
      variants={rectDVariants}
      animate={active ? "play" : "rest"} 
      width={2.2}
      height={2.917}
      rx={0}
      ry={0}
      fill="url(#icon-racetrack-d)"
      y="14.5" x="16.766"
    />
    <motion.path
      variants={pathEVariants}
      animate={active ? "play" : "rest"} 
      d="M 11.254 9.583 L 9.06 9.583 C 9.819 7.701 11.5 6.347 13.5 6.007 L 13.5 7.997 C 12.583 8.235 11.785 8.798 11.254 9.583 Z"
      fill="url(#icon-racetrack-e)"
    />
    <motion.path
      variants={pathFVariants}
      animate={active ? "play" : "rest"} 
      d="M 16.747 9.583 L 18.941 9.583 C 18.182 7.701 16.501 6.347 14.501 6.007 L 14.501 7.997 C 15.418 8.235 16.216 8.798 16.747 9.583 Z"
      fill="url(#icon-racetrack-f)"
    />
    <motion.path
      variants={pathGVariants}
      animate={active ? "play" : "rest"} 
      d="M 16.746 18.417 L 18.94 18.417 C 18.181 20.299 16.5 21.653 14.5 21.993 L 14.5 20.003 C 15.417 19.765 16.215 19.201 16.746 18.417 Z"
      fill="url(#icon-racetrack-g)"
    />
    <motion.path
      variants={pathHVariants}
      animate={active ? "play" : "rest"} 
      d="M 11.254 18.417 L 9.06 18.417 C 9.819 20.299 11.5 21.653 13.5 21.993 L 13.5 20.003 C 12.583 19.765 11.785 19.201 11.254 18.417 Z"
      fill="url(#icon-racetrack-h)"
    />
  </motion.svg>
))