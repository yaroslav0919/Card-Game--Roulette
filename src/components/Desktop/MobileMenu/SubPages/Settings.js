import React, { useState, useEffect, useRef } from 'react'
import { reaction } from 'mobx'
import { Store } from 'uicore'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { translate } from '../../../../utils/i18n'
import Roulette from '../../../../utils/roulette'
import SettingsKeys from '../../../../constants/settings'
import Checkbox from '../../../Checkbox/Checkbox'
import Languages from './Languages'
import useOnClickOutside from '../../hooks/clickOutside'
// import VideoQuality from './VideoQuality'

import {
  IconClose,
  IconArrowLeft,
  IconArrowDown,
  IconVolume,
  IconVolumeMute,
  IconTr,
  IconDe,
  IconSa,
  IconBp,
  IconPt,
  IconUs,
  IconRu, IconUz, IconBr, IconAl
} from '../../../Icons'
import Slider from 'react-input-slider'

const variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

const Settings = ({ backToMenu }) => {
  const ref = useRef(null)
  // const [quality, setQuality] = useState('720p');
  const [languageImg, setLanguageImg] = useState(<IconTr />)
  const [languageOptionActive, setLanguageOptionActive] = useState(false)
  const [language, setLanguage] = useState(Store.UserStore.language)
  const [settingsMenu, setSettingsMenu] = useState('settings')
  const [volume, setVolume] = useState(Store.UserStore.settings[SettingsKeys.BroadcastVolume])
  const [muteChat, setMuteChat] = useState(typeof Store.UserStore.settings[SettingsKeys.MuteChat] !== 'undefined' ? Store.UserStore.settings[SettingsKeys.MuteChat] : true)
  const [gameSound, setGameSound] = useState(typeof Store.UserStore.settings[SettingsKeys.GameSounds] !== 'undefined' ? Store.UserStore.settings[SettingsKeys.GameSounds] : true)
  const [warningSound, setWarningSound] = useState(typeof Store.UserStore.settings[SettingsKeys.WarningSounds] !== 'undefined' ? Store.UserStore.settings[SettingsKeys.WarningSounds] : true)

  const languagesList = [
    {
      img: <IconUs />,
      text: 'EN',
      key: 'en'
    },
    {
      img: <IconTr />,
      text: 'TR',
      key: 'tr'
    },
    {
      img: <IconRu />,
      text: 'RU',
      key: 'ru'
    },
    {
      img: <IconBp />,
      text: 'BP',
      key: 'bp'
    },
    {
      img: <IconPt />,
      text: 'PT',
      key: 'pt'
    },
    {
      img: <IconDe />,
      text: 'DE',
      key: 'de'
    },
    {
      img: <IconSa />,
      text: 'SA',
      key: 'sa'
    },
    {
      img: <IconUz />,
      text: 'UZ',
      key: 'uz'
    }
  ]

  useEffect(() => {
    return reaction(() => {
      return Store.UserStore.language
    }, (language) => {
      setLanguage(language)
      const img = languagesList.find((lang) => {
        return lang.key === language
      })
      setLanguageImg(img.img)
    }, {
      fireImmediately: true
    })
  }, [])

  function backToMenuFunc (e) {
    backToMenu(e)
  }

  function backToMenuFunc2 (e) {
    setSettingsMenu('settings')
  }

  function setLanguageFunc (langImg, lang) {
    Roulette.changeLanguage(lang)
    setLanguageImg(langImg)
    setSettingsMenu('settings')
  }

  function onChangeVolume (value) {
    setVolume(value)
    Store.UserStore.updateSetting(SettingsKeys.BroadcastVolume, value)
  }

  function onMuteChat (e) {
    setMuteChat(e.target.checked)
    Store.UserStore.updateSetting(SettingsKeys.MuteChat, e.target.checked)
  }

  function onGameSound (e) {
    setGameSound(e.target.checked)
    Store.UserStore.updateSetting(SettingsKeys.GameSounds, e.target.checked)
  }

  function onWarningSound (e) {
    setWarningSound(e.target.checked)
    Store.UserStore.updateSetting(SettingsKeys.WarningSounds, e.target.checked)
  }

  // useOnClickOutside(ref, () => Store.AppStore.updateState('activeMenu', ''));

  return (
    <>
      {settingsMenu === 'settings' &&
        <motion.div variants={variants} className='mobile-menu__content sub-page sub-page--settings'>
          <div className='sub-page__title'>
            <span>
              {translate('settings.titleUppercase')}
            </span>
            <button
              className='sub-page__back' onClick={() => {
                backToMenuFunc('list')
              }}
            >
              <IconClose />
            </button>
          </div>
          <div className='sub-page__content'>
            <div>
              <div className='settings__row'>
                <span>{translate('settings.language')}</span>
                <div
                  className='language' onClick={() => {
                    setLanguageOptionActive(!languageOptionActive)
                  }}
                >
                  {/* <img alt="" src={require(`../../../assets/images/${languageImg}.png`).default}/> */}
                  {languageImg}
                  <span>{language}</span>
                  <IconArrowDown />
                </div>
              </div>
              <div className='settings__row'>
                <span className='settings__row-item'>{translate('settings.muteChat')}</span>
                <Checkbox name='checkbox-1' checked={muteChat} onChange={onMuteChat} />
              </div>

              {/*
          <div className="settings__row">
            <span>{translate('settings.videoQuality')}</span>
            <div className="language" onClick={() => {
              setSettingsMenu('videoQuality')
            }}>
              <span>{quality}</span>
              <IconArrowDown />
            </div>
          </div>
        */}
              <div className='settings__row'>
                <span className='settings__row-item'>{translate('settings.gameSounds')}</span>
                <Checkbox name='checkbox-3' checked={gameSound} onChange={onGameSound} />
              </div>

              <div className='settings__row'>
                <span className='settings__row-item'>{translate('settings.warningSounds')}</span>
                <Checkbox name='checkbox-3' checked={warningSound} onChange={onWarningSound} />
              </div>

              <div className='settings__row settings__row--voice'>
                <span className='settings__row-item'>{translate('settings.videoVolume')}</span>
                <div>
                  <IconVolumeMute />
                  <Slider
                    axis='x'
                    xmin={0}
                    xmax={100}
                    x={volume}
                    onChange={({ x }) => {
                      onChangeVolume(x)
                    }}
                    styles={{
                      track: {
                        backgroundColor: '#ffffff'
                      },
                      active: {
                        backgroundColor: '#54c157'
                      },
                      thumb: {
                        width: 20,
                        height: 20
                      }
                    }}
                  />
                  <IconVolume />
                </div>
              </div>
            </div>
          </div>
          {languageOptionActive &&
            <div><Languages
              language={language} languagesList={languagesList} onSelectLang={setLanguageFunc}
              backToMenu={backToMenuFunc2}
                 />
            </div>}
        </motion.div>}

      {/* {settingsMenu === 'languages' &&
                <Languages language={language} languagesList={languagesList} onSelectLang={setLanguageFunc}
                    backToMenu={backToMenuFunc2} />} */}

      {/* settingsMenu === 'videoQuality' && <VideoQuality onSelectQuality={setQualityFunc} backToMenu={backToMenuFunc2} /> */}

    </>
  )
}

Settings.propTypes = {
  backToMenu: PropTypes.func
}

export default Settings
