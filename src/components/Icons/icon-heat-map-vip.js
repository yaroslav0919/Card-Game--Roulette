import React, { memo } from "react"
import { motion } from "framer-motion"


const bigFlameVairants = {
  play: {
    d: [
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.928036 12.934547 18.552383 11.455929 C 17.866736 10.718963 17.14705 10.02173 16.529721 9.307066 C 15.615899 8.249161 14.926368 7.153059 14.903549 5.833333 C 9.414769 7.975476 9.665371 14 10.467955 15.240998 C 8.837204 15.240998 8.129776 11.527698 8.129776 11.527698 C 6.837748 12.569876 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.321871 12.940097 18.904462 11.128358 C 18.322936 10.385049 17.645026 9.66926 16.889528 8.99623 C 15.511846 7.768933 13.876161 6.683827 12.096451 5.833334 C 12.096451 7.361424 8.129776 10.041579 10.357684 15.292901 C 8.408591 14.979419 8.129776 11.390841 8.129776 11.527698 C 6.79654 13.013509 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.97345 12.847014 18.597797 11.368396 C 18.597797 11.368396 17.14705 10.02173 16.529721 9.307066 C 15.615899 8.249161 14.926368 7.056171 14.903549 5.736445 C 12.781069 6.783895 10.44115 9.39284 10.09838 13.121228 C 8.819095 13.121228 8.723095 11.894246 8.133687 11.368396 C 6.806554 13.11142 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.471487 13.393046 18.871487 11.527698 C 18.871487 11.448617 17.360991 10.07396 16.731487 9.433046 C 15.255055 7.929853 14.217584 6.717964 12.096451 5.833334 C 12.096451 7.361424 10.721658 8.978728 9.871489 9.912337 C 9.021319 10.845945 8.568147 10.988188 8.088772 11.527698 C 6.939981 12.820598 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 18.906013 11.527698 18.906013 11.527698 C 18.906013 11.599467 18.418942 10.514909 16.608599 9.560093 C 15.781525 9.203328 14.903549 8.233996 14.903549 5.833333 C 12.781069 6.880783 10.926568 8.149246 9.456995 9.560093 C 8.881194 10.112884 8.129776 11.103195 8.129776 11.103195 C 6.802643 12.846219 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.4883 13.305653 18.870224 11.527698 C 18.835986 11.448617 18.269469 12.602619 16.872705 12.602619 C 16.872705 8.52194 13.876161 6.683827 12.096451 5.833334 C 12.096451 7.361424 11.104637 8.661454 9.910378 9.972923 C 9.404298 10.528671 8.861865 11.086473 8.343146 11.664555 C 7.00991 13.150366 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 20.245877 13.006316 18.870224 11.527698 C 18.870224 11.527698 18.150169 15.240999 16.608599 15.165625 C 18.443854 10.2907 14.926368 7.153059 14.903549 5.833333 C 12.781069 6.880783 10.926568 8.149246 9.456995 9.560093 C 8.881194 10.112884 8.364487 10.687534 7.913909 11.279313 C 6.586776 13.022337 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.321871 12.940097 18.904462 11.128358 C 18.322936 10.385049 17.645026 9.66926 16.889528 8.99623 C 15.511846 7.768933 13.876161 6.683827 12.096451 5.833334 C 12.096451 7.361424 11.134579 8.832583 9.482532 10.301294 C 8.84164 10.871063 8.056359 11.686848 8.056359 11.565402 C 6.723123 13.051213 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.928036 12.934547 18.552383 11.455929 C 17.866736 10.718963 16.602246 9.609174 15.797329 9.006504 C 14.818696 8.273767 13.5 7.583536 11.903549 5.833333 C 10.323251 9.66926 10.078869 11.658662 10.130793 14 C 8.432284 14 8.129776 11.527698 8.129776 11.527698 C 6.954316 12.592114 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.563245 13.969966 19.145836 12.158227 C 18.56431 11.414918 17.664125 10.526497 16.966919 9.793246 C 16.01031 8.787181 14.903549 7.907181 14.85031 5.867181 C 11.21031 7.507181 9.288054 10.566659 10.352647 15.166667 C 8.963924 15.240997 8.129776 11.527698 8.129776 11.527698 C 6.79654 13.013509 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z"
    ],
    transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        //times: [0, .4, .6, .8, 1.3, 1.5, 1.7, 2.2, 2.5, 3]
    }
  }
};

const tallFlameVairants = {
  play: {
    d: [
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.928036 12.934547 18.552383 11.455929 C 17.866736 10.718963 17.14705 10.02173 16.529721 9.307066 C 15.615899 8.249161 14.926368 7.153059 14.903549 5.833333 C 9.414769 7.975476 9.665371 14 10.467955 15.240998 C 8.837204 15.240998 8.129776 11.527698 8.129776 11.527698 C 6.837748 12.569876 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.321871 12.940097 18.904462 11.128358 C 18.322936 10.385049 17.645026 9.66926 16.889528 8.99623 C 15.511846 7.768933 13.876161 6.683827 12.096451 5.833334 C 12.096451 7.361424 8.129776 10.041579 10.357684 15.292901 C 8.408591 14.979419 8.129776 11.390841 8.129776 11.527698 C 6.79654 13.013509 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.97345 12.847014 18.597797 11.368396 C 18.597797 11.368396 17.14705 10.02173 16.529721 9.307066 C 15.615899 8.249161 14.926368 7.056171 14.903549 5.736445 C 12.781069 6.783895 10.44115 9.39284 10.09838 13.121228 C 8.819095 13.121228 8.723095 11.894246 8.133687 11.368396 C 6.806554 13.11142 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.471487 13.393046 18.871487 11.527698 C 18.871487 11.448617 17.360991 10.07396 16.731487 9.433046 C 15.255055 7.929853 14.217584 6.717964 12.096451 5.833334 C 12.096451 7.361424 10.721658 8.978728 9.871489 9.912337 C 9.021319 10.845945 8.568147 10.988188 8.088772 11.527698 C 6.939981 12.820598 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 18.906013 11.527698 18.906013 11.527698 C 18.906013 11.599467 18.418942 10.514909 16.608599 9.560093 C 15.781525 9.203328 14.903549 8.233996 14.903549 5.833333 C 12.781069 6.880783 10.926568 8.149246 9.456995 9.560093 C 8.881194 10.112884 8.129776 11.103195 8.129776 11.103195 C 6.802643 12.846219 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.4883 13.305653 18.870224 11.527698 C 18.835986 11.448617 18.269469 12.602619 16.872705 12.602619 C 16.872705 8.52194 13.876161 6.683827 12.096451 5.833334 C 12.096451 7.361424 11.104637 8.661454 9.910378 9.972923 C 9.404298 10.528671 8.861865 11.086473 8.343146 11.664555 C 7.00991 13.150366 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 20.245877 13.006316 18.870224 11.527698 C 18.870224 11.527698 18.150169 15.240999 16.608599 15.165625 C 18.443854 10.2907 14.926368 7.153059 14.903549 5.833333 C 12.781069 6.880783 10.926568 8.149246 9.456995 9.560093 C 8.881194 10.112884 8.364487 10.687534 7.913909 11.279313 C 6.586776 13.022337 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.321871 12.940097 18.904462 11.128358 C 18.322936 10.385049 17.645026 9.66926 16.889528 8.99623 C 15.511846 7.768933 13.876161 6.683827 12.096451 5.833334 C 12.096451 7.361424 11.134579 8.832583 9.482532 10.301294 C 8.84164 10.871063 8.056359 11.686848 8.056359 11.565402 C 6.723123 13.051213 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.928036 12.934547 18.552383 11.455929 C 17.866736 10.718963 16.602246 9.609174 15.797329 9.006504 C 14.818696 8.273767 13.5 7.583536 11.903549 5.833333 C 10.323251 9.66926 10.078869 11.658662 10.130793 14 C 8.432284 14 8.129776 11.527698 8.129776 11.527698 C 6.954316 12.592114 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z",
        "M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.563245 13.969966 19.145836 12.158227 C 18.56431 11.414918 17.664125 10.526497 16.966919 9.793246 C 16.01031 8.787181 14.903549 7.907181 14.85031 5.867181 C 11.21031 7.507181 9.288054 10.566659 10.352647 15.166667 C 8.963924 15.240997 8.129776 11.527698 8.129776 11.527698 C 6.79654 13.013509 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z"
    ],
    transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse", 
        //times: [0, .4, .6, .8, 1.3, 1.5, 1.7, 2.2, 2.5, 3]
    }
  }
};

const rainDrop1Variants = {
    rest: {
        x: -0.711109,
        y: 4.24986,
        opacity: 0
    },
    play: {
        x: [-0.711109, 0, -1, 0, -0.711109, 0],
        y: [4.24986, 0.587781, -3, -7, 4.24986, 0.587781],
        scale: [1, 1, 1, 0.8, 1, 1],
        opacity: [0, 1, 1, 0, 0, 1],
        transition: {
            times: [0.3, .6, .9, 1.2, 2.3, 2.6],
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "reverse",
        },
    }
};

const rainDrop2Variants = {
    rest: {
        x: 0.128584,
        y: 2.26502,
        opacity: 0
    },
    play: {
        x: [0.128584, -0.166602, -0.16663, 0.134325, 0.128584, -0.166602],
        y: [2.26502, -1.76613, -4.97845, -7.29634, 2.26502, -1.76613],
        scale: [0.6, 1, 1, 0.8, 1, 1],
        opacity: [0, 1, 1, 0, 0, 1],
        transition: {
            times: [.6, .9, 1.2, 1.5, 2, 2.3],
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "reverse",
        },
    }
};

const rainDrop3Variants = {
    rest: {
        x: 1,
        y: 2,
        opacity: 0
    },
    play: {
        x: [1, 1.6446, 1, 1.64461, 1, 1.6446],
        y: [2, -0.572518, -4.06828, -7.40658, 2, -0.572518],
        scale: [1, 1, 1, 0.8, 1, 1],
        opacity: [0, 1, 1, 0, 0, 1],
        transition: {
            times: [0, 0.3, .6, .9, 2.2, 2.5],
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "reverse",
        },
    }
};

export const IconHeatMapVip = memo(({active, clicked, ...props}) => (
  <motion.svg
    height="28"
    width="28"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    {...props}
  >
    <defs>
        <linearGradient id="icon-heatmap-a-active" x1="0.5" y1="0" x2="0.501739" y2="1.14064" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="matrix(1 0 0 1 0 0)">
            <stop offset="0" stopColor="#fead1a"/>
            <stop offset="1" stopColor="#ff4d47"/>
        </linearGradient>
        <linearGradient id="icon-heatmap-b-active" x1="0.5" y1="0" x2="0.501739" y2="1.14064" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="matrix(1 0 0 1 0 0)">
            <stop offset="0" stopColor="#ffb35a"/>
            <stop offset="1" stopColor="#fe4f46"/>
        </linearGradient>
        <linearGradient id="icon-heatmap-c-active" x1="0.5" y1="1.323363" x2="0.5" y2="0" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop offset="0%" stopColor="#fe4f46"/>
            <stop offset="99%" stopColor="#ffb35a"/>
        </linearGradient>
        <linearGradient id="icon-heatmap-d-active" x1="0.5" y1="1.323363" x2="0.5" y2="0" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop offset="0%" stopColor="#fe4f46"/>
            <stop offset="100%" stopColor="#ffb35a"/>
        </linearGradient>
        <linearGradient id="icon-heatmap-e-active" x1="0.5" y1="1.323363" x2="0.5" y2="0" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop offset="2%" stopColor="#fe4f46"/>
            <stop offset="100%" stopColor="#ffb35a"/>
        </linearGradient>
      <linearGradient
        id="icon-heatmap-a"
        x1={0.5}
        y1={0}
        x2={0.502}
        y2={1.141}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#d8d8d8" />
        <stop offset="100%" stopColor="#635c4d" />
      </linearGradient>
      <linearGradient
        id="icon-heatmap-b"
        x1={0.5}
        y1={0}
        x2={0.502}
        y2={1.141}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#d8d8d8" />
        <stop offset="100%" stopColor="#635c4d" />
      </linearGradient>
      <linearGradient
        id="icon-heatmap-c"
        x1={0.5}
        y1={1.323}
        x2={0.5}
        y2={0}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#635c4d" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="icon-heatmap-d"
        x1={0.5}
        y1={1.323}
        x2={0.5}
        y2={0}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#635c4d" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="icon-heatmap-e"
        x1={0.5}
        y1={1.323}
        x2={0.5}
        y2={0}
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#635c4d" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
    </defs>
    <motion.path
        variants={bigFlameVairants}
        animate={active ? "play" : "rest"} 
        d="M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.915323 20.563245 13.969966 19.145836 12.158227 C 18.56431 11.414918 17.664125 10.526497 16.966919 9.793246 C 16.01031 8.787181 14.903549 7.907181 14.85031 5.867181 C 11.21031 7.507181 9.288054 10.566659 10.352647 15.166667 C 8.963924 15.240997 8.129776 11.527698 8.129776 11.527698 C 6.79654 13.013509 5.833333 14.770143 5.833333 16.833333 C 5.833333 21.21978 9.265817 24.5 13.5 24.5 Z"
        transform="translate(0 .028)"
        opacity={active ? 1 : 0.5}
        fill={`url(#${clicked ? 'icon-heatmap-a-active' : 'icon-heatmap-a'})`}
        fillRule="evenodd"
    />
    <motion.path
        variants={tallFlameVairants}
        animate={active ? "play" : "rest"} 
        d="M 13.5 24.5 C 17.734183 24.5 21.166667 21.067516 21.166667 16.833333 C 21.166667 14.573114 19.928036 12.934547 18.552383 11.455929 C 17.866736 10.718963 17.14705 10.02173 16.529721 9.307066 C 15.615899 8.249161 14.926368 7.153059 14.903549 5.833333 C 9.414769 7.975476 9.665371 14 10.467955 15.240998 C 8.837204 15.240998 8.129776 11.527698 8.129776 11.527698 C 6.837748 12.569876 5.833333 14.913961 5.833333 16.833333 C 5.833333 21.067516 9.265817 24.5 13.5 24.5 Z"
        transform="matrix(.54 0 0 .54 6.21 11.291)"
        fill={`url(#${clicked ? 'icon-heatmap-b-active' : 'icon-heatmap-b'})`}
        fillRule="evenodd"
    />
    <motion.path
        variants={rainDrop1Variants}
        animate={active ? "play" : "rest"} 
        d="M18.833 9.167c.184 0 .334-.334.334-.667s-.15-.667-.334-.667-.333.334-.333.667.15.667.333.667Z"
        transform="translate(0 0.587781)"
        fill={`url(#${clicked ? 'icon-heatmap-c-active' : 'icon-heatmap-c'})`}
    />
    <motion.path
        variants={rainDrop2Variants}
        animate={active ? "play" : "rest"} 
        d="M10.167 7.167a.295.295 0 0 0 .292-.335c-.089-.666-.186-.999-.292-.999s-.204.333-.293 1a.295.295 0 0 0 .293.334Z"
        transform="translate(-0.166602 -1.76613)"
        fill={`url(#${clicked ? 'icon-heatmap-d-active' : 'icon-heatmap-d'})`}
    />
    <motion.path
        variants={rainDrop3Variants}
        animate={active ? "play" : "rest"} 
        d="M7.167 9.833a.51.51 0 0 0 .483-.675C7.5 8.72 7.34 8.5 7.167 8.5s-.334.22-.483.658a.51.51 0 0 0 .483.675Z"
        transform="translate(1.645 -.573)"
        fill={`url(#${clicked ? 'icon-heatmap-e-active' : 'icon-heatmap-e'})`}
    />
  </motion.svg>
))