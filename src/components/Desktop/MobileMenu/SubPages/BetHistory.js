import React, { useState, useEffect, useRef } from 'react'
import CurrencySymbol from 'currency-symbol-map'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Store, Actions, Helper } from 'uicore'
import { reaction, toJS } from 'mobx'
import _ from 'lodash'

import { arraySpots } from '../../../../utils/spots'
import { translate } from '../../../../utils/i18n'
import { IconBetHistory, IconArrowLeft, IconArrowRight, IconClose } from '../../../Icons'
import './BetHistory.scss'
const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const whileTap = { scale: 0.9 }

const StatusEnum = {
  0: 'inProgress',
  1: 'accepted',
  2: 'paymentError',
  3: 'rewardInProgress',
  4: 'betClosed',
  5: 'rewardSent',
  6: 'rewardError',
  9: 'canceled'
}

const BetHistory = ({ backToMenu, size = 10 }) => {
  const ref = useRef(null)
  const [histories, setHistories] = useState([])
  const [cloneHistories, setCloneHistories] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')

  // useOnClickOutside(ref, () => Store.AppStore.updateState('activeMenu', '', true));

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true)
      const result = await Actions.generate('LogUserTransactions', {
        size,
        page
      })
      setLoading(false)
      setHistories(result?.list)
      setCloneHistories(result?.list)
    }
    getHistory()
  }, [page])

  function backToMenuFunc (e, data) {
    if (data) {
      Store.AppStore.updateState('betDetails', data)
    }
    backToMenu(e)
  }

  const getTotalGain = (item) => {
    const rewards = item?.trx?.filter(t => t.type === 'reward')
    const totalGain = rewards?.reduce((acc, bet) => acc + bet?.amount, 0)
    const currency = Store.GameStore.currencyList?.find(c => c.id === rewards?.[0]?.currency)
    if (totalGain) {
      return `${Helper.formatMoney(totalGain)} ${CurrencySymbol(currency?.code)}`
    } else {
      return 0
    }
  }

  const getTotalBet = (item) => {
    const wagers = item?.trx?.filter(t => t.type === 'wager')
    const totalBet = wagers?.reduce((acc, bet) => acc + bet?.amount, 0)
    const currency = Store.GameStore.currencyList?.find(c => c.id === wagers?.[0].currency)
    if (totalBet) {
      return `${Helper.formatMoney(totalBet)} ${CurrencySymbol(currency?.code)}`
    } else {
      return 0
    }
  }

  const getWinningNumber = (item) => {
    return item?.result?.rewards?.[0].number
  }

  const parseBet = (bet, id) => {
    if (bet.startsWith('bn-')) {
      const b = bet.replace('bn-', '')
      if (b?.length) {
        return b
      }
    } else if (bet.startsWith('bc-')) {
      const b = bet.replace('bc-', '')
      if (b?.length) {
        return translate('betHistory.' + b)
      }
    } else if (bet.startsWith('bp-')) {
      const b = bet.replace('bp-', '')
      if (b?.length) {
        return translate('betHistory.' + b)
      }
    } else if (bet.startsWith('bg-')) {
      const b = bet.replace('bg-', '')?.replace('-', '/')
      if (b) {
        return b
      }
    } else if (bet.startsWith('bs-')) {
      const b = arraySpots?.find(s => s.code === bet)
      const c = b?.relevantSpots?.map(i => {
        const spot = arraySpots?.find(s => s.id === i)
        if (spot && spot.code) {
          return parseBet(spot.code, id)
        }
      })
      return c
    }
  }

  const getBet = (item) => {
    const result = []
    toJS(item?.trx.filter(t => t.type === 'wager')).map((t) => {
      const bets = t?.jdata?.detail?.split('|')
      bets.map((b) => {
        const bet = b.split(':')[0]
        result.push(parseBet(bet))
      })
    })
    return result.join(', ')
  }

  const sessionsText = (e) => {
    setSearchText(e.target.value)
  }
  const sessionFilter = () => {
    const filteredItems = _.filter(histories, function (obj) {
      return obj.sid.toString().indexOf(searchText) != -1
    })
    setHistories(filteredItems)
  }
  const sessionClear = () => {
    setHistories(cloneHistories)
    setSearchText('')
    document.getElementById('sessionText').value = ''
  }

  return (
    <>
      <motion.div className='bet-history-wrapper'>
        <div className='bg-blur' onClick={() => { backToMenuFunc('list') }} />
        <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--bet-history'>
          <div className='sub-page__title'>
            <button className='sub-page__back' onClick={() => { backToMenuFunc('list') }}>
              <IconClose />
            </button>
            <span>
              <IconBetHistory />
              {translate('betHistory.titleUppercase')}
            </span>
          </div>
          <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>

            {Array.isArray(histories) && histories.length > 0
              ? <div>
                <div className='bet-history-modal__actions'>
                  <input id='sessionText' type='text' placeholder={translate('betHistory.searchBySessionNumber')} onChange={(e) => sessionsText(e)} />
                  <button className='btn-orange' onClick={sessionFilter}>{translate('betHistory.filter')}</button>
                  <button className='btn-grey' onClick={sessionClear}>{translate('betHistory.clear')}</button>
                </div>
                <div className='table-wrapper--v3'>
                  <div className='table--v3'>

                    <table>
                      <thead>
                        <tr>
                          <th style={{ width: '111px' }}>{translate('betHistory.session')}</th>
                          <th style={{ width: '121px' }}>{translate('betHistory.room.name')}</th>
                          <th style={{ width: '242px' }}>{translate('betHistory.bet')}</th>
                          <th style={{ width: '121px' }}>{translate('betHistory.totalBet')}</th>
                          <th style={{ width: '121px' }}>{translate('betHistory.totalGain')}</th>
                          {/* <th>{translate('betHistory.result')}</th> */}
                          <th style={{ width: '121px' }}>{translate('betHistory.status.title')}</th>
                          <th style={{ width: '221px' }}>{translate('betHistory.date')}</th>
                          <th style={{ width: '100px' }}>{translate('betHistory.detail.link')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {histories?.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>#{item.sid}</td>
                              <td>{Store.GameStore.getRoomName(item?.bc)}</td>
                              <td>{getBet(item)}</td>
                              <td>{getTotalBet(item)}</td>
                              <td style={{ color: '#e9c426' }}>{getTotalGain(item)}</td>
                              {/* <td>{getWinningNumber(item)}</td> */}
                              <td className={classNames({ 'blue-text': item.status === 5 })}>{translate(`betHistory.status.${StatusEnum[item.status]}`)}</td>
                              <td>{Helper.formatDate(item.end)}</td>
                              <td> <button className='table--v3__detail' onClick={() => { backToMenuFunc('betDetails', item) }}>
                                <IconArrowRight />
                                   </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>

                  </div>
                </div>
                </div>
              : <div className='empty-history'>{translate('betHistory.noBet')}</div>}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

BetHistory.propTypes = {
  backToMenu: PropTypes.func,
  size: PropTypes.number,
  page: PropTypes.number
}

export default BetHistory
