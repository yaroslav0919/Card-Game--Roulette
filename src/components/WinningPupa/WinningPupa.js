import React, { useEffect, useState } from 'react'
import { Store, State } from 'uicore'

import { motion, AnimatePresence } from 'framer-motion'
import { IconPupa, IconPupaVip } from '../Icons'
import { reaction } from 'mobx'

const WinningPupa = ({ dataKey, vip }) => {
  const [showPupa, setShowPupa] = useState(false)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.sessionResult
    }, (result) => {
      if (result?.rewards.length > 0) {
        if ('bn-' + Number(result?.rewards?.[0]?.number) === dataKey) {
          setShowPupa(true)
        }
      } else {
        setShowPupa(false)
      }
    }, {
      fireImmediately: true
    })
  })

  return (
    <><AnimatePresence>{showPupa &&
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className='pupa'
      >

        {vip ? <IconPupaVip /> : <IconPupa />}
        <div className='circle' style={{ animationDelay: '0s' }} />
        <div className='circle' style={{ animationDelay: '0.3s' }} />
        <div className='circle' style={{ animationDelay: '0.6s' }} />
        <div className='circle' style={{ animationDelay: '1.6s' }} />
        <div className='circle' style={{ animationDelay: '1.9s' }} />
        <div className='circle' style={{ animationDelay: '2.2s' }} />
      </motion.div>}
      </AnimatePresence>
    </>
  )
}

WinningPupa.propTypes = {}

export default WinningPupa
