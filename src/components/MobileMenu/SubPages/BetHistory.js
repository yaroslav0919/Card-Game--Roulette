import React, { useState, useEffect } from 'react'
import CurrencySymbol from 'currency-symbol-map'
import classNames from 'classnames'
import Hammer from 'react-hammerjs'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Store, Actions, Helper } from 'uicore'
import { reaction, toJS } from 'mobx'

import { arraySpots } from '../../../utils/spots'
import { translate } from '../../../utils/i18n'
import { IconBetHistory, IconArrowLeft, IconArrowRight } from '../../Icons'

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
  const [histories, setHistories] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true)
      const result = await Actions.generate('LogUserTransactions', {
        size,
        page
      })
      setLoading(false)
      setHistories(result?.list)
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

  const onClickPrev = () => {
    if (loading) return
    if (page == 1) {
      return
    }
    setPage(page - 1)
  }

  const onClickNext = () => {
    if (loading || !histories) return
    if (histories.length === 10) {
      setPage(page + 1)
    }
  }

  return (
    <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--bet-history'>
      <div className='sub-page__title'>
        <button className='sub-page__back' onClick={() => { backToMenuFunc('list') }}>
          <IconArrowLeft />
        </button>
        <span>
          <IconBetHistory />
          {translate('betHistory.title')}
        </span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>

        {Array.isArray(histories) && histories.length > 0
          ? histories?.map((item, index) => (
            <div className='table--v3' key={`bh-${index}`}>
              <table>
                <tbody>
                  <tr>
                    <th>{translate('betHistory.session')}</th>
                    <td>#{item.sid}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.room.name')}</th>
                    <td>{Store.GameStore.getRoomName(item?.bc)}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.bet')}</th>
                    <td>{getBet(item)}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.totalBet')}</th>
                    <td>{getTotalBet(item)}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.totalGain')}</th>
                    <td>{getTotalGain(item)}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.result')}</th>
                    <td>{getWinningNumber(item)}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.status.title')}</th>
                    <td className={classNames({ 'blue-text': item.status === 5 })}>{translate(`betHistory.status.${StatusEnum[item.status]}`)}</td>
                  </tr>
                  <tr>
                    <th>{translate('betHistory.date')}</th>
                    <td>{Helper.formatDate(item.end)}</td>
                  </tr>
                </tbody>
              </table>
              <button className='table--v3__detail' onClick={() => { backToMenuFunc('betDetails', item) }}>
                {translate('betHistory.detail.link')}
                <IconArrowRight />
              </button>
            </div>
          ))
          : <div className='empty-history'>{translate('betHistory.noBet')}</div>}

        {histories.length > 0 &&
          <div className='pagination'>
            <Hammer onTap={onClickPrev}><motion.button disabled={page == 0} whileTap={page != 0 && whileTap}><IconArrowLeft /></motion.button></Hammer>
            <Hammer onTap={onClickNext}><motion.button whileTap={whileTap}><IconArrowRight /></motion.button></Hammer>
          </div>}
      </div>
    </motion.div>
  )
}

BetHistory.propTypes = {
  backToMenu: PropTypes.func,
  size: PropTypes.number,
  page: PropTypes.number
}

export default BetHistory
