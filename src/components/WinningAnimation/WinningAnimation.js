import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'
import { Store } from 'uicore'
import { AnimatePresence, motion } from 'framer-motion'
import txt from '../../constants/table'
import _ from 'lodash'
import './WinningAnimation.scss'
import Chip from '../Chip/Chip'
import { reaction } from 'mobx'
import uuid from 'react-uuid'
import audio from '../../utils/audio'

const calcChips = (won) => {
  if (won === 5) {
    return { count: 1, chip: 5 }
  } else if (won < 5) {
    return { count: 1, chip: won }
  } else {
    return { count: 5, chip: parseInt(won / 5) }
  }
}

const WinningAnimation = memo(() => {
  const [visible, setVisible] = useState(false)
  const [winningData, setWinningData] = useState(null)

  useEffect(() => {
    return reaction(
      () => {
        return Store.WinnerStore.userRewards
      },
      (userRewards) => {
        if (userRewards.r) {
          audio.playWarning('you-won')
          ReactDOM.unstable_batchedUpdates(() => {
            setWinningData(userRewards.r)
            setVisible(true)
            setTimeout(() => {
              Store.BetStore.clearBets()
              setVisible(false)
            }, 500)
          })
        } else {
          setWinningData(null)
        }
      },
      {
        fireImmediately: true
      }
    )
  }, [])

  return (
    <div className='winning-animation-wrapper'>
      {winningData && winningData.map((item, index) => {
        const point = _.find(txt, { key: item.bet })
        const won = item.won
        const chips = calcChips(won)

        return (
          <React.Fragment key={'win-fragment' + index}>
            <div
              className='flash' style={{
                width: point.area?.w,
                height: point.area?.h,
                left: point.area?.x,
                top: point.area?.y
              }}
            />
            <div className='area' style={{ width: point.w, height: point.h, left: point.x, top: point.y }}>
              <AnimatePresence>
                {visible && <>
                  {_.range(chips.count).map((i, key) => {
                    return (
                      <motion.div
                        exit={{
                          y: -((document.getElementsByClassName('standart-table')[0].getBoundingClientRect().top * 100 / 37) + (point.y)),
                          x: -point.x,
                          opacity: 0
                        }}
                        key={uuid()}
                        transition={{ duration: 1, delay: key * 0.1, ease: 'easeInOut' }}
                      >
                        <div className='chip'>
                          <Chip chip={chips.chip} />
                        </div>
                      </motion.div>
                    )
                  })}
                            </>}
              </AnimatePresence>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}, () => { return true })

WinningAnimation.propTypes = {}

export default WinningAnimation
