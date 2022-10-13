import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from '../i18n/en'
import tr from '../i18n/tr'
import de from '../i18n/de'
import bp from '../i18n/bp'
import pt from '../i18n/pt'
import sa from '../i18n/sa'
import ru from '../i18n/ru'
import uz from '../i18n/uz'

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translations: en
    },
    tr: {
      translations: tr
    },
    de: {
      translations: de
    },
    bp: {
      translations: bp
    },
    pt: {
      translations: pt
    },
    sa: {
      translations: sa
    },
    ru: {
      translations: ru
    },
    uz: {
      translations: uz
    }
  },
  fallbackLng: 'tr',
  debug: false,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: false
  }
})

const translate = (key, params) => {
  const paramsWithDefaults = Object.assign({}, params, { keySeparator: '.' })
  const translated = i18n.t(key, paramsWithDefaults)
  return ~translated.indexOf('_') ? '' : translated
}

export { i18n, translate }
