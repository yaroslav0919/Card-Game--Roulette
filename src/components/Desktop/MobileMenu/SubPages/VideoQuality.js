import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Radio from '../../../Radio/Radio'

const VideoQuality = ({ backToMenu, onSelectQuality }) => {
  const [quality, setQuality] = useState('720p')

  const qualityList = [
    {
      text: '360p'
    },
    {
      text: '480p'
    },
    {
      text: '720p'
    },
    {
      text: '1080p'
    }
  ]

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  function onSelectQualityFunc (e) {
    onSelectQuality(e)
  }

  return (
    <div className='mobile-menu__content sub-page sub-page--languages'>
      <div className='sub-page__title'>
        <button className='sub-page__back' onClick={() => { backToMenuFunc('settings') }}>
          <img
            alt='' src='assets/images/icon-arrow-left.png'
            srcSet='assets/images/icon-arrow-left.png 1x, assets/images/icon-arrow-left@2x.png 2x'
          />
        </button>
        <span>VİDEO KALİTE SEÇİMİ</span>
      </div>
      <div className='sub-page__content' onTouchMove={(e) => { e.stopPropagation() }}>
        <div className='languages'>
          {qualityList && qualityList.map((item, index) => {
            return (
              <div className='languages__item' key={'quality-list-' + index}>
                <Radio
                  name='quality'
                  onChange={() => {
                    //  console.log(item.text)
                    onSelectQualityFunc(item.text)
                    setQuality(item.text)
                  }}
                  checked={item.text === quality}
                  text={item.text}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

VideoQuality.propTypes = {
  backToMenu: PropTypes.func,
  onSelectLangFunc: PropTypes.func
}

export default VideoQuality
