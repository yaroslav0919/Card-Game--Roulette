import React, { memo, useState, useEffect, useRef } from 'react'
import { reaction } from 'mobx'
import classNames from 'classnames'
import { Store, State, Helper } from 'uicore'
import CurrencySymbol from 'currency-symbol-map'
import { translate } from '../../../utils/i18n'
import Hammer from 'react-hammerjs'

import './StatusBar.scss'
import Countdown from '../public/countdown'
import useOnClickOutside from '../../../hooks/clickOutside'

const StatusBar = memo(({ menu }) => {
  const [user, setUser] = useState(null)
  const [balance, setBalance] = useState(0)
  const [totalBet, setTotalBet] = useState(0)
  const [totalNextBets, setTotalNextBets] = useState(0)
  const [timerCount, setTimerCount] = useState(null)
  const [lastCall, setLastCall] = useState(false)
  const [tooltip1, setTooltip1] = useState(false)
  const [tooltip2, setTooltip2] = useState(false)
  const [status, setStatus] = useState(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if (session) {
        setStatus(session.flag)
      }
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
      return Store.UserStore.balance
    }, (balance) => {
      setBalance(balance)
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

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.totalBetSlipAmount
    }, (total) => {
      setTotalNextBets(total)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.lastCall
    }, (lastCall) => {
      setLastCall(lastCall)
    }, {
      fireImmediately: true
    })
  }, [])

  useOnClickOutside(ref1, () => setTooltip1(false))

  useOnClickOutside(ref2, () => setTooltip2(false))

  const onChangeTimer = (timer) => {
    setTimerCount(timer)
  }

  return (
    <div className={classNames('status-bar', {
      'status-bar--menu': menu,
      'status-bar--bet-waiting': status === State.Open,
      'status-bar--little-time': lastCall && State.Open === status
    }, {
      'status-bar--bet-closed': status === State.Playing,
      'status-bar--waiting-new-session': status === State.Finish
    })}
    >
      {/* <div className="status-bar__left" ref={ref1}>
            <Hammer onTap={() => {
                setTooltip1(!tooltip1);
            }}>
                <span>
                    <IconBalance/>
                    {Helper.formatMoney(balance)} {CurrencySymbol(user?.currency)}
                </span>
            </Hammer>
            <div className={classNames('tooltip', {'tooltip--show': tooltip1})}>
                {translate('status.tooltip1')}
            </div>
        </div> */}

      <div className='status-bar__center'>
        {status === State.Open && !lastCall && <>{translate('status.open')} <span><Countdown onChange={onChangeTimer} />
                                                                            </span>
                                               </>}
        {status === State.Open && lastCall && <>{translate('status.lastCall')} <span><Countdown onChange={onChangeTimer} />
                                                                               </span>
                                              </>}
        {status === State.Playing && translate('status.playing')}
        {status === State.Finish && translate('status.finish')}
      </div>

      {/* <div className="status-bar__right" ref={ref2}>
            <Hammer onTap={() => {
                setTooltip2(!tooltip2);
            }}>
                <span>
                    {status === State.Open ? totalNextBets : totalBet} {CurrencySymbol(user?.currency)}
                    <IconBet/>
                </span>
            </Hammer>
            <div className={classNames('tooltip', {'tooltip--show': tooltip2})}>
                {translate('status.tooltip2')}
            </div>
        </div> */}
    </div>
  )
})

StatusBar.propTypes = {}

export default StatusBar
