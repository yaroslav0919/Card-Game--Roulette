import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Helper, Store } from 'uicore'
import { reaction } from 'mobx'
import Hammer from 'react-hammerjs'

import { translate } from '../../../utils/i18n'

import './MobileMenu.scss'
import './Table/TableBox.scss'
import './Table/TableV2.scss'

import Statics from './SubPages/Statics'
import Limits from './SubPages/Limits'
import BetHistory from './SubPages/BetHistory'
import BetDetails from './SubPages/BetDetails'
import Settings from './SubPages/Settings'
import Help from './SubPages/Help'
import StatusBar from '../StatusBar/StatusBar'
import Roulette from '../../../utils/roulette'

import {
  IconStatics2,
  IconFavorites2,
  IconMessage,
  IconLimits,
  IconBetHistory,
  IconSettings,
  IconHow,
  IconArrowRight,
  IconGoToLobby,
  IconLogoLivegames,
  IconClose, IconBalance, IconBet, IconReward
} from '../../Icons'
import CurrencySymbol from 'currency-symbol-map'

const variants = {
  hidden: { opacity: 1, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const MobileMenu = ({ menuClose, vip }) => {
  const [activeContent, setActiveContent] = useState(Store.AppStore.state.activeMenu)
  const [mobileMenuShow, setMobileMenuShow] = useState(Store.AppStore.state.menu)
  const [totalBet, setTotalBet] = useState(0)
  const [balance, setBalance] = useState(0)
  const [user, setUser] = useState(null)
  const [money, setMoney] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.menu
    }, (menu) => {
      setMobileMenuShow(menu)
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.AppStore.state.activeMenu
    }, (activeMenu) => {
      setActiveContent(activeMenu)
      if (activeMenu === 'chat') {
        Store.AppStore.updateState('menu', false)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.BetStore.totalBetSlipAmount
    }, (total) => {
      setTotalBet(total)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.balance
    }, (balance) => {
      setBalance(balance)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.user
    }, (user) => {
      user && setUser(user)
    }, {
      fireImmediately: true
    })
  }, [])

  useEffect(() => {
    return reaction(
      () => {
        return Store.WinnerStore.userRewards
      },
      (userRewards) => {
        const totalMoney = userRewards?.r?.reduce((acc, item) => acc + item.won, 0)
        setMoney(totalMoney)
      },
      {
        fireImmediately: true
      }
    )
  }, [])

  function SubPageRouting (activeMenu) {
    Store.AppStore.updateState('activeMenu', activeMenu)
  }

  const listItems = [
    {
      title: translate('statistics.menuTitle'),
      img: <IconStatics2 />,
      activeContent: 'statics'
    },
    {
      title: translate('chat.title'),
      img: <IconMessage />,
      activeContent: 'chat'
    },
    {
      title: translate('limits.title'),
      img: <IconLimits />,
      activeContent: 'limits'
    },
    {
      title: translate('betHistory.titleUppercase'),
      img: <IconBetHistory />,
      activeContent: 'betHistory'
    },
    {
      title: translate('settings.titleUppercase'),
      img: <IconSettings />,
      activeContent: 'settings'
    },
    {
      title: translate('help.title'),
      img: <IconHow />,
      activeContent: 'help'
    }
  ]

  return (
    <>{mobileMenuShow &&
      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='mobile-menu'
      >

        <StatusBar menu />
        <div className='mobile-menu__header'>
          <button className='mobile-menu__close' onClick={() => Store.AppStore.updateState('menu', false)}>
            <IconClose />
          </button>
          <IconLogoLivegames />
        </div>
        {activeContent === 'list' && <>
          <motion.div variants={variants} className='mobile-menu__content'>
            <div className='mobile-menu__list'>
              <ul>
                {listItems && listItems.map((item, index) => {
                  return (
                    <li
                      key={'list-items-' + index}
                      onClick={() => Store.AppStore.updateState('activeMenu', item.activeContent)}
                    >
                      {item.img}
                      {item.title}
                      <div className='mobile-menu__list__arrow'>
                        <IconArrowRight />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <Hammer onTap={() => {
              Store.AppStore.updateState('menu', false)
              Roulette.goToLobby()
            }}
            >
              <button className='mobile-menu__back'>
                <IconGoToLobby />
                {translate('returnToLobby')}
              </button>
            </Hammer>

            <div className='menu-balance'>
              <div className='menu-balance__line'>
                <span className='menu-balance__title'><IconBet /> <span>{translate('totalBet')}</span></span>
                <span className='menu-balance__value'>{totalBet} {CurrencySymbol(user?.currency)}</span>
              </div>
              <div className='menu-balance__line'>
                <span className='menu-balance__title'><IconReward /> <span style={{ textTransform: 'uppercase' }}>{translate('betHistory.totalGain')}</span></span>
                <span
                  className='menu-balance__value'
                >{Helper.formatMoney(money)} {CurrencySymbol(user?.currency)}
                </span>
              </div>
              <div className='menu-balance__line'>
                <span className='menu-balance__title'><IconBalance /> <span>{translate('balance')}</span></span>
                <span
                  className='menu-balance__value'
                >{Helper.formatMoney(balance)} {CurrencySymbol(user?.currency)}
                </span>
              </div>
            </div>
          </motion.div>
          <Hammer onTap={() => {
            setTimeout(() => {
              Store.AppStore.updateState('menu', false)
            }, 120)
          }}
          >
            <div className='mobile-menu__right-closer' />
          </Hammer>
                                     </>}
        <AnimatePresence>
          {activeContent === 'statics' && <Statics key='menu-' backToMenu={SubPageRouting} />}
          {activeContent === 'limits' && <Limits key='menu-limits' backToMenu={SubPageRouting} />}
          {activeContent === 'betHistory' && <BetHistory key='menu-betHistory' backToMenu={SubPageRouting} />}
          {activeContent === 'betDetails' && <BetDetails vip={vip} key='menu-betDetails' backToMenu={SubPageRouting} />}
          {activeContent === 'settings' && <Settings key='menu-settings' backToMenu={SubPageRouting} />}
          {activeContent === 'help' && <Help key='menu-help' backToMenu={SubPageRouting} />}

        </AnimatePresence>
      </motion.div>}
    </>
  )
}

export default MobileMenu
