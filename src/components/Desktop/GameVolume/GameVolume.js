import React, { useEffect, useState, useRef } from 'react'
import './GameVolume.scss'
import { Store } from 'uicore'
import { motion } from 'framer-motion'
import { translate } from '../../../utils/i18n'

import {
  IconVolumeGrey,
  IconVolumeMuteGrey
} from '../../Icons'
import { reaction } from 'mobx'
import Settings from '../../../constants/settings'
import audio from '../../../utils/audio'

const GameVolume = ({ activeContent }) => {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [mute, setMute] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state[Settings.MuteSounds]
    }, (muted) => {
      setMute(muted)
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state[Settings.BroadcastIsActive]
    }, (active) => {
      setActive(active)
    }, {
      fireImmediately: true
    })
  }, [])

  const mouseEnterTooltip = () => {
    setShowTooltip(true)
  }

  const mouseLeaveTooltip = () => {
    setShowTooltip(false)
  }

  return (
    <>
      {active && <div onClick={() => {
        Store.AppStore.updateState(Settings.MuteSounds, !mute)

        if (!audio.audioPlayer) {
          audio.load()
        } else {
          audio.audioPlayer.mute(!mute)
        }
      }}
                 >
        <motion.div
          style={{ display: 'flex', cursor: 'pointer' }} className={showTooltip ? 'game-volume-active' : ''}
          onMouseEnter={mouseEnterTooltip} onMouseLeave={mouseLeaveTooltip}
        >
          {!mute ? <IconVolumeGrey /> : <IconVolumeMuteGrey />}
        </motion.div>
                 </div>}
      {
            showTooltip && <div className='header-tooltip' ref={ref}>
              {mute ? translate('settings.voiceIsClose') : translate('settings.voiceIsOpen')}
                           </div>
        }
    </>
  )
}

export default GameVolume
