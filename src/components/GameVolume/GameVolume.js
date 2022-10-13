import React, { useEffect, useState } from 'react'
import './GameVolume.scss'
import Hammer from 'react-hammerjs'
import { Store } from 'uicore'
import { motion } from 'framer-motion'

import {
  ButtonBaseVip,
  IconVolume,
  IconVolumeMute,
} from '../Icons'

import IconVolumeVip from '../Icons/icon-volume-vip.svg';
import IconVolumeMuteVip from '../Icons/icon-volume-mute-vip.svg';

import { action, reaction } from 'mobx'
import Settings from '../../constants/settings'
import audio from '../../utils/audio'

const whileTap = { scale: 0.9 }

const item = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  hidden: { opacity: 0, x: 50, transition: { duration: 0.2, ease: 'easeInOut' } }
}

const GameVolume = ({ vip }) => {
  const [active, setActive] = useState(false)
  const [mute, setMute] = useState(true)

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

  useEffect(() => {
    window.addEventListener('visibilitychange', focusHandler)
    return () => {
      window.removeEventListener('visibilitychange', focusHandler)
    }
  }, [])

  const focusHandler = () => {
    if (document.hidden) {
      Store.AppStore.updateState(Settings.BroadcastIsActive, false)
      Store.AppStore.updateState(Settings.MuteSounds, true)
    }
  }

  return (
    <>
      {active && <Hammer onTap={() => {
        Store.AppStore.updateState(Settings.MuteSounds, !mute)

        if (!audio.audioPlayer) {
          audio.load()
        } else {
          audio.audioPlayer.mute(!mute)
        }
      }}
                 >
        <motion.div variants={item} whileTap={whileTap} className='right-actions__item' style={{ display: 'flex' }}>
          {!mute
            ? vip
              ? <div className='button-base'>
                    <ButtonBaseVip />
                    <img src={IconVolumeVip} alt="Chip Img"/>
              </div>
              : <IconVolume />
            : vip
              ? <div className='button-base'>
                    <ButtonBaseVip />
                    <img src={IconVolumeMuteVip} alt="Chip Img"/>
              </div>
              : <IconVolumeMute />}
        </motion.div>
                 </Hammer>}
    </>
  )
}

export default GameVolume
