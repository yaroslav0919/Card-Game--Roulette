import React from 'react'
import './TemperatureBar.scss'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { isNumberRed } from '../../utils/utils'

import { IconIce, IconFire } from '../Icons'

const TemperatureBar = ({ type, numbers = [] }) => {
  return (
    <div className={classnames('temperature-bar', {
      'temperature-bar--hot': type === 'hot',
      'temperature-bar--cold': type === 'cold'
    })}
    >
      <div className='temperature-bar__icon'>
        {type === 'hot' && <IconFire />}
        {type === 'cold' && <IconIce />}
      </div>
      {numbers && numbers.map((number, index) => (
        <div
          key={index}
          className={classnames('temperature-bar__item', {
            'temperature-bar__item--red': isNumberRed(number)
          })}
        >
          {number}
        </div>
      ))}
    </div>
  )
}

TemperatureBar.propTypes = {
  type: PropTypes.oneOf(['hot', 'cold']),
  numbers: PropTypes.arrayOf(PropTypes.number)
}

export default TemperatureBar
