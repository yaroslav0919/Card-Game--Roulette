import React, { useRef, useState, useEffect } from 'react'
import { Store } from 'uicore'
import { reaction } from 'mobx'
import Hammer from 'react-hammerjs'
import './SessionId.scss'
import classNames from 'classnames'
import { translate } from '../../utils/i18n'
import useOnClickOutside from '../../hooks/clickOutside'

const SessionId = () => {
  const ref = useRef(null)
  const [tooltip, setTooltip] = useState(false)
  const [sessionId, setSessionId] = useState(Store.GameStore.session.id)

  useOnClickOutside(ref, () => setTooltip(false))

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      setSessionId(session.id)
    })
  }, [])

  return (
    <div className='session-id' ref={ref}>
      <Hammer onTap={() => {
        // setTooltip(!tooltip);
      }}
      >
        <div>
          {translate('betHistory.session')} #{sessionId}
          <div className={classNames('tooltip', { 'tooltip--show': tooltip })}>
            {translate('session.tooltip')}
          </div>
        </div>
      </Hammer>
    </div>
  )
}

SessionId.propTypes = {}

export default SessionId
