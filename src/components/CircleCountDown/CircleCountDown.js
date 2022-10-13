import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { reaction } from 'mobx'
import { Store, State } from 'uicore'
import { useCountdown } from 'react-countdown-circle-timer'
import CircleClock from '../CircleClock/CircleClock'

import audio from '../../utils/audio'
import './CircleCountDown.scss'

const CountDown = ({
  vip,
  children,
  size = 60,
  duration,
  initialRemainingTime,
  isSmoothColorTransition = false,
  strokeLinecap = 'square',
  trailColor = '#FFFFFF',
  strokeWidth,
  alarmDuration = 5,
  trailStrokeWidth,
  onComplete,
  onUpdate,
  colorsTime = [initialRemainingTime, duration / 4, 0],
  colors = [`url(#cc-linearGradient-${vip ? 1 : 5})`, `url(#cc-linearGradient-${vip ? 3 : 5})`, `url(#cc-linearGradient-${vip ? 3 : 5})`]
}) => {
  const {
    path,
    pathLength,
    strokeDashoffset,
    remainingTime,
    elapsedTime
  } = useCountdown({ isPlaying: true, duration, initialRemainingTime, colors, colorsTime, size, onComplete, onUpdate, isSmoothColorTransition })

  let stroke = 0
  let altStroke = 0

  if (vip) {
    stroke = 1
    altStroke = 2
    if (remainingTime <= duration / 4) {
      stroke = 3
      altStroke = 4
    }
  } else {
    stroke = 5
    if (remainingTime <= duration / 4) {
      stroke = 6
    }
  }

  const rotate = elapsedTime * 360 / duration

  return (
    <>
      <figure className='circle-countdown__triangle' style={{ transform: `rotate(${rotate}deg)` }}>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzc3RjU3NzkwQjY0MTFFRDhFQzNDRTEyQTQ2RTAyNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzc3RjU3N0EwQjY0MTFFRDhFQzNDRTEyQTQ2RTAyNjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNzdGNTc3NzBCNjQxMUVEOEVDM0NFMTJBNDZFMDI2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNzdGNTc3ODBCNjQxMUVEOEVDM0NFMTJBNDZFMDI2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsNF0WQAAAaWSURBVHja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' />
      </figure>
      <svg width={size} height={size} xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter x='-21.2%' y='-17.3%' width='142.3%' height='142.3%' filterUnits='objectBoundingBox' id='filter-4'>
            <feMorphology radius='4' operator='dilate' in='SourceAlpha' result='shadowSpreadOuter1' />
            <feOffset dx='0' dy='2' in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
            <feMorphology radius='4' operator='erode' in='SourceAlpha' result='shadowInner' />
            <feOffset dx='0' dy='2' in='shadowInner' result='shadowInner' />
            <feComposite in='shadowOffsetOuter1' in2='shadowInner' operator='out' result='shadowOffsetOuter1' />
            <feGaussianBlur stdDeviation='2' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
            <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0' type='matrix' in='shadowBlurOuter1' />
          </filter>
          <linearGradient x1='50%' y1='100%' x2='50%' y2='3.061617e-15%' id='cc-linearGradient-1' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#09B909' offset='0' />
            <stop stopColor='#3A7244' offset='0.4848' />
            <stop stopColor='#195228' offset='1' />
          </linearGradient>
          <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cc-linearGradient-2' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#09B909' offset='0' />
            <stop stopColor='#3A7244' offset='0.4848' />
            <stop stopColor='#195228' offset='1' />
          </linearGradient>
          <linearGradient x1='50%' y1='0.105424361%' x2='50%' y2='98.2855523%' id='cc-linearGradient-3' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#C79720' offset='0%' />
            <stop stopColor='#FCDC7E' offset='50%' />
            <stop stopColor='#F7E28A' offset='100%' />
          </linearGradient>
          <linearGradient x1='50%' y1='100%' x2='50%' y2='3.061617e-15%' id='cc-linearGradient-4' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#C79720' offset='1.71444766%' />
            <stop stopColor='#FCDC7E' offset='50%' />
            <stop stopColor='#F7E28A' offset='99.8945756%' />
          </linearGradient>
          <linearGradient id='cc-linearGradient-5' x1='0%' y1='0%' x2='100%' y2='100%' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#09b909' />
            <stop offset='50%' stopColor='#3a7244' />
            <stop offset='100%' stopColor='#195228' />
          </linearGradient>
          <linearGradient id='cc-linearGradient-6' x1='0%' y1='0%' x2='100%' y2='100%' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#c79720' />
            <stop offset='50%' stopColor='#fcdc7e' />
            <stop offset='100%' stopColor='#f7e28a' />
          </linearGradient>
        </defs>
        <path
          d={path}
          fill='none'
          stroke={trailColor}
          strokeOpacity='0.3'
          strokeWidth={trailStrokeWidth ?? strokeWidth - 2}
        />
        <path
          d={path}
          fill='none'
          stroke={`url(#cc-linearGradient-${stroke})`}
          strokeLinecap={strokeLinecap}
          strokeWidth={strokeWidth}
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffset}
        />
        {
          vip &&
            <>
              <path
                d={path}
                fill='none'
                stroke={`url(#cc-linearGradient-${altStroke})`}
                strokeLinecap={strokeLinecap}
                strokeWidth={strokeWidth - 2}
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
              />
            </>
        }
      </svg>
      {typeof children === 'function' && (
        <div className='circle-countdown__number' style={{ lineHeight: `${size}px` }}>
          {children({ remainingTime, elapsedTime, color: stroke })}
        </div>
      )}
    </>
  )
}

const variants = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  hidden: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

export default function CircleCountDown ({ vip, size, svgStrokeWidth }) {
  const [remainSeconds, setRemainSeconds] = useState(0)
  const [sessionSeconds, setSessionSeconds] = useState(0)
  const [show, setShow] = useState(false)
  const [showClock, setShowClock] = useState(false)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    },
    (session) => {
      if (session && State.Open === session.flag) {
        if (session.cd > 0) {
          const sessionSeconds = session.cd / 1000

          const startDate = new Date(session.last)
          const endDate = new Date(session.last)
          endDate.setSeconds(startDate.getSeconds() + sessionSeconds)
          const nowDate = Date.now()
          const remainSeconds = Math.round(Math.abs((endDate.getTime() - nowDate) / 1000))

          if (remainSeconds > 0) {
            ReactDOM.unstable_batchedUpdates(() => {
              setShow(true)
              setSessionSeconds(sessionSeconds)
              setRemainSeconds(remainSeconds)
            })
          }
        } else {
          setShowClock(true)
        }
      } else {
        setShowClock(false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  const onUpdate = (remainingTime) => {

  }

  if (showClock) {
    return <CircleClock />
  }

  return (
    <AnimatePresence key='circle-countdown'>
      {
      show &&
        <motion.div className='circle-countdown' variants={variants} initial='hidden' animate='show' exit='hidden'>
          <CountDown
            vip={vip}
            size={size}
            strokeWidth={svgStrokeWidth}
            duration={sessionSeconds}
            initialRemainingTime={remainSeconds}
            onComplete={() => setShow(false)}
            onUpdate={onUpdate}
          >
            {({ remainingTime }) => remainingTime}
          </CountDown>
        </motion.div>
    }
    </AnimatePresence>
  )
}
