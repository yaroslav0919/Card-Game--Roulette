import React, { useEffect } from 'react'
import { Helper } from 'uicore'

const WonMoney = ({ money, currency, vip }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     const c = document.getElementById('myCanvas')
  //     const ctx = c.getContext('2d')

  //     ctx.clearRect(0, 0, c.width, c.height)
  //     ctx.font = '500 40px CircularStd'
  //     const textMeasure = ctx.measureText(money)

  //     ctx.font = '500 30px Helvetica'
  //     const textMeasure2 = ctx.measureText(currency)

  //     ctx.font = '500 40px CircularStd'
  //     const gradient = ctx.createLinearGradient(0, 0, 0, 22)
  //     gradient.addColorStop(0, 'rgba(255,243,216,0.8)')
  //     gradient.addColorStop(0.1, 'rgba(245,194,73,0.8)')
  //     gradient.addColorStop(1, 'rgba(143,93,11, 0.8)')
  //     const gradient2 = ctx.createLinearGradient(0, 0, 0, 22)
  //     gradient2.addColorStop(0, '#ffffff')
  //     gradient2.addColorStop(1, vip ? '#c3c3c3' : '#D5D5D5')

  //     ctx.strokeStyle = gradient
  //     ctx.lineWidth = 3
  //     ctx.textTracking = 100
  //     ctx.strokeText(money, (c.width / 2) - ((textMeasure.width + textMeasure2.width) / 2), 5 + textMeasure.actualBoundingBoxAscent)

  //     ctx.fillStyle = gradient2
  //     ctx.textTracking = 100
  //     ctx.fillText(money, (c.width / 2) - ((textMeasure.width + textMeasure2.width) / 2), 5 + textMeasure.actualBoundingBoxAscent)

  //     ctx.font = '500 38px Helvetica'
  //     ctx.fillStyle = gradient
  //     ctx.lineWidth = 3
  //     ctx.textTracking = 100
  //     ctx.imageSmoothingEnabled = false
  //     ctx.strokeText(currency, (c.width / 2) - ((textMeasure.width + textMeasure2.width) / 2) + textMeasure.width + 10, 5 + textMeasure.actualBoundingBoxAscent)

  //     ctx.fillStyle = gradient2
  //     ctx.textTracking = 100
  //     ctx.fillText(currency, (c.width / 2) - ((textMeasure.width + textMeasure2.width) / 2) + textMeasure.width + 10, 5 + textMeasure.actualBoundingBoxAscent)
  //   }, 100)
  // }, [money, currency])

  return (
    <div className='won-money-text'>{money} {currency}</div>
  )
}

export default WonMoney
