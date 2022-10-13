import React, { useEffect, useState } from 'react'
import Hammer from 'react-hammerjs'
import { motion } from 'framer-motion'
import { Store } from 'uicore'
import classNames from 'classnames'

import { translate } from '../../utils/i18n'

import {
  IconClose,
  IconInfo
} from '../Icons'

import './Modal.scss'
import { reaction } from 'mobx'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const whileTap = { scale: 0.9 }

const Modal = () => {
  const [modal, setModal] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.modal
    }, (modalData) => {
      setModal(modalData)
    }, {
      fireImmediately: true
    })
  }, [])

  const onClose = () => {
    modal.onClose && modal.onClose()
    setModal(null)
  }

  return (modal
    ? <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className={`modal type-${modal.type}`}
      >
      <div className='modal-wrapper'>
        <div className='modal-header'>
          {modal.type === 'confirm' && <span className='modal-icon'><IconInfo /></span>}
          <span className='modal-title'>{modal.title}</span>
          <Hammer onTap={onClose}><motion.span whileTap={whileTap} className='modal-close'><IconClose /></motion.span></Hammer>
        </div>
        <div className='modal-content'>
          {translate(modal.text)}
        </div>
        <div className='modal-actions'>
          <Hammer onTap={onClose}><motion.button whileTap={whileTap} className='button button--secondary'>{translate(`modal.${modal.type === 'confirm' ? 'cancel' : 'okay'}`)}</motion.button></Hammer>
          {modal.type === 'confirm' && <Hammer onTap={modal.onConfirm}><motion.button whileTap={whileTap} className='button button--primary'>{translate('modal.accept')}</motion.button></Hammer>}
        </div>
      </div>
    </motion.div>
    : null
  )
}

Modal.propTypes = {
}

export default Modal
