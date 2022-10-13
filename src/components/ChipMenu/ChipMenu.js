import React, { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hammer from 'react-hammerjs'
import { reaction } from 'mobx'
import classNames from 'classnames'
import { Helper, Store } from 'uicore'
import { map } from 'lodash'

import './ChipMenu.scss'
import { IconCornerBottomLeft, IconCornerBottomRight, IconCornerTopLeft, IconCornerTopRight } from '../Icons'

const ChipMenu = ({ onChipSelect, vip }) => {
  const [balance, setBalance] = useState(Store.UserStore.balance)
  const [rate, setRate] = useState(Store.GameStore.rate)

  const chipMenuRef = useRef(null)

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.balance
    }, (balance) => {
      setBalance(balance)
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.rate
    }, (rate) => {
      setRate(rate)
    })
  }, [])

  const onChipSelection = (value) => {
    Store.GameStore.setRate(value)
    Helper.removeClassName(chipMenuRef.current, 'active')
    Helper.mixTrack('bet-action', { type: 'rate-update', rate: value })
  }

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

  const chipList = map(Store.GameStore.rates, (value, index) => {
    return (
      <div
        variants={item} key={index}
        className={classNames('chip-menu__chip', { 'chip-menu__chip--disabled': balance < value })}
        onClick={() => {
          onChipSelection(value)
        }}
      >
        <span className={classNames(`chip__node chip__node--${Helper.rateFilter(value)}`, { 'type-vip': vip })} dangerouslySetInnerHTML={{ __html: Helper.abbreviateMoney(value) }} />
      </div>
    )
  })

  return (
    <>
      <Hammer onTap={() => {
        Helper.toggleClassName(chipMenuRef.current, 'active')
      }}
      >
        <div className='selected-chip'>
          <div className={classNames(`chip__node chip__node--${Helper.rateFilter(rate)}`, { 'type-vip': vip })} dangerouslySetInnerHTML={{ __html: Helper.abbreviateMoney(rate) }} />
        </div>
      </Hammer>

      <div className='chip-menu-container chip-menu-vertical-bg' ref={chipMenuRef}>
        <div className='chip-menu-horizontal-bg'>
          <div className='chip-menu-wrapper'>
            {vip && <>
              <div className='corner-top-left'>
                <IconCornerTopLeft />
              </div>
              <div className='corner-top-right'>
                <IconCornerTopRight />
              </div>
              <div className='corner-bottom-left'>
                <IconCornerBottomLeft />
              </div>
              <div className='corner-bottom-right'>
                <IconCornerBottomRight />
              </div>
                    </>}
            <motion.div
              variants={container}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='chip-menu'
            >
              {chipList}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

ChipMenu.propTypes = {}

export default ChipMenu
