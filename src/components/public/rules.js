import React, { useEffect, useRef, useState } from 'react'
import { Helper } from 'uicore'
import { each } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import tippy from 'tippy.js'
import { translate } from '../../utils/i18n'

export default function Rules () {
  const [active, setActive] = useState('general')
  const dropRef = useRef()
  const ruleList = ['general',
    'gameplay',
    'bet',
    'winnerRewards',
    'jackpot',
    'cashback',
    'bonus',
    'broadcast',
    'tip',
    'card',
    'color',
    'rewards']

  useEffect(() => {
    tippy('[data-tippy-content]', {
      duration: 0
    })
    window.addEventListener('click', windowClick, false)
    return () => {
      window.removeEventListener('click', windowClick)
    }
  }, [])

  const windowClick = () => {
    showRules(false)
  }

  const nodeClick = (e) => {
    e.stopPropagation()
  }

  const showRules = (value) => {
    if (dropRef.current) {
      if (value && !Helper.hasClassName(dropRef.current, 'active')) {
        Helper.addClassName(dropRef.current, 'active')
      } else {
        Helper.removeClassName(dropRef.current, 'active')
      }
    }
  }

  const titleItems = []
  const contentItems = []

  each(ruleList, (rule) => {
    titleItems.push(<button className={`o-tab-area__firer ${rule === active ? 'active' : ''}`} onClick={() => { setActive(rule) }} key={uuidv4()}>{translate(`rules.${rule}.title`)}</button>)
    contentItems.push(<div className={`o-tab-area__content ${rule === active ? 'active' : ''}`} dangerouslySetInnerHTML={{ __html: translate(`rules.${rule}.content`) }} key={uuidv4()} />)
  })

  return (
    <li ref={dropRef} onClick={nodeClick} data-tippy-content={translate('tooltips.rules')}>
      <button className='a-icon a-icon--how' onClick={() => { showRules(true) }} />
      <div className='o-header__nav-drops'>
        <div className='o-nav-drops'>
          <button className='a-icon o-nav-drops__close a-icon--kapat' onClick={() => { showRules(false) }} />
          <span className='o-nav-drops__title'>{translate('gameRules')}</span>
          <div className='o-nav-drops__content'>
            <div className='o-tab-area'>
              <div className='lefted'>
                {titleItems}
              </div>
              <div className='righted'>
                {contentItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
