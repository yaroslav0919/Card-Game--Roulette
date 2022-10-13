import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './ColorWheel.scss'

const dataPoints = [
  { label: 32, value: 0 },
  { label: 15, value: 0 },
  { label: 19, value: 0 },
  { label: 4, value: 0 },
  { label: 21, value: 0 },
  { label: 2, value: 0 },
  { label: 25, value: 0 },
  { label: 17, value: 0 },
  { label: 34, value: 0 },
  { label: 6, value: 0 },
  { label: 27, value: 0 },
  { label: 13, value: 0 },
  { label: 36, value: 0 },
  { label: 11, value: 0 },
  { label: 30, value: 0 },
  { label: 8, value: 0 },
  { label: 23, value: 0 },
  { label: 10, value: 0 },
  { label: 5, value: 0 },
  { label: 24, value: 0 },
  { label: 16, value: 0 },
  { label: 33, value: 0 },
  { label: 1, value: 0 },
  { label: 20, value: 0 },
  { label: 14, value: 0 },
  { label: 31, value: 0 },
  { label: 9, value: 0 },
  { label: 22, value: 0 },
  { label: 18, value: 0 },
  { label: 29, value: 0 },
  { label: 7, value: 0 },
  { label: 28, value: 0 },
  { label: 12, value: 0 },
  { label: 35, value: 0 },
  { label: 3, value: 0 },
  { label: 26, value: 0 },
  { label: 0, value: 0 }
]

const ColorWheel = ({ numbers }) => {
  const [points, setPoints] = useState(dataPoints)

  useEffect(() => {
    let apoints = [...dataPoints]
    const max = numbers.find((item, index) => index === 0)

    apoints = apoints.map((point) => {
      const found = numbers.find(number => Number(point.label) === Number(number.label))
      point.value = found ? found.value / max.value : 0
      return calculate(point)
    })

    setPoints(apoints)
  }, [numbers])

  const calculate = (point) => {
    const v = 0.4 / 0.16
    const borderTopWidth = 675 * 0.4
    const borderRightWidth = 9 * v
    const borderLeftWidth = 9 * v
    const marginLeft = -1 * (9 * v)
    point.style = { borderTopWidth, borderRightWidth, borderLeftWidth, marginLeft }

    let borderTopColor = '#4c5055'
    if (point.value < 0.14) {
      borderTopColor = 'rgba(255,0,0,.5)'
    } else if (point.value >= 0.14 && point.value < 0.28) {
      borderTopColor = 'rgba(255,118,0,.5)'
    } else if (point.value >= 0.28 && point.value < 0.42) {
      borderTopColor = 'rgba(255,240,0,.5)'
    } else if (point.value >= 0.42 && point.value < 0.56) {
      borderTopColor = 'rgba(55,237,55,.5)'
    } else if (point.value >= 0.56 && point.value < 0.70) {
      borderTopColor = 'rgba(19,130,255,.5)'
    } else if (point.value >= 0.70 && point.value < 0.84) {
      borderTopColor = 'rgba(17,21,191,.5)'
    } else {
      borderTopColor = 'rgba(117,25,151,.5)'
    }
    // if ( point.value >= 0.6 ) {
    //   borderTopColor = "#ce3726";
    // } else if ( point.value <= 0.4 ) {
    //   borderTopColor = "#4c5055";
    // } else {
    //   borderTopColor = "#2679ce";
    // }
    point.style = { borderTopColor, borderTopWidth, borderRightWidth, borderLeftWidth, marginLeft }

    return point
  }

  return (
    <div className='hot-cold-wheel'>
      <div className='hot-cold-wheel__center' />
      <div className='roulette-wrap'>
        <section className='roulette'>
          <div className='roulette-sections'>
            {points.map((item, index) => {
              return (
                <div className={'h-' + item.label} key={index}>
                  <div><b style={{ ...item.style }} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='roulette-numbers'>
            {dataPoints.map((item, index) => {
              return <div key={index} />
            })}
            <section>
              {dataPoints.map((item, index) => {
                return (
                  <span
                    key={index} className={classnames({
                      green: item.label === 0
                    })}
                  >{item.label}
                  </span>
                )
              })}
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

ColorWheel.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.object)
}

export default ColorWheel
