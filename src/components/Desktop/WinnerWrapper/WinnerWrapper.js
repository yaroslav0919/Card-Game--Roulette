import React, { useRef, useState, useEffect } from 'react'
import { Helper, Store } from 'uicore'
import CurrencySymbol from 'currency-symbol-map'
import { reaction } from 'mobx'
import { AnimatePresence, motion } from 'framer-motion'
import _ from 'lodash'
import { IconPeopleCount } from '../../Icons'
import './WinnerWrapper.scss'

const WinnerWrapper = () => {
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

  const winnerScreenAvailable = useRef(true)
  const [showWinners, setShowWinners] = useState(false)
  const [user, setUser] = useState(null)
  const [winners, setWinners] = useState([])
  const [messages, setMessages] = useState([])

  const wrap = (min, max, v) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
  }

  const total = (list) =>
    list.reduce((prev, curr) => prev + curr)

  const AllWining = ({ winners, user }) => {
    const sum = total(winners.map(item => {
      return item.w
    }))
    return (
      <div className='all-winning'>
        <div className='all-winning__header'>  <IconPeopleCount /> {winners.length} <span className='all-winning__header-sum'>
          {CurrencySymbol(Store.GameStore.getCurrencyById(winners[0].c).code)}  {Helper.formatMoney(sum)}
        </span> KAZANDI
        </div>
        <div className='all-winning__content'>
          {winners.map((item, index) => {
            return <div key={index}> <span>{CurrencySymbol(Store.GameStore.getCurrencyById(item.c).code)}</span> <span>{Helper.formatMoney(item.w)}</span> <span className='winner-name'>{item.n}</span>   </div>
          })}

        </div>
      </div>
    )
  }
  const getReward = (item) => {
    const currency = Store.GameStore.currencyList?.find(c => c.id === item.c)
    return Helper.formatMoney(item.w) + CurrencySymbol(currency?.code)
  }

  useEffect(() => {
    return reaction(() => {
      return Store.ChatStore.messages
    }, (list) => {
      setMessages(list)
    }, {
      fireImmediately: true
    })
  }, [])

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

  return (
    <>
      {winners.length > 0 && <>
        {showWinners ? <Winners winners={winners} /> : <AllWining winners={winners} user={user} />}
      </>}

    </>
  )
}

WinnerWrapper.propTypes = {}

export default WinnerWrapper
