import { Helper } from 'uicore'

class Swiper {
  constructor () {
    this.initialized = false
    this.isCriOS = ~navigator.userAgent.indexOf('CriOS')
    this.resizePoint = window.screen.availHeight - (this.isCriOS ? 70 : 100)
    this.processing = false
    this.locked = false
  }

  touchMovePrevent = (e) => {
    e.preventDefault()
  }

  lock = () => {
    Helper.addClassName(document.body, 'locked')
    window.addEventListener('touchmove', this.touchMovePrevent, { passive: false })
    window.removeEventListener('touchmove', this.scroll)
    this.processing = false
    this.locked = true
  }

  unlock = () => {
    Helper.removeClassName(document.body, 'locked')
    window.removeEventListener('touchmove', this.touchMovePrevent)
    window.addEventListener('touchmove', this.scroll, { passive: false })
    this.locked = false
  }

  resize = () => {
    if (Helper.hasClassName(document.body, 'chat-active')) return
    if (this.resizePoint < window.innerHeight) {
      this.lock()
    } else {
      this.unlock()
      window.scrollBy(0, -window.scrollY)
    }
  }

  scroll = () => {
    if (this.processing || this.locked) return
    if (window.scrollY > 70) {
      this.processing = true
      window.scrollBy(0, 140)
    }
  }

  initSwiper = () => {
    if (this.initialized) return
    this.initialized = true
    Helper.removeClassName(document.body, 'locked')
    window.removeEventListener('touchmove', this.touchMovePrevent)
    window.addEventListener('resize', this.resize)
    window.addEventListener('touchmove', this.scroll, true)
    const swiperCloser = document.body.querySelector('.swiper-closer')
    if (swiperCloser) {
      swiperCloser.addEventListener('touchend', () => {
        Helper.removeClassName(document.body, 'swipeable')
        Helper.addClassName(document.body, 'swiper-destroyed')
        this.destroySwiper()
        window.dispatchEvent(new Event('resize'))
      })
    }
  }

  destroySwiper = () => {
    this.initialized = false
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('touchmove', this.scroll)
  }
}

export default new Swiper()
