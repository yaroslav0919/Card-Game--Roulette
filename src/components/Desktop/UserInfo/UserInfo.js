import React, { useRef, useState, useEffect } from 'react'
import './UserInfo.scss'
import { translate } from '../../../utils/i18n'
import CurrencySymbol from 'currency-symbol-map'
import { reaction } from 'mobx'
import { Helper, Store } from 'uicore'

const UserInfo = () => {
  const [totalBet, setTotalBet] = useState(0)
  const [balance, setBalance] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.balance
    }, (balance) => {
      setBalance(balance)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.user
    }, (user) => {
      user && setUser(user)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.totalBetSlipAmount
    }, (total) => {
      setTotalBet(total)
    }, {
      fireImmediately: true
    })
  }, [])

  return (
    <div className='amount-wrapper'>
      <div className='amount-wrapper__boxes'>
        <span className='amount-wrapper__boxes-title'>{translate('balance')}</span>
        <span className='amount-wrapper__boxes-amount'>{CurrencySymbol(user?.currency)} {Helper.formatMoney(balance)} </span>
      </div>
      <div className='amount-wrapper__boxes'>
        <span className='amount-wrapper__boxes-title'>{translate('totalBet')}</span>
        <span className='amount-wrapper__boxes-amount'>{CurrencySymbol(user?.currency)} {totalBet} </span>
      </div>
    </div>
  )
}

UserInfo.propTypes = {}

export default UserInfo
