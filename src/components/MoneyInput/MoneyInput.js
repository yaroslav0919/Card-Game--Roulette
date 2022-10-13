import React, { useState } from 'react'
import './MoneyInput.scss'
import { IconMinus, IconPlus2 } from '../Icons'
import Hammer from 'react-hammerjs'

const MoneyInput = ({ value, onChange }) => {
  const [valueState, setValueState] = useState(value)

  const up = () => {
    setValueState((e) => {
      return e + 10
    })
    onChange(valueState)
  }

  const down = () => {
    setValueState((e) => {
      if (e > 10) {
        return e - 10
      } else {
        return e
      }
    })
    onChange(valueState)
  }

  return (
    <div className='money-input'>
      <Hammer onTap={() => {
        down()
      }}
      >
        <div className='money-input__down'>
          <IconMinus />
        </div>
      </Hammer>
      <div className='money-input__money'>
        {valueState} ₺
      </div>
      <Hammer onTap={() => {
        up()
      }}
      >
        <div className='money-input__up'>
          <IconPlus2 />
        </div>
      </Hammer>
    </div>
  )
}

MoneyInput.propTypes = {}

export default MoneyInput
