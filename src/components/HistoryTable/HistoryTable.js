import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import { reaction } from 'mobx'
import { Store } from 'uicore'

import './HistoryTable.scss'
// import TableSvg from '../TableSvg/TableSvg'
import Chip from '../Chip/Chip'
import { IconPupa, IconPupaVip } from '../Icons'

const HistoryTable = ({ data, winningNumberKey, vip }) => {
  const [pupaArea, setPupaArea] = useState(null)

  useEffect(() => {
    const areaData = txt.find((area) => area.key === winningNumberKey)
    setPupaArea(areaData)
    // console.log(areaData)
  }, [winningNumberKey])

  const txt = [
    {
      x: 1,
      y: 172,
      w: 43,
      h: 66,
      keys: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36], // red
      key: 'bc-red',
      borderType: 'group',
      chips: []
    },
    {
      x: 1,
      y: 240,
      w: 43,
      h: 66,
      keys: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35], // black
      key: 'bc-black',
      borderType: 'group',
      chips: []
    },
    {
      x: 1,
      y: 104,
      w: 43,
      h: 66,
      keys: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 33, 34, 36], // 0 ?
      key: 'bp-even',
      borderType: 'group',
      chips: []
    },
    {
      x: 1,
      y: 308,
      w: 43,
      h: 66,
      keys: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35], // 0 ?
      key: 'bp-odd',
      borderType: 'group',
      chips: []
    }, {
      x: 84,
      y: 31,
      w: 9,
      h: 9,
      keys: [0, 1, 2, 3],
      key: 'bn-0-1-2-3',
      borderType: 'custom',
      chips: []
    },
    {
      x: 1,
      y: 36,
      w: 43,
      h: 67,
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      key: 'bg-1-18',
      chips: []
    },
    {
      x: 1,
      y: 376,
      w: 43,
      h: 67,
      keys: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      key: 'bg-19-36',
      chips: []
    },
    {
      x: 45,
      y: 36,
      w: 39,
      h: 134,
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      key: 'bg-1-12',
      chips: []
    },
    {
      x: 45,
      y: 171,
      w: 39,
      h: 135,
      keys: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      key: 'bg-13-24',
      chips: []
    },
    {
      x: 45,
      y: 307,
      w: 39,
      h: 136,
      keys: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      key: 'bg-25-36',
      chips: []
    },
    {
      x: 89,
      y: 443,
      w: 64,
      h: 34,
      keys: [
        1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34
      ],
      key: 'bg-1-34',
      chips: []
    },
    {
      x: 154,
      y: 443,
      w: 63,
      h: 34,
      keys: [
        2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35
      ],
      key: 'bg-2-35',
      chips: []
    },
    {
      x: 218,
      y: 443,
      w: 63,
      h: 34,
      keys: [
        3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36
      ],
      key: 'bg-3-36',
      chips: []
    },
    {
      x: 89,
      y: 0,
      w: 192,
      h: 31,
      keys: [
        0
      ],
      key: 'bn-0',
      borderType: 'custom',
      chips: []
    },
    {
      x: 93,
      y: 39,
      w: 56,
      h: 26,
      keys: [
        1
      ],
      key: 'bn-1',
      hover: { x: 89, y: 34, w: 61, h: 32 },
      chips: []
    },
    {
      x: 93,
      y: 73,
      w: 56,
      h: 26,
      keys: [
        4
      ],
      key: 'bn-4',
      chips: []
    },
    {
      x: 93,
      y: 107,
      w: 56,
      h: 26,
      keys: [
        7
      ],
      key: 'bn-7',
      chips: []
    },
    {
      x: 93,
      y: 141,
      w: 56,
      h: 26,
      keys: [
        10
      ],
      key: 'bn-10',
      chips: []
    },
    {
      x: 93,
      y: 175,
      w: 56,
      h: 26,
      keys: [
        13
      ],
      key: 'bn-13',
      chips: []
    },
    {
      x: 93,
      y: 209,
      w: 56,
      h: 26,
      keys: [
        16
      ],
      key: 'bn-16',
      chips: []
    },
    {
      x: 93,
      y: 243,
      w: 56,
      h: 26,
      keys: [
        19
      ],
      key: 'bn-19',
      chips: []
    },
    {
      x: 93,
      y: 277,
      w: 56,
      h: 26,
      keys: [
        22
      ],
      key: 'bn-22',
      chips: []
    },
    {
      x: 93,
      y: 311,
      w: 56,
      h: 26,
      keys: [
        25
      ],
      key: 'bn-25',
      chips: []
    },
    {
      x: 93,
      y: 345,
      w: 56,
      h: 26,
      keys: [
        28
      ],
      key: 'bn-28',
      chips: []
    },
    {
      x: 93,
      y: 379,
      w: 56,
      h: 26,
      keys: [
        31
      ],
      key: 'bn-31',
      chips: []
    },
    {
      x: 93,
      y: 413,
      w: 56,
      h: 26,
      keys: [
        34
      ],
      key: 'bn-34',
      chips: []
    },
    {
      x: 157,
      y: 39,
      w: 56,
      h: 26,
      keys: [
        2
      ],
      key: 'bn-2',
      chips: []
    },
    {
      x: 157,
      y: 73,
      w: 56,
      h: 26,
      keys: [
        5
      ],
      key: 'bn-5',
      chips: []
    },
    {
      x: 157,
      y: 107,
      w: 56,
      h: 26,
      keys: [
        8
      ],
      key: 'bn-8',
      chips: []
    },
    {
      x: 157,
      y: 141,
      w: 56,
      h: 26,
      keys: [
        11
      ],
      key: 'bn-11',
      chips: []
    },
    {
      x: 157,
      y: 175,
      w: 56,
      h: 26,
      keys: [
        14
      ],
      key: 'bn-14',
      chips: []
    },
    {
      x: 157,
      y: 209,
      w: 56,
      h: 26,
      keys: [
        17
      ],
      key: 'bn-17',
      chips: []
    },
    {
      x: 157,
      y: 243,
      w: 56,
      h: 26,
      keys: [
        20
      ],
      key: 'bn-20',
      chips: []
    },
    {
      x: 157,
      y: 277,
      w: 56,
      h: 26,
      keys: [
        23
      ],
      key: 'bn-23',
      chips: []
    },
    {
      x: 157,
      y: 311,
      w: 56,
      h: 26,
      keys: [
        26
      ],
      key: 'bn-26',
      chips: []
    },
    {
      x: 157,
      y: 345,
      w: 56,
      h: 26,
      keys: [
        29
      ],
      key: 'bn-29',
      chips: []
    },
    {
      x: 157,
      y: 379,
      w: 56,
      h: 26,
      keys: [
        32
      ],
      key: 'bn-32',
      chips: []
    },
    {
      x: 157,
      y: 413,
      w: 56,
      h: 26,
      keys: [
        35
      ],
      key: 'bn-35',
      chips: []
    },
    {
      x: 221,
      y: 39,
      w: 56,
      h: 26,
      keys: [
        3
      ],
      key: 'bn-3',
      chips: []
    },
    {
      x: 221,
      y: 73,
      w: 56,
      h: 26,
      keys: [
        6
      ],
      key: 'bn-6',
      chips: []
    },
    {
      x: 221,
      y: 107,
      w: 56,
      h: 26,
      keys: [
        9
      ],
      key: 'bn-9',
      chips: []
    },
    {
      x: 221,
      y: 141,
      w: 56,
      h: 26,
      keys: [
        12
      ],
      key: 'bn-12',
      chips: []
    },
    {
      x: 221,
      y: 175,
      w: 56,
      h: 26,
      keys: [
        15
      ],
      key: 'bn-15',
      chips: []
    },
    {
      x: 221,
      y: 209,
      w: 56,
      h: 26,
      keys: [
        18
      ],
      key: 'bn-18',
      chips: []
    },
    {
      x: 221,
      y: 243,
      w: 56,
      h: 26,
      keys: [
        21
      ],
      key: 'bn-21',
      chips: []
    },
    {
      x: 221,
      y: 277,
      w: 56,
      h: 26,
      keys: [
        24
      ],
      key: 'bn-24',
      chips: []
    },
    {
      x: 221,
      y: 311,
      w: 56,
      h: 26,
      keys: [
        27
      ],
      key: 'bn-27',
      chips: []
    },
    {
      x: 221,
      y: 345,
      w: 56,
      h: 26,
      keys: [
        30
      ],
      key: 'bn-30',
      chips: []
    },
    {
      x: 221,
      y: 379,
      w: 56,
      h: 26,
      keys: [
        33
      ],
      key: 'bn-33',
      chips: []
    },
    {
      x: 221,
      y: 413,
      w: 56,
      h: 26,
      keys: [
        36
      ],
      key: 'bn-36',
      chips: []
    },
    {
      x: 93,
      y: 31,
      w: 56,
      h: 8,
      keys: [
        0, 1
      ],
      key: 'bn-0-1',
      borderType: 'custom',
      chips: []
    },
    {
      x: 93,
      y: 65,
      w: 56,
      h: 8,
      keys: [
        1, 4
      ],
      key: 'bn-1-4',
      chips: []
    },
    {
      x: 93,
      y: 99,
      w: 56,
      h: 8,
      keys: [
        4, 7
      ],
      key: 'bn-4-7',
      chips: []
    },
    {
      x: 93,
      y: 133,
      w: 56,
      h: 8,
      keys: [
        7, 10
      ],
      key: 'bn-7-10',
      chips: []
    },
    {
      x: 93,
      y: 167,
      w: 56,
      h: 8,
      keys: [
        10, 13
      ],
      key: 'bn-10-13',
      chips: []
    },
    {
      x: 93,
      y: 201,
      w: 56,
      h: 8,
      keys: [
        13, 16
      ],
      key: 'bn-13-16',
      chips: []
    },
    {
      x: 93,
      y: 235,
      w: 56,
      h: 8,
      keys: [
        16, 19
      ],
      key: 'bn-16-19',
      chips: []
    },
    {
      x: 93,
      y: 269,
      w: 56,
      h: 8,
      keys: [
        19, 22
      ],
      key: 'bn-19-22',
      chips: []
    },
    {
      x: 93,
      y: 303,
      w: 56,
      h: 8,
      keys: [
        22, 25
      ],
      key: 'bn-22-25',
      chips: []
    },
    {
      x: 93,
      y: 337,
      w: 56,
      h: 8,
      keys: [
        25, 28
      ],
      key: 'bn-25-28',
      chips: []
    },
    {
      x: 93,
      y: 371,
      w: 56,
      h: 8,
      keys: [
        28, 31
      ],
      key: 'bn-28-31',
      chips: []
    },
    {
      x: 93,
      y: 405,
      w: 56,
      h: 8,
      keys: [
        31, 34
      ],
      key: 'bn-31-34',
      chips: []
    },
    {
      x: 157,
      y: 31,
      w: 56,
      h: 8,
      keys: [
        0, 2
      ],
      key: 'bn-0-2',
      borderType: 'custom',
      chips: []
    },
    {
      x: 157,
      y: 65,
      w: 56,
      h: 8,
      keys: [
        2, 5
      ],
      key: 'bn-2-5',
      chips: []
    },
    {
      x: 157,
      y: 99,
      w: 56,
      h: 8,
      keys: [
        5, 8
      ],
      key: 'bn-5-8',
      chips: []
    },
    {
      x: 157,
      y: 133,
      w: 56,
      h: 8,
      keys: [
        8, 11
      ],
      key: 'bn-8-11',
      chips: []
    },
    {
      x: 157,
      y: 167,
      w: 56,
      h: 8,
      keys: [
        11, 14
      ],
      key: 'bn-11-14',
      chips: []
    },
    {
      x: 157,
      y: 201,
      w: 56,
      h: 8,
      keys: [
        14, 17
      ],
      key: 'bn-14-17',
      chips: []
    },
    {
      x: 157,
      y: 235,
      w: 56,
      h: 8,
      keys: [
        17, 20
      ],
      key: 'bn-17-20',
      chips: []
    },
    {
      x: 157,
      y: 269,
      w: 56,
      h: 8,
      keys: [
        20, 23
      ],
      key: 'bn-20-23',
      chips: []
    },
    {
      x: 157,
      y: 303,
      w: 56,
      h: 8,
      keys: [
        23, 26
      ],
      key: 'bn-23-26',
      chips: []
    },
    {
      x: 157,
      y: 337,
      w: 56,
      h: 8,
      keys: [
        26, 29
      ],
      key: 'bn-26-29',
      chips: []
    },
    {
      x: 157,
      y: 371,
      w: 56,
      h: 8,
      keys: [
        29, 32
      ],
      key: 'bn-29-32',
      chips: []
    },
    {
      x: 157,
      y: 405,
      w: 56,
      h: 8,
      keys: [
        32, 35
      ],
      key: 'bn-32-35',
      chips: []
    },
    {
      x: 221,
      y: 31,
      w: 56,
      h: 8,
      keys: [
        0, 3
      ],
      key: 'bn-0-3',
      borderType: 'custom',
      chips: []
    },
    {
      x: 221,
      y: 65,
      w: 56,
      h: 8,
      keys: [
        3, 6
      ],
      key: 'bn-3-6',
      chips: []
    },
    {
      x: 221,
      y: 99,
      w: 56,
      h: 8,
      keys: [
        6, 9
      ],
      key: 'bn-6-9',
      chips: []
    },
    {
      x: 221,
      y: 133,
      w: 56,
      h: 8,
      keys: [
        9, 12
      ],
      key: 'bn-9-12',
      chips: []
    },
    {
      x: 221,
      y: 167,
      w: 56,
      h: 8,
      keys: [
        12, 15
      ],
      key: 'bn-12-15',
      chips: []
    },
    {
      x: 221,
      y: 201,
      w: 56,
      h: 8,
      keys: [
        15, 18
      ],
      key: 'bn-15-18',
      chips: []
    },
    {
      x: 221,
      y: 235,
      w: 56,
      h: 8,
      keys: [
        18, 21
      ],
      key: 'bn-18-21',
      chips: []
    },
    {
      x: 221,
      y: 269,
      w: 56,
      h: 8,
      keys: [
        21, 24
      ],
      key: 'bn-21-24',
      chips: []
    },
    {
      x: 221,
      y: 303,
      w: 56,
      h: 8,
      keys: [
        24, 27
      ],
      key: 'bn-24-27',
      chips: []
    },
    {
      x: 221,
      y: 337,
      w: 56,
      h: 8,
      keys: [
        27, 30
      ],
      key: 'bn-27-30',
      chips: []
    },
    {
      x: 221,
      y: 371,
      w: 56,
      h: 8,
      keys: [
        30, 33
      ],
      key: 'bn-30-33',
      chips: []
    },
    {
      x: 221,
      y: 405,
      w: 56,
      h: 8,
      keys: [
        33, 36
      ],
      key: 'bn-33-36',
      chips: []
    },
    {
      x: 149,
      y: 31,
      w: 8,
      h: 8,
      keys: [
        0, 1, 2
      ],
      key: 'bn-0-1-2',
      borderType: 'custom',
      chips: []
    },
    {
      x: 149,
      y: 65,
      w: 8,
      h: 8,
      keys: [
        1, 2, 4, 5
      ],
      key: 'bn-1-2-4-5',
      chips: []
    },
    {
      x: 149,
      y: 99,
      w: 8,
      h: 8,
      keys: [
        4, 5, 7, 8
      ],
      key: 'bn-4-5-7-8',
      chips: []
    },
    {
      x: 149,
      y: 133,
      w: 8,
      h: 8,
      keys: [
        7, 8, 10, 11
      ],
      key: 'bn-7-8-10-11',
      chips: []
    },
    {
      x: 149,
      y: 167,
      w: 8,
      h: 8,
      keys: [
        10, 11, 13, 14
      ],
      key: 'bn-10-11-13-14',
      chips: []
    },
    {
      x: 149,
      y: 201,
      w: 8,
      h: 8,
      keys: [
        13, 14, 16, 17
      ],
      key: 'bn-13-14-16-17',
      chips: []
    },
    {
      x: 149,
      y: 235,
      w: 8,
      h: 8,
      keys: [
        16, 17, 19, 20
      ],
      key: 'bn-16-17-19-20',
      chips: []
    },
    {
      x: 149,
      y: 269,
      w: 8,
      h: 8,
      keys: [
        19, 20, 22, 23
      ],
      key: 'bn-19-20-22-23',
      chips: []
    },
    {
      x: 149,
      y: 303,
      w: 8,
      h: 8,
      keys: [
        22, 23, 25, 26
      ],
      key: 'bn-22-23-25-26',
      chips: []
    },
    {
      x: 149,
      y: 337,
      w: 8,
      h: 8,
      keys: [
        25, 26, 28, 29
      ],
      key: 'bn-25-26-28-29',
      chips: []
    },
    {
      x: 149,
      y: 371,
      w: 8,
      h: 8,
      keys: [
        28, 29, 31, 32
      ],
      key: 'bn-28-29-31-32',
      chips: []
    },
    {
      x: 149,
      y: 405,
      w: 8,
      h: 8,
      keys: [
        31, 32, 34, 35
      ],
      key: 'bn-31-32-34-35',
      chips: []
    },
    {
      x: 213,
      y: 31,
      w: 8,
      h: 8,
      keys: [
        0, 2, 3
      ],
      key: 'bn-0-2-3',
      borderType: 'custom',
      chips: []
    },
    {
      x: 213,
      y: 65,
      w: 8,
      h: 8,
      keys: [
        2, 3, 5, 6
      ],
      key: 'bn-2-3-5-6',
      chips: []
    },
    {
      x: 213,
      y: 99,
      w: 8,
      h: 8,
      keys: [
        5, 6, 8, 9
      ],
      key: 'bn-5-6-8-9',
      chips: []
    },
    {
      x: 213,
      y: 133,
      w: 8,
      h: 8,
      keys: [
        8, 9, 11, 12
      ],
      key: 'bn-8-9-11-12',
      chips: []
    },
    {
      x: 213,
      y: 167,
      w: 8,
      h: 8,
      keys: [
        11, 12, 14, 15
      ],
      key: 'bn-11-12-14-15',
      chips: []
    },
    {
      x: 213,
      y: 201,
      w: 8,
      h: 8,
      keys: [
        14, 15, 17, 18
      ],
      key: 'bn-14-15-17-18',
      chips: []
    },
    {
      x: 213,
      y: 235,
      w: 8,
      h: 8,
      keys: [
        17, 18, 20, 21
      ],
      key: 'bn-17-18-20-21',
      chips: []
    },
    {
      x: 213,
      y: 269,
      w: 8,
      h: 8,
      keys: [
        20, 21, 23, 24
      ],
      key: 'bn-20-21-23-24',
      chips: []
    },
    {
      x: 213,
      y: 303,
      w: 8,
      h: 8,
      keys: [
        23, 24, 26, 27
      ],
      key: 'bn-23-24-26-27',
      chips: []
    },
    {
      x: 213,
      y: 337,
      w: 8,
      h: 8,
      keys: [
        26, 27, 29, 30
      ],
      key: 'bn-26-27-29-30',
      chips: []
    },
    {
      x: 213,
      y: 371,
      w: 8,
      h: 8,
      keys: [
        29, 30, 32, 33
      ],
      key: 'bn-29-30-32-33',
      chips: []
    },
    {
      x: 213,
      y: 405,
      w: 8,
      h: 8,
      keys: [
        32, 33, 35, 36
      ],
      key: 'bn-32-33-35-36',
      chips: []
    },
    {
      x: 149,
      y: 39,
      w: 8,
      h: 26,
      keys: [
        1, 2
      ],
      key: 'bn-1-2',
      chips: []
    },
    {
      x: 149,
      y: 73,
      w: 8,
      h: 26,
      keys: [
        4, 5
      ],
      key: 'bn-4-5',
      chips: []
    },
    {
      x: 149,
      y: 107,
      w: 8,
      h: 26,
      keys: [
        7, 8
      ],
      key: 'bn-7-8',
      chips: []
    },
    {
      x: 149,
      y: 141,
      w: 8,
      h: 26,
      keys: [
        10, 11
      ],
      key: 'bn-10-11',
      chips: []
    },
    {
      x: 149,
      y: 175,
      w: 8,
      h: 26,
      keys: [
        13, 14
      ],
      key: 'bn-13-14',
      chips: []
    },
    {
      x: 149,
      y: 209,
      w: 8,
      h: 26,
      keys: [
        16, 17
      ],
      key: 'bn-16-17',
      chips: []
    },
    {
      x: 149,
      y: 243,
      w: 8,
      h: 26,
      keys: [
        19, 20
      ],
      key: 'bn-19-20',
      chips: []
    },
    {
      x: 149,
      y: 277,
      w: 8,
      h: 26,
      keys: [
        22, 23
      ],
      key: 'bn-22-23',
      chips: []
    },
    {
      x: 149,
      y: 311,
      w: 8,
      h: 26,
      keys: [
        25, 26
      ],
      key: 'bn-25-26',
      chips: []
    },
    {
      x: 149,
      y: 345,
      w: 8,
      h: 26,
      keys: [
        28, 29
      ],
      key: 'bn-28-29',
      chips: []
    },
    {
      x: 149,
      y: 379,
      w: 8,
      h: 26,
      keys: [
        31, 32
      ],
      key: 'bn-31-32',
      chips: []
    },
    {
      x: 149,
      y: 413,
      w: 8,
      h: 26,
      keys: [
        34, 35
      ],
      key: 'bn-34-35',
      chips: []
    },
    {
      x: 213,
      y: 39,
      w: 8,
      h: 26,
      keys: [
        2, 3
      ],
      key: 'bn-2-3',
      chips: []
    },
    {
      x: 213,
      y: 73,
      w: 8,
      h: 26,
      keys: [
        5, 6
      ],
      key: 'bn-5-6',
      chips: []
    },
    {
      x: 213,
      y: 107,
      w: 8,
      h: 26,
      keys: [
        8, 9
      ],
      key: 'bn-8-9',
      chips: []
    },
    {
      x: 213,
      y: 141,
      w: 8,
      h: 26,
      keys: [
        11, 12
      ],
      key: 'bn-11-12',
      chips: []
    },
    {
      x: 213,
      y: 175,
      w: 8,
      h: 26,
      keys: [
        14, 15
      ],
      key: 'bn-14-15',
      chips: []
    },
    {
      x: 213,
      y: 209,
      w: 8,
      h: 26,
      keys: [
        17, 18
      ],
      key: 'bn-17-18',
      chips: []
    },
    {
      x: 213,
      y: 243,
      w: 8,
      h: 26,
      keys: [
        20, 21
      ],
      key: 'bn-20-21',
      chips: []
    },
    {
      x: 213,
      y: 277,
      w: 8,
      h: 26,
      keys: [
        23, 24
      ],
      key: 'bn-23-24',
      chips: []
    },
    {
      x: 213,
      y: 311,
      w: 8,
      h: 26,
      keys: [
        26, 27
      ],
      key: 'bn-26-27',
      chips: []
    },
    {
      x: 213,
      y: 345,
      w: 8,
      h: 26,
      keys: [
        29, 30
      ],
      key: 'bn-29-30',
      chips: []
    },
    {
      x: 213,
      y: 379,
      w: 8,
      h: 26,
      keys: [
        32, 33
      ],
      key: 'bn-32-33',
      chips: []
    },
    {
      x: 213,
      y: 413,
      w: 8,
      h: 26,
      keys: [
        35, 36
      ],
      key: 'bn-35-36',
      chips: []
    }, //
    {
      x: 84,
      y: 40,
      w: 9,
      h: 25,
      keys: [
        1, 2, 3
      ],
      key: 'bn-1-2-3',
      chips: []
    },
    {
      x: 84,
      y: 65,
      w: 9,
      h: 8,
      keys: [
        1, 2, 3, 4, 5, 6
      ],
      key: 'bn-1-2-3-4-5-6',
      chips: []
    },
    {
      x: 84,
      y: 73,
      w: 9,
      h: 26,
      keys: [
        4, 5, 6
      ],
      key: 'bn-4-5-6',
      chips: []
    },
    {
      x: 84,
      y: 99,
      w: 9,
      h: 8,
      keys: [
        4, 5, 6, 7, 8, 9
      ],
      key: 'bn-4-5-6-7-8-9',
      chips: []
    },
    {
      x: 84,
      y: 107,
      w: 9,
      h: 26,
      keys: [
        7, 8, 9
      ],
      key: 'bn-7-8-9',
      chips: []
    },
    {
      x: 84,
      y: 133,
      w: 9,
      h: 8,
      keys: [
        7, 8, 9, 10, 11, 12
      ],
      key: 'bn-7-8-9-10-11-12',
      chips: []
    },
    {
      x: 84,
      y: 141,
      w: 9,
      h: 26,
      keys: [
        10, 11, 12
      ],
      key: 'bn-10-11-12',
      chips: []
    },
    {
      x: 84,
      y: 167,
      w: 9,
      h: 8,
      keys: [
        10, 11, 12, 13, 14, 15
      ],
      key: 'bn-10-11-12-13-14-15',
      chips: []
    },
    {
      x: 84,
      y: 175,
      w: 9,
      h: 26,
      keys: [
        13, 14, 15
      ],
      key: 'bn-13-14-15',
      chips: []
    },
    {
      x: 84,
      y: 201,
      w: 9,
      h: 8,
      keys: [
        13, 14, 15, 16, 17, 18
      ],
      key: 'bn-13-14-15-16-17-18',
      chips: []
    },
    {
      x: 84,
      y: 209,
      w: 9,
      h: 26,
      keys: [
        16, 17, 18
      ],
      key: 'bn-16-17-18',
      chips: []
    },
    {
      x: 84,
      y: 235,
      w: 9,
      h: 8,
      keys: [
        16, 17, 18, 19, 20, 21
      ],
      key: 'bn-16-17-18-19-20-21',
      chips: []
    },
    {
      x: 84,
      y: 243,
      w: 9,
      h: 26,
      keys: [
        19, 20, 21
      ],
      key: 'bn-19-20-21',
      chips: []
    },
    {
      x: 84,
      y: 269,
      w: 9,
      h: 8,
      keys: [
        19, 20, 21, 22, 23, 24
      ],
      key: 'bn-19-20-21-22-23-24',
      chips: []
    },
    {
      x: 84,
      y: 277,
      w: 9,
      h: 26,
      keys: [
        22, 23, 24
      ],
      key: 'bn-22-23-24',
      chips: []
    },
    {
      x: 84,
      y: 303,
      w: 9,
      h: 8,
      keys: [
        22, 23, 24, 25, 26, 27
      ],
      key: 'bn-22-23-24-25-26-27',
      chips: []
    },
    {
      x: 84,
      y: 311,
      w: 9,
      h: 26,
      keys: [
        25, 26, 27
      ],
      key: 'bn-25-26-27',
      chips: []
    },
    {
      x: 84,
      y: 337,
      w: 9,
      h: 8,
      keys: [
        25, 26, 27, 28, 29, 30
      ],
      key: 'bn-25-26-27-28-29-30',
      chips: []
    },
    {
      x: 84,
      y: 345,
      w: 9,
      h: 26,
      keys: [
        28, 29, 30
      ],
      key: 'bn-28-29-30',
      chips: []
    },
    {
      x: 84,
      y: 371,
      w: 9,
      h: 8,
      keys: [
        28, 29, 30, 31, 32, 33
      ],
      key: 'bn-28-29-30-31-32-33',
      chips: []
    },
    {
      x: 84,
      y: 379,
      w: 9,
      h: 26,
      keys: [
        31, 32, 33
      ],
      key: 'bn-31-32-33',
      chips: []
    },
    {
      x: 84,
      y: 405,
      w: 9,
      h: 8,
      keys: [
        31, 32, 33, 34, 35, 36
      ],
      key: 'bn-31-32-33-34-35-36',
      chips: []
    },
    {
      x: 84,
      y: 413,
      w: 9,
      h: 30,
      keys: [
        34, 35, 36
      ],
      key: 'bn-34-35-36',
      chips: []
    }
  ]

  const List = () => {
    return (
      <>
        {data?.map((item, index) => {
          const areaData = txt.find((area) => area.key === item.bet)
          return (
            <div
              key={index} className='history-table__area' style={{
                left: areaData.x,
                top: areaData.y,
                width: areaData.w,
                height: areaData.h
              }}
            >
              <div className='add-chip'><Chip chip={item.wager} vip={vip} /></div>
            </div>
          )
        })}

        {pupaArea && <div
          className='history-table__area' style={{
            left: pupaArea.x,
            top: pupaArea.y,
            width: pupaArea.w,
            height: pupaArea.h
          }}
                     >
          <div className='pupa'>
            {vip ? <IconPupaVip /> : <IconPupa />}
          </div>
        </div>}
      </>
    )
  }

  return (
    <div className='history-table'>
      {/* <TableSvg heatMap={false} data={[]} /> */}
      <div className='history-table__areas'>
        <List />
      </div>
    </div>
  )
}

HistoryTable.propTypes = {}

export default HistoryTable
