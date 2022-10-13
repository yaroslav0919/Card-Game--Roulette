import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Hammer from 'react-hammerjs'
import { motion } from 'framer-motion'
import { Store } from 'uicore'

import { translate } from '../../../utils/i18n'

import {
  IconClose,
  IconError,
  IconSuccess,
  IconInfo,
  IconWarning
} from '../../Icons'

import './Notification.scss'
import { reaction } from 'mobx'

const HeaderIcons = {
  error: IconError,
  success: IconSuccess,
  info: IconInfo,
  warning: IconWarning
}

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
}

const whileTap = { scale: 0.9 }

const Notification = () => {
  const [notification, setNotification] = useState(null)
  const notificationTimeout = useRef(null)
  const notificationCloseTimeout = useRef(null)

  useEffect(() => {
    return () => {
      clearTimeout(notificationTimeout.current)
      clearTimeout(notificationCloseTimeout.current)
    }
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.notification
    }, (notification) => {
      setNotification(notification)
      if (notification) {
        notificationTimeout.current = setTimeout(() => onClose(), 5000)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.notification
    }, (notification) => {
      setNotification(notification)
      if (notification) {
        setTimeout(() => onClose(), 5000)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  const onClose = () => {
    notificationCloseTimeout.current = setTimeout(() => {
      setNotification(null)
    }, 150)
  }

  const HeaderIcon = HeaderIcons[notification?.type]

  const translated = translate(notification?.text)
  if (translated === '') return null

  return (
    notification
      ? <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='notification'
        >
        <div className='notification-header'>
          {HeaderIcon && <span className='notification-icon'><HeaderIcon /></span>}
          {/* <span className="notification-title">{translate(`notification.${notification.type}`)}</span> */}
          <Hammer onTap={onClose}><motion.span whileTap={whileTap} className='notification-close'><IconClose /></motion.span></Hammer>
        </div>
        <div className='notification-content'>
          {translated}
        </div>
        </motion.div> : null
  )
}

Notification.propTypes = {
}

export default Notification
