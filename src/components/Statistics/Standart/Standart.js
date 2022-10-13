import React from 'react'
import PropTypes from 'prop-types'

import './Standart.scss'
import TemperatureBar from '../../TemperatureBar/TemperatureBar'
import HotColdWheel from '../../HotColdWheel/HotColdWheel'

const Standart = ({ numbers, coldNumbers, hotNumbers }) => {
  return (
    <div className='statistics-standart'>
      <div className='statistics-hot'>
        <TemperatureBar type='hot' numbers={hotNumbers} />
      </div>
      <div className='statistics-standart__chart'>
        <HotColdWheel numbers={numbers} />
      </div>
      <div className='statistics-cold'>
        <TemperatureBar type='cold' numbers={coldNumbers} />
      </div>
    </div>
  )
}

Standart.propTypes = {
  coldNumbers: PropTypes.arrayOf(PropTypes.number),
  hotNumbers: PropTypes.arrayOf(PropTypes.number),
  numbers: PropTypes.arrayOf(PropTypes.object)
}

export default Standart
