import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Rooms.scss'
import { reaction, autorun, toJS } from 'mobx'
import { Store, State, Helper, Socket } from 'uicore'
import { filter, map } from 'lodash'
import { translate } from '../../utils/i18n'
import WinningNumber from '../WinningNumber/WinningNumber'
import Settings from '../../constants/settings'

const images = {
  tbcrefeeder: 'live@2x.png',
  tbcrela: 'live@2x.png',
  tbcreaa: 'vip@2x.png',
  tbcreab: 'auto@2x.png',
  tbcreac: 'speed@2x.png',
  tbcroulettetesteuropean: 'vip@2x.png'
}

const RoomItems = (props) => {
  const [session, setSession] = useState(Store.GameStore.listeningBroadcasts[props.bc])

  const whileTap = { scale: 0.9 }

  const item = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
    hidden: { opacity: 0, x: 50, transition: { duration: 0.2, ease: 'easeInOut' } }
  }

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.listeningBroadcasts[props.bc]
    }, (data) => {
      setSession(data)
    })
  }, [])

  const redirectToRoom = () => {
    Store.AppStore.updateState(Settings.MuteSounds, true)
    Socket.joinRoom(props.room)
    Helper.mixTrack('action', { type: 'room-change', id: props.room, room: Store.GameStore.getRoomName(props.bc) })
  }

  if (!session) {
    return (
      <motion.a variants={item} whileTap={whileTap} className='rooms__item' href='#' onClick={(e) => { e.preventDefault() }} onTouchStart={(e) => { redirectToRoom() }}>
        <img alt='' src={require('../../assets/images/rooms/' + images[props.bc]).default} width={52} height={52} />
      </motion.a>
    )
  }

  return (
    <motion.a variants={item} whileTap={whileTap} className='rooms__item' href='#' onClick={(e) => { e.preventDefault() }} onTouchStart={(e) => { redirectToRoom() }}>
      {session.result?.rewards.length > 0 &&
        <WinningNumber number={parseFloat(session.result?.rewards?.[0].number)} showMoney={false} />}
      {session?.state === State.Open && <div className='rooms__open'>
        <div>{translate('status.open')}</div>
      </div>}
      <img alt='' src={require('../../assets/images/rooms/' + images[props.bc]).default} width={52} height={52} />
    </motion.a>
  )
}

const Rooms = () => {
  const [showRooms, setShowRooms] = useState(true)

  const container = {
    hidden: { opacity: 1 },
    exit: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  useEffect(() => {
    return autorun(() => {
      const session = Store.GameStore.session

      if (session.flag === State.Open) {
        setShowRooms(false)
      } else {
        setShowRooms(true)
      }
    })
  }, [])

  const roomItems = map(filter(Store.GameStore.lobby.games[window.lgConfig.game], (item) => { return item.bc !== Store.GameStore.session.bc }), (room, index) => {
    return <RoomItems bc={room.bc} room={room.id} key={`${room.id}-${room.bc}`} template={room.template} />
  })

  return (
    <>{showRooms && <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='rooms'
                    >
      {roomItems}
                    </motion.div>}
    </>
  )
}

Rooms.propTypes = {}

export default Rooms
