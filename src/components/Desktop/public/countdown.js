import { useRef, useState, useEffect } from 'react'
import { reaction } from 'mobx'
import { Store, State } from 'uicore'

export default function Countdown ({ onChange }) {
  const [countdown, setCountdown] = useState(0)
  const intervalRef = useRef()
  const countdownRef = useRef()

  const setTimer = () => {
    countdownRef.current -= 1
    setCountdown(countdownRef.current)
    onChange(countdownRef.current)
    if (countdownRef.current === 0) {
      clearInterval(intervalRef.current)
    }
  }

  const remainCalculator = (time, ts) => {
    const start = ts
    const end = Date.now()
    const cd = (time - (end - start)) / 1000
    if (Number(cd)) {
      return parseInt(cd.toFixed(0), 10) * 1000
    }
    return 0
  }

  const init = ({ time, ts }) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    const remain = remainCalculator(time, ts)
    countdownRef.current = (ts ? (remain > 0 ? remain : time) : time) / 1000
    setTimer()
    intervalRef.current = setInterval(() => {
      setTimer()
    }, 1000)
  }

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session && State.Open === session.flag) {
        const start = new Date(session.last)
        init({
          time: session.cd,
          ts: start.getTime()
        })
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (countdown >= 0 ? countdown : null)
}
