import React, { useEffect, useRef, useState } from 'react'
import './RightActions.scss'
import Hammer from 'react-hammerjs'
import { State, Store, Helper } from 'uicore'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { translate } from '../../../utils/i18n'

import {
  IconAutoPlay,
  IconSets,
  IconHeatMapWhiteActive,
  IconMaximize,
  IconMinimize,
  IconUndo,
  IconDelete,
  IconDouble,
  IconRepeat,
  IconDeleteVip,
  IconRepeatVip,
  IconDoubleVip,
  IconUndoVip, IconAutoPlayVip, IconRaceTrackVip, IconHeatMapVip
} from '../../Icons'
import { reaction, toJS } from 'mobx'

const whileTap = { scale: 0.9 }

const container = {
  hidden: { opacity: 1 },
  exit: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  hidden: { opacity: 0, x: 50, transition: { duration: 0.2, ease: 'easeInOut' } }
}

const RightActions = ({ vip }) => {
  const [heatMap, setHeatMap] = useState(false)
  const [status, setStatus] = useState(false)
  const [mute, setMute] = useState(true)
  const [showActions, setShowActions] = useState(true)
  const [fullScreenStatus, setFullScreenStatus] = useState(false)
  const [betCount, setBetCount] = useState(0)
  const [lastSessionBets, setLastSessionBets] = useState(null)
  const [totalBet, setTotalBet] = useState(0)
  const [heatMapActive, setHeatMapActive] = useState(false)
  const [raceTrackActive, setRaceTrackActive] = useState(false)
  const [autoPlayActive, setAutoPlayActive] = useState(false)
  const [showCountDown, setShowCountDown] = useState(false)
  const [tooltip, setTooltip] = useState(null)
  const [playIcon, setPlayIcon] = useState(false)
  const playIconTimeout = useRef(null)

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.lastSessionBets
    }, (bets) => {
      setLastSessionBets(bets)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.betCount
    },
    (result) => {
      setBetCount(result)
    },
    {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.heatMap
    }, (heatMapStatus) => {
      setHeatMap(heatMapStatus)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.dashboardScreen
    }, (status) => {
      setStatus(status)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session.flag === State.Open) {
        setShowActions(true)
      } else {
        setShowActions(false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.totalBetSlipAmount
    }, (total) => {
      setTotalBet(total)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session.flag === State.Open) {
        const sessionSeconds = session.cd / 1000

        const startDate = new Date(session.last)
        const endDate = new Date(session.last)
        endDate.setSeconds(startDate.getSeconds() + sessionSeconds)
        const nowDate = Date.now()
        const remainSeconds = Math.round(Math.abs((endDate.getTime() - nowDate) / 1000))

        if (session.cd > 0) {
          playIconTimeout.current = setTimeout(() => {
            setPlayIcon(true)
          }, (remainSeconds / 2 * 1000))
        }

        setShowCountDown(true)
      } else {
        setPlayIcon(false)
        setShowCountDown(false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return () => {
      clearTimeout(playIconTimeout.current)
    }
  }, [])

  const onRaceTrackToggle = () => {
    setRaceTrackActive(!raceTrackActive)
    Store.AppStore.updateState('dashboardScreen', Store.AppStore.state.dashboardScreen === 3 ? 1 : 3)
  }

  const onAutoPlayClick = () => {
    setAutoPlayActive(!autoPlayActive)
    Store.AppStore.updateState('autoGame', !Store.AppStore.state.autoGame)
  }

  const handleHeadMapClick = () => {
    setHeatMapActive(!heatMapActive)
    Store.AppStore.updateState('dashboardScreen', Store.AppStore.state.dashboardScreen === 2 ? 1 : 2)
  }

  const onmouseenter = (value) => {
    setTooltip(value)
  }
  const onmouseleave = () => {
    setTooltip(null)
  }

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        exit='exit'
        className={classNames('right-actions', { 'right-actions--move': !showActions })}
      >
        <>

          <Hammer
            onTap={() => {
              Store.BetStore.deleteBets()
              Helper.mixTrack('bet-action', { type: 'delete' })
            }}
            onMouseEnter={() => onmouseenter('deleteBets')}
            onMouseLeave={() => onmouseleave('deleteBets')}
          >
            <motion.div
              whileTap={whileTap}
              className={classNames('right-actions__item', { 'action-bar__item--disabled': betCount === 0 })}
            >
              {vip ? <IconDeleteVip /> : <IconDelete />}
              {tooltip === 'deleteBets' && <div className='header-tooltip right-action-tooltip'>
                {translate('actions.delete')}

                                           </div>}
            </motion.div>
          </Hammer>
          <Hammer
            onTap={() => {
              if (totalBet > 0) {
                Store.BetStore.doubleBets()
                Helper.mixTrack('bet-action', { type: 'double' })
              } else {
                Store.BetStore.repeatLastBets()
                Helper.mixTrack('bet-action', { type: 'repeat' })
              }
            }}
            onMouseEnter={() => onmouseenter('repeatLastBets')}
            onMouseLeave={() => onmouseleave('repeatLastBets')}
          >
            <motion.div
              whileTap={whileTap}
              className={classNames('right-actions__item', {
                'repeat-action': lastSessionBets && showCountDown,
                'action-bar__item--disabled': lastSessionBets && Object.keys(toJS(lastSessionBets)).length === 0,
                '': !totalBet && lastSessionBets
              })}
            >

              {/* lastSessionBets */}
              {totalBet > 0
                ? vip ? <IconDoubleVip /> : <IconDouble />
                : vip ? <IconRepeatVip /> : <IconRepeat />}
              {tooltip === 'repeatLastBets' && <div className='header-tooltip right-action-tooltip'>
                {translate('actions.repeat')}
                                               </div>}
            </motion.div>
          </Hammer>

          <Hammer
            onTap={() => {
              Store.BetStore.rollbackLastBet()
              Helper.mixTrack('bet-action', { type: 'rollback' })
            }}
            onMouseEnter={() => onmouseenter('rollbackLastBet')}
            onMouseLeave={() => onmouseleave('rollbackLastBet')}
          >
            <motion.div
              whileTap={whileTap}
              className={classNames('right-actions__item', { 'action-bar__item--disabled': betCount === 0 })}
            >
              {vip ? <IconUndoVip /> : <IconUndo />}
              {tooltip === 'rollbackLastBet' && <div className='header-tooltip right-action-tooltip'>
                {translate('actions.rollback')}

                                                </div>}
            </motion.div>
          </Hammer>

          <Hammer
            onTap={() => {
              onAutoPlayClick()
              Helper.mixTrack('action', { type: 'autoplay' })
            }}
            onMouseEnter={() => onmouseenter('autoplay')}
            onMouseLeave={() => onmouseleave('autoplay')}
          >
            <motion.div
              whileTap={whileTap}
              className={classNames('right-actions__item autoplay-button', { 'right-actions__item-active': autoPlayActive })}
            >
              {vip ? <IconAutoPlayVip /> : <IconAutoPlay />}
              {tooltip === 'autoplay' && <div className='header-tooltip right-action-tooltip'>
                {translate('actions.autoPlay')}

                                         </div>}
            </motion.div>
          </Hammer>
          <div
            onClick={() => {
              onRaceTrackToggle()
              Helper.mixTrack('action', { type: 'racetrack' })
            }}
            onMouseEnter={() => onmouseenter('racetrack')}
            onMouseLeave={() => onmouseleave('racetrack')}
          >
            <motion.div
              variants={item} whileTap={whileTap}
              className={classNames('right-actions__item', { 'right-actions__item-active': raceTrackActive })}
            >
              {vip ? <IconRaceTrackVip active={playIcon} /> : <IconSets />}
              {tooltip === 'racetrack' && <div className='header-tooltip right-action-tooltip'>
                Race Track
              </div>}
            </motion.div>
          </div>

          <div
            onClick={() => {
              handleHeadMapClick()
              Helper.mixTrack('action', { type: 'heatmap' })
            }}
            onMouseEnter={() => onmouseenter('heatmap')}
            onMouseLeave={() => onmouseleave('heatmap')}
          >
            <motion.div
              variants={item} whileTap={whileTap}
              className={classNames('right-actions__item', { 'right-actions__item-active': heatMapActive })}
            >
              {vip ? <IconHeatMapVip active={playIcon} /> : <IconHeatMapWhiteActive />}
              {tooltip === 'heatmap' &&
                <div className='header-tooltip header-tooltip-last-el right-action-tooltip'>
                  Heat Map
                </div>}
            </motion.div>
          </div>
        </>
      </motion.div>
    </>
  )
}

export default RightActions
