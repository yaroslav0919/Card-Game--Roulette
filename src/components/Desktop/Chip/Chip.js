import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Helper, Store } from 'uicore'
import { toJS } from 'mobx'
import { map } from 'lodash'

import './Chip.scss'
// import {
//   Chip10, Chip100, Chip20, Chip3, Chip30, Chip5, Chip50

// } from '../Icons'

// import IconChip10Vip from '../../assets/images/chips/chip-1.png'
// import IconChip25Vip from '../../assets/images/chips/chip-2.png'
// import IconChip100Vip from '../../assets/images/chips/chip-3.png'
// import IconChip500Vip from '../../assets/images/chips/chip-4.png'
// import IconChip50Vip from '../../assets/images/chips/chip-5.png'
// import IconChip1Vip from '../../assets/images/chips/chip-6.png'
// import IconChip5Vip from '../../assets/images/chips/chip-7.png'

const RenderChip = (value, vip) => {
  /* switch (value) {
        default:
        case 0:
            return <Chip3/>
            break;
        case 1:
            return <Chip5/>
            break;
        case 2:
            return <Chip10/>
            break;
        case 3:
            return <Chip20/>
            break;
        case 4:
            return <Chip30/>
            break;
        case 5:
            return <Chip50/>
            break;
        case 6:
            return <Chip100/>
            break;
    } */
  // switch (value) {
  //   default:
  //   case 0:
  //     return vip ? <img src={IconChip10Vip} alt='Chip Img' /> : <Chip3 />
  //     break
  //   case 1:
  //     return vip ? <img src={IconChip25Vip} alt='Chip Img' /> : <Chip5 />
  //     break
  //   case 2:
  //     return vip ? <img src={IconChip50Vip} alt='Chip Img' /> : <Chip10 />
  //     break
  //   case 3:
  //     return vip ? <img src={IconChip100Vip} alt='Chip Img' /> : <Chip20 />
  //     break
  //   case 4:
  //     return vip ? <img src={IconChip500Vip} alt='Chip Img' /> : <Chip30 />
  //     break
  //   case 5:
  //     return vip ? <img src={IconChip1Vip} alt='Chip Img' /> : <Chip50 />
  //     break
  //   case 6:
  //     return vip ? <img src={IconChip5Vip} alt='Chip Img' /> : <Chip100 />
  //     break
  // }
  // setTimeout(() => {

  // })
}

const Chip = ({ chip, menu, vip }) => {
  // useEffect(() => {
  //   const rates = toJS(Store.GameStore.rates)
  //   let chipTypez = [...rates].reverse().find((val) => {
  //     return val <= chip
  //   })
  //   if (menu) {
  //     chipTypez = chip
  //   }
  //   setChipType(Store.GameStore.rates.indexOf(chipTypez))
  // }, [chip])

  return (
    <div className={classNames(`chip__node chip__node--${Helper.rateFilter(chip)}`, { 'type-vip': vip })}>{Helper.abbreviateMoney(chip)}</div>
  )
}

Chip.propTypes = {
  chip: PropTypes.number,
  menu: PropTypes.bool
}

Chip.defaultProps = {
  menu: false
}

export default Chip
