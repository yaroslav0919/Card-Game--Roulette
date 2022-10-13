import React, { useEffect, useRef } from 'react'
import { reaction } from 'mobx'
import { Store, Helper, State } from 'uicore'
import './CircleClock.scss'

export default function CircleClock () {
  const circleClockRef = useRef(null)

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.lastCall
    }, (lastCall) => {
      if (lastCall) {
        Helper.addClassName(circleClockRef.current, 'last-call')
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session && session.flag === State.Playing) {
        Helper.removeClassName(circleClockRef.current, 'last-call')
      }
    }, {
      fireImmediately: true
    })
  }, [])

  return (
    <div className='circle-clock' ref={circleClockRef}>
      <div className='circle-clock__icon' />
    </div>
  )
}
