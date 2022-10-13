import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './RangeSlider.scss'
import classNames from 'classnames'

const RangeSlider = (props) => {
  const [sliderWidth, setSliderWidth] = useState('50')

  return (
    <div className={classNames('range-slider', props.compClass)}>
      <strong style={{ width: sliderWidth + '%' }} className='slide' />
      <input
        {...props} onChange={(e) => {
          setSliderWidth(e.target.value)
          if (props.onChange) {
            props.onChange(e.target.value)
          }
        }}
        type='range' min='1' max='100' value={sliderWidth}
      />
    </div>
  )
}

RangeSlider.propTypes = {
  text: PropTypes.any,
  onChange: PropTypes.any,
  compClass: PropTypes.string
}

export default RangeSlider
