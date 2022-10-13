import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Helper, Store } from 'uicore'
import { translate } from '../../../utils/i18n'
import Accordion from '../../Accordion/Accordion'
import AccordionItem from '../../Accordion/AccordionItem'

import { IconHow, IconArrowLeft, IconArrowDown } from '../../Icons'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const Help = ({ backToMenu }) => {
  const [rules, setRules] = useState([])

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  useEffect(() => {
    setRules(translate('rules', { returnObjects: true }))
  }, [])

  const handleClick = (activeContent) => {
    if (activeContent === 'Intro') {
      Store.AppStore.updateState('menu', false)
      Store.AppStore.updateState('intro', true)
    } else {
      Store.AppStore.updateState('activeMenu', activeContent)
    }
  }

  return (
    <motion.div
      variants={variants}
      className='mobile-menu__content sub-page sub-page--help'
    >
      <div className='sub-page__title'>
        <button className='sub-page__back' onClick={() => { backToMenuFunc('list') }}>
          <IconArrowLeft />
        </button>
        <span>
          <IconHow />
          {translate('help.title')}
        </span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>
        <Accordion theme='theme2'>
          {rules.map((rule, index) => {
            return <AccordionItem title={rule.title} key={index} content={rule.content} />
          })}
        </Accordion>
        <div className='sub-page--help-intro' onClick={() => handleClick('Intro')}>
          <span>Intro</span>
          <IconArrowDown />
        </div>
      </div>
    </motion.div>
  )
}

Help.propTypes = {
  backToMenu: PropTypes.func
}

export default Help
