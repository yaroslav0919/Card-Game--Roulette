import { Socket, Helper, Store } from 'uicore'
import Roulette from './utils/roulette'
import Settings from './constants/settings'
import Swiper from './utils/swiper'
import { i18n } from './utils/i18n'

class Initializer {
  init () {
    Helper.postMessage('type=start')
    Socket.init((connection) => {
      // connection
      if (Roulette.isMobile) {
        Store.AppStore.updateState(Settings.MuteSounds, true)
      }
      i18n.changeLanguage(Store.UserStore.language)
    })

    if (!Roulette.isMobile || Roulette.isMobile !== 'iPhone') return

    if (~navigator.userAgent.indexOf('CriOS')) {
      Helper.addClassName(document.body, 'swipeable')
      Swiper.initSwiper()
      Helper.addClassName(document.body, 'ios-chrome')
    }
  }
}

export default new Initializer()
