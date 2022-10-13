import React from 'react'
import PropTypes from 'prop-types'

import './Temperature.scss'
import TemperatureBar from '../../../TemperatureBar/TemperatureBar'
import ColorWheel from '../../../ColorWheel/ColorWheel'

const Temperature = ({ numbers, coldNumbers, hotNumbers }) => {
  return (
    <div className='statistics-standart'>
      <div className='statistics-hot'>
        <TemperatureBar type='hot' numbers={hotNumbers} />
      </div>
      <div className='statistics-standart__chart'>
        <ColorWheel numbers={numbers} />
      </div>
      <div className='statistics-cold'>
        <TemperatureBar type='cold' numbers={coldNumbers} />
      </div>
    </div>
  )
}

Temperature.propTypes = {
  coldNumbers: PropTypes.arrayOf(PropTypes.number),
  hotNumbers: PropTypes.arrayOf(PropTypes.number),
  numbers: PropTypes.arrayOf(PropTypes.object)
}

export default Temperature
