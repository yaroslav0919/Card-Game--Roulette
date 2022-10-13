import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Store } from 'uicore'

import './Areas.scss'
import { arraySpots } from '../../../../utils/spots'
import { translate } from '../../../../utils/i18n'
import { isNumberOdd, isNumberEven, isNumberBlack, isNumberRed } from '../../../../utils/utils'
import { IconTileRed, IconTileBlack } from '../../../Icons'

const spotIDs = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 165, 166, 167, 168]

const Areas = ({ numbers = [] }) => {
  const [sections, setSections] = useState({})

  const walkRelevantSpots = (spot, number) => {
    const relevantSpots = _.uniq(spot?.relevantSpots)

    if (relevantSpots?.includes(number)) {
      return true
    } else {
      return arraySpots?.filter(item => relevantSpots?.includes(item.id)).some(spot => walkRelevantSpots(spot, number))
    }
  }

  useEffect(() => {
    const sections = {}

    const spots = arraySpots?.filter(item => spotIDs.includes(item.id))

    spots.map((spot) => {
      const founds = numbers
        .filter(number => {
          const value = Number(number.label)
          if (spot.code === 'bn-0') {
            return value === 0
          } else if (['bg-1-12', 'bg-13-24', 'bg-25-36', 'bg-1-34', 'bg-2-35', 'bg-3-36', 'bg-1-18', 'bg-19-36'].includes(spot.code)) {
            return spot.relevantSpots.includes(value)
          } else if (spot.code === 'bp-even') {
            return isNumberEven(value)
          } else if (spot.code === 'bp-odd') {
            return isNumberOdd(value)
          } else if (spot.code === 'bc-black') {
            return isNumberBlack(value)
          } else if (spot.code === 'bc-red') {
            return isNumberRed(value)
          } else if (['bs-tier', 'bs-orphelin', 'bs-voisin', 'bs-zero'].includes(spot.code)) {
            return walkRelevantSpots(spot, value)
          }
        })
        .reduce((acc, number) => acc + number.value, 0)

      spot.percent = (founds * 100 / Store.AppStore.state?.round).toFixed(1)
      sections[spot.code] = spot
    })

    setSections(sections)
  }, [numbers])

  return (
    <div className='statistics-areas'>
      <div className='statistics-areas__row'>
        <div>
          <b>0</b>
          <span>{parseFloat(sections['bn-0']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.firstDozen')}</b>
          <span>{parseFloat(sections['bg-1-12']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.secondDozen')}</b>
          <span>{parseFloat(sections['bg-13-24']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.thirdDozen')}</b>
          <span>{parseFloat(sections['bg-25-36']?.percent)}%</span>
        </div>
      </div>
      <div className='statistics-areas__row statistics-areas__row--3'>
        <div>
          <b>{translate('statics.firstColumn')}</b>
          <span>{parseFloat(sections['bg-1-34']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.secondColumn')}</b>
          <span>{parseFloat(sections['bg-2-35']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.thirdColumn')}</b>
          <span>{parseFloat(sections['bg-3-36']?.percent)}%</span>
        </div>
      </div>
      <div className='statistics-areas__row statistics-areas__row--6'>
        <div>
          <b>1-18</b>
          <span>{parseFloat(sections['bg-1-18']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.even')}</b>
          <span>{parseFloat(sections['bp-even']?.percent)}%</span>
        </div>
        <div>
          <IconTileRed />
          <span>{parseFloat(sections['bc-red']?.percent)}%</span>
        </div>
        <div>
          <IconTileBlack />
          <span>{parseFloat(sections['bc-black']?.percent)}%</span>
        </div>
        <div>
          <b>{translate('statics.odd')}</b>
          <span>{parseFloat(sections['bp-odd']?.percent)}%</span>
        </div>
        <div>
          <b>19-36</b>
          <span>{parseFloat(sections['bg-19-36']?.percent)}%</span>
        </div>
      </div>
      <div className='statistics-areas__row statistics-areas__row--4'>
        <div>
          <b>TIER</b>
          <span>{parseFloat(sections['bs-tier']?.percent)}%</span>
        </div>
        <div>
          <b>ORPHELINS</b>
          <span>{parseFloat(sections['bs-orphelin']?.percent)}%</span>
        </div>
        <div>
          <b>VOISINS</b>
          <span>{parseFloat(sections['bs-voisin']?.percent)}%</span>
        </div>
        <div>
          <b>ZERO</b>
          <span>{parseFloat(sections['bs-zero']?.percent)}%</span>
        </div>
      </div>
    </div>
  )
}

Areas.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.object)
}

export default Areas
