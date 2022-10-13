import React, { useEffect, useState } from 'react'
import Hammer from 'react-hammerjs'
import classnames from 'classnames'
import { reaction } from 'mobx'
import { Store, Actions } from 'uicore'
import _ from 'lodash'
import { AnimatePresence, motion } from 'framer-motion'

import './Favorites.scss'
import '../../BetAreas/BetAreas.scss'
import { IconFavorites2 } from '../../Icons'
import OverlayModal from '../../OverlayModal/OverlayModal'
import FavoritesWrapper from '../FavoritesWrapper/FavoritesWrapper'
import { arraySpots } from '../../../utils/spots'
import { translate } from '../../../utils/i18n'
import audio from '../../../utils/audio'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const whileTap = { scale: 1.3 }

const Favorites = () => {
  const [favoritesShow, setFavoritesShow] = useState(false)

  const [activeTab, setActiveTab] = useState(0)

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

  let title = translate('favouriteBets.title')

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.favoriteShow
    }, (status) => {
      setFavoritesShow(status)
    }, {
      fireImmediately: true
    })
  }, [])

  if (activeTab === 1) {
    title = translate('favouriteBets.special.title')
  }

  const onClose = () => {
    Store.AppStore.updateState('favoriteShow', false)
  }

  return (
    <>{favoritesShow &&
      <motion.div
        variants={overlayVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='favorites'
      >
        <Hammer onTap={onClose}>
          <div className='statistics__trigger' />
        </Hammer>
        <div className='favorites__modal'>
          <AnimatePresence>
            <OverlayModal title={title} icon={<IconFavorites2 />} onClose={onClose}>
              {activeTab === 0 && <FavoritesWrapper onClose={onClose} />}
              {activeTab === 1 && <div className='fav-bets'>
                <span>{translate('favouriteBets.special.finaleEnPlein')}</span>
                <div className='bet-areas'>
                  {FinaleEnPlein && FinaleEnPlein.map((item, index) => {
                    return (
                      <Hammer onTap={() => {
                        addBets(item.keys)
                      }}
                      >
                        <motion.div whileTap={whileTap} className='bet-areas__item' key={'bet-areas-' + index}>{item.text}</motion.div>
                      </Hammer>
                    )
                  })}
                </div>
                <span>{translate('favouriteBets.special.finalesACheval')}</span>
                <div className='bet-areas'>
                  {FinalesACheval && FinalesACheval.map((item, index) => {
                    return (
                      <Hammer onTap={() => {
                        addBets(item.keys)
                      }}
                      >
                        <motion.div whileTap={whileTap} className='bet-areas__item' key={'bet-areas2-' + index}>{item.text}</motion.div>
                      </Hammer>
                    )
                  })}
                </div>
                <span>{translate('favouriteBets.special.fullBets')}</span>
                <div className='bet-areas bet-areas--v2'>
                  {TamBahisler && TamBahisler.map((item, index) => {
                    return (
                      <Hammer onTap={() => {
                        addFullBets(item)
                      }}
                      >
                        <motion.div whileTap={whileTap} className='bet-areas__item' key={'bet-areas--v2-' + index}>{item}</motion.div>
                      </Hammer>
                    )
                  })}
                </div>
                                  </div>}
            </OverlayModal>
          </AnimatePresence>
        </div>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='favorites__tabs'
        >
          <Hammer onTap={() => {
            setActiveTab(0)
          }}
          >
            <div className={classnames('favorites__tab', { 'favorites__tab--active': activeTab === 0 })}>
              {translate('favouriteBets.title')}
            </div>
          </Hammer>
          <Hammer onTap={() => {
            setActiveTab(1)
          }}
          >
            <div className={classnames('favorites__tab', { 'favorites__tab--active': activeTab === 1 })}>
              {translate('favouriteBets.special.title')}
            </div>
          </Hammer>
        </motion.div>
      </motion.div>}
    </>
  )
}

Favorites.propTypes = {}

export default Favorites
