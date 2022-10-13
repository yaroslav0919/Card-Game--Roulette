import MobileDetect from 'mobile-detect'
import { Helper, Store } from 'uicore'
import { i18n } from '../utils/i18n'
import { find } from 'lodash'

class Roulette {
  constructor () {
    this.device = new MobileDetect(window.navigator.userAgent)
    this.isMobile = this.device.mobile()
  }

  isVipRoom = (room = null) => {
    const joinedRoom = this.getRoomData(room)
    if (joinedRoom && joinedRoom.specs.type === 'vip') {
      Helper.addClassName(document.body, 'vip')
      return true
    }else{
      Helper.removeClassName(document.body, 'vip')
      return false
    }
  }

  getRoomData = (room = null) => {
    if (Store.GameStore?.lobby?.games?.roulette) {
      const joinedRoom = find(Store.GameStore.lobby.games.roulette, (node) => {
        return node.id === (room || Store.GameStore.roomId)
      })
      
      return joinedRoom
    }
    return null
  }

  goToLobby = () => {
    const lobbyUrl = Helper.getQueryParam('lobbyUrl')
    if (this.isMobile) {
      if (lobbyUrl) {
        window.location.href = window.atob(lobbyUrl)
        return
      }
      if (window.opener) {
        window.close()
      } else {
        Helper.postMessage('type=close')
      }
    } else {
      Helper.postMessage('type=close')
    }
    Helper.mixTrack('action', { type: 'return-to-lobby' })
  }

  fullstory = () => {
    if (!window.FS) return
    window.FS.identify(Store.UserStore.user.upk, {
      displayName: Store.UserStore.user.name
    })
  }

  changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    Store.UserStore.updateLanguage(lang)
  }

  async mixTrack (event, data) {
    if (window.mixpanel && window.mixpanel.mixp && window.mixpanel.mixp.track) {

      if(event === 'bet'){
        data = Object.assign(data, {
          wallet: Store.UserStore.balance, 
          currency: Store.GameStore.getCurrencyById(),
          session: Store.GameStore.session.id
        })
      }

      await window.mixpanel.mixp.track(
        event,
        data
      )
    }
  }
}

export default new Roulette()
