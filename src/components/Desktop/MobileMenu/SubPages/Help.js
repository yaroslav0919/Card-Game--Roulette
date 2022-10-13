import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { translate } from '../../../../utils/i18n'
import { Store } from 'uicore'
import { IconClose, IconArrowRight } from '../../../Icons'
import useOnClickOutside from '../../hooks/clickOutside'
import { set } from 'lodash'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const Help = ({ backToMenu }) => {
  const ref = useRef(null)
  const [rules, setRules] = useState([])
  const [activeRule, setActiveRule] = useState([])
  const [rulesFilled, setRulesFilled] = useState(true)

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  useEffect(() => {
    setRules(translate('rules', { returnObjects: true }))
    if (rules.length && rulesFilled === true) {
      setFirstRule(rules)
    }
  }, [rules])

  const setFirstRule = (rules) => {
    setActiveRule(rules[0])
    setRulesFilled(false)
  }

  useOnClickOutside(ref, () => Store.AppStore.updateState('activeMenu', ''))

  return (
    <motion.div
      variants={variants}
      className=' sub-page sub-page--help'
      ref={ref}
    >
      <div className='sub-page--help__title'>
        <span>
          {translate('help.title')}
        </span>
        <button className='sub-page--help__back' onClick={() => { backToMenuFunc('list') }}>
          <IconClose />
        </button>

      </div>
      <div className='sub-page__content d-flex' onTouchMove={(e) => { e.stopPropagation() }}>
        <div>
          {rules.map((rule, index) => {
            return (
              <div
                key={index} className={classNames('sub-page--help__item-title', { 'sub-page--help__item-title--active': activeRule.title === rule.title })}
                onClick={() => setActiveRule(rule)}
              >{rule.title} <IconArrowRight />
              </div>
            )
          })}
        </div>
        <div className='sub-page--help__item-content' dangerouslySetInnerHTML={{ __html: activeRule.content }} />
      </div>
    </motion.div>
  )
}

Help.propTypes = {
  backToMenu: PropTypes.func
}

export default Help
