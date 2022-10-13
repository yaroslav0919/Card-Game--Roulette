import React, { useEffect, useState } from 'react'
import { reaction } from 'mobx'
import { Store, State } from 'uicore'
import _ from 'lodash'
import classnames from 'classnames'

import { isNumberRed } from '../../utils/utils'
import './OldNumbers.scss'
import PropTypes from 'prop-types'

const OldNumbers = ({ count }) => {
  const [lastNumbers, setLastNumbers] = useState([])

  const getLastNumbers = async () => {
    if (!count) {
      count = 12
    }
    const lastTransactions = await Store.GameStore.getHistory(count)
    const numbers = _.flatMapDeep(lastTransactions, (item) => _.flattenDeep(item.v))
    if (numbers) {
      setLastNumbers(numbers)
    }
  }

  useEffect(() => {
    getLastNumbers()
    return reaction(() => {
      return Store.GameStore.session
    },
    (session) => {
      if (session && session.flag === State.Finish) {
        getLastNumbers()
      }
    },
    {
      fireImmediately: true
    })
  }, [])

  return (
    <div className='old-numbers'>
      {lastNumbers.map((item, index) => (
        <div
          key={`ln-${index}`}
          className={classnames({
            'old-number': true,
            'old-number--current': index === 0,
            'old-number--red': isNumberRed(item),
            'old-number--green': item === 0
          })}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

OldNumbers.propTypes = {
  count: PropTypes.number
}

OldNumbers.defaultProps = {
  count: 12
}

export default OldNumbers
