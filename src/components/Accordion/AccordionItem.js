import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import './Accordion.scss'

import IconArrowDown from '../Icons/icon-arrow-down.svg'

const variants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: { opacity: 1, x: 0 }
}

const AccordionItem = ({ className, children, title, content, isOpen, selection, onClick }) => {
  return (
    <div className={classNames('accordion-item', className, {
      'accordion-item--opened': isOpen,
      'accordion-item--selected': selection.length > 0
    })}
    >
      <div className='accordion-item__head' onClick={onClick}>
        <div className='accordion-item__head__title'>
          <b>{title}</b>
          <img src={IconArrowDown} />
        </div>
      </div>
      <motion.div
        initial={false}
        variants={variants}
        animate={isOpen ? 'expanded' : 'collapsed'}
        className='accordion-item__content'
        dangerouslySetInnerHTML={{ __html: content }}
      >
        {children}
      </motion.div>
    </div>
  )
}

AccordionItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
  selection: PropTypes.string
}

AccordionItem.defaultProps = {
  className: '',
  title: '',
  isChecked: false,
  selection: ''
}

export default AccordionItem
