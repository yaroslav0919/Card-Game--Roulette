import { Howl } from 'howler'
import { reaction } from 'mobx'
import { Store } from 'uicore'
import EffectsSprite from '../sounds/effects/effects.json'
import MusicSprite from '../sounds/music/music.json'
import WarningsSpriteTR from '../sounds/warnings/tr/warnings.json'
import WarningsSpriteEN from '../sounds/warnings/en/warnings.json'
import WarningsSpriteBP from '../sounds/warnings/bp/warnings.json'
import Settings from '../constants/settings'
import Roulette from './roulette'

class _Audio {
  constructor () {
    this.effectPlayer = null
    this.clickPlayer = null
    this.musicPlayer = null
    this.warningPlayer = null
    this.clickList = ['click-1', 'click-2', 'click-3', 'click-4', 'click-5']
    this.load()
    reaction(() => {
      return Store.UserStore.language
    }, (lang) => {
      if (lang) this.loadByLanguage(lang)
    }, {
      fireImmediately: true
    })
  }

  load () {
    this.effectsLoader()
    this.clickLoader()
    this.musicLoader()
  }

  loadByLanguage (lang) {
    this.warningsLoader(lang)
  }

  effectsLoader () {
    if (this.effectPlayer) return
    this.effectPlayer = new Howl({
      src: [
        require('../sounds/effects/effects.webm'),
        require('../sounds/effects/effects.mp3')
      ],
      sprite: EffectsSprite.sprite,
      volume: 0.1
    })
  }

  clickLoader () {
    if (this.clickPlayer) return

    this.clickPlayer = new Howl({
      src: [
        require('../sounds/effects/effects.webm'),
        require('../sounds/effects/effects.mp3')
      ],
      sprite: EffectsSprite.sprite,
      volume: 0.5
    })
  }

  musicLoader () {
    if (this.musicPlayer) return
    this.musicPlayer = new Howl({
      src: [
        require('../sounds/music/music.webm'),
        require('../sounds/music/music.mp3')
      ],
      sprite: MusicSprite.sprite,
      volume: 0.080,
      loop: true
    })
  }

  warningsLoader (lang) {
    let sprite = ''
    if (lang === 'tr') {
      sprite = WarningsSpriteTR.sprite
    } else if (lang === 'en') {
      sprite = WarningsSpriteEN.sprite
    } else if (lang === 'bp' || lang === 'pt') {
      lang = 'bp'
      sprite = WarningsSpriteBP.sprite
    } else {
      return
    }

    this.warningPlayer = new Howl({
      src: [
        require(`../sounds/warnings/${lang}/warnings.webm`),
        require(`../sounds/warnings/${lang}/warnings.mp3`)
      ],
      sprite,
      volume: 0.7
    })
  }

  notAllowed () {
    return Store.AppStore.state[Settings.MuteSounds] || Store.AppStore.state[Settings.MuteSounds] === undefined
  }

  playEffect (audio) {
    if (this.notAllowed()) return
    this.effectPlayer && this.effectPlayer.play(audio)
  }

  playMusic (audio) {
    if (this.notAllowed()) return
    this.musicPlayer && this.musicPlayer.play(audio)
  }

  playClick () {
    if (Store.AppStore.state[Settings.MuteSounds]) return
    const click = Math.floor(Math.random() * 5)
    this.clickPlayer.play(this.clickList[click])
  }

  playWarning (audio) {
    const roomData = Roulette.getRoomData()
    if (this.notAllowed() || (roomData && roomData.template === 'live')) return
    this.warningPlayer && this.warningPlayer.play(audio)
  }

  stop () {
    this.effectPlayer.stop()
    this.musicPlayer.stop()
    this.warningPlayer.stop()
  }
}

export default new _Audio()
