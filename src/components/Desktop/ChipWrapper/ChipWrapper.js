import React, { useState } from 'react'
import { Store, Helper } from 'uicore'
import ChipMenu from '../ChipMenu/ChipMenu'
import './ChipWrapper.scss'

const ChipWrapper = ({ vip }) => {
  const [showChipMenu, setShowChipMenu] = useState(false)
  const [selectedChip, setSelectedChip] = useState(Store.GameStore.rate)

  const onChipSelection = (value) => {
    setSelectedChip(value)
    Store.GameStore.setRate(value)
    setShowChipMenu(false)
    Helper.mixTrack('bet-action', { type: 'rate-update', rate: value })
  }

  return <ChipMenu vip={vip} onChipSelect={onChipSelection} />
}

ChipWrapper.propTypes = {}

export default ChipWrapper
