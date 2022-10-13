import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { reaction } from 'mobx'
import classNames from 'classnames'
import { Store } from 'uicore'

import './ChipMenu.scss'
import Chip from '../Chip/Chip'

const ChipMenu = ({ onChipSelect, vip }) => {
  const [rate, setRate] = useState(Store.GameStore.rate)
  const [chips] = useState(Store.GameStore.rates)
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.balance
    }, (balance) => {
      balance && setBalance(balance)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.rate
    }, (rate) => {
      setRate(rate)
    }, {
      fireImmediately: true
    })
  }, [])

  const container = {
    hidden: { opacity: 1 },
    exit: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeInOut' }, originX: '100px' },
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeInOut' } }
  }

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='chip-menu-wrapper'
    >
      {chips.map((value, index) => {
        return (
          <motion.div
            variants={item} key={index} className={classNames('chip-menu-wrapper__chip', { 'chip-menu-wrapper__chip--disabled': balance < value }, { 'chip-menu-wrapper__chip--active': rate === value })} onClick={() => {
              onChipSelect(value)
            }}
          >
            <Chip vip={vip} chip={value} menu />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

ChipMenu.propTypes = {}

export default ChipMenu
