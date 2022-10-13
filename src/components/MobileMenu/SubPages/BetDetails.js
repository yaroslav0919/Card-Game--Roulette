import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import CurrencySymbol from 'currency-symbol-map'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Helper, Store } from 'uicore'
import { reaction, toJS } from 'mobx'

import { arraySpots } from '../../../utils/spots'
import { translate } from '../../../utils/i18n'
import { IconPlay, IconArrowLeft } from '../../Icons'
import HistoryTable from '../../HistoryTable/HistoryTable'
import Roulette from '../../../utils/roulette'

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
    <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--bet-details'>
      <div className='sub-page__title'>
        <button
          className='sub-page__back' onClick={() => {
            backToMenuFunc('betHistory')
          }}
        >
          <IconArrowLeft />
        </button>
        <span>{translate('betHistory.detail.titleUppercase')}</span>
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
                <td>{getTotalGain(detail)}</td>
              </tr>
              <tr>
                <th>{translate('betHistory.result')}</th>
                <td>{winningNumberKey}</td>
              </tr>
              <tr>
                <th>{translate('betHistory.status.title')}</th>
                <td className={classNames({ 'blue-text': detail?.status === 5 })}>{translate(`betHistory.status.${StatusEnum[detail?.status]}`)}</td>
              </tr>
              <tr>
                <th>{translate('betHistory.date')}</th>
                <td>{Helper.formatDate(detail?.end)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='table-box'>
          {/**
                     <div className="table-box__row">
                     <small>{translate('limits.roomName')} <b>:</b></small>
                     <strong>{translate(`betHistory.room.${detail?.bc}`)}</strong>
                     </div>**/}
          <div className='table-box__row'>
            <small>{translate('limits.betLimit')} <b>:</b></small>
            <strong className='yellow-text'>{getBetLimit()}</strong>
          </div>
          {/**
                     <div className="table-box__row">
                     <small>{translate('limits.sessionNo')} <b>:</b></small>
                     <strong>#{detail?.sid}</strong>
                     </div>**/}
        </div>

        <div className='list'>
          {detail && <HistoryTable vip={Roulette.isVipRoom(detail.room)} data={tableData} winningNumberKey={'bn-' + winningNumberKey} />}
        </div>

        {/*
        <div className="session-repeat">
          <span>Seansı Tekrar İzle</span>
          <div className="video">
            <video src="movie.ogg" width="320" height="240" controls>
            </video>
            <button>
              <IconPlay />
            </button>
          </div>
        </div>
        */}

      </div>
    </motion.div>
  )
}

BetDetails.propTypes = {
  backToMenu: PropTypes.func
}

export default BetDetails
