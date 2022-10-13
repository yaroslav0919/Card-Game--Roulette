import React, { useState, useEffect, useRef } from 'react'
import { reaction } from 'mobx'
import { Store, Helper } from 'uicore'
import classNames from 'classnames'
import { translate } from '../utils/i18n'
import { AnimatePresence } from 'framer-motion'
import _ from 'lodash'

import GameVolume from '../components/Desktop/GameVolume/GameVolume'
import SessionId from '../components/Desktop/SessionId/SessionId'
import Username from '../components/Desktop/Username/Username'
import useOnClickOutside from '../hooks/clickOutside'
import BetHistory from '../components/Desktop/MobileMenu/SubPages/BetHistory'
import BetDetails from '../components/Desktop/MobileMenu/SubPages/BetDetails'
import Settings from '../components/Desktop/MobileMenu/SubPages/Settings'
import Help from '../components/Desktop/MobileMenu/SubPages/Help'

import {
  IconMaximize,
  IconMessage,
  IconPlus,
  IconSettings,
  IconBetHistory,
  IconHow,
  IconMinimize
} from '../components/Icons'
function HeaderRight ({ vip }) {
  const ref = useRef(null)
  const refSettings = useRef(null)
  const [activeContent, setActiveContent] = useState(Store.AppStore.state.activeMenu)
  const [fullScreen, setFullScreen] = useState(false)
  const [showChatTooltip, setShowChatTooltip] = useState(false)
  const [tooltip, setTooltip] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.activeMenu
    }, (activeMenu) => {
      setActiveContent(activeMenu)
      if (activeMenu === 'chat') {
        Store.AppStore.updateState('menu', false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  const onFullScreenChange = () => {
    setFullScreen(!fullScreen)
    Helper.toggleFullScreen()
    Store.AppStore.updateState('fullScreen', !fullScreen)
  }

  function SubPageRouting (activeMenu) {
    Store.AppStore.updateState('activeMenu', activeMenu)
  }

  const handleChatClick = () => {
    setShowChatTooltip(!showChatTooltip)
    Store.AppStore.updateState('activeMenu', 'chat')
    Store.AppStore.updateState('chatActive', !Store.AppStore.state.chatActive)
  }

  const onmouseenter = (value) => {
    setTooltip(value)
  }
  const onmouseleave = () => {
    setTooltip(null)
  }

  const clickOnSettings = () => {
    if (activeContent === 'settings') {
      Store.AppStore.updateState('activeMenu', '')
    } else {
      Store.AppStore.updateState('activeMenu', 'settings')
    }
  }

  useOnClickOutside(refSettings, () => { activeContent === 'settings' && Store.AppStore.updateState('activeMenu', '') })

  return (
    <>
      <div>
        <div className='d-flex align-items-center header-right'>
          <div className={classNames('header-right-item')}>
            <button
              className='btn-icon'
              onClick={handleChatClick}
              onMouseEnter={() => onmouseenter('chat')}
              onMouseLeave={() => onmouseleave('chat')}
            >
              <IconMessage />
            </button>
            {tooltip === 'chat' && <div className='header-tooltip' ref={ref}>
              {!Store.AppStore.state.chatActive ? translate('settings.chatIsClose') : translate('settings.chatIsOpen')}
            </div>}

          </div>
          <div className={classNames('header-right-item', { active: activeContent === 'addGame' })}>
            <button
              className='btn-icon hover-icon' onClick={() => {
                Helper.postMessage('type=addGame')
              }}
            ><IconPlus />
            </button>

          </div>

          <div className={classNames('header-right-item', { active: activeContent === 'sound' })}>
            <GameVolume />
          </div>
          <div className={classNames('header-right-item', { active: activeContent === 'settings' })} ref={refSettings}>
            <button
              className='btn-icon'
              onClick={() => clickOnSettings()}
              onMouseEnter={() => onmouseenter('settings')}
              onMouseLeave={() => onmouseleave('settings')}
            >
              <IconSettings />
            </button>
            {tooltip === 'settings' && <div className='header-tooltip' ref={ref}>
              {translate('settings.titleUppercase')}
            </div>}
            {activeContent === 'settings' && <Settings key='menu-settings' backToMenu={SubPageRouting} />}

          </div>
          <div className={classNames('header-right-item', { active: activeContent === 'betHistory' })}>
            <button
              className='btn-icon'
              onClick={() => Store.AppStore.updateState('activeMenu', 'betHistory')}
              onMouseEnter={() => onmouseenter('betHistory')}
              onMouseLeave={() => onmouseleave('betHistory')}
            >
              <IconBetHistory />
            </button>
            {tooltip === 'betHistory' && <div className='header-tooltip' ref={ref} style={{ paddingLeft: '27px', paddingRight: '27px' }}>
              {translate('betHistory.titleUppercase')}
            </div>}
          </div>
          <div className={classNames('header-right-item', { active: activeContent === 'help' })}>
            <button
              className='btn-icon'
              onClick={() => Store.AppStore.updateState('activeMenu', 'help')}
              onMouseEnter={() => onmouseenter('help')}
              onMouseLeave={() => onmouseleave('help')}
            >
              <IconHow />
            </button>
            {tooltip === 'help' && <div className='header-tooltip' ref={ref}>
              {translate('help.title')}
            </div>}
          </div>
          <div
            className={classNames('header-right-item', { active: fullScreen })}
            onMouseEnter={() => onmouseenter('fullScreen')}
            onMouseLeave={() => onmouseleave('fullScreen')}
          >
            <button onClick={onFullScreenChange} className='btn-icon hover-icon'>
              {fullScreen ? <IconMaximize /> : <IconMinimize />}
            </button>
            {tooltip === 'fullScreen' && <div className='header-tooltip header-tooltip-last-el' ref={ref}>
              {translate('fullScreen.title')}
            </div>}
          </div>
        </div>
        <div className='session'>
          <SessionId />
          <Username />
        </div>
      </div>
      <AnimatePresence>
        {activeContent === 'betHistory' && <BetHistory key='menu-betHistory' backToMenu={SubPageRouting} />}
        {activeContent === 'betDetails' && <BetDetails vip={vip} key='menu-betDetails' backToMenu={SubPageRouting} />}
        {activeContent === 'help' && <Help key='menu-help' backToMenu={SubPageRouting} />}

      </AnimatePresence>
    </>
  )
}

export default HeaderRight
