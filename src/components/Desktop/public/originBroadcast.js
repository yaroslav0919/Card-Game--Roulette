import React, { useEffect, useState, useRef } from 'react'
import { reaction } from 'mobx'
import { Store, Logger, Actions, Helper } from 'uicore'
import { map, get } from 'lodash'
import Settings from '../../constants/settings'
import Roulette from '../../utils/roulette'

export default function LiveBroadcast () {
  const [ready, setReady] = useState(false)
  const [security, setSecurity] = useState(null)
  const player = useRef()
  const errorHandlerRetried = useRef([])
  const errorHandlerTimeout = useRef(null)
  const broadcastToken = Helper.getQueryParam('broadcast')
  const touchAction = Roulette.isMobile ? 'touchend' : 'mousedown'

  const firstClickForVolume = () => {
    player.current.unmute()
    window.removeEventListener(touchAction, firstClickForVolume, false)
  }

  useEffect(() => {
    loadStreamData()
    document.body.style.background = 'salmon'
  }, [])

  useEffect(() => {
    if (!ready) return
    window.addEventListener(touchAction, firstClickForVolume)
    return () => {
      window.removeEventListener(touchAction, firstClickForVolume, false)
    }
  }, [ready])

  useEffect(() => {
    if (security) loadPlayer()
  }, [security])

  useEffect(() => {
    if (Roulette.isMobile === 'iPhone') {
      if ((window.screen.width === 375 && window.screen.height === 812) || (window.screen.width === 390 && window.screen.height === 844)) {
        Helper.addClassName(document.getElementById('live-broadcast'), 'video-istretch')
      }
    } else if ((window.screen.height / window.screen.width) < 2) {
      Helper.addClassName(document.getElementById('live-broadcast'), 'video-stretch')
    }
  }, [])

  const onStats = (e) => {
    Store.BroadcastStore.update(e)
  }

  const onError = (e) => {
    Logger.log({
      title: 'Player Error',
      message: e
    })
    console.log(JSON.parse(JSON.stringify(e)))
  }

  const onPlay = (e) => {
    setReady(true)
  }

  const loadStreamData = async () => {
    // const streams = Store.BroadcastStore.getStream(Store.GameStore.session?.bc)
    if (!broadcastToken) return

    const securities = await Actions.generate('StreamData', {
      stream: [
        broadcastToken
      ]
    })
    if (securities.error && securities.error === 'USER_REQUIRED') {
      Logger.log({
        title: 'Stream Error',
        message: 'User login required!'
      })
      return
    }

    if (securities && securities.result) {
      setSecurity(securities.result)
    }
  }

  const loadPlayer = () => {
    if (!Store.GameStore.session) return

    const source = {
      options: {
        adaption: {
          rule: 'deviationOfMean'
        },
        switch: {
          method: 'server',
          pauseOnError: false,
          forcePlay: true,
          fastStart: false,
          timeout: 10
        }
      },
      startIndex: 1,
      entries: map([broadcastToken], (stream, key) => {
        return {
          index: stream.index,
          label: key,
          info: stream.info,
          h5live: {
            rtmp: {
              url: 'rtmp://bintu-splay.nanocosmos.de:80/splay',
              streamname: broadcastToken
            },
            server: {
              websocket: 'wss://bintu-splay.nanocosmos.de/h5live/authstream',
              hls:
                'https://bintu-splay.nanocosmos.de/h5live/authhttp/playlist.m3u8',
              progressive:
                'https://bintu-splay.nanocosmos.de/h5live/authhttp/stream.mp4'
            },
            security: get(security[broadcastToken], 'h5live.security')
          }
        }
      })
    }

    const config = {
      source,
      playback: {
        autoplay: true,
        automute: true,
        muted: false,
        flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
        reconnect: {
          minDelay: 2,
          maxDelay: 5,
          delaySteps: 6,
          maxRetries: 20
        }
      },
      style: {
        controls: false
      },
      events: {
        onStats,
        onError,
        onPlay
      },
      metrics: {
        accountId: 'livegames',
        accountKey: 'lg1hez2hf71h376a',
        userId: `${window.lgConfig.apiName}-${Store.UserStore.user.upk}`,
        customField1: window.navigator.userAgent,
        statsInterval: 10
      }
    }

    if (typeof window.NanoPlayer !== 'undefined') {
      player.current = new window.NanoPlayer('live-broadcast')
      player.current.setup(config).then(() => {

      }, error => {
        error.message && Logger.log({
          title: 'Player Error',
          message: error.message
        })
      })
    }
  }

  return (
    <div className='live-broadcast sample-view' id='live-broadcast'>
      <div className='broadcast-cover' />
    </div>
  )
}
