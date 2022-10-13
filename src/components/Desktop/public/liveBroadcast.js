import React, { useEffect, useState, useRef } from 'react'
import { reaction } from 'mobx'
import { Store, Logger, Actions, Helper } from 'uicore'
import { map, get, filter } from 'lodash'
import Settings from '../../../constants/settings'
import Roulette from '../../../utils/roulette'
import StatusBar from '../StatusBar/StatusBar'
import classNames from 'classnames'
import './liveBroadcast.scss'
import audio from '../../../utils/audio'

export default function LiveBroadcast () {
  const [ready, setReady] = useState(false)
  const [security, setSecurity] = useState(null)
  const [connectionType, setConnectionType] = useState(null)
  const [fullScreenStatus, setFullScreenStatus] = useState(false)
  const player = useRef()
  const errorHandlerRetried = useRef([])
  const errorHandlerTimeout = useRef(null)
  const touchAction = Roulette.isMobile ? 'touchend' : 'mousedown'
  const connection = useRef(navigator.connection || navigator.mozConnection || navigator.webkitConnection)
  const isMounted = useRef(true)

  useEffect(() => {
    loadStreamData()
  }, [connectionType])

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (connection.current) {
      try {
        const updateConnectionStatus = () => {
          setConnectionType(connection.current.effectiveType)
        }
        connection.current.addEventListener('change', updateConnectionStatus)
      } catch (e) {
        console.log('Network detection error >', e)
      }
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    const disposer = reaction(() => {
      return Store.AppStore.state[Settings.MuteSounds]
    }, (muteSounds) => {
      if (muteSounds) {
        player.current.mute()
        audio.musicPlayer.stop()
      } else {
        player.current.unmute()
        audio.playMusic('bg-music')
      }
    })

    const volumeDisposer = reaction(() => {
      return Store.UserStore.settings[Settings.BroadcastVolume]
    }, (volume) => {
      player.current.setVolume(volume / 100)
    })

    const playDisposer = reaction(() => {
      return Store.AppStore.state[Settings.BroadcastActive]
    }, (active) => {
      if (active) {
        player.current.play()
      }
    })

    return () => {
      disposer()
      volumeDisposer()
    }
  }, [ready])

  useEffect(() => {
    if (!security) return
    if (!ready) {
      window.addEventListener('visibilitychange', focusHandler)
    }
    return () => {
      window.removeEventListener('visibilitychange', focusHandler)
    }
  }, [ready, security])

  useEffect(() => {
    if (security) loadPlayer()
  }, [security])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.DestroyGame
    }, (destroy) => {
      if (destroy) {
        player.current.destroy()
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('initializePlayer', () => {
      clearTimeout(errorHandlerTimeout.current)
      if (player.current) player.current.play()
    }, false)

    return reaction(() => {
      return Store.GameStore.room
    }, (room) => {
      if (room) {
        loadStreamData()
      }
    })
  }, [])

  useEffect(() => {
    if (Roulette.isMobile === 'iPhone') {
      if ((window.screen.width === 375 && window.screen.height === 812) || (window.screen.width === 390 && window.screen.height === 844)) {
        Helper.addClassName(document.getElementById('live-broadcast'), 'video-istretch')
      }
    } else if ((window.screen.height / window.screen.width) < 2) {
      Helper.addClassName(document.getElementById('live-broadcast'), 'video-stretch')
    }
  }, [])

  const focusHandler = () => {
    if (!document.hidden) {
      loadPlayer()
    }
  }

  const errorHandler = (callback) => {
    if (errorHandlerTimeout.current === null) {
      errorHandlerTimeout.current = setTimeout(() => {
        callback()
        clearTimeout(errorHandlerTimeout.current)
        errorHandlerTimeout.current = null
      }, 3000)
    }
  }

  const errorRetrier = (code) => {
    const last = errorHandlerRetried.current.slice(-1)[0]
    if (!last || last === code) {
      if (errorHandlerRetried.current.length < 5) {
        errorHandlerRetried.current.push(code)
        return true
      }
    } else {
      errorHandlerRetried.current = []
    }
    return false
  }

  // const firstClickForVolume = () => {
  // 	Store.AppStore.updateState(Settings.MuteSounds, false)
  //   window.removeEventListener('click', firstClickForVolume, false)
  // }

  const onStats = (e) => {
    Store.BroadcastStore.update(e)
  }

  const onError = (e) => {
    Store.AppStore.updateState(Settings.BroadcastIsLoading, false)
    Store.AppStore.updateState(Settings.BroadcastIsActive, false)
    Logger.log({
      title: 'Player Error',
      message: e
    })
    console.log(JSON.parse(JSON.stringify(e)))
    if (e?.data?.code) {
      if (e.data.code > 1999 && e.data.code < 2999) {
        errorHandler(() => {
          if (errorRetrier(e.data.code)) {
            loadPlayer()
          }
        })
      } else if (e.data.code > 4000 && e.data.code < 4999) {
        errorHandler(() => {
          if (errorRetrier(e.data.code)) {
            loadStreamData()
          }
        })
      }
    }
  }

  const onLoading = (e) => {
    // Store.AppStore.updateState(Settings.BroadcastIsLoading, true)
  }

  const onPlay = (e) => {
    setReady(true)
    Store.AppStore.updateState(Settings.BroadcastIsActive, true)
    Store.AppStore.updateState(Settings.BroadcastIsLoading, false)
    window.dispatchEvent(new Event('resize'))
  }

  const onPause = (e) => {
    setReady(false)
  }

  const loadStreamData = async () => {
    const streams = Store.BroadcastStore.getStream(Store.GameStore.session?.bc)

    if (!streams) return

    let list = [
      streams.hd.token,
      streams.sd.token,
      streams.mobile.token
    ]

    if (connectionType && connectionType === '4g' && connection.current.rtt < 100) {
      list = [streams.fhd.token, ...list]
    }

    const securities = await Actions.generate('StreamData', {
      stream: list
    })

    if (securities.error && securities.error === 'USER_REQUIRED') {
      Logger.log({
        title: 'Stream Error',
        message: 'User login required!'
      })
      return
    }
    if (isMounted.current) setSecurity(securities.result)
  }

  const loadPlayer = () => {
    if (!Store.GameStore.session) return
    const streams = Store.BroadcastStore.getStream(Store.GameStore.session.bc)
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
      startIndex: Object.keys(security).length - 1,
      entries: map(streams, (stream, key) => {
        return {
          index: stream.index,
          label: key,
          info: stream.info,
          h5live: {
            rtmp: {
              url: 'rtmp://bintu-splay.nanocosmos.de:80/splay',
              streamname: stream.token
            },
            server: {
              websocket: 'wss://bintu-splay.nanocosmos.de/h5live/authstream',
              hls:
                'https://bintu-splay.nanocosmos.de/h5live/authhttp/playlist.m3u8',
              progressive:
                'https://bintu-splay.nanocosmos.de/h5live/authhttp/stream.mp4'
            },
            security: get(security[stream.token], 'h5live.security')
          }
        }
      })
    }

    const config = {
      source,
      playback: {
        autoplay: true,
        automute: false,
        muted: true,
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
        onPlay,
        onPause,
        onLoading
      },
      metrics: {
        accountId: 'livegames',
        accountKey: 'lg1hez2hf71h376a',
        userId: `${window.lgConfig.apiName}-${Store.UserStore.user.upk}`,
        customField1: window.navigator.userAgent,
        statsInterval: 10
      }
    }

    if (player.current) {
      player.current.destroy()
    }

    if (typeof window.NanoPlayer !== 'undefined') {
      player.current = new window.NanoPlayer('live-broadcast')
      player.current.setup(config).then(() => {
        // player.current.setVolume(Store.UserStore.settings[Settings.BroadcastVolume])
      }, error => {
        error.message && Logger.log({
          title: 'Player Error',
          message: error.message
        })
      })
    }
  }

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.fullScreen
    }, (status) => {
      if (status) {
        setFullScreenStatus(true)
      } else {
        setFullScreenStatus(false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  return (
    <div className={classNames('stream-wrapper', {
      fullscreen: fullScreenStatus
    })}
    >
      <div className='live-broadcast live-broadcast-web' id='live-broadcast'>
        <div className='live-broadcast__bars'>
          <div className='live-broadcast__status-bar'>
            <StatusBar />
          </div>
        </div>
        <div className='broadcast-cover' />
      </div>
    </div>
  )
}
