import React, { useEffect, useState } from 'react'
import './PlayerActions.scss'
import Hammer from 'react-hammerjs'
import { Helper, Store } from 'uicore'
import { map } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'

import {
  IconVolume,
  IconVolumeMute,
  IconPlay,
  IconLogoLivegames,
  IconLivegames,
  IconClose
} from '../Icons'
import { action, reaction } from 'mobx'
import Settings from '../../constants/settings'
import audio from '../../utils/audio'
import { translate } from '../../utils/i18n'

const whileTap = { scale: 0.9 }

const item = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  hidden: { opacity: 0, x: 50, transition: { duration: 0.2, ease: 'easeInOut' } }
}

const PlayerActions = () => {
  const [active, setActive] = useState(Store.AppStore.state[Settings.BroadcastIsActive])
  const [loading, setLoading] = useState(Store.AppStore.state[Settings.BroadcastIsLoading])

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
    return reaction(() => {
      return Store.AppStore.state[Settings.BroadcastIsLoading]
    }, (loading) => {
      setLoading(loading)
    })
  }, [])

  const loadingText = translate('loading')
  const loadingTextItems = map(loadingText.split(''), (l) => <span className='lblct-node' key={uuidv4()}>{l}</span>)

  return (
    <>
      {!active && !loading && <Hammer onTap={() => {
        window.dispatchEvent(new Event('initializePlayer'))
      }}
                              >
        <div className='live-broadcast-play' style={{ display: 'flex' }}>
          <div className='lbp-content'>
            <IconLogoLivegames />
            <p dangerouslySetInnerHTML={{ __html: translate('warnings.broadcastFailed') }} />
          </div>
          <div className='play-button'>
            <span><IconPlay /></span>
          </div>
        </div>
      </Hammer>}
    </>
  )
}

export default PlayerActions
