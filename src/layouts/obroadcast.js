import React, { useState, useEffect } from 'react'
import { Store } from 'uicore'
import { reaction } from 'mobx'

const LiveBroadcast = React.lazy(() => import('../components/public/originBroadcast'))

function Broadcast () {
  const [room, setRoom] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.room
    }, (room) => {
      setRoom(room)
    }, {
      fireImmediately: true
    })
  }, [])

  if (!room) return null

  return <LiveBroadcast />
}

export default Broadcast
