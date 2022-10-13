import React, { useState, Profiler, useEffect, useRef, Suspense } from 'react'
import { reaction } from 'mobx'
import classNames from 'classnames'
import { withTranslation } from 'react-i18next'
import { Store, State, Actions, Socket, Helper } from 'uicore'
import { AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import Hammer from 'react-hammerjs'
import './mobile.scss'

import Roulette from '../utils/roulette'
import { i18n, translate } from '../utils/i18n'
import audio from '../utils/audio'
import Intro from '../components/Intro/Intro'
import ClassManagement from '../components/ClassManagement/ClassManagement'
import { filter } from 'lodash'

const ActionBar = React.lazy(() => import('../components/ActionBar/ActionBar'))
const OldNumbers = React.lazy(() => import('../components/OldNumbers/OldNumbers'))
const StatusBar = React.lazy(() => import('../components/StatusBar/StatusBar'))
// const Table2 = React.lazy(() => import('../components/Table2/Table2'))
const Chat = React.lazy(() => import('../components/Chat/Chat'))
const Rooms = React.lazy(() => import('../components/Rooms/Rooms'))
const PlayerActions = React.lazy(() => import('../components/PlayerActions/PlayerActions'))
const RightActions = React.lazy(() => import('../components/RightActions/RightActions'))
const WinningNumberWrapper = React.lazy(() => import('../components/WinningNumberWrapper/WinningNumberWrapper'))
const BottomBar = React.lazy(() => import('../components/BottomBar/BottomBar'))
const CircleCountDown = React.lazy(() => import('../components/CircleCountDown/CircleCountDown'))

const MobileMenu = React.lazy(() => import('../components/MobileMenu/MobileMenu'))
const Favorites = React.lazy(() => import('../components/Favorites/Favorites'))
const Statistics = React.lazy(() => import('../components/Statistics/Statistics'))
// const RaceTrack = React.lazy(() => import('../components/RaceTrack/RaceTrack'))
const Notification = React.lazy(() => import('../components/Notification/Notification'))
const Modal = React.lazy(() => import('../components/Modal/Modal'))
const AutoGame = React.lazy(() => import('../components/AutoGame/AutoGame'))
const LiveBroadcast = React.lazy(() => import('../components/public/liveBroadcast'))
const Scene = React.lazy(() => import('../components/Scene'))

function HomePage () {
  const mainWrapper = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [vip, setVip] = useState(true)

  useEffect(() => {
    let unload = false
    window.onbeforeunload = () => {
      unload = true
    }
    return reaction(() => {
      return Store.AppStore.state.DestroyGame
    }, (destroy) => {
      if (!unload && destroy) {
        Socket.destroy()
        Store.AppStore.setModal({
          type: 'destroy',
          text: translate('modals.refreshPage'),
          onClose: () => {
            window.location.reload()
          }
        })
        Helper.addClassName(mainWrapper.current, 'game-disconnected')
      }
    })
  }, [])

  useEffect(() => {
    const swiperTextElement = document.getElementById('swipe-up-text')
    if (swiperTextElement) {
      swiperTextElement.innerHTML = translate('swiperText')
    }
    return reaction(() => {
      return Store.GameStore.room
    }, (room) => {
      if (room) {
        const isVipRoom = Roulette.isVipRoom()
        setVip(isVipRoom)
        setIsLoaded(room)
        if (!isLoaded) {
          Roulette.fullstory()
          Store.AppStore.updateState('smallTable', false)
          Store.AppStore.updateState('round', 200)
          Store.AppStore.updateState('activeMenu', 'list')
          Store.AppStore.updateState('menu', false)
          Store.AppStore.updateState('dashboardScreen', 1)
          Store.AppStore.updateState('video', false)
          Store.AppStore.updateState('autoGame', false)
          Store.AppStore.updateState('autoGameRound', 0)
          Store.AppStore.updateState('autoGameRoundTotal', 0)
          Store.AppStore.updateState('autoGamePlay', false)
          Store.AppStore.updateState('heatMap', false)
          Store.AppStore.updateState('favoriteShow', false)
          Store.AppStore.updateState('statisticsShow', false)
          Store.AppStore.updateState('intro', localStorage.getItem('intro') !== 'false')
        }
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session) {
        if (session.flag === State.Playing) {
          // Store.AppStore.updateState('heatMap', false)
          audio.playWarning('bet-closed')
        }
        if (session.flag !== State.Open) {
          Store.AppStore.updateState('autoGame', false)
          Store.AppStore.updateState('dashboardScreen', 1)
        }
        if (session.flag === State.Open) {
          audio.playWarning('bet-now')
          Helper.addClassName(document.body, 'state-open')
          if (Store.AppStore.state.autoGamePlay) {
            Store.AppStore.updateState('autoGameRound', Store.AppStore.state.autoGameRound - 1)
            if (Store.AppStore.state.autoGameRound >= 1) {
              const lastBets = Store.BetStore.lastSessionBets
              const totalWager = betTotalWager(lastBets)
              if (totalWager > Store.UserStore.balance) {
                Store.AppStore.setNotification({
                  type: 'warning',
                  text: translate('autoGame.noBalance2')
                })
                Store.AppStore.updateState('autoGamePlay', false)
              } else {
                Store.BetStore.changeBets(lastBets)
              }
            }
            if (Store.AppStore.state.autoGameRound === 0) {
              Store.AppStore.updateState('autoGamePlay', false)
            }
          }
        } else {
          Helper.removeClassName(document.body, 'state-open')
        }
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.language
    }, (language) => {
      i18n.changeLanguage(language)
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.lastCall
    }, (lastCall) => {
      if (lastCall) {
        audio.playWarning('last-bets')
        Helper.addClassName(document.body, 'state-last-call')
      } else {
        Helper.removeClassName(document.body, 'state-last-call')
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.activeMenu
    }, (activeMenu) => {
      Store.AppStore.updateState('dashboardScreen', activeMenu === 'chat' ? 0 : 1)
    }, {
      fireImmediately: true
    })
  }, [])

  const betTotalWager = (bets) => {
    let num = 0
    Object.keys(bets).map(key => {
      num = num + bets[key].wager
    })

    return num
  }

  if (!isLoaded) return <div className='app-loader' />

  return (
    <>
      <span className='winning-number__fake-text'>{translate('statics.won')}</span>
      <div
        id='main-container'
        ref={mainWrapper}
        className={classNames('main mobile')} key={uuidv4()}
      >
        <Hammer onSwipe={(e) => {
          if (!Store.AppStore.state.statisticsShow && !Store.AppStore.state.menu && !Store.AppStore.state.favoriteShow) {
            const dashboardScreen = Store.AppStore.state?.dashboardScreen
            if (e.direction === 2) {
              if (dashboardScreen === 3) {
                return
              }
              if (dashboardScreen === 2 && State.Open !== Store.GameStore.session.flag) {
                return
              }
              Store.AppStore.updateState('dashboardScreen', dashboardScreen + 1)
            } else if (4) {
              if (dashboardScreen === 0) {
                return
              }
              Store.AppStore.updateState('dashboardScreen', dashboardScreen - 1)
            }
          }
        }}
        >
          <div className='main__child'>
            <Suspense fallback='Loading'>
              <StatusBar key='StatusBar' />
              <OldNumbers key='OldNumbers' />
              <ActionBar vip={vip} key='ActionBar' />
              <BottomBar vip={vip} key='BottomBar' />
              <AnimatePresence>

                <Rooms key='Rooms' />
                <CircleCountDown vip={vip} svgStrokeWidth={8} key='CircleCountDown' />
                <Notification key='Notification' />
                <Modal key='Modal' />
                <RightActions vip={vip} key='rightActions' />
                <PlayerActions key='PlayerActions' />
                <AutoGame key='autoGame' />
                <Chat vip={vip} key='chat' />
                <Favorites vip={vip} key='favorites' />
                {/* <RaceTrack vip={vip} key='raceTrack' /> */}
                <Statistics vip={vip} key='statistics' />
                <MobileMenu vip={vip} key='mobile-menu' />
                <WinningNumberWrapper vip={vip} key='WinningNumberWrapper' />
              </AnimatePresence>
            </Suspense>
          </div>
        </Hammer>
        <Suspense>
          <Scene vip={vip} />
        </Suspense>
      </div>

      <Intro />
      <LiveBroadcast />
      <div className='landscape-warning'>
        <p>Telefonunuzu dikey konuma getiriniz.</p>
      </div>
    </>
  )
}

export default withTranslation('translations')(HomePage)
