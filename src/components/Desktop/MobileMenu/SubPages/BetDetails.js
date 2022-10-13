import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import CurrencySymbol from 'currency-symbol-map'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Helper, Store } from 'uicore'
import { reaction, toJS } from 'mobx'

import { arraySpots } from '../../../../utils/spots'
import { translate } from '../../../../utils/i18n'
import { IconPlay, IconArrowLeft, IconClose } from '../../../Icons'
import HistoryTable from '../../../HistoryTable/HistoryTable'

import './BetHistory.scss'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

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

const BetDetails = ({ backToMenu, vip }) => {
  const [detail, setDetail] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [winningNumberKey, setWinningNumberKey] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.betDetails
    }, (detail) => {
      setDetail(detail)
      getHistoryTableData(detail)
    }, {
      fireImmediately: true
    })
  }, [])

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  const getTotalGain = (item) => {
    const reward = item?.trx.find(t => t.type === 'reward')
    const currency = Store.GameStore.currencyList?.find(c => c.id === reward?.currency)
    if (reward) {
      return `${Helper.formatMoney(reward.amount)} ${CurrencySymbol(currency?.code)}`
    } else {
      return 0
    }
  }

  const getTotalBet = (item) => {
    const wagers = item?.trx.filter(t => t.type === 'wager')
    const totalBet = wagers?.reduce((acc, bet) => acc + bet?.amount, 0)
    const currency = Store.GameStore.currencyList?.find(c => c.id === wagers?.[0].currency)
    if (totalBet) {
      return `${Helper.formatMoney(totalBet)} ${CurrencySymbol(currency?.code)}`
    } else {
      return 0
    }
  }

  const getBetLimit = () => {
    const currency = Store.GameStore.currencyList?.find(c => c.id === Store?.GameStore?.room?.userDetail?.currency)
    return `${Helper.formatMoney(Store?.GameStore?.room?.betOptions?.MinSingleStakeLimit)} - ${Helper.formatMoney(Store?.GameStore?.room?.betOptions?.MaxSingleStakeLimit)} ${CurrencySymbol(currency?.code)}`
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
    item?.trx.filter(t => t.type === 'wager').map((t) => {
      const bets = t?.jdata?.detail?.split('|')
      bets.map((b) => {
        const bet = b.split(':')[0]
        result.push(parseBet(bet))
      })
    })
    return result.join(', ')
  }

  const getHistoryTableData = (item) => {
    const wagers = toJS(item?.trx).filter(t => t.type === 'wager')

    const detail = wagers?.[0]?.jdata?.detail.split('|')
    const parsedData = detail.map((bet) => {
      const betSplit = bet.split(':')
      return { bet: betSplit[0], wager: parseFloat(betSplit[1]) }
    })
    setTableData(parsedData)
    const reward = toJS(item?.result?.rewards?.[0])
    if (reward) {
      setWinningNumberKey(reward.number)
    }
  }

  return (
    <motion.div className='bet-details-wrapper'>
      <div className='bg-blur' onClick={() => { backToMenuFunc('list') }} />
      <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--bet-details'>
        <div className='sub-page__title'>
          <div className='d-flex align-items-center'>
            <button
              className='sub-page__back bet-details-back' onClick={() => {
                backToMenuFunc('betHistory')
              }}
            >
              <IconArrowLeft />
            </button>
            <span className='bet-details-back-text'>{translate('betHistory.detail.turnBack')}</span>
          </div>
          <span>{translate('betHistory.detail.titleUppercase')}</span>
          <button className='sub-page__back' onClick={() => { backToMenuFunc('list') }}>
            <IconClose />
          </button>
        </div>
        <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>

          <div className='table--v3 details'>
            <table>
              <tbody>

                <tr>
                  <th>{translate('betHistory.session')}</th>
                  <td>#{detail?.sid}</td>
                </tr>
                <tr>
                  <th>{translate('limits.betLimit')}</th>
                  <td className='yellow-text'>{getBetLimit()}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.room.name')}</th>
                  <td>{Store.GameStore.getRoomName(detail?.bc)}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.bet')}</th>
                  <td>{getBet(detail)}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.totalBet')}</th>
                  <td>{getTotalBet(detail)}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.totalGain')}</th>
                  <td className='yellow-text'>{getTotalGain(detail)}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.result')}</th>
                  <td>{winningNumberKey}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.status.title')}</th>
                  <td className={classNames({ 'green-text': detail?.status === 5 })}>{translate(`betHistory.status.${StatusEnum[detail?.status]}`)}</td>
                </tr>
                <tr>
                  <th>{translate('betHistory.date')}</th>
                  <td>{Helper.formatDate(detail?.end)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='list'>
            <HistoryTable vip={vip} data={tableData} winningNumberKey={'bn-' + winningNumberKey} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

BetDetails.propTypes = {
  backToMenu: PropTypes.func
}

export default BetDetails
