import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Hammer from 'react-hammerjs'
import { AnimatePresence, motion } from 'framer-motion'
import { Store } from 'uicore'
import _ from 'lodash'
import { reaction } from 'mobx'

import './Statistics.scss'
import { IconStatics2, IconStaticsVip } from '../Icons'
import Areas from './Areas/Areas'
import Standart from './Standart/Standart'
import Temperature from './Temperature/Temperature'
import LiveBets from './LiveBets/LiveBets'
import OverlayModal from '../OverlayModal/OverlayModal'
import OldNumbers from '../OldNumbers/OldNumbers'
import RoundSelectionSlider from '../RoundSelectionSlider/RoundSelectionSlider'
import { translate } from '../../utils/i18n'

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

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const Statistics = ({ vip }) => {
  const [statisticsShow, setStatisticsShow] = useState(false)

  const [activeTab, setActiveTab] = useState(0)
  const [hotNumbers, setHotNumbers] = useState([])
  const [coldNumbers, setColdNumbers] = useState([])
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.statisticsShow
    }, (status) => {
      setStatisticsShow(status)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    if (!statisticsShow) return
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
  }, [statisticsShow])

  const onClose = () => {
    Store.AppStore.updateState('statisticsShow', false)
  }

  return (
    <>
      {statisticsShow &&
        <motion.div
          variants={overlayVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='statistics'
        >
          <Hammer onTap={onClose}>
            <div className='statistics__trigger' />
          </Hammer>
          <div className='statistics__modal'>
            <AnimatePresence>
              <OverlayModal vip={vip} title={translate('statistics.title')} icon={vip ? <IconStaticsVip /> : <IconStatics2 />} onClose={onClose}>
                <div className='sub-tabs-wrapper'>
                  <div
                    className='statistics__tabs sub-tabs tabs position-relative'
                  >
                    <Hammer onTap={() => {
                      setActiveTab(0)
                    }}
                    >
                      <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 0 })}>
                        <span style={{ zIndex: '999' }}>  {translate('statistics.tab1')}</span>
                      </div>
                    </Hammer>
                    <Hammer onTap={() => {
                      setActiveTab(1)
                    }}
                    >
                      <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 1 })}>
                        <span style={{ zIndex: '999' }}> {translate('statistics.heat')}</span>
                      </div>
                    </Hammer>
                    <Hammer onTap={() => {
                      setActiveTab(2)
                    }}
                    >
                      <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 2 })}>
                        <span style={{ zIndex: '999' }}> {translate('statistics.tab3')}</span>
                      </div>
                    </Hammer>
                    <Hammer onTap={() => {
                      setActiveTab(3)
                    }}
                    >
                      <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 3 })}>
                        <span style={{ zIndex: '999' }}> {translate('statistics.tab4')}</span>
                      </div>
                    </Hammer>
                    <div className='indicator-sub' style={{ left: `${25 * activeTab}%` }}>
                      <span />
                    </div>
                  </div>
                </div>
                <div className='statistics__content'>
                  <div>
                    <OldNumbers count={11} />
                    {activeTab === 0 &&
                      <Standart numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                    {activeTab === 1 &&
                      <Temperature numbers={numbers} coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                    {activeTab === 2 && <LiveBets coldNumbers={coldNumbers} hotNumbers={hotNumbers} />}
                    {activeTab === 3 && <Areas numbers={numbers} />}
                  </div>
                  <RoundSelectionSlider vip={vip} />

                </div>
              </OverlayModal>
            </AnimatePresence>
          </div>
          {/* <motion.div variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="statistics__tabs"
                >
                    <Hammer onTap={() => {
                        setActiveTab(0)
                    }}>
                        <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 0 })}>
                            {translate('statistics.tab1')}
                        </div>
                    </Hammer>
                    <Hammer onTap={() => {
                        setActiveTab(1)
                    }}>
                        <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 1 })}>
                            {translate('statistics.tab2')}
                        </div>
                    </Hammer>
                    <Hammer onTap={() => {
                        setActiveTab(2)
                    }}>
                        <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 2 })}>
                            {translate('statistics.tab3')}
                        </div>
                    </Hammer>
                    <Hammer onTap={() => {
                        setActiveTab(3)
                    }}>
                        <div className={classNames('statistics__tab', { 'statistics__tab--active': activeTab === 3 })}>
                            {translate('statistics.tab4')}
                        </div>
                    </Hammer>
                </motion.div> */}
        </motion.div>}
    </>
  )
}

export default Statistics
