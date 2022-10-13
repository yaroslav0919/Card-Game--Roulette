import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CurrencySymbol from 'currency-symbol-map'
import { motion } from 'framer-motion'
import { Store, Helper } from 'uicore'

import { translate } from '../../../utils/i18n'
import { IconLimits, IconArrowLeft } from '../../Icons'
import { reaction } from 'mobx'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const Limits = ({ backToMenu }) => {
  const [user, setUser] = useState(null)
  const [rewards, setRewards] = useState(null)
  const [specialLimits, setSpecialLimits] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.room
    }, (room) => {
      setSpecialLimits(room.betOptions.specialLimits)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.rewards
    }, (rew) => {
      setRewards(rew)
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

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  const getBetLimit = () => {
    const currency = Store.GameStore.currencyList?.find(c => c.id === Store?.GameStore?.room?.userDetail?.currency)
    return `${Helper.formatMoney(Store?.GameStore?.room?.betOptions?.MinSingleStakeLimit, null, false)} - ${Helper.formatMoney(Store?.GameStore?.room?.betOptions?.MaxSingleStakeLimit, null, false)} ${CurrencySymbol(currency?.code)}`
  }

  return (
    <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--limits'>
      <div className='sub-page__title'>
        <button
          className='sub-page__back' onClick={() => {
            backToMenuFunc('list')
          }}
        >
          <IconArrowLeft />
        </button>
        <span>
          <IconLimits />
          {translate('limits.title')}
        </span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>
        <div>
          <div className='table-box'>
            <div className='table-box__row'>
              <small>{translate('limits.roomName')} <b>:</b></small>
              <strong>{Store.GameStore.getRoomName()}</strong>
            </div>
            <div className='table-box__row'>
              <small>{translate('limits.betLimit')} <b>:</b></small>
              <strong className='yellow-text'>{getBetLimit()}</strong>
            </div>
            <div className='table-box__row'>
              <small>{translate('limits.sessionNo')} <b>:</b></small>
              <strong>{Store.GameStore.session?.id}</strong>
            </div>
          </div>
          <div className='table--v2'>
            <table>
              <tbody>
                <tr>
                  <th>{translate('limits.bet')}</th>
                  <th>{translate('limits.betLimit')}</th>
                  <th>{translate('limits.payment')}</th>
                </tr>
                {specialLimits && Object.keys(specialLimits).map((key, index) => {
                  return (
                    <tr key={'table-bet-detail-' + index}>
                        <td>{translate('specialBets.' + key)}</td>
                        <td className='yellow-text'>{Helper.formatMoney(specialLimits[key].MinSingleStakeLimit, null, false)} - {Helper.formatMoney(specialLimits[key].MaxSingleStakeLimit, null, false)} {CurrencySymbol(user?.currency)}</td>
                        <td>{rewards && rewards[key].pt + ':' + rewards[key].p}</td>
                      </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

Limits.propTypes = {
  backToMenu: PropTypes.func
}

export default Limits
