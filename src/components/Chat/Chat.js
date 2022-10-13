import { reaction } from 'mobx'
import React, { useEffect, useRef, useState } from 'react'
import { Store, Actions, State, Helper } from 'uicore'
import { motion } from 'framer-motion'

import Hammer from 'react-hammerjs'
import { translate } from '../../utils/i18n'

import './Chat.scss'
import {
  IconBack, IconHamgurgerMenu,
  IconChatCornerLeft, IconChatCornerRight,
   IconSend,
} from '../Icons'
import classnames from 'classnames'
import Swiper from '../../utils/swiper'

import ButtonBaseVip from '../Icons/button-base-vip.svg';
import IconHamburgerMenuVip from '../Icons/icon-hamburger-menu.svg';
import IconBackVip from '../Icons/icon-back-vip.svg';
import IconSendVip from '../Icons/icon-send-vip.svg';


const variants = {
  hidden: { opacity: 0, x: -100, transition: { duration: 0.2 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}
const whileTap = { scale: 0.9 }

const item = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  hidden: { opacity: 0, x: 50, transition: { duration: 0.2, ease: 'easeInOut' } }
}

const Chat = ({ vip }) => {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([])
  const [chatActive, setChatActive] = useState(false)
  const inputRef = useRef()
  const ref = useRef()
  const isCriOs = ~navigator.userAgent.indexOf('CriOS')

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
      return Store.AppStore.state.dashboardScreen
    }, (status) => {
      if (status === 0) {
        setChatActive(true)
        ref.current.scrollTop = ref.current.scrollHeight
      } else {
        setChatActive(false)
        if (isCriOs) {
          Swiper.initSwiper()
          Helper.removeClassName(document.body, 'chat-swipe')
        }
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

  const focusHandler = () => {
    if (!isCriOs) return
    Swiper.destroySwiper()
  }

  const blurHandler = () => {
    if (!isCriOs) return
    window.scrollBy(0, -Math.abs(window.scrollY))
    Helper.addClassName(document.body, 'chat-swipe')
  }

  return (
    <div className={classnames('chat', { 'chat--hide': !chatActive })}>
      <Hammer onSwipe={(e) => {
        Store.AppStore.updateState('dashboardScreen', 1)
      }}
      >
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
      </Hammer>

      <Hammer onTap={() => {
        Store.AppStore.updateState('dashboardScreen', 1)
      }}
      >
        <motion.div variants={item} whileTap={whileTap} className='chat__action'>
          {vip
            ? <div className='button-base'>
                <img src={ButtonBaseVip} alt="Svg Icon"/>
                <img src={IconBackVip} alt="Svg Icon"/>
            </div>
            : <IconBack />}
        </motion.div>
      </Hammer>

      <Hammer onTap={() => {
        Store.AppStore.updateState('menu', !Store.AppStore.state.menu)
        Store.AppStore.updateState('activeMenu', 'list')
      }}
      >
        <motion.div
          variants={item} whileTap={whileTap}
          className='chat__action chat__action--menu'
        >
          {vip
            ? <div className='button-base'>
                <img src={ButtonBaseVip} alt="Svg Icon"/>
                <img src={IconHamburgerMenuVip} alt="Svg Icon"/>
            </div>
            : <IconHamgurgerMenu />}
        </motion.div>
      </Hammer>

      <div className='chat__bar'>
        {vip &&
          <>
            <div className='chat__bar__corner-left'>
              <IconChatCornerLeft />
            </div>
            <div className='chat__bar__corner-right'>
              <IconChatCornerRight />
            </div>
          </>}
        <input type='text' placeholder={translate('chat.input.placeholder')} ref={inputRef} onFocus={focusHandler} onBlur={blurHandler} />
        <div className='chat__bar__send' onClick={sendChat}>
          {vip ? <img src={IconSendVip} alt="Svg Icon"/> : <IconSend />}
        </div>
      </div>

    </div>
  )
}

Chat.propTypes = {}

export default Chat
