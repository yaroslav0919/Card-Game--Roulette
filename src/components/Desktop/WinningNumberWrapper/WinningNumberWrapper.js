import React from 'react'
import WinningNumber from '../WinningNumber/WinningNumber'
import useWinningNumber from '../../../hooks/winningNumber'

const WinningNumberWrapper = ({ vip }) => {
  const winningNumber = useWinningNumber()
  return (
    <>
      {winningNumber >= 0 && <WinningNumber number={winningNumber} vip={vip} showMoney activeRoom />}
    </>
  )
}

export default WinningNumberWrapper
