import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './RightActions.scss'
import Hammer from 'react-hammerjs'
import { State, Store, Helper } from 'uicore'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import classNames from 'classnames'

import {
  IconAutoPlay,
  IconHamgurgerMenu,
  IconStatics,
  IconSets,
  IconHeatMapWhite,
  IconHeatMapWhiteActive,
  IconVolumeMute,
  IconMaximizeGrid,
  IconMinimizeGrid, IconMaximize, IconMinimize,

  // Vip icons
  ButtonBaseVip, IconMinimizeGridVip, IconHamburgerMenuVip,
  IconStaticsVip, IconHeatMapVip, IconVolumeVip, IconRaceTrackVip, IconMinimizeVip, IconMaximizeVip, IconMaximizeGridVip

} from '../Icons'

import { reaction } from 'mobx'
import PlayerActions from '../PlayerActions/PlayerActions'
import Roulette from '../../utils/roulette'
import GameVolume from '../GameVolume/GameVolume'

const whileTap = { scale: 0.9 }

const container = {
  hidden: { opacity: 1 },
  exit: { opacity: 0 },
  play: (i) => {
    // console.log("controls", i)
    return {
      transition: {
        delay: i * 0.5
      }
    }
  },
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
  const [smallTable, setSmallTable] = useState(false)
  const [fullScreenStatus, setFullScreenStatus] = useState(false)
  const [playIcon, setPlayIcon] = useState(false)
  const controls = useAnimation()
  const playIconTimeout = useRef(null)

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
      return Store.AppStore.state.smallTable
    }, (status) => {
      setSmallTable(status)
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
        const sessionSeconds = session.cd / 1000

        const startDate = new Date(session.last)
        const endDate = new Date(session.last)
        endDate.setSeconds(startDate.getSeconds() + sessionSeconds)
        const nowDate = Date.now()
        const remainSeconds = Math.round(Math.abs((endDate.getTime() - nowDate) / 1000))

        setShowActions(true)
        if (session.cd > 0) {
          playIconTimeout.current = setTimeout(() => {
            setPlayIcon(true)
          }, (remainSeconds / 2 * 1000))
        }
      } else {
        ReactDOM.unstable_batchedUpdates(() => {
          setShowActions(false)
          setPlayIcon(false)
        })
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

  const onStatisticsClick = () => {
    Store.AppStore.updateState('statisticsShow', !Store.AppStore.state.statisticsShow)
  }

  const heatMapClick = (status) => {
    Store.AppStore.updateState('heatMap', status)
  }

  const onRaceTrackToggle = () => {
    Store.AppStore.updateState('dashboardScreen', Store.AppStore.state.dashboardScreen === 3 ? 1 : 3)
  }

  const onTableSizeChange = () => {
    Store.AppStore.updateState('smallTable', !Store.AppStore.state.smallTable)
  }

  return (
    <>
      <svg width='0' height='0'>
        <defs>
          <linearGradient
            id='button-base-vip-a'
            x1='0.5'
            y1='1'
            x2='0.5'
            y2='0'
            spreadMethod='pad'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='0%' stopColor='#635c4d' />
            <stop offset='100%' stopColor='#e1ded3' />
          </linearGradient>
          <linearGradient
            id='button-base-vip-b'
            x1='1'
            y1='0.5'
            x2='0'
            y2='0.5'
            spreadMethod='pad'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='0%' stopColor='#635c4d' />
            <stop offset='100%' stopColor='#e1ded3' />
          </linearGradient>
        </defs>
      </svg>
      {status !== 0 &&
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={classNames('right-actions', { 'right-actions--move': !showActions })}
        >
          <>
            {(['AndroidOS', 'Android'].indexOf(Roulette.device.os()) !== -1) &&
              <Hammer onTap={() => {
                Helper.toggleFullScreen()
                setFullScreenStatus(!fullScreenStatus)
                Helper.mixTrack('action', { type: 'minimize-table' })
              }}
              >
                <motion.div variants={item} initial='rest' whileTap={vip ? 'hover' : whileTap} animate='rest' className='right-actions__item'>
                  {fullScreenStatus
                    ? vip
                        ? <div className='button-base'>
                          <ButtonBaseVip />
                          <IconMinimizeVip />
                        </div>
                        : <IconMinimize />
                    : vip
                      ? <div className='button-base'>
                        <ButtonBaseVip />
                        <IconMaximizeVip />
                        </div>
                      : <IconMaximize />}
                </motion.div>
              </Hammer>}
            {showActions &&
              <Hammer onTap={() => {
                onTableSizeChange()
                Helper.mixTrack('action', { type: 'minimize-table' })
              }}
              >
                <motion.div variants={item} initial='rest' whileTap={vip ? 'hover' : whileTap} animate='rest' className='right-actions__item'>
                  {smallTable
                    ? vip
                        ? <div className='button-base'>
                          <ButtonBaseVip />
                          <IconMaximizeGridVip />
                        </div>
                        : <IconMaximizeGrid />
                    : vip
                      ? <div className='button-base'>
                        <ButtonBaseVip />
                        <IconMinimizeGridVip />
                        </div>
                      : <IconMinimizeGrid />}
                </motion.div>
              </Hammer>}
            <Hammer onTap={() => {
              onStatisticsClick()
              Helper.mixTrack('action', { type: 'statistics' })
            }}
            >
              <motion.div variants={item} initial='rest' custom={0} whileTap={vip ? 'hover' : whileTap} animate='rest' className='right-actions__item'>
                {vip
                  ? <div className='button-base'>
                    <ButtonBaseVip />
                    <IconStaticsVip active={playIcon} />
                  </div>
                  : <IconStatics />}
              </motion.div>
            </Hammer>
            {showActions &&
              <Hammer onTap={() => {
                onRaceTrackToggle()
                Helper.mixTrack('action', { type: 'racetrack' })
              }}
              >
                <motion.div variants={item} initial='rest' custom={1} whileTap={vip ? 'hover' : whileTap} animate='rest' className='right-actions__item'>
                  {vip
                    ? <div className='button-base'>
                      <ButtonBaseVip />
                      <IconRaceTrackVip active={playIcon} />
                      </div>
                    : <IconSets />}

                </motion.div>
              </Hammer>}

            <Hammer onTap={() => {
              Store.AppStore.updateState('dashboardScreen', Store.AppStore.state.dashboardScreen === 2 ? 1 : 2)
              Helper.mixTrack('action', { type: 'heatmap' })
            }}
            >
              <motion.div variants={item} initial='rest' custom={2} whileTap={vip ? 'hover' : whileTap} animate={status === 2 ? 'hover' : 'rest'} className='right-actions__item'>
                {vip
                  ? <div className='button-base'>
                    <ButtonBaseVip />
                    <IconHeatMapVip clicked={status === 2} active={playIcon} />
                  </div>
                  : <IconHeatMapWhiteActive />}
              </motion.div>
            </Hammer>
          </>
          <GameVolume vip={vip} />
          <Hammer onTap={() => {
            Store.AppStore.updateState('menu', !Store.AppStore.state.menu)
            Store.AppStore.updateState('activeMenu', 'list')
            Helper.mixTrack('action', { type: 'sidebar-menu' })
          }}
          >
            <motion.div
              variants={item} initial='rest' whileTap={vip ? 'hover' : whileTap} animate='rest'
              className='right-actions__item right-actions__item--menu'
            >
              {vip
                ? <div className='button-base'>
                  <ButtonBaseVip />
                  <IconHamburgerMenuVip />
                  </div>
                : <IconHamgurgerMenu />}
            </motion.div>
          </Hammer>
        </motion.div>}
    </>
  )
}

export default RightActions
