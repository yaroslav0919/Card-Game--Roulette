import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'
import classNames from 'classnames'

// eslint-disable-next-line react/display-name
const Checkbox = forwardRef((props, ref) => {
  return (
    <div className={classNames('checkbox', props.compClass)}>
      <label className='checkbox__label'>
        {props.text}
        <input ref={ref} {...props} type='checkbox' />
        <span className='checkmark' />
      </label>
    </div>
  )
})

Checkbox.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.any,
  compClass: PropTypes.string
}

export default Checkbox
