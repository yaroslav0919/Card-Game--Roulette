import React, { useEffect, useState } from 'react'
import { reaction, autorun } from 'mobx'
import { Store, State, Helper, Socket } from 'uicore'
import { filter, map } from 'lodash'
import { translate } from '../../../utils/i18n'
import WinningNumber from '../WinningNumber/WinningNumber'
import Settings from '../../../constants/settings'
import './Rooms.scss'

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
      <a className='rooms__item' href='#' onClick={(e) => { redirectToRoom() }}>
        <img alt='' src={require('../../../assets/images/rooms/' + images[props.bc])} />
      </a>
    )
  }

  return (
    <a className='rooms__item' href='#' onClick={(e) => { redirectToRoom() }}>
      {session.result?.rewards.length > 0 &&
        <WinningNumber number={parseFloat(session.result?.rewards?.[0].number)} showMoney={false} />}
      {session?.state === State.Open && <div className='rooms__open'>
        <div>{translate('status.open')}</div>
                                        </div>}
      <img alt='' src={require('../../../assets/images/rooms/' + images[props.bc])} />
    </a>
  )
}

const Rooms = () => {
  const [showRooms, setShowRooms] = useState(true)

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
    <><div className='rooms'>
      {roomItems}
    </div>
    </>
  )
}

Rooms.propTypes = {}

export default Rooms
