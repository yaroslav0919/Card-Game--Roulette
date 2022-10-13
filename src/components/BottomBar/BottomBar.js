import React, { useEffect, useState, useRef } from 'react'

import './BottomBar.scss'
import RoomName from '../RoomName/RoomName'
import SessionId from '../SessionId/SessionId'
import { AnimatePresence, motion } from 'framer-motion'
import { Helper, Store } from 'uicore'
import CurrencySymbol from 'currency-symbol-map'
import { reaction } from 'mobx'
import _ from 'lodash'
import { IconPeopleCount, BottomBarLeftCorner, IconUserVip } from '../Icons'

const variants = {
  enter: () => {
    return {
      opacity: 0,
      y: 10
    }
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: () => {
    return {
      zIndex: 0,
      y: -10,
      opacity: 0
    }
  }
}

const BottomBar = ({ vip }) => {
  const [winners, setWinners] = useState([])
  const [user, setUser] = useState(null)
  const [chatActive, setChatActive] = useState(false)
  const [showWinners, setShowWinners] = useState(false)
  const [messages, setMessages] = useState([])
  const winnerScreenAvailable = useRef(true)

  useEffect(() => {
    return reaction(() => {
      return Store.WinnerStore.winners
    },
    (result) => {
      setWinners(result)
      if (result) {
        setShowWinners(false)
      }
    },
    {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    if (!showWinners) {
      setTimeout(() => {
        winnerScreenAvailable.current && setShowWinners(true)
      }, 1000)
    }
    return () => {
      winnerScreenAvailable.current = false
    }
  }, [showWinners])

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
      return Store.AppStore.state.dashboardScreen
    }, (status) => {
      if (status === 0) {
        setChatActive(true)
      } else {
        setChatActive(false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.ChatStore.messages
    }, (list) => {
      setMessages(list)
    }, {
      fireImmediately: true
    })
  }, [])

  const wrap = (min, max, v) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
  }

  const getReward = (item) => {
    return Helper.formatMoney(item.w) + CurrencySymbol(Store.UserStore.user?.currency)
  }

  const AllWining = ({ winners, user }) => {
    const currency = Store.GameStore.getCurrencyById(winners[0].c)
    return (
      <div className='all-winning'>
        {vip ? <IconUserVip /> : <IconPeopleCount />}
        <div>
          {winners[0].n}
          <span>{Helper.formatMoney(_.sumBy(winners, 'w'))}{CurrencySymbol(currency.code)}</span> KAZANDI
        </div>
      </div>
    )
  }

  const Winners = ({ winners }) => {
    const [page, setPage] = useState(0)
    const index = wrap(0, winners.length, page)

    useEffect(() => {
      let calc = 10 / winners.length

      if (calc < 0.5) {
        calc = 0.5
      }

      const timeout = setTimeout(() => {
        setPage(page + 1)
      }, calc * 1000)
      return () => {
        clearTimeout(timeout)
      }
    }, [page])

    return (
      <div className='winners'>
        {page < winners.length &&
          <AnimatePresence initial>
            <motion.div
              key={page}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              className='winner'
              transition={{
                y: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <>
                <span>{winners[index]?.n} ·</span> {getReward(winners[index])}
              </>
            </motion.div>
          </AnimatePresence>}
      </div>
    )
  }

  const ChatMessage = ({ message }) => {
    return (
      <div className='message'>
        <span className='message__user'>
          {message?.sender}:
        </span>
        <span className='message__text'>
          {message?.msg}
        </span>
      </div>
    )
  }

  return (
    <>
      {/* <div className="bottom-bar">
    { vip && <>
      <div className="left-corner">
      <BottomBarLeftCorner />
    </div>
      <div className="right-corner">
        <BottomBarLeftCorner />
      </div>
    </> }
    <div className="bottom-bar__top">
      {winners.length > 0 ? <>
            {showWinners ? <Winners winners={winners}/> : <AllWining winners={winners} user={user}/>}
          </>:
          messages.length>0 && <ChatMessage message={messages[messages.length - 1]}/>
      }
    </div>
    <div className="bottom-bar__bottom">
      <RoomName/>
      <SessionId/>
    </div>
  </div> */}
      {!chatActive && <div className='bottom-bar'>
        {vip && <>
          <div className='left-corner'>
            <BottomBarLeftCorner />
          </div>
          <div className='right-corner'>
            <BottomBarLeftCorner />
          </div>
        </>}
        <div className='bottom-bar__top'>
          {winners.length > 0
            ? <>
              {showWinners ? <Winners winners={winners} /> : <AllWining winners={winners} user={user} />}
            </>
            : messages.length > 0 && <ChatMessage message={messages[messages.length - 1]} />}
        </div>
        <div className='bottom-bar__bottom'>
          <RoomName />
          <SessionId />
        </div>
                      </div>}
    </>
  )
}
export default BottomBar
