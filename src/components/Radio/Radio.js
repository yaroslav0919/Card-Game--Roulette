import React from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'
import classNames from 'classnames'

const Radio = (props) => {
  return (
    <div className={classNames('radio', props.compClass)}>
      <label className='radio__label'>
        {props.text}
        <input {...props} onChange={props.onChange} type='radio' />
        <span className='checkmark' />
      </label>
    </div>
  )
}

Radio.propTypes = {
  text: PropTypes.any,
  onChange: PropTypes.any,
  compClass: PropTypes.string
}

export default Radio
