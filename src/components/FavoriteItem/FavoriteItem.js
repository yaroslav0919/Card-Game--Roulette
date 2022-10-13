import React, { useState, useEffect } from 'react'
import './FavoriteItem.scss'
import { IconBet, IconPlus, IconCheck, IconPencil, IconTrash } from '../Icons'
import Hammer from 'react-hammerjs'
import _ from 'lodash'
import { Store } from 'uicore'
import { reaction } from 'mobx'

import { translate } from '../../utils/i18n'

const FavoriteItem = ({ row, data, onChange, onNew, onDeleteBet, onClose }) => {
  const [edit, setEdit] = useState(false)
  const [newData, setNewData] = useState({})
  const [title, setTitle] = useState(data?.title)

  useEffect(() => {
    // console.log(data, 'data')
    return reaction(() => {
      return Store.BetStore.lastSessionBets
    }, (bets) => {
      const parsedBets = JSON.parse(JSON.stringify(bets))
      if (!_.isEmpty(parsedBets)) {
        setNewData(parsedBets)
      }
    }, {
      fireImmediately: true
    })
  }, [])

  const saveLastBet = async () => {
    const bets = []
    Object.keys(newData).map(key => {
      bets.push({ bet: newData[key].bet, wager: newData[key].wager })
      return null
    })
    if (bets.length > 0) {
      onNew({ bets })
    } else {
      Store.AppStore.setNotification({
        text: translate('favouriteBets.noBet')
      })
    }
  }

  const Play = () => {
    if (data) {
      Store.BetStore.changeBets(data.bets)
      typeof onClose === 'function' && onClose()
    }
  }

  const Edit = () => {
    return (
      <div className='favorite-item__edit'>
        <div>
          {edit
            ? <>
              <Hammer onTap={() => {
                const newData = data
                newData.title = title
                onChange(newData)
                setEdit(false)
              }}
              >
                <IconCheck />
              </Hammer>
            </>
            : <Hammer onTap={() => {
              setEdit(true)
            }}
              >
              <IconPencil />
            </Hammer>}

          <span>{row}. {translate('favouriteBets.chip')}:</span>

          {edit
            ? <input
                type='text' key={'a' + row} maxLength={64} value={title} onChange={(e) => {
                  console.log(e.target.value)
                  setTitle(e.target.value)
                }}
              />
            : <i onClick={Play}>{title}</i>}

        </div>
        <div className='favorite-item__right'>
          <div className='favorite-item__edit__money'>
            {_.sumBy(data?.bets, 'wager')} ₺ <IconBet />
          </div>
          <div
            className='favorite-item__delete' onClick={() => {
              onDeleteBet()
            }}
          ><IconTrash />
          </div>
        </div>
      </div>
    )
  }

  const Empty = () => {
    return (
      <div className='favorite-item__empty'>
        <Hammer onTap={() => {
          saveLastBet()
        }}
        ><span className='center'><IconPlus />
          {translate('favouriteBets.save')}
         </span>
        </Hammer>
      </div>
    )
  }

  return (
    <div className='favorite-item'>
      {data
        ? Edit()
        : <Empty />}
    </div>
  )
}

FavoriteItem.propTypes = {}

export default FavoriteItem
