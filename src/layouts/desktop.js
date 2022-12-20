import React, { useState, useEffect, useRef, Suspense } from 'react'
import { reaction } from 'mobx'
import classNames from 'classnames'
import { withTranslation } from 'react-i18next'
import { Store, State, Actions, Socket, Helper } from 'uicore'
import { AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import Roulette from '../utils/roulette'
import './desktop.scss'
// import Table2 from '../components/Desktop/Table2/Table2'
import OldNumbers from '../components/Desktop/OldNumbers/OldNumbers'
import Rooms from '../components/Desktop/Rooms/Rooms'
import RightActions from '../components/Desktop/RightActions/RightActions'
import PlayerActions from '../components/PlayerActions/PlayerActions'

import CircleCountDown from '../components/CircleCountDown/CircleCountDown'
import { i18n, translate } from '../utils/i18n'
import WinningNumberWrapper from '../components/Desktop/WinningNumberWrapper/WinningNumberWrapper'
import audio from '../utils/audio'
import ChipWrapper from '../components/Desktop/ChipWrapper/ChipWrapper'
import UserInfo from '../components/Desktop/UserInfo/UserInfo'

import { each } from 'lodash'

import HeaderRights from './header-right'
import HeaderLeft from './header-left'
import ChatWrapper from '../components/Desktop/ChatWrapper/ChatWrapper'
import WinnerWrapper from '../components/Desktop/WinnerWrapper/WinnerWrapper'
import { IconCornerTopLeft, IconCornerTopRight } from '../components/Icons'

const MobileMenu = React.lazy(() => import('../components/Desktop/MobileMenu/MobileMenu'))
const Favorites = React.lazy(() => import('../components/Desktop/Favorites/Favorites'))
const Statistics = React.lazy(() => import('../components/Desktop/Statistics/Statistics'))
// const RaceTrack = React.lazy(() => import('../components/Desktop/RaceTrack/RaceTrack'))
const Notification = React.lazy(() => import('../components/Desktop/Notification/Notification'))
const Modal = React.lazy(() => import('../components/Modal/Modal'))
const AutoGame = React.lazy(() => import('../components/Desktop/AutoGame/AutoGame'))
const LiveBroadcast = React.lazy(() => import('../components/Desktop/public/liveBroadcast'))

function HomePage () {
  const mainWrapper = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [vip, setVip] = useState(false)

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
      return Store.GameStore.room
    }, (room) => {
      if (room) {
        const isVipRoom = Roulette.isVipRoom()
        setVip(false)
        setIsLoaded(room)
        if (!isLoaded) {
          Roulette.fullstory()
          Store.AppStore.updateState('smallTable', false)
          Store.AppStore.updateState('round', 200)
          Store.AppStore.updateState('activeMenu', 'list')
          Store.AppStore.updateState('menu', false)
          Store.AppStore.updateState('chatActive', true)
          Store.AppStore.updateState('video', false)
          Store.AppStore.updateState('autoGame', false)
          Store.AppStore.updateState('autoGameRound', 0)
          Store.AppStore.updateState('autoGameRoundTotal', 0)
          Store.AppStore.updateState('autoGamePlay', false)
          Store.AppStore.updateState('heatMap', false)
          Store.AppStore.updateState('favoriteShow', false)
          Store.AppStore.updateState('statisticsShow', false)
          // Store.AppStore.updateState('intro', localStorage.getItem('intro') === 'false' ? false : true);
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

        let key = null
        each(State, (value, node) => {
          if (value === session.flag) {
            key = node.toLocaleLowerCase()
            return false
          }
        })
        mainWrapper.current && each(mainWrapper.current.classList, (name) => {
          if (~name.indexOf('session-state')) {
            mainWrapper.current.classList.remove(name)
            return false
          }
        })
        // Helper.addClassName(mainWrapper.current, `session-state-${key}`)
        // Helper.addClassName(mainWrapper.current, `session-state-${key}`)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.betStatus
    }, (status) => {
      if (!status) {
        Helper.addClassName(mainWrapper.current, 'session-processing')
      } else {
        Helper.removeClassName(mainWrapper.current, 'session-processing')
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    mainWrapper.current.style.width = `${window.screen.width}px`
    mainWrapper.current.style.height = `${window.screen.height}px`
    window.addEventListener('resize', resizer, true)
    window.dispatchEvent(new Event('resize'))

    const el = document.getElementsByClassName('drag-area')

    return () => {
      window.removeEventListener('resize', resizer)
    }
  }, [isLoaded])

  const resizer = () => {
    if (!mainWrapper.current) return
    const wRatio = window.innerWidth / window.screen.width
    const hRatio = window.innerHeight / window.screen.height
    // mainWrapper.current.style.transform = `scale(${wRatio})`
    mainWrapper.current.style.zoom = wRatio
  }
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
        className={classNames('main desktop')} key={uuidv4()}
      >
        <div className='main__child'>
          <div className='w33 d-flex justify-content-between flex-column'>
            {/* <BottomBar /> */}
            <div>
              <div style={{ marginTop: '10px' }}>
                <HeaderLeft />
                <ChatWrapper />
              </div>
              <WinnerWrapper />
            </div>
            <Statistics vip={vip} key='statistics' />
          </div>
          <div className='w33 d-flex align-items-start center-area justify-content-center '>
            <div className='center-wrapper'>
              <div className='grid-center d-flex'>
                <div className='old-numbers-wrapper'>
                  <OldNumbers />
                </div>
                <div className='livebroadcast-wrapper'>
                  <LiveBroadcast />
                </div>
              </div>
              <div className='circle-countdown-rooms-wrapper'>
                <div className='circle-countdown-wrapper'>
                  <CircleCountDown svgStrokeWidth={10} vip={vip} size={70} key='CircleCountDown' />
                </div>
                <Rooms />
              </div>
              <AnimatePresence>
                <WinningNumberWrapper vip={vip} key='WinningNumberWrapper' />
              </AnimatePresence>
            </div>
          </div>
          <div
            className='w33 d-flex flex-column align-items-end justify-content-between'
            style={{ overflow: 'hidden' }}
          >

            <HeaderRights vip={vip} />
            <div className='d-flex flex-column align-items-end'>
              {/* <div className='d-flex position-relative'>
                <Table2 vip={vip} />
                <RaceTrack vip={vip} key='raceTrack' />
              </div> */}

              {vip
                ? <div className='chip-menu-vip-wrapper'>
                  <div className='chip-menu'>
                    <div className='chip-menu-corners'>
                      <div className='corner-top-left'>
                        <IconCornerTopLeft />
                      </div>
                      <div className='corner-top-right'>
                        <IconCornerTopRight />
                      </div>
                    </div>
                    <ChipWrapper vip={vip} />
                    <RightActions vip={vip} key='rightActions' />
                    <AutoGame key='autoGame' />
                  </div>
                </div>
                : <div className='chip-menu'>
                  <ChipWrapper vip={vip} />
                  <RightActions vip={vip} key='rightActions' />
                  <AutoGame key='autoGame' />
                </div>}
              {vip
                ? <div className='amount-vip-wrapper'>
                  <UserInfo />
                </div>
                : <UserInfo />}
            </div>
          </div>
          <Suspense fallback='Loading'>
            <AnimatePresence>
              <Notification key='Notification' />
              <Modal key='Modal' />
              <PlayerActions key='PlayerActions' />
              {/* <Chat key="chat" /> */}
              <Favorites key='Favorites' />
              {/* <RaceTrack key="raceTrack" /> */}
              <MobileMenu vip={vip} key='MobileMenu' />
            </AnimatePresence>
          </Suspense>

        </div>
      </div>
    </>
  )
}

export default withTranslation('translations')(HomePage)
