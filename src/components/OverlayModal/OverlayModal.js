import React from 'react'
import Hammer from 'react-hammerjs'
import { motion } from 'framer-motion'

import './OverlayModal.scss'
import { IconClose, IconCloseVip, IconCornerBottomLeft, IconCornerBottomRight, IconCornerTopLeft, IconCornerTopRight } from '../Icons'

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
}

const OverlayModal = ({ icon, title, children, onClose, vip }) => {
  return (
    <>
      {vip
        ? <div className='overlay-modal-vertical-bg'>
          <div className='overlay-modal-horizontal-bg'>
            <motion.div
              variants={variants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='overlay-modal'
            >
              <div className='overlay-modal__title'>
                <div>{icon} <span>{title}</span></div>
                <Hammer onTap={onClose}>
                  <div className='overlay-modal__close'>
                    <IconCloseVip />
                  </div>
                </Hammer>
              </div>
              <div
                className='overlay-modal__content' onTouchMove={(e) => {
                  if (e.target.className !== 'css-needkl') {
                    e.stopPropagation()
                  }
                }}
              >
                {children}
              </div>
              <div className='corner-top-left'>
                <IconCornerTopLeft />
              </div>
              <div className='corner-top-right'>
                <IconCornerTopRight />
              </div>
              <div className='corner-bottom-left'>
                <IconCornerBottomLeft />
              </div>
              <div className='corner-bottom-right'>
                <IconCornerBottomRight />
              </div>
            </motion.div>
          </div>
        </div>
        : <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='overlay-modal'
          >
          <div className='overlay-modal__title'>
            <div>{icon} <span>{title}</span></div>
            <Hammer onTap={onClose}>
              <div className='overlay-modal__close eee'>
                <IconClose />
              </div>
            </Hammer>
          </div>
          <div
            className='overlay-modal__content' onTouchMove={(e) => {
              if (e.target.className !== 'css-needkl') {
                e.stopPropagation()
              }
            }}
          >
            {children}
          </div>
        </motion.div>}
    </>
  )
}

OverlayModal.propTypes = {}

export default OverlayModal
