import React, { useEffect, useState } from 'react'
import Slider from 'react-input-slider'
import { reaction } from 'mobx'
import { Store } from 'uicore'

import { translate } from '../../utils/i18n'

import './RoundSelectionSlider.scss'

const RoundSelectionSlider = ({ vip }) => {
  const [value, setValue] = useState(Store.AppStore.state.round)
  const onChangeValue = (value) => Store.AppStore.updateState('round', value)

  useEffect(() => {
    return reaction(
      () => {
        return Store.AppStore.state.round
      },
      (value) => {
        setValue(value)
      },
      {
        fireImmediately: true
      }
    )
  }, [])

  return (
    <div className='round-selection'>
      <div className='round-selection__title'>
        {translate('statics.lastRound', { round: value })}
      </div>
      <div className='round-selection__slider'>
        <Slider
          axis='x'
          xmin={5}
          xmax={500}
          x={value}
          className='statistics-slider'
          onChange={({ x }) => onChangeValue(x)}
          styles={{
            track: {
              backgroundColor: '#ffffff'
            },
            active: {
              background: vip ? 'linear-gradient(to left, #72d875, #3c713e);' : '#54c157'
            },
            thumb: {
              width: 20,
              height: 20
            }
          }}
        />
        <div className='round-selection__label'>
          {value}
        </div>
      </div>
    </div>
  )
}

RoundSelectionSlider.propTypes = {}

export default RoundSelectionSlider
