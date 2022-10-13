import React, { useRef, useEffect, useState } from 'react'
import { Store } from 'uicore'
import { reaction } from 'mobx'
import './SessionId.scss'
import { translate } from '../../../utils/i18n'

const SessionId = () => {
  const ref = useRef(null)
  const [sessionId, setSessionId] = useState(Store.GameStore.session.id)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      setSessionId(session.id)
    })
  }, [])

  return (
    <div className='session-id' ref={ref}>
      {translate('betHistory.session')} #{sessionId}
    </div>
  )
}

SessionId.propTypes = {}

export default SessionId
