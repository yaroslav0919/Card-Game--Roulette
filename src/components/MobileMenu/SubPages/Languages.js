import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Radio from '../../Radio/Radio'
import { translate } from '../../../utils/i18n'

import { IconArrowLeft, IconTr, IconUs, IconRu, IconBr, IconAl } from '../../Icons'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const Languages = ({ backToMenu, onSelectLang, language, languagesList }) => {
  function backToMenuFunc (e) {
    backToMenu(e)
  }

  function onSelectLangFunc (e, b) {
    onSelectLang(e, b)
  }

  return (
    <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--languages'>
      <div className='sub-page__title'>
        <button className='sub-page__back' onClick={() => { backToMenuFunc('settings') }}>
          <IconArrowLeft />
        </button>
        <span>{translate('settings.language')}</span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>
        <div className='languages'>
          {languagesList && languagesList.map((item, index) => {
            return (
              <div className='languages__item' key={'languages-list-' + index}>
                <Radio
                  name='language'
                  onChange={() => {
                    onSelectLangFunc(item.img, item.key)
                  }}
                  checked={item.key === language}
                  text={<>
                    {item.img}
                    {item.text}
                  </>}
                />
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

Languages.propTypes = {
  backToMenu: PropTypes.func,
  onSelectLangFunc: PropTypes.func
}

export default Languages
