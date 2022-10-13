import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './HotColdWheel.scss'

/*
const getMostFrequentElement = ( arr ) => {
  const reducer = (obj, count ) => {
    let item = obj.find(item => item.label === count);
    if ( item  ) {
      item.value++;
    } else {
      obj.push({ label: count, value: 1 });
    }
    return obj;
  }
  return arr.reduce( reducer, []).sort((a, b) => a.value > b.value ? -1 : 1);
}
*/

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

const HotColdWheel = ({ numbers }) => {
  const [points, setPoints] = useState(dataPoints)

  /*
  useEffect(() => {
    return reaction(
      () => {
        return Store.AppStore.state.round
      },
      async ( value ) => {
        let lastTransactions = await Store.GameStore.getHistory( value );
        let numbers = _.flatMapDeep(lastTransactions, (item) => _.flattenDeep(item.v));
        numbers = getMostFrequentElement(numbers);

        let apoints = [...dataPoints];
        const max = numbers.find((item, index) => index === 0);

        console.log(max)

        apoints = apoints.map((point) => {
          const found = numbers.find(number => Number(point.label) === Number(number.label));
          point.value = found ? found.value / max.value : 0;
          return calculate(point);
        });

        setPoints( apoints );

      },
      {
        fireImmediately: true
      }
    )
  }, []);
  */

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
    const v = point.value <= 0 ? 0 : point.value / 0.16
    const borderTopWidth = 280 * point.value
    const borderRightWidth = 4 * v
    const borderLeftWidth = 4 * v
    const marginLeft = -1 * (4.3 * v)

    let borderTopColor = '#4c5055'
    if (point.value >= 0.6) {
      borderTopColor = '#ce3726'
    } else if (point.value <= 0.4) {
      borderTopColor = '#2679ce'
    } else {
      borderTopColor = '#4c5055'
    }
    point.style = { borderTopColor, borderTopWidth, borderRightWidth, borderLeftWidth, marginLeft }

    if (point.value <= 0) {
      point.style = undefined
    }

    return point
  }

  return (
    <div className='hot-cold-wheel'>
      <div className='hot-cold-wheel__center' />
      <div className='roulette-wrap'>
        <section className='roulette'>
          <div className='roulette-sections'>
            {points.map((item, index) => (
              <div className={'h-' + item.label} key={index}>
                <div><b style={{ ...item.style }} />
                </div>
              </div>
            ))}
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

HotColdWheel.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.object)
}

export default HotColdWheel
