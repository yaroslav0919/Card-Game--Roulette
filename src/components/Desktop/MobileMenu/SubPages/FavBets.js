import React, { useState } from 'react'
import Hammer from 'react-hammerjs'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Store } from 'uicore'
import _ from 'lodash'
import { motion } from 'framer-motion'
import { arraySpots } from '../../../utils/spots'
import { translate } from '../../../utils/i18n'

import { IconFavorites2, IconArrowLeft, IconPlus } from '../../Icons'
import FavoriteItem from '../../FavoriteItem/FavoriteItem'
import FavoritesWrapper from '../../FavoritesWrapper/FavoritesWrapper'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const FavBets = ({ backToMenu }) => {
  const [favBestActiveTab, setFavBestActiveTab] = useState(0)

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
      text: '2/4',
      keys: [
        'bn-2-4', 'bn-12-14', 'bn-22-24', 'bn-32-34'
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

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  const addBets = (keys) => {
    const points = []
    _.each(keys, function (key) {
      points.push({ bet: key, wager: Store.GameStore.rate })
    })

    Store.BetStore.changeBets(points)
    Store.AppStore.updateState('menu', false)
  }

  const addFullBets = (key) => {
    const spotItem = arraySpots?.find((item) => { return 'bn-' + key === item.code })
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
    Store.BetStore.changeBets(points)
    Store.AppStore.updateState('menu', false)
  }

  return (
    <motion.div
      variants={variants}
      className='mobile-menu__content sub-page sub-page--fav-bets'
    >
      <div className='sub-page__title'>
        <button className='sub-page__back' onClick={() => { backToMenuFunc('list') }}>
          <IconArrowLeft />
        </button>
        <span>
          <IconFavorites2 />
          {translate('favouriteBets.title')}
        </span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>
        <div className='mobile-menu__tabs mobile-menu__tabs--2'>
          <Hammer onTap={() => {
            setFavBestActiveTab(0)
          }}
          >
            <div className={classNames('mobile-menu__tab', { 'mobile-menu__tab--active': favBestActiveTab === 0 })}>
              {translate('favouriteBets.title')}
            </div>
          </Hammer>
          <Hammer onTap={() => {
            setFavBestActiveTab(1)
          }}
          >
            <div className={classNames('mobile-menu__tab', { 'mobile-menu__tab--active': favBestActiveTab === 1 })}>
              {translate('favouriteBets.special.title')}
            </div>
          </Hammer>
        </div>
        {favBestActiveTab === 0 && <>
          <FavoritesWrapper />
                                   </>}

        {favBestActiveTab === 1 && <>
          <span>{translate('favouriteBets.special.finaleEnPlein')}</span>
          <div className='bet-areas'>
            {FinaleEnPlein && FinaleEnPlein.map((item, index) => {
              return (
                <div
                  className='bet-areas__item' key={'bet-areas-' + index} onClick={() => {
                    addBets(item.keys)
                  }}
                >{item.text}
                </div>
              )
            })}
          </div>
          <span>{translate('favouriteBets.special.finalesACheval')}</span>
          <div className='bet-areas'>
            {FinalesACheval && FinalesACheval.map((item, index) => {
              return (
                <div
                  className='bet-areas__item' key={'bet-areas2-' + index} onClick={() => {
                    addBets(item.keys)
                  }}
                >{item.text}
                </div>
              )
            })}
          </div>
          <span>{translate('favouriteBets.special.fullBets')}</span>
          <div className='bet-areas bet-areas--v2'>
            {TamBahisler && TamBahisler.map((item, index) => {
              return (
                <div
                  className='bet-areas__item' key={'bet-areas--v2-' + index} onClick={() => {
                    addFullBets(item)
                  }}
                >{item}
                </div>
              )
            })}
          </div>
                                   </>}
      </div>
    </motion.div>
  )
}

FavBets.propTypes = {
  backToMenu: PropTypes.func
}

export default FavBets
