import * as PIXI from 'pixi.js'
import tableData from '../../constants/racetrack'
import { ang2Rad } from '../../utils/math'

export default function useRaceTrackTable () {
  const calcRaceTrackCenterOffset = () => {
    const btnStart = tableData.find((item) => item.key === 'bn-11')
    const btnEnd = tableData.find((item) => item.key === 'bn-12')

    const startPos = {
      x: btnStart.x,
      y: btnStart.y
    }

    const endPos = {
      x: btnEnd.x + btnEnd.w,
      y: btnEnd.y + btnEnd.h
    }

    const centerPoint = {
      x: startPos.x + (endPos.x - startPos.x) / 2,
      y: startPos.y + (endPos.y - startPos.y) / 2
    }

    const screenCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }

    const offset = {
      x: screenCenter.x - centerPoint.x,
      y: screenCenter.y - centerPoint.y
    }

    return offset
  }

  const drawRaceTrackTable = (app) => {
    const centerOffset = calcRaceTrackCenterOffset()

    const btnRed = tableData.find((item) => (item.key === 'bc-red'))

    const tileData = []

    for (let i = 0; i < 37; i++) {
      const btn = tableData.find((item) => {
        return item.key === `bn-${i}`
      })

      const redIndex = btnRed?.keys.findIndex((item) => item === i)

      tileData.push({
        title: `${i}`,
        position: {
          x: btn?.x,
          y: btn?.y
        },
        size: {
          width: btn?.w,
          height: btn?.h
        },
        titleColor: redIndex !== -1 ? '#D44030' : '#FFFFFF'
      })
    }

    const btn11 = tableData.find((item) => (item.key === 'bn-11'))
    const btn12 = tableData.find((item) => (item.key === 'bn-12'))
    const topLeftPos = {
      x: btn11?.x,
      y: btn11?.y
    }
    const bottomRightPos = {
      x: btn12?.x + btn12?.w,
      y: btn12?.y + btn12?.h
    }

    const rectSize = {
      width: bottomRightPos.x - topLeftPos.x,
      height: bottomRightPos.y - topLeftPos.y
    }

    const buttonSize = {
      width: btn11.w,
      height: btn11.h
    }

    /** drag background & numbers */

    const graphics = new PIXI.Graphics()
    app.stage.addChild(graphics)

    graphics.beginFill(0x090809, 0.9)
    graphics.lineStyle(1.5, 0x888888, 1)

    graphics.moveTo(bottomRightPos.x + centerOffset.x, topLeftPos.y + centerOffset.y)
    graphics.lineTo(bottomRightPos.x + centerOffset.x, bottomRightPos.y + centerOffset.y)
    graphics.arc(topLeftPos.x + rectSize.width / 2 + centerOffset.x, bottomRightPos.y + centerOffset.y, rectSize.width / 2, ang2Rad(0), ang2Rad(180))
    graphics.lineTo(topLeftPos.x + centerOffset.x, topLeftPos.y + centerOffset.y)
    graphics.arc(topLeftPos.x + rectSize.width / 2 + centerOffset.x, topLeftPos.y + centerOffset.y, rectSize.width / 2, ang2Rad(180), ang2Rad(360))

    graphics.beginHole()
    graphics.moveTo(bottomRightPos.x - buttonSize.width + centerOffset.x, topLeftPos.y + centerOffset.y)
    graphics.lineTo(bottomRightPos.x - buttonSize.width + centerOffset.x, bottomRightPos.y + centerOffset.y)
    graphics.arc(topLeftPos.x + rectSize.width / 2 + centerOffset.x, bottomRightPos.y + centerOffset.y, rectSize.width / 2 - buttonSize.width, ang2Rad(0), ang2Rad(180))
    graphics.lineTo(topLeftPos.x + buttonSize.width + centerOffset.x, topLeftPos.y + centerOffset.y)
    graphics.arc(topLeftPos.x + rectSize.width / 2 + centerOffset.x, topLeftPos.y + centerOffset.y, rectSize.width / 2 - buttonSize.width, ang2Rad(180), ang2Rad(360))
    graphics.endHole()

    graphics.endFill()

    graphics.beginFill(0x090809, 0.45)
    graphics.moveTo(bottomRightPos.x - buttonSize.width + centerOffset.x, topLeftPos.y + centerOffset.y)
    graphics.lineTo(bottomRightPos.x - buttonSize.width + centerOffset.x, bottomRightPos.y + centerOffset.y)
    graphics.arc(topLeftPos.x + rectSize.width / 2 + centerOffset.x, bottomRightPos.y + centerOffset.y, rectSize.width / 2 - buttonSize.width, ang2Rad(0), ang2Rad(180))
    graphics.lineTo(topLeftPos.x + buttonSize.width + centerOffset.x, topLeftPos.y + centerOffset.y)
    graphics.arc(topLeftPos.x + rectSize.width / 2 + centerOffset.x, topLeftPos.y + centerOffset.y, rectSize.width / 2 - buttonSize.width, ang2Rad(180), ang2Rad(360))
    graphics.endFill()

    /** drag numbers text */
    const roundNumbers = [30, 8, 23, 10, 5, 24, 32, 0, 26, 3, 35]

    for (let i = 0; i < 37; i++) {
      const btn = tableData.find((item) => item.key === `bn-${i}`)

      const redIndex = btnRed?.keys.findIndex((item) => item === i)

      const textStyle = new PIXI.TextStyle({
        fontFamily: 'CircularStd',
        fontSize: 17,
        fontWeight: '100',
        fill: [redIndex !== -1 ? 0xD44030 : 0xffffff]
      })

      const label = new PIXI.Text(i, textStyle)
      label.anchor.set(0.5, 0.5)
      label.x = btn.x + btn.w / 2 + centerOffset.x
      label.y = btn.y + btn.h / 2 + centerOffset.y
      app.stage.addChild(label)

      const roundIndex = roundNumbers.indexOf(i)
      if (roundIndex === -1) {
        graphics.drawRect(btn.x + centerOffset.x, btn.y + centerOffset.y, btn.w, btn.h)
      }
    }

    for (let i = 1; i < 6; i++) {
      /** Draw top lines */

      const startPos = {}
      const endPos = {}

      const centerPos = {
        x: topLeftPos.x + rectSize.width / 2,
        y: topLeftPos.y
      }

      startPos.x = centerPos.x - (rectSize.width / 2 - buttonSize.width) * Math.cos(ang2Rad(30 * i)) + centerOffset.x
      startPos.y = centerPos.y - (rectSize.width / 2 - buttonSize.width) * Math.sin(ang2Rad(30 * i)) + centerOffset.y

      endPos.x = centerPos.x - rectSize.width / 2 * Math.cos(ang2Rad(30 * i)) + centerOffset.x
      endPos.y = centerPos.y - rectSize.width / 2 * Math.sin(ang2Rad(30 * i)) + centerOffset.y

      graphics.moveTo(startPos.x, startPos.y)
      graphics.lineTo(endPos.x, endPos.y)
      graphics.closePath()
    }

    /** Draw bottom lines */
    for (let i = 1; i < 5; i++) {
      const startPos = {}
      const endPos = {}

      const centerPos = {
        x: topLeftPos.x + rectSize.width / 2,
        y: bottomRightPos.y
      }

      startPos.x = centerPos.x - (rectSize.width / 2 - buttonSize.width) * Math.cos(ang2Rad(180 + (180 / 5) * i)) + centerOffset.x
      startPos.y = centerPos.y - (rectSize.width / 2 - buttonSize.width) * Math.sin(ang2Rad(180 + (180 / 5) * i)) + centerOffset.y

      endPos.x = centerPos.x - rectSize.width / 2 * Math.cos(ang2Rad(180 + (180 / 5) * i)) + centerOffset.x
      endPos.y = centerPos.y - rectSize.width / 2 * Math.sin(ang2Rad(180 + (180 / 5) * i)) + centerOffset.y

      graphics.moveTo(startPos.x, startPos.y)
      graphics.lineTo(endPos.x, endPos.y)
      graphics.closePath()
    }

    /** draw center lines */
    const btn6 = tableData.find((item) => item.key === 'bn-6')
    const btn1 = tableData.find((item) => item.key === 'bn-1')

    graphics.moveTo(btn6.x + btn6.w + centerOffset.x, btn6.y + centerOffset.y)
    graphics.lineTo(btn1.x + centerOffset.x, btn1.y + centerOffset.y)
    graphics.closePath()

    const btn25 = tableData.find((item) => item.key === 'bn-25')
    const btn22 = tableData.find((item) => item.key === 'bn-22')

    graphics.moveTo(btn25.x + btn25.w + centerOffset.x, btn25.y + centerOffset.y)
    graphics.lineTo(btn22.x + centerOffset.x, btn22.y + centerOffset.y)
    graphics.closePath()

    const btn15 = tableData.find((item) => item.key === 'bn-15')

    graphics.moveTo(btn22.x + centerOffset.x, btn22.y + centerOffset.y)
    graphics.lineTo(btn25.x + btn25.w + centerOffset.x, btn25.y + centerOffset.y)
    graphics.lineTo(btn15.x + btn15.w + centerOffset.x, btn15.y + centerOffset.y)
    graphics.arc(btn15.x + rectSize.width / 2 + centerOffset.x, btn15.y + centerOffset.y, rectSize.width / 2 - buttonSize.width, ang2Rad(180), ang2Rad(360))
    graphics.closePath()

    const otherKeys = [{
      x: 46,
      y: 62,
      w: 59,
      h: 61,
      key: 'bs-tier',
      title: 'TIER'
    }, {
      x: 46,
      y: 342,
      w: 59,
      h: 66,
      key: 'bs-zero',
      title: 'ZERO'
    }, {
      x: 46,
      y: 170,
      w: 59,
      h: 72,
      key: 'bs-orphelin',
      title: 'ORPH-ELINS'
    }, {
      x: 46,
      y: 242,
      w: 59,
      h: 95,
      key: 'bs-voisin',
      title: 'VOISINS'
    }]

    otherKeys.forEach((item) => {
      const textStyle = new PIXI.TextStyle({
        fontFamily: 'CircularStd',
        fontSize: 13,
        fontWeight: '100',
        fill: [0xffffff],
        breakWords: true,
        wordWrap: true,
        wordWrapWidth: item.key === 'bs-orphelin' ? 45 : 1000,
        align: 'center'
      })

      const label = new PIXI.Text(item.title, textStyle)
      label.anchor.set(0.5, 0.5)
      label.x = item.x + item.w / 2 + centerOffset.x
      label.y = item.y + item.h / 2 + centerOffset.y
      app.stage.addChild(label)
    })
  }

  return { drawRaceTrackTable }
}
