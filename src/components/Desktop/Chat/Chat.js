import { reaction } from 'mobx'
import React, { useEffect, useRef, useState } from 'react'
import { Store, Actions } from 'uicore'

import { translate } from '../../../utils/i18n'

import './Chat.scss'
import { IconSend } from '../../Icons'
import classnames from 'classnames'

const Chat = ({ showInput }) => {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([])
  const [chatActive, setChatActive] = useState(true)
  const inputRef = useRef()
  const ref = useRef()

  useEffect(() => {
    return reaction(() => {
      return Store.ChatStore.messages
    }, (list) => {
      setMessages(list)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    const listener = e => {
      const code = (e.keyCode ? e.keyCode : e.which)
      if (code === 13) {
        sendChat()
      } else if (code === 27) {
        setTyping(false)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    if (typing) {
      inputRef.current.focus()
    }
  }, [typing])

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

  const sendChat = async () => {
    if (inputRef.current) {
      const value = inputRef.current.value
      if (value.length > 0) {
        inputRef.current.value = ''
        inputRef.current.focus()
        await Actions.generate('SendChat', {
          msg: value,
          room: Store.GameStore.roomId
        })
        ref.current.scrollTop = ref.current.scrollHeight
      } else {
        setTyping(false)
      }
      // inputRef.current.focus()
    }
  }

  return (
    <div className={classnames('chat', { 'chat--hide': !chatActive })}>
      {showInput && <div className='chat__bar'>
        <input type='text' placeholder={translate('chat.input.placeholder')} ref={inputRef} />
        <div className='chat__bar__send' onClick={sendChat}>
          <IconSend />
        </div>
                    </div>}
      <div>
        <div className='chat__messages' ref={ref} onTouchMove={(e) => { e.stopPropagation() }}>
          {messages.map((message, index) => <div key={`m-${index}`}>
            <div
              key={`m-${index}`} className='chat__message'
              dangerouslySetInnerHTML={{ __html: `${message.sender} : ${message.msg}` }}
            />
                                            </div>)}
        </div>
      </div>

    </div>
  )
}

Chat.propTypes = {}

export default Chat
