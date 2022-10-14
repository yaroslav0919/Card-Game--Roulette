import React, { useState, useEffect } from 'react'
import { reaction } from 'mobx'
import uuidv4 from 'react-uuid'
import { Helper, Store } from 'uicore'
import { each, map, sortBy } from 'lodash'
import CurrencySymbol from 'currency-symbol-map'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import './GameList.scss'

export default function GameList () {
  const [games, setGames] = useState(null)

  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.lobby
    }, (lobby) => {
      if (lobby?.games) {
        const items = []
        each(lobby.games, (list, game) => {
          each(list, (node) => {
            node.gameType = game
          })
          items.push(...list)
        })
        setGames(sortBy(items, 'order'))
      }
    }, {
      fireImmediately: true
    })
  }, [])

  if (!games) return null

  const openGame = (game, room) => {
    const params = new URLSearchParams(window.location.search)
    params.delete('room')
    const url = `${window.location.origin}/${game}?${params.toString()}&room=${room}`
    window.location.href = url
    Helper.mixTrack('action', { type: 'game-change', game })
  }

  const swiperOptions = {
    slidesOffsetAfter: 30,
    slidesOffsetBefore: 0,
    spaceBetween: 10,
    slidesPerView: 'auto',
    pagination: false
  }

  const gameItems = map(games, (game) => {
    if (game.id === Store.GameStore.roomId) return null
    let imageSuffix = game.gameType
    if (game.specs) {
      if (game.specs.live && game.specs.croupier) {
        imageSuffix += '-live'
      } else {
        imageSuffix += '-auto'
      }
      if (game.specs.type) {
        imageSuffix += `-${game.specs.type}`
      }
      if (game.specs.box) {
        imageSuffix += '-lucky-box'
      }
    }

    let img = null
    try {
      img = require(`../../../assets/images/games/${imageSuffix}.jpg`)
    } catch (e) {
      console.log(`../../assets/images/games/${imageSuffix}.jpg`)
      imageSuffix = 'default-image'
      img = require(`../../../assets/images/games/${imageSuffix}.jpg`)
    }

    return (
      <SwiperSlide key={uuidv4()}>
        <figure onClick={() => { openGame(game.gameType, game.id) }}>
          <img src={img} alt={game.gameType} />
          <figcaption>
            <h2>{game.name}</h2>
            {game.betOptions && <p>{game.betOptions.MinSingleStakeLimit} - {game.betOptions.MaxSingleStakeLimit} {CurrencySymbol(Store.UserStore.user.currency)}</p>}
          </figcaption>
        </figure>
      </SwiperSlide>
    )
  })

  return (
    <div className='game-list'>
      <Swiper {...swiperOptions}>
        {gameItems}
      </Swiper>
    </div>
  )
}
