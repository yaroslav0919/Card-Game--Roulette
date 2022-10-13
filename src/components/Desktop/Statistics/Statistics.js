import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Hammer from 'react-hammerjs'
import { AnimatePresence, motion } from 'framer-motion'
import { Store } from 'uicore'
import _ from 'lodash'
import { reaction } from 'mobx'

import './Statistics.scss'
import {
  IconStatics2,
  IconFavorites,
  IconCornerTopLeft,
  IconCornerTopRight,
  IconStaticsVip,
  IconFavoritesVip, IconCornerBottomLeft, IconCornerBottomRight
} from '../../Icons'
import Areas from './Areas/Areas'
import Standart from './Standart/Standart'
import Temperature from './Temperature/Temperature'
import LiveBets from './LiveBets/LiveBets'
import OldNumbers from '../OldNumbers/OldNumbers'
import RoundSelectionSlider from '../../RoundSelectionSlider/RoundSelectionSlider'
import { translate } from '../../../utils/i18n'
import audio from '../../../utils/audio'
import { arraySpots } from '../../../utils/spots'

import FavoritesWrapper from '../FavoritesWrapper/FavoritesWrapper'

const getMostFrequentElement = (arr) => {
  const reducer = (obj, count) => {
    const item = obj.find(item => item.label === count)
    if (item) {
      item.value++
    } else {
      obj.push({ label: count, value: 1 })
    }
    return obj
  }
  return arr.reduce(reducer, []).sort((a, b) => a.value > b.value ? -1 : 1)
}

const Statistics = ({ vip }) => {
  const [statisticsShow, setStatisticsShow] = useState(true)
  const [winners, setWinners] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [activeFavoritesTab, setActiveFavoritesTab] = useState(0)
  const [activeMainTab, setActiveMainTab] = useState(0)
  const [hotNumbers, setHotNumbers] = useState([])
  const [coldNumbers, setColdNumbers] = useState([])
  const [numbers, setNumbers] = useState([])

  const whileTap = { scale: 0.9 }

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.statisticsShow
    }, (status) => {
      setStatisticsShow(status)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.WinnerStore.winners
    },
    (result) => {
      setWinners(result)
    },
    {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(
      () => {
        return Store.AppStore.state.round
      },
      async (value) => {
        const lastTransactions = await Store.GameStore.getHistory(value)
        const numbers = _.flatMapDeep(lastTransactions, (item) => _.flattenDeep(item.v))
        const mostFrequentNumbers = getMostFrequentElement(numbers)
        setNumbers(mostFrequentNumbers)
        setHotNumbers(_.take(mostFrequentNumbers?.map(item => Number(item.label)), 5))
        setColdNumbers(_.takeRight(mostFrequentNumbers?.map(item => Number(item.label)), 5))
      },
      {
        fireImmediately: true
      }
    )
  }, [])

  const onFavoritesClick = () => {
    // Store.AppStore.updateState('favoriteShow', !Store.AppStore.state.favoriteShow);
    setActiveMainTab(1)
  }
  const onStaticsClick = () => {
    // Store.AppStore.updateState('staticsShow', !Store.AppStore.state.staticsShow);
    setActiveMainTab(0)
  }

  const FinaleEnPlein = [
    {
      text: 0,
      keys: [
        'bn-0', 'bn-10', 'bn-20', 'bn-30'
      ]
    },
    {
      text: 1,
      keys: [
        'bn-1', 'bn-11', 'bn-21', 'bn-31'
      ]
    },
    {
      text: 2,
      keys: [
        'bn-2', 'bn-12', 'bn-22', 'bn-32'
      ]
    },
    {
      text: 3,
      keys: [
        'bn-3', 'bn-13', 'bn-23', 'bn-33'
      ]
    },
    {
      text: 4,
      keys: [
        'bn-4', 'bn-14', 'bn-24', 'bn-34'
      ]
    },
    {
      text: 5,
      keys: [
        'bn-5', 'bn-15', 'bn-25', 'bn-35'
      ]
    },
    {
      text: 6,
      keys: [
        'bn-6', 'bn-16', 'bn-26', 'bn-36'
      ]
    },
    {
      text: 7,
      keys: [
        'bn-7', 'bn-17', 'bn-27'
      ]
    },
    {
      text: 8,
      keys: [
        'bn-8', 'bn-18', 'bn-28'
      ]
    },
    {
      text: 9,
      keys: [
        'bn-9', 'bn-19', 'bn-29'
      ]
    }
  ]

  const FinalesACheval = [
    {
      text: '0/3',
      keys: [
        'bn-0-3', 'bn-10-13', 'bn-20-23', 'bn-30-33'
      ]
    }, {
      text: '1/4',
      keys: [
        'bn-1-4', 'bn-11-14', 'bn-21-24', 'bn-31-34'
      ]
    }, {
      text: '2/5',
      keys: [
        'bn-2-5', 'bn-12-15', 'bn-22-25', 'bn-32-35'
      ]
    }, {
      text: '3/6',
      keys: [
        'bn-3-6', 'bn-13-16', 'bn-23-26', 'bn-33-36'
      ]
    }, {
      text: '4/7',
      keys: [
        'bn-4-7', 'bn-14-17', 'bn-24-27', 'bn-34'
      ]
    }, {
      text: '5/8',
      keys: [
        'bn-5-8', 'bn-15-18', 'bn-25-28', 'bn-35'
      ]
    }, {
      text: '6/9',
      keys: [
        'bn-6-9', 'bn-16-19', 'bn-26-29', 'bn-36'
      ]
    }, {
      text: '7/10',
      keys: [
        'bn-7-10', 'bn-17-20', 'bn-27-30'
      ]
    }, {
      text: '8/11',
      keys: [
        'bn-8-11', 'bn-18-21', 'bn-28-31'
      ]
    }, {
      text: '9/12',
      keys: [
        'bn-9-12', 'bn-19-22', 'bn-29-32'
      ]
    }
  ]

  const TamBahisler = _.range(0, 37)

  const addBets = async (keys) => {
    const points = []
    _.each(keys, function (key) {
      points.push({ bet: key, wager: Store.GameStore.rate })
    })
    await Store.BetStore.addBets(points)
    audio.playEffect('chip')
    Store.AppStore.updateState('menu', false)
  }

  const addFullBets = (key) => {
    const spotItem = arraySpots?.find((item) => {
      return 'bn-' + key === item.code
    })
    const points = []
    points.push({ bet: spotItem.code, wager: Store.GameStore.rate })
    const founds = arraySpots?.filter(spot => spot.relevantSpots?.includes(spotItem.id))
    founds.filter((spot) => {
      // console.log(spot.code[1]);
      if (spot.availableType.includes('french') && spot.code[1] === 'n') {
        points.push({ bet: spot.code, wager: Store.GameStore.rate * spot.relevantSpots.length })
      }
      return true
    })
    Store.BetStore.addBets(points)
    Store.AppStore.updateState('menu', false)
  }

  const setFavoritesSubTab = (key) => {
    setActiveFavoritesTab(key)
  }
  return (
    <>
      {vip
        ? <div className='statistics-vip-wrapper'>
          <div className='corner-top-left'>
            <IconCornerTopLeft />
          </div>
          <div className='corner-top-right'>
            <IconCornerTopRight />
          </div>
          <div className='corner-bottom-left'>
            <IconCornerBottomLeft />
          </div>
          <div className='corner-bottom-right'>
            <IconCornerBottomRight />
          </div>
          <div
            className={classNames('statistics', { 'winners-active': winners.length })}
          >
            <div className='statistics__main-tabs statistics__tabs tabs position-relative'>
              <div
                onClick={onStaticsClick}
                className={classNames('statistics__tab', { 'statistics__tab--active': activeMainTab === 0 })}
              >
                <span>{vip ? <IconStaticsVip /> : <IconStatics2 />}{translate('statics.titleUppercase')}</span>
              </div>
              <div
                onClick={onFavoritesClick}
                className={classNames('statistics__tab ', { 'statistics__tab--active': activeMainTab === 1 })}
              >
                <span>{vip ? <IconFavoritesVip /> : <IconFavorites />} {translate('favouriteBets.titleUppercase')}</span>
              </div>
              <div className='indicator' style={{ left: `${50 * activeMainTab}%` }} />
            </div>
            {activeMainTab === 0 && <div>
              <div className='sub-tabs-wrapper'>
                <div
                  className='statistics__tabs sub-tabs tabs position-relative'
                >
                  <Hammer onTap={() => {
                    setActiveTab(0)
                  }}
                  >
                    <div
                      className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 0 })}
                    >
                      <span style={{ zIndex: '999' }}>  {translate('statistics.tab1')}</span>
                    </div>
                  </Hammer>
                  <Hammer onTap={() => {
                    setActiveTab(1)
                  }}
                  >
                    <div
                      className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 1 })}
                    >
                      <span style={{ zIndex: '999' }}> {translate('statistics.heat')}</span>
                    </div>
                  </Hammer>
                  <Hammer onTap={() => {
                    setActiveTab(2)
                  }}
                  >
                    <div
                      className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 2 })}
                    >
                      <span style={{ zIndex: '999' }}> {translate('statistics.tab3')}</span>
                    </div>
                  </Hammer>
                  <Hammer onTap={() => {
                    setActiveTab(3)
                  }}
                  >
                    <div
                      className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 3 })}
                    >
                      <span style={{ zIndex: '999' }}> {translate('statistics.tab4')}</span>
                    </div>
                  </Hammer>
                  <div
                    className='indicator-sub'
                    style={{ left: `${25 * activeTab}%` }}
                  >
                    <span />
                  </div>
                </div>
              </div>
              <div className='statistics__content'>
                <div>
                  <OldNumbers count={11} />
                  {activeTab === 0 &&
                    <Standart numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                  {activeTab === 1 &&
                    <Temperature
                      numbers={numbers} coldNumbers={coldNumbers}
                      hotNumbers={hotNumbers}
                    />}
                  {activeTab === 2 &&
                    <LiveBets coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                  {activeTab === 3 && <Areas numbers={numbers} />}
                </div>
                <RoundSelectionSlider />
              </div>
            </div>}

            {activeMainTab === 1 &&
              <div>
                <div className='statistics__main-tabs desktop-favorites-tabs position-relative tabs'>
                  <div
                    className={classNames('desktop-favorites-tabs__tab', { 'desktop-favorites-tabs__tab--active': activeFavoritesTab === 0 })}
                    onClick={() => setFavoritesSubTab(0)}
                  >
                    {vip ? <span>{translate('favouriteBets.title')}</span> : translate('favouriteBets.title')}
                  </div>

                  <div
                    className={classNames('desktop-favorites-tabs__tab', { 'desktop-favorites-tabs__tab--active': activeFavoritesTab === 1 })}
                    onClick={() => setFavoritesSubTab(1)}
                  >
                    {vip ? <span>{translate('favouriteBets.special.title')}</span> : translate('favouriteBets.special.title')}
                  </div>

                  <div
                    className='indicator-fav'
                    style={{ width: '50%', left: `${50 * activeFavoritesTab}%` }}
                  >
                    <span />
                  </div>
                </div>
                {activeFavoritesTab === 0 && <FavoritesWrapper />}
                {activeFavoritesTab === 1 && <div className='fav-bets'>
                  <span>{translate('favouriteBets.special.finaleEnPlein')}</span>
                  <div className='bet-areas'>
                    {FinaleEnPlein && FinaleEnPlein.map((item, index) => {
                      return (
                        <motion.div
                          onClick={() => {
                            addBets(item.keys)
                          }} whileTap={whileTap} className='bet-areas__item'
                          key={'bet-areas-' + index}
                        >{item.text}
                        </motion.div>
                      )
                    })}
                  </div>
                  <span>{translate('favouriteBets.special.finalesACheval')}</span>
                  <div className='bet-areas'>
                    {FinalesACheval && FinalesACheval.map((item, index) => {
                      return (
                        <motion.div
                          onClick={() => {
                            addBets(item.keys)
                          }} whileTap={whileTap} className='bet-areas__item'
                          key={'bet-areas2-' + index}
                        >{item.text}
                        </motion.div>
                      )
                    })}
                  </div>
                  <span>{translate('favouriteBets.special.fullBets')}</span>
                  <div className='bet-areas bet-areas--v2'>
                    {TamBahisler && TamBahisler.map((item, index) => {
                      return (
                        <motion.div
                          onClick={() => {
                            addFullBets(item)
                          }} whileTap={whileTap} className='bet-areas__item'
                          key={'bet-areas--v2-' + index}
                        >{item}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>}
              </div>}
          </div>
        </div>
        : <div
            className={classNames('statistics', { 'winners-active': winners.length })}
          >
          <div className='statistics__main-tabs statistics__tabs tabs position-relative'>
            <div
              onClick={onStaticsClick}
              className={classNames('statistics__tab', { 'statistics__tab--active': activeMainTab === 0 })}
            >
              <IconStatics2 /> {translate('statics.titleUppercase')}
            </div>
            <div
              onClick={onFavoritesClick}
              className={classNames('statistics__tab ', { 'statistics__tab--active': activeMainTab === 1 })}
            >
              <IconFavorites /> {translate('favouriteBets.titleUppercase')}
            </div>
            <div className='indicator' style={{ left: `${50 * activeMainTab}%` }} />
          </div>
          {activeMainTab === 0 && <div>
            <div className='sub-tabs-wrapper'>
              <div
                className='statistics__tabs sub-tabs tabs position-relative'
              >
                <Hammer onTap={() => {
                  setActiveTab(0)
                }}
                >
                  <div
                    className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 0 })}
                  >
                    <span style={{ zIndex: '999' }}>  {translate('statistics.tab1')}</span>
                  </div>
                </Hammer>
                <Hammer onTap={() => {
                  setActiveTab(1)
                }}
                >
                  <div
                    className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 1 })}
                  >
                    <span style={{ zIndex: '999' }}> {translate('statistics.heat')}</span>
                  </div>
                </Hammer>
                <Hammer onTap={() => {
                  setActiveTab(2)
                }}
                >
                  <div
                    className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 2 })}
                  >
                    <span style={{ zIndex: '999' }}> {translate('statistics.tab3')}</span>
                  </div>
                </Hammer>
                <Hammer onTap={() => {
                  setActiveTab(3)
                }}
                >
                  <div
                    className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 3 })}
                  >
                    <span style={{ zIndex: '999' }}> {translate('statistics.tab4')}</span>
                  </div>
                </Hammer>
                <div className='indicator-sub' style={{ width: '25%', left: `${25 * activeTab}%` }}>
                  <span />
                </div>
              </div>
            </div>
            <div className='statistics__content'>
              <div>
                <OldNumbers count={11} />
                {activeTab === 0 &&
                  <Standart numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                {activeTab === 1 &&
                  <Temperature numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                {activeTab === 2 && <LiveBets coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                {activeTab === 3 && <Areas numbers={numbers} />}
              </div>
              <RoundSelectionSlider />
            </div>
                                  </div>}

          {activeMainTab === 1 &&
            <div>
              <div className='statistics__main-tabs desktop-favorites-tabs position-relative tabs'>
                <div
                  className={classNames('desktop-favorites-tabs__tab', { 'desktop-favorites-tabs__tab--active': activeFavoritesTab === 0 })}
                  onClick={() => setFavoritesSubTab(0)}
                >
                  {translate('favouriteBets.title')}
                </div>

                <div
                  className={classNames('desktop-favorites-tabs__tab', { 'desktop-favorites-tabs__tab--active': activeFavoritesTab === 1 })}
                  onClick={() => setFavoritesSubTab(1)}
                >
                  {translate('favouriteBets.special.title')}
                </div>

                <div
                  className='indicator-fav'
                  style={{ width: '50%', left: `${50 * activeFavoritesTab}%` }}
                >
                  <span />
                </div>
              </div>
              {activeFavoritesTab === 0 && <FavoritesWrapper />}
              {activeFavoritesTab === 1 && <div className='fav-bets'>
                <span>{translate('favouriteBets.special.finaleEnPlein')}</span>
                <div className='bet-areas'>
                  {FinaleEnPlein && FinaleEnPlein.map((item, index) => {
                    return (
                      <motion.div
                        onClick={() => {
                          addBets(item.keys)
                        }} whileTap={whileTap} className='bet-areas__item'
                        key={'bet-areas-' + index}
                      >{item.text}
                      </motion.div>
                    )
                  })}
                </div>
                <span>{translate('favouriteBets.special.finalesACheval')}</span>
                <div className='bet-areas'>
                  {FinalesACheval && FinalesACheval.map((item, index) => {
                    return (
                      <motion.div
                        onClick={() => {
                          addBets(item.keys)
                        }} whileTap={whileTap} className='bet-areas__item'
                        key={'bet-areas2-' + index}
                      >{item.text}
                      </motion.div>
                    )
                  })}
                </div>
                <span>{translate('favouriteBets.special.fullBets')}</span>
                <div className='bet-areas bet-areas--v2'>
                  {TamBahisler && TamBahisler.map((item, index) => {
                    return (
                      <motion.div
                        onClick={() => {
                          addFullBets(item)
                        }} whileTap={whileTap} className='bet-areas__item'
                        key={'bet-areas--v2-' + index}
                      >{item}
                      </motion.div>
                    )
                  })}
                </div>
                                           </div>}
            </div>}
        </div>}
    </>
  )
}

export default Statistics
