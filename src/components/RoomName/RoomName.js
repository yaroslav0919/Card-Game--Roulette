import React, { useState, useRef } from 'react'
import CurrencySymbol from 'currency-symbol-map'
import { Store, Helper } from 'uicore'
import Hammer from 'react-hammerjs'

import { translate } from '../../utils/i18n'

import './RoomName.scss'
import classNames from 'classnames'
import useOnClickOutside from '../../hooks/clickOutside'

const getBetLimit = () => {
  const currency = Store.GameStore.currencyList?.find(c => c.id === Store?.GameStore?.room?.userDetail?.currency)
  return `${CurrencySymbol(currency?.code)} ${Helper.formatMoney(Store?.GameStore?.room?.betOptions?.MinSingleStakeLimit, null, false)} - ${Helper.formatMoney(Store?.GameStore?.room?.betOptions?.MaxSingleStakeLimit, null, false)}`
}

const RoomName = () => {
  const ref1 = useRef(null)
  const [tooltip1, setTooltip1] = useState(false)
  const ref2 = useRef(null)
  const [tooltip2, setTooltip2] = useState(false)

  useOnClickOutside(ref1, () => setTooltip1(false))
  useOnClickOutside(ref2, () => setTooltip2(false))

  return (
    <div className='room-name'>
      <div ref={ref1}>
        <Hammer onTap={() => {
          // setTooltip1(!tooltip1);
        }}
        >
          <span>
            {Store.GameStore.getRoomName()} ·
            <div className={classNames('tooltip', 'tooltip--1', { 'tooltip--show': tooltip1 })}>
              {translate('roomName.tooltip1')}
            </div>
          </span>
        </Hammer>
      </div>
                    &nbsp;
      <div ref={ref2}>
        <Hammer onTap={() => {
          // setTooltip2(!tooltip2);
        }}
        >
          <div style={{ position: 'relative' }}>
            {getBetLimit()}
            <div className={classNames('tooltip', 'tooltip--2', { 'tooltip--show': tooltip2 })}>
              {translate('roomName.tooltip2')}
            </div>
          </div>
        </Hammer>
      </div>
    </div>
  )
}

RoomName.propTypes = {}

export default RoomName
