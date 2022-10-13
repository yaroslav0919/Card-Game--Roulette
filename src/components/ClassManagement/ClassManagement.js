import React, { useState, useEffect } from 'react'
import { reaction } from 'mobx'
import { Store, State } from 'uicore'

const ClassManagement = () => {
  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.dashboardScreen
    }, (status) => {
      if (status === 2) {
        document.getElementById('main-container').classList.add('main--race-track')
      } else {
        document.getElementById('main-container').classList.remove('main--race-track')
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session.flag === State.Open) {
        document.getElementById('main-container').classList.add('main--bet-waiting')
      } else {
        document.getElementById('main-container').classList.remove('main--bet-waiting')
      }
      if (session.flag === State.Playing) {
        document.getElementById('main-container').classList.add('main--bet-closed')
      } else {
        document.getElementById('main-container').classList.remove('main--bet-closed')
      }
      if (session.flag === State.Finish) {
        document.getElementById('main-container').classList.add('main--waiting-new-session')
      } else {
        document.getElementById('main-container').classList.remove('main--waiting-new-session')
      }
    }, {
      fireImmediately: true
    })
  }, [])

  return <></>
}

export default ClassManagement
