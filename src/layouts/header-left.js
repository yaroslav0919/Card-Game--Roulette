import React, { useState, useEffect, useRef } from 'react'
import { reaction } from 'mobx'
import { Store } from 'uicore'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import Roulette from '../utils/roulette'
import _ from 'lodash'
import RoomName from '../components/Desktop/RoomName/RoomName'
import Limits from '../components/Desktop/MobileMenu/SubPages/Limits'
import { IconPin, IconGoToLobby } from '../components/Icons'

import useOnClickOutside from '../hooks/clickOutside'

function HeaderLeft () {
  const ref = useRef(null)
  const [activeContent, setActiveContent] = useState(Store.AppStore.state.activeMenu)
  const [showLimits, setShowLimits] = useState(false)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.activeMenu
    }, (activeMenu) => {
      setActiveContent(activeMenu)
    }, {
      fireImmediately: true
    })
  }, [])

  const SubPageRouting = (activeMenu) => {
    Store.AppStore.updateState('activeMenu', activeMenu)
  }

  const clickOnPin = (e) => {
    if (activeContent === 'limits') {
      Store.AppStore.updateState('activeMenu', '')
    } else {
      Store.AppStore.updateState('activeMenu', 'limits')
    }
  }

  useOnClickOutside(ref, () => { activeContent === 'limits' && Store.AppStore.updateState('activeMenu', '') })

  return (
    <>
      <div className='header-left d-flex align-items-center'>
        <div onClick={() => {
          Store.AppStore.updateState('menu', false)
          Roulette.goToLobby()
        }}
        >
          <button className='btn-icon'>
            <IconGoToLobby />
          </button>
        </div>
        <RoomName />
        <div className={classNames('show-limits-wrapper', { active: activeContent === 'limits' })} ref={ref}>
          <button className={classNames('btn-icon show-limits')} onClick={(e) => clickOnPin(e)}>
            <IconPin />
          </button>
          <AnimatePresence>

            {activeContent === 'limits' && <Limits key='menu-limits' backToMenu={SubPageRouting} />}
          </AnimatePresence>
        </div>
      </div>

    </>
  )
}

export default HeaderLeft
