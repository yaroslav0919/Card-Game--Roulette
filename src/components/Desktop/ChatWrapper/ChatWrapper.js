import React, { useState, useEffect, useRef } from 'react'
import { Store } from 'uicore'
import { reaction } from 'mobx'
import './ChatWrapper.scss'
import Chat from '../Chat/Chat'
import { translate } from '../../../utils/i18n'
import { IconSend } from '../../Icons'

const ChatWrapper = () => {
  const [toggle, setToggle] = useState(true)
  const [chatActive, setChatActive] = useState(true)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.chatActive
    }, (status) => {
      if (status) {
        setChatActive(true)
      } else {
        setChatActive(false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  const handleClickToChat = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      {chatActive &&
            toggle && <div className='click-to-chat' onClick={handleClickToChat}><span>{translate('chat.clickForChat')}</span> <IconSend /></div>}
      {/* <ChatMessage message={messages[messages.length - 1]} /> */}
      <Chat key='chat' showInput={!toggle} />

    </div>
  )
}

ChatWrapper.propTypes = {}

export default ChatWrapper
