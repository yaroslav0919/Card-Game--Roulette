import React, { useEffect, useState } from 'react'
import './FavoritesWrapper.scss'
import FavoriteItem from '../FavoriteItem/FavoriteItem'
import { Store, Actions } from 'uicore'

const FavoritesWrapper = ({ onClose }) => {
  const [betList, setBetList] = useState([])

  useEffect(() => {
    getBetList()
  }, [])

  const getBetList = async () => {
    const result = await Actions.generate('SavedBetList', { room: Store.GameStore.roomId })
    setBetList(result.list)
  }

  const changeBet = async (bet) => {
    const title = titleGenerate(bet.bets)
    const betData = {
      bets: bet.bets,
      title: bet.title ? bet.title : title,
      id: bet?.id,
      room: Store.GameStore.roomId
    }
    await Actions.generate('SaveBet', betData)

    setBetList((prevState) => {
      prevState.map((item) => {
        if (item.id === bet.id) {
          item.title = betData.title
        }
      })
      return prevState
    })
    // getBetList();
  }

  const addBet = async (bet) => {
    const title = titleGenerate(bet.bets)
    const betData = {
      bets: bet.bets,
      title: bet.title ? bet.title : title,
      room: Store.GameStore.roomId
    }
    await Actions.generate('SaveBet', betData)

    setBetList((prevState) => {
      const prevStateTemp = [...prevState]

      prevStateTemp.push(betData)

      return prevStateTemp
    })
    // getBetList();
  }

  const deleteBet = async (bet) => {
    const betData = {
      bets: [],
      id: bet?.id,
      room: Store.GameStore.roomId
    }
    await Actions.generate('SaveBet', betData)

    setBetList((prevState) => {
      const prevStateTemp = prevState.filter((item) => {
        return item.id !== bet.id
      })
      return prevStateTemp
    })
    // getBetList();
  }

  const titleGenerate = (bets) => {
    let betTitle = ''
    bets.map((bet, index) => {
      betTitle = betTitle + (index !== 0 ? ', ' : '') + bet.bet.replace(/bn-/g, '').replace(/-/g, '/').replace(/bc\//g, '').replace(/bp\//g, '')
    })
    return betTitle
  }

  return (
    <>
      <FavoriteItem
        onClose={onClose} onNew={(data) => {
          addBet(data)
        }}
      />
      {betList?.map((data, index) => {
        return (
          <FavoriteItem
            onClose={onClose}
            key={index}
            row={betList.length - index}
            data={data}
            onDeleteBet={() => {
              deleteBet(data)
            }}
            onChange={() => {
              changeBet(data)
            }}
          />
        )
      })}
    </>
  )
}

FavoritesWrapper.propTypes = {}

export default FavoritesWrapper
