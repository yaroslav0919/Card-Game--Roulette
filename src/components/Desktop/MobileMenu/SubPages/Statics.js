import React, { useState, useEffect } from 'react'
import Hammer from 'react-hammerjs'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Store } from 'uicore'
import _ from 'lodash'
import { reaction } from 'mobx'

import OldNumbers from '../../OldNumbers/OldNumbers'
import Standart from '../../Statistics/Standart/Standart'
import Temperature from '../../Statistics/Temperature/Temperature'
import LiveBets from '../../Statistics/LiveBets/LiveBets'
import RoundSelectionSlider from '../../../RoundSelectionSlider/RoundSelectionSlider'
import Areas from '../../Statistics/Areas/Areas'

import { IconStatics2, IconArrowLeft } from '../../../Icons'
import { translate } from '../../../../utils/i18n'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const getMostFrequentElement = (arr) => {
  const reducer = (obj, count) => {
    const item = obj.find(item => item.label === count)
    if (item) {
      item.value++
    } else {
      obj.push({ label: count, value: 1 })
    }
    return obj
  }
  return arr.reduce(reducer, []).sort((a, b) => a.value > b.value ? -1 : 1)
}

const Statics = ({ backToMenu }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [hotNumbers, setHotNumbers] = useState([])
  const [coldNumbers, setColdNumbers] = useState([])
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    return reaction(
      () => {
        return Store.AppStore.state.round
      },
      async (value) => {
        const lastTransactions = await Store.GameStore.getHistory(value)
        const numbers = _.flatMapDeep(lastTransactions, (item) => _.flattenDeep(item.v))
        const mostFrequentNumbers = getMostFrequentElement(numbers)
        setNumbers(mostFrequentNumbers)
        setHotNumbers(_.take(mostFrequentNumbers?.map(item => Number(item.label)), 5))
        setColdNumbers(_.takeRight(mostFrequentNumbers?.map(item => Number(item.label)), 5))
      },
      {
        fireImmediately: true
      }
    )
  }, [])

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  return (
    <motion.div variants={variants} className='mobile-menu__content sub-page'>
      <div className='sub-page__title'>
        <button className='sub-page__back' onClick={() => { backToMenuFunc('list') }}>
          <IconArrowLeft />
        </button>
        <span>
          <IconStatics2 />
          {translate('statistics.title')}
        </span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>
        <div>
          <div className='mobile-menu__tabs'>
            <Hammer onTap={() => {
              setActiveTab(0)
            }}
            >
              <div className={classNames('mobile-menu__tab', { 'mobile-menu__tab--active': activeTab === 0 })}>
                {translate('statics.standard')}
              </div>
            </Hammer>
            <Hammer onTap={() => {
              setActiveTab(1)
            }}
            >
              <div className={classNames('mobile-menu__tab', { 'mobile-menu__tab--active': activeTab === 1 })}>
                {translate('statics.temperature')}
              </div>
            </Hammer>
            <Hammer onTap={() => {
              setActiveTab(2)
            }}
            >
              <div className={classNames('mobile-menu__tab', { 'mobile-menu__tab--active': activeTab === 2 })}>
                {translate('statics.liveBets')}
              </div>
            </Hammer>
          </div>
          <OldNumbers />
          {activeTab === 0 && <Standart numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
          {activeTab === 1 && <Temperature numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
          {activeTab === 2 && <LiveBets coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
          <RoundSelectionSlider />

          <Areas numbers={numbers} />
        </div>
      </div>
    </motion.div>
  )
}

Statics.propTypes = {
  backToMenu: PropTypes.func
}

export default Statics
