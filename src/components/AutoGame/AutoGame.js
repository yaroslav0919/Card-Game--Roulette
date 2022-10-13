import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import Hammer from 'react-hammerjs'
import { State, Store } from 'uicore'
import { reaction } from 'mobx'
import { motion } from 'framer-motion'

import './AutoGame.scss'
import IconPlay2 from '../Icons/icon-play2.svg'
import IconStop from '../Icons/icon-stop.svg'
import { translate } from '../../utils/i18n'
import useOnClickOutside from '../../hooks/clickOutside2'

const whileTap = { scale: 0.9 }

const container = {
  hidden: { opacity: 1 },
  exit: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  hidden: { opacity: 0, x: 50, transition: { duration: 0.2, ease: 'easeInOut' } }
}

const rounds = [5, 10, 25, 50, 100]

const AutoGame = () => {
  const ref = useRef(null)
  const [autoGameRound, setAutoGameRound] = useState(0)
  const [autoGamePlayStatus, setAutoGamePlayStatus] = useState(false)
  const [autoGameRoundTotal, setAutoGameRoundTotal] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [autoGame, setAutoGame] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.autoGame
    }, (status) => {
      setAutoGame(status)
    }, {
      fireImmediately: true
    })
  }, [])

  useOnClickOutside(ref, () => Store.AppStore.updateState('autoGame', false))

  const onSelect = (number) => {
    setSelectedNumber(number)
    Store.AppStore.updateState('autoGameRound', number)
    Store.AppStore.updateState('autoGameRoundTotal', number)
  }

  const betTotalWager = (bets) => {
    let num = 0
    Object.keys(bets).map(key => {
      num = num + bets[key].wager
    })

    return num
  }

  const onAutoPlayClick = () => {
    if (autoGameRound == 0) {
      return
    }
    Store.AppStore.updateState('autoGameRound', selectedNumber)
    Store.AppStore.updateState('autoGameRoundTotal', selectedNumber)

    const lastBets = Store.BetStore.lastSessionBets
    const totalWager = betTotalWager(lastBets)

    if (Store.GameStore.session.flag === State.Open /* && Store.AppStore.state.autoGamePlay */) {
      if (totalWager > Store.UserStore.balance) {
        Store.AppStore.setNotification({
          type: 'warning',
          text: translate('autoGame.noBalance')
        })
        Store.AppStore.updateState('autoGamePlay', false)
      } else {
        Store.BetStore.changeBets(lastBets)

        Store.AppStore.updateState('autoGamePlay', true)
      }
      // Store.AppStore.updateState("autoGameRound", Store.AppStore.state.autoGameRound);
    }
    /*
        if (totalWager > 3) {
            Store.AppStore.updateState("autoGamePlay", false);
        } else {
            Store.AppStore.updateState('autoGamePlay', true);
        }
         */
    // Store.AppStore.updateState('autoGame', false);
  }

  const onAutoPlayStopClick = () => {
    Store.AppStore.updateState('autoGamePlay', false)
  }

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.autoGameRoundTotal
    }, (total) => {
      setAutoGameRoundTotal(total)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.autoGamePlay
    }, (status) => {
      setAutoGamePlayStatus(status)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.autoGameRound
    }, (number) => {
      if (number == 0) {
        Store.AppStore.updateState('autoGamePlay', false)
        return
      }
      setAutoGameRound(number)
    }, {
      fireImmediately: true
    })
  }, [])

  const calculateProgress = () => {
    switch (Store.AppStore.state.autoGameRound) {
      case 10:
        return 25
        break
      case 25:
        return 50
        break
      case 50:
        return 75
        break
      case 100:
        return 100
        break
      default:
        return 0
    }
  }

  return (autoGame
    ? <div className='auto-game' ref={ref}>
      <div className='auto-game__selection'>
        <div className='auto-game__title'>{translate('autoGame.title')}</div>
        <div className='auto-game__bar'>
          <div className='auto-game__bar__progress'>
            <div style={{ width: calculateProgress() + '%' }} />
          </div>
          {rounds.map((round, index) => (
            <Hammer key={index} onTap={() => onSelect(round)}>
              <motion.div
                whileTap={whileTap}
                className={classnames({
                  'auto-game__bar__item': true,
                  'auto-game__bar__item--active': selectedNumber >= round
                })}
              >
                {round}
              </motion.div>
            </Hammer>
          ))}
        </div>
      </div>
      <div className='auto-game__status'>
        {autoGamePlayStatus ? <>{(autoGameRoundTotal - autoGameRound) + 1}.{translate('autoGame.round')} <i> / {autoGameRoundTotal}</i> </> : <>{translate('autoGame.start')}</>}
      </div>
      {!autoGamePlayStatus
        ? <Hammer onTap={() => onAutoPlayClick()}>
          <motion.div whileTap={whileTap} className='auto-game__play'><img src={IconPlay2} /></motion.div>
        </Hammer>
        : <Hammer onTap={() => onAutoPlayStopClick()}>
          <motion.div whileTap={whileTap} className='auto-game__play auto-game__play--stop'><img src={IconStop} />
          </motion.div>
        </Hammer>}
    </div>
    : null
  )
}

AutoGame.propTypes = {}

export default AutoGame
