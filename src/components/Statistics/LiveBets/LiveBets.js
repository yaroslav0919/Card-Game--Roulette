import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { reaction } from 'mobx'
import { Store } from 'uicore'
import _ from 'lodash'

import './LiveBets.scss'
import { translate } from '../../../utils/i18n'
import { arraySpots } from '../../../utils/spots'
import { isNumberBlack, isNumberRed } from '../../../utils/utils'
import TemperatureBar from '../../TemperatureBar/TemperatureBar'

const spots = [...arraySpots]

const walk = (arr = [], result = []) => {
  arr.map(item => {
    if (item.relevantSpots) {
      const founds = spots
        .filter(spot => item.relevantSpots.includes(spot.id))
        .map(spot => { return { ...spot, count: item.count } })

      walk(founds, result)
    } else {
      const { id, count } = item
      const hasBet = result.find(i => i.id === item.id)
      if (hasBet) {
        hasBet.count += count
      } else {
        result.push({ id, count })
      }
    }
  })

  return result
}

const LiveBets = ({ numbers, coldNumbers, hotNumbers }) => {
  const [bets, setBets] = useState([])
  const [betCount, setBetCount] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.betCounts
    },
    (result) => {
      setBetCount(Object.keys(result)?.length)
      const arr = Object.keys(result)?.map(i => {
        const { count } = result[i]
        return { ...spots.find(item => item.code === i), count }
      })
      const bets = _.take(walk(arr).sort((a, b) => a.count > b.count ? -1 : 1), 5)
      const hightBet = bets?.[0]?.count
      setBets(bets?.map((item, index) => {
        item.width = item.count * 100 / hightBet
        return item
      }))
    },
    {
      fireImmediately: true
    })
  }, [])

  return (
    <div className='live-bets'>
      <div className='live-bets__count'>{translate('liveBets.live', { betCount })}</div>
      <div className='live-bets__content'>
        <div className='statistics-hot'>
          <TemperatureBar type='hot' numbers={hotNumbers} />
        </div>
        <div className='live-bets__list'>
          {bets?.map((item, index) => (
            <div
              key={index}
              className={classnames({
                'live-bets__item': true,
                'live-bets__item--red': isNumberRed(item.id),
                'live-bets__item--black': isNumberBlack(item.id)
              })}
              style={{
                width: `${item.width}%`
              }}
            >
              <b>{item.id}</b>{index < 3 && <span>{translate('liveBets.betItemCount', { count: item.count })}</span>}
            </div>
          ))}
        </div>
        <div className='statistics-cold'>
          <TemperatureBar type='cold' numbers={coldNumbers} />
        </div>
      </div>
    </div>
  )
}

LiveBets.propTypes = {
  coldNumbers: PropTypes.arrayOf(PropTypes.number),
  hotNumbers: PropTypes.arrayOf(PropTypes.number),
  numbers: PropTypes.arrayOf(PropTypes.object)
}

export default LiveBets
