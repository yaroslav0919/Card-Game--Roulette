import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, useMotionValue } from 'framer-motion'
import { reaction } from 'mobx'
import { Store, State } from 'uicore'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import audio from '../../../utils/audio'
import { useInterval } from '../../../hooks/use-interval'
import './CircleCountDown.scss'

export const Counter = ({
  valueFrom = 0,
  valueTo = 0,
  onChange
}) => {
  const [count, setCount] = useState(valueFrom)

  useInterval(() => {
    if (count !== valueTo) {
      setCount(count - 1)
    }
    if (onChange) {
      onChange(count - 1)
    }
  }, 1000)
  return count
}

export const ProgressCircle = ({
  vip,
  percents = 100,
  counter = true,
  stroke = '#44cc44',
  // emptyStroke = "#e2e2e2",
  emptyStroke = '#ffffff',
  emptyStrokeOpacity = 0.1,
  // emptyStrokeOpacity = 1,
  duration = 15,
  delay = 0,
  size = 60,
  strokeWidth = 8,
  caption,
  sessionSeconds,
  onComplete
}) => {
  const transition = {
    duration: duration,
    delay: delay,
    ease: 'linear',
    type: 'tween'
  }

  const [remain, setRemain] = useState('full')

  const onChangeCount = (count) => {
    if (count === 5) {
      setRemain('quarter')
    }
    if (count === 0 && onComplete) {
      onComplete()
    }
  }
  const pathLength = (duration === sessionSeconds) ? 0 : (((sessionSeconds - duration) * 1 / sessionSeconds))
  const rotate = (duration === sessionSeconds) ? 0 : Math.floor(((sessionSeconds - duration) * 360 / sessionSeconds))

  return (
    <>
      {vip &&
        <motion.figure
          initial={{ rotate: Math.round(rotate) }}
          animate={{ rotate: 360 }}
          transition={{ duration: duration, ease: 'linear', type: 'tween', delay: 0 }}
          className='state-countdown__triangle'
        >
          <img alt='Triangle Icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACRFdLHAAACDElEQVQ4EWNgQAcrJxX/RxdD43d7h3xGEwJy+0MTDGCizDCGuPSX59wMH14/fv//NEwMk94+s6EBWZQJxHn78iFjoaP9/1WhDWxwyaIQiwYLOUZUFwaaKtjDVZDCgDsTpKk9w6M+wd77gKYYv9jhm3e3IRsEdhBMQFxK9P+zn3cZnn57kuVnIPk/1FjlHkwOhU721q+TY2b4KsDAAESDE2xtariEy2Uovv7O+163KcDvT6KtoSi6BhSFXz68ZeCT5WWWZhV/NTUorhZZMYrC7z9/Mjx995jh6peLDLvv7W/KcjWFJyAWZF2fP39j2HfgEIOAAPe7m1e/yjxhePwdWR7ODrdS/M/DwDABLoCLYaUsroNLbhCK75zTrbNrcqcUqU5DSd/ImlWlGLNUpBQ3WQkrZ1mqyX79KyZx4cGDB/+Q1WBjo8QfsgJJYcF/D9/eYBDU4xX79f/3NEsO1t+lDo7nS20d8WZNnAbyC/Az/v3zl+HBk9sM6hbqDH9Z/jCwc7AbKEjJHFidnv9/SUb2xoYgTxlkR4DYKAkHWfL2nYf/ubk4Gb4CE9P8xXMYQEXI7z+/GT5f/f7/x1eGDc/eMRS8Z2B4gqwHxMZp4LPnbxm5uFgYjhy9wPDy+Q8GNnaGA+KSDEVnHzOcRzcEmY/TwG/fvzNfuPjs9dXHP1KA5etmhj8M/2/eQdY6VNkArrmw8k9ZvQIAAAAASUVORK5CYII=' />
        </motion.figure>}
      <svg viewBox='0 0 69 69' width='60' height='60' xmlns='http://www.w3.org/2000/svg'>
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
          <linearGradient x1='50%' y1='0.105424361%' x2='50%' y2='98.2855523%' id='linearGradient-3' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#C79720' offset='0%' />
              <stop stopColor='#FCDC7E' offset='50%' />
              <stop stopColor='#F7E28A' offset='100%' />
            </linearGradient>
          <linearGradient x1='50%' y1='100%' x2='50%' y2='3.061617e-15%' id='linearGradient-4' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#C79720' offset='1.71444766%' />
              <stop stopColor='#FCDC7E' offset='50%' />
              <stop stopColor='#F7E28A' offset='99.8945756%' />
            </linearGradient>
          <linearGradient x1='50%' y1='100%' x2='50%' y2='3.061617e-15%' id='linearGradient-1' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#09B909' offset='0' />
              <stop stopColor='#3A7244' offset='0.4848' />
              <stop stopColor='#195228' offset='1' />
            </linearGradient>
          <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-2' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#09B909' offset='0' />
              <stop stopColor='#3A7244' offset='0.4848' />
              <stop stopColor='#195228' offset='1' />
            </linearGradient>
          <linearGradient id='linearGradient-5' x1='0%' y1='0%' x2='100%' y2='100%' gradientUnits='userSpaceOnUse'>
              <stop offset='0' stopColor='#09b909' />
              <stop offset='50%' stopColor='#3a7244' />
              <stop offset='100%' stopColor='#195228' />
            </linearGradient>
          <linearGradient id='linearGradient-6' x1='0%' y1='0%' x2='100%' y2='100%' gradientUnits='userSpaceOnUse'>
              <stop offset='0' stopColor='#c79720' />
              <stop offset='50%' stopColor='#fcdc7e' />
              <stop offset='100%' stopColor='#f7e28a' />
            </linearGradient>
        </defs>
        <g id='countdown---green' transform='translate(8.366692, 6.500000)' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          {vip && remain === 'full' && <path
              d='M 26 0 H 26 A 26 26 0 0 1 52 26 V 26 A 26 26 0 0 1 26 52 H 26 A 26 26 0 0 1 0 26 V 26 A 26 26 0 0 1 26 0 Z' transform='matrix(1, 0, 0, 1, 0, 0)' fill='black' fillOpacity='1' filter='url(#filter-4)'
                                         />}
          {vip &&
              <motion.path
                initial={{ pathLength }}
                animate={{ pathLength: 1 }}
                transition={{ duration, ease: 'linear', type: 'tween', delay: 0 }}
                d='M 26 0 H 26 A 26 26 0 0 1 52 26 V 26 A 26 26 0 0 1 26 52 H 26 A 26 26 0 0 1 0 26 V 26 A 26 26 0 0 1 26 0 Z' transform='matrix(1, 0, 0, 1, 0, 0)' stroke={`url(#linearGradient-${remain === 'full' ? 1 : 3})`} strokeWidth='8'
              />}
          <motion.path
              initial={{ pathLength }}
              animate={{ pathLength: 1 }}
              transition={{ duration, ease: 'linear', type: 'tween', delay: 0 }}
              d='M 26 0 H 26 A 26 26 0 0 1 52 26 V 26 A 26 26 0 0 1 26 52 H 26 A 26 26 0 0 1 0 26 V 26 A 26 26 0 0 1 26 0 Z' transform='matrix(1, 0, 0, 1, 0, 0)' stroke={`url(#linearGradient-${remain === 'full' ? vip ? 2 : 5 : vip ? 4 : 6})`} strokeWidth='6'
            />
          <path
              d='M 26 0 H 26 A 26 26 0 0 1 52 26 V 26 A 26 26 0 0 1 26 52 H 26 A 26 26 0 0 1 0 26 V 26 A 26 26 0 0 1 26 0 Z' transform='matrix(1, 0, 0, 1, 0, 0)' strokeWidth='6' stroke='#ffffff' strokeOpacity='0.1'
            />
        </g>
      </svg>
      <div className='countdown-number'>
        <Counter valueFrom={duration} valueTo={0} onChange={onChangeCount} />
      </div>
    </>
  )
}

export default function Countdown ({ vip }) {
  const [remainSeconds, setRemainSeconds] = useState(0)
  const [sessionSeconds, setSessionSeconds] = useState(0)
  const [show, setShow] = useState(false)

  const variants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hidden: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    },
    (session) => {
      if (session && State.Open === session.flag) {
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
      }
    }, {
      fireImmediately: true
    })
  }, [])

  return (
    <>
      {show && <motion.div variants={variants} initial='hidden' animate='show' exit='hidden' className='state-countdown'>
        <div className='radial'>
          <ProgressCircle
              vip={vip}
              sessionSeconds={sessionSeconds}
              duration={remainSeconds}
              onComplete={() => setShow(false)}
            />
        </div>
      </motion.div>}
    </>
  )
}
