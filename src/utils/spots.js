import _ from 'lodash'

const spots = {
  'bn-1': {
    id: 1,
    code: 'bn-1',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-2': {
    id: 2,
    code: 'bn-2',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-3': {
    id: 3,
    code: 'bn-3',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-4': {
    id: 4,
    code: 'bn-4',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-5': {
    id: 5,
    code: 'bn-5',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-6': {
    id: 6,
    code: 'bn-6',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-7': {
    id: 7,
    code: 'bn-7',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-8': {
    id: 8,
    code: 'bn-8',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-9': {
    id: 9,
    code: 'bn-9',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-10': {
    id: 10,
    code: 'bn-10',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-11': {
    id: 11,
    code: 'bn-11',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-12': {
    id: 12,
    code: 'bn-12',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-13': {
    id: 13,
    code: 'bn-13',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-14': {
    id: 14,
    code: 'bn-14',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-15': {
    id: 15,
    code: 'bn-15',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-16': {
    id: 16,
    code: 'bn-16',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-17': {
    id: 17,
    code: 'bn-17',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-18': {
    id: 18,
    code: 'bn-18',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-19': {
    id: 19,
    code: 'bn-19',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-20': {
    id: 20,
    code: 'bn-20',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-21': {
    id: 21,
    code: 'bn-21',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-22': {
    id: 22,
    code: 'bn-22',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-23': {
    id: 23,
    code: 'bn-23',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-24': {
    id: 24,
    code: 'bn-24',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-25': {
    id: 25,
    code: 'bn-25',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-26': {
    id: 26,
    code: 'bn-26',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-27': {
    id: 27,
    code: 'bn-27',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-28': {
    id: 28,
    code: 'bn-28',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-29': {
    id: 29,
    code: 'bn-29',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-30': {
    id: 30,
    code: 'bn-30',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-31': {
    id: 31,
    code: 'bn-31',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-32': {
    id: 32,
    code: 'bn-32',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-33': {
    id: 33,
    code: 'bn-33',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-34': {
    id: 34,
    code: 'bn-34',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-35': {
    id: 35,
    code: 'bn-35',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-36': {
    id: 36,
    code: 'bn-36',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-00': {
    id: 37,
    code: 'bn-00',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-0': {
    id: 38,
    code: 'bn-0',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bc-red': {
    id: 39,
    code: 'bc-red',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bc-black': {
    id: 40,
    code: 'bc-black',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bp-odd': {
    id: 41,
    code: 'bp-odd',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bp-even': {
    id: 42,
    code: 'bp-even',
    relevantSpots: null,
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-1-12': {
    id: 43,
    code: 'bg-1-12',
    relevantSpots: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-13-24': {
    id: 44,
    code: 'bg-13-24',
    relevantSpots: [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-25-36': {
    id: 45,
    code: 'bg-25-36',
    relevantSpots: [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-1-18': {
    id: 46,
    code: 'bg-1-18',
    relevantSpots: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-19-36': {
    id: 47,
    code: 'bg-19-36',
    relevantSpots: [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-1-34': {
    id: 48,
    code: 'bg-1-34',
    relevantSpots: [
      1,
      4,
      7,
      10,
      13,
      16,
      19,
      22,
      25,
      28,
      31,
      34
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-2-35': {
    id: 49,
    code: 'bg-2-35',
    relevantSpots: [
      2,
      5,
      8,
      11,
      14,
      17,
      20,
      23,
      26,
      29,
      32,
      35
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bg-3-36': {
    id: 50,
    code: 'bg-3-36',
    relevantSpots: [
      3,
      6,
      9,
      12,
      15,
      18,
      21,
      24,
      27,
      30,
      33,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-00-0': {
    id: 51,
    code: 'bn-00-0',
    relevantSpots: [
      37,
      38
    ],
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-00-0-1-2-3': {
    id: 52,
    code: 'bn-00-0-1-2-3',
    relevantSpots: [
      37,
      38,
      1,
      2,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-00-0-2': {
    id: 53,
    code: 'bn-00-0-2',
    relevantSpots: [
      37,
      38,
      2
    ],
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-00-2': {
    id: 54,
    code: 'bn-00-2',
    relevantSpots: [
      37,
      2
    ],
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-00-2-3': {
    id: 55,
    code: 'bn-00-2-3',
    relevantSpots: [
      37,
      2,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-00-3': {
    id: 56,
    code: 'bn-00-3',
    relevantSpots: [
      37,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american'
    ]
  },
  'bn-0-1': {
    id: 57,
    code: 'bn-0-1',
    relevantSpots: [
      38,
      1
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-0-1-2': {
    id: 58,
    code: 'bn-0-1-2',
    relevantSpots: [
      38,
      1,
      2
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-0-1-2-3': {
    id: 59,
    code: 'bn-0-1-2-3',
    relevantSpots: [
      38,
      1,
      2,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-0-2': {
    id: 60,
    code: 'bn-0-2',
    relevantSpots: [
      38,
      2
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-0-2-3': {
    id: 61,
    code: 'bn-0-2-3',
    relevantSpots: [
      38,
      2,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-0-3': {
    id: 62,
    code: 'bn-0-3',
    relevantSpots: [
      38,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-1-2': {
    id: 63,
    code: 'bn-1-2',
    relevantSpots: [
      1,
      2
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-1-2-3': {
    id: 64,
    code: 'bn-1-2-3',
    relevantSpots: [
      1,
      2,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-1-2-3-4-5-6': {
    id: 65,
    code: 'bn-1-2-3-4-5-6',
    relevantSpots: [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-1-2-4-5': {
    id: 66,
    code: 'bn-1-2-4-5',
    relevantSpots: [
      1,
      2,
      4,
      5
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-1-4': {
    id: 67,
    code: 'bn-1-4',
    relevantSpots: [
      1,
      4
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-2-3': {
    id: 68,
    code: 'bn-2-3',
    relevantSpots: [
      2,
      3
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-2-3-5-6': {
    id: 69,
    code: 'bn-2-3-5-6',
    relevantSpots: [
      2,
      3,
      5,
      6
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-2-5': {
    id: 70,
    code: 'bn-2-5',
    relevantSpots: [
      2,
      5
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-3-6': {
    id: 71,
    code: 'bn-3-6',
    relevantSpots: [
      3,
      6
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-4-5': {
    id: 72,
    code: 'bn-4-5',
    relevantSpots: [
      4,
      5
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-4-5-6': {
    id: 73,
    code: 'bn-4-5-6',
    relevantSpots: [
      4,
      5,
      6
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-4-5-6-7-8-9': {
    id: 74,
    code: 'bn-4-5-6-7-8-9',
    relevantSpots: [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-4-5-7-8': {
    id: 75,
    code: 'bn-4-5-7-8',
    relevantSpots: [
      4,
      5,
      7,
      8
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-4-7': {
    id: 76,
    code: 'bn-4-7',
    relevantSpots: [
      4,
      7
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-5-6': {
    id: 77,
    code: 'bn-5-6',
    relevantSpots: [
      5,
      6
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-5-6-8-9': {
    id: 78,
    code: 'bn-5-6-8-9',
    relevantSpots: [
      5,
      6,
      8,
      9
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-5-8': {
    id: 79,
    code: 'bn-5-8',
    relevantSpots: [
      5,
      8
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-6-9': {
    id: 80,
    code: 'bn-6-9',
    relevantSpots: [
      6,
      9
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-7-8': {
    id: 81,
    code: 'bn-7-8',
    relevantSpots: [
      7,
      8
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-7-8-9': {
    id: 82,
    code: 'bn-7-8-9',
    relevantSpots: [
      7,
      8,
      9
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-7-8-9-10-11-12': {
    id: 83,
    code: 'bn-7-8-9-10-11-12',
    relevantSpots: [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-7-8-10-11': {
    id: 84,
    code: 'bn-7-8-10-11',
    relevantSpots: [
      7,
      8,
      10,
      11
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-7-10': {
    id: 85,
    code: 'bn-7-10',
    relevantSpots: [
      7,
      10
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-8-9': {
    id: 86,
    code: 'bn-8-9',
    relevantSpots: [
      8,
      9
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-8-9-11-12': {
    id: 87,
    code: 'bn-8-9-11-12',
    relevantSpots: [
      8,
      9,
      11,
      12
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-8-11': {
    id: 88,
    code: 'bn-8-11',
    relevantSpots: [
      8,
      11
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-9-12': {
    id: 89,
    code: 'bn-9-12',
    relevantSpots: [
      9,
      12
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-10-11': {
    id: 90,
    code: 'bn-10-11',
    relevantSpots: [
      10,
      11
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-10-11-12': {
    id: 91,
    code: 'bn-10-11-12',
    relevantSpots: [
      10,
      11,
      12
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-10-11-12-13-14-15': {
    id: 92,
    code: 'bn-10-11-12-13-14-15',
    relevantSpots: [
      10,
      11,
      12,
      13,
      14,
      15
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-10-11-13-14': {
    id: 93,
    code: 'bn-10-11-13-14',
    relevantSpots: [
      10,
      11,
      13,
      14
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-10-13': {
    id: 94,
    code: 'bn-10-13',
    relevantSpots: [
      10,
      13
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-11-12': {
    id: 95,
    code: 'bn-11-12',
    relevantSpots: [
      11,
      12
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-11-12-14-15': {
    id: 96,
    code: 'bn-11-12-14-15',
    relevantSpots: [
      11,
      12,
      14,
      15
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-11-14': {
    id: 97,
    code: 'bn-11-14',
    relevantSpots: [
      11,
      14
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-12-15': {
    id: 98,
    code: 'bn-12-15',
    relevantSpots: [
      12,
      15
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-13-14': {
    id: 99,
    code: 'bn-13-14',
    relevantSpots: [
      13,
      14
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-13-14-15': {
    id: 100,
    code: 'bn-13-14-15',
    relevantSpots: [
      13,
      14,
      15
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-13-14-15-16-17-18': {
    id: 101,
    code: 'bn-13-14-15-16-17-18',
    relevantSpots: [
      13,
      14,
      15,
      16,
      17,
      18
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-13-14-16-17': {
    id: 102,
    code: 'bn-13-14-16-17',
    relevantSpots: [
      13,
      14,
      16,
      17
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-13-16': {
    id: 103,
    code: 'bn-13-16',
    relevantSpots: [
      13,
      16
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-14-15': {
    id: 104,
    code: 'bn-14-15',
    relevantSpots: [
      14,
      15
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-14-15-17-18': {
    id: 105,
    code: 'bn-14-15-17-18',
    relevantSpots: [
      14,
      15,
      17,
      18
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-14-17': {
    id: 106,
    code: 'bn-14-17',
    relevantSpots: [
      14,
      17
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-15-18': {
    id: 107,
    code: 'bn-15-18',
    relevantSpots: [
      15,
      18
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-16-17': {
    id: 108,
    code: 'bn-16-17',
    relevantSpots: [
      16,
      17
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-16-17-18': {
    id: 109,
    code: 'bn-16-17-18',
    relevantSpots: [
      16,
      17,
      18
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-16-17-18-19-20-21': {
    id: 110,
    code: 'bn-16-17-18-19-20-21',
    relevantSpots: [
      16,
      17,
      18,
      19,
      20,
      21
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-16-17-19-20': {
    id: 111,
    code: 'bn-16-17-19-20',
    relevantSpots: [
      16,
      17,
      19,
      20
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-16-19': {
    id: 112,
    code: 'bn-16-19',
    relevantSpots: [
      16,
      19
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-17-18': {
    id: 113,
    code: 'bn-17-18',
    relevantSpots: [
      17,
      18
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-17-18-20-21': {
    id: 114,
    code: 'bn-17-18-20-21',
    relevantSpots: [
      17,
      18,
      20,
      21
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-17-20': {
    id: 115,
    code: 'bn-17-20',
    relevantSpots: [
      17,
      20
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-18-21': {
    id: 116,
    code: 'bn-18-21',
    relevantSpots: [
      18,
      21
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-19-20': {
    id: 117,
    code: 'bn-19-20',
    relevantSpots: [
      19,
      20
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-19-20-21': {
    id: 118,
    code: 'bn-19-20-21',
    relevantSpots: [
      19,
      20,
      21
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-19-20-21-22-23-24': {
    id: 119,
    code: 'bn-19-20-21-22-23-24',
    relevantSpots: [
      19,
      20,
      21,
      22,
      23,
      24
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-19-20-22-23': {
    id: 120,
    code: 'bn-19-20-22-23',
    relevantSpots: [
      19,
      20,
      22,
      23
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-19-22': {
    id: 121,
    code: 'bn-19-22',
    relevantSpots: [
      19,
      22
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-20-21': {
    id: 122,
    code: 'bn-20-21',
    relevantSpots: [
      20,
      21
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-20-21-23-24': {
    id: 123,
    code: 'bn-20-21-23-24',
    relevantSpots: [
      20,
      21,
      23,
      24
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-20-23': {
    id: 124,
    code: 'bn-20-23',
    relevantSpots: [
      20,
      23
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-21-24': {
    id: 125,
    code: 'bn-21-24',
    relevantSpots: [
      21,
      24
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-22-23': {
    id: 126,
    code: 'bn-22-23',
    relevantSpots: [
      22,
      23
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-22-23-24': {
    id: 127,
    code: 'bn-22-23-24',
    relevantSpots: [
      22,
      23,
      24
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-22-23-24-25-26-27': {
    id: 128,
    code: 'bn-22-23-24-25-26-27',
    relevantSpots: [
      22,
      23,
      24,
      25,
      26,
      27
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-22-23-25-26': {
    id: 129,
    code: 'bn-22-23-25-26',
    relevantSpots: [
      22,
      23,
      25,
      26
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-22-25': {
    id: 130,
    code: 'bn-22-25',
    relevantSpots: [
      22,
      25
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-23-24': {
    id: 131,
    code: 'bn-23-24',
    relevantSpots: [
      23,
      24
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-23-24-26-27': {
    id: 132,
    code: 'bn-23-24-26-27',
    relevantSpots: [
      23,
      24,
      26,
      27
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-23-26': {
    id: 133,
    code: 'bn-23-26',
    relevantSpots: [
      23,
      26
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-24-27': {
    id: 134,
    code: 'bn-24-27',
    relevantSpots: [
      24,
      27
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-25-26': {
    id: 135,
    code: 'bn-25-26',
    relevantSpots: [
      25,
      26
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-25-26-27': {
    id: 136,
    code: 'bn-25-26-27',
    relevantSpots: [
      25,
      26,
      27
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-25-26-27-28-29-30': {
    id: 137,
    code: 'bn-25-26-27-28-29-30',
    relevantSpots: [
      25,
      26,
      27,
      28,
      29,
      30
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-25-26-28-29': {
    id: 138,
    code: 'bn-25-26-28-29',
    relevantSpots: [
      25,
      26,
      28,
      29
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-25-28': {
    id: 139,
    code: 'bn-25-28',
    relevantSpots: [
      25,
      28
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-26-27': {
    id: 140,
    code: 'bn-26-27',
    relevantSpots: [
      26,
      27
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-26-27-29-30': {
    id: 141,
    code: 'bn-26-27-29-30',
    relevantSpots: [
      26,
      27,
      29,
      30
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-26-29': {
    id: 142,
    code: 'bn-26-29',
    relevantSpots: [
      26,
      29
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-27-30': {
    id: 143,
    code: 'bn-27-30',
    relevantSpots: [
      27,
      30
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-28-29': {
    id: 144,
    code: 'bn-28-29',
    relevantSpots: [
      28,
      29
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-28-29-30': {
    id: 145,
    code: 'bn-28-29-30',
    relevantSpots: [
      28,
      29,
      30
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-28-29-30-31-32-33': {
    id: 146,
    code: 'bn-28-29-30-31-32-33',
    relevantSpots: [
      28,
      29,
      30,
      31,
      32,
      33
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-28-29-31-32': {
    id: 147,
    code: 'bn-28-29-31-32',
    relevantSpots: [
      28,
      29,
      31,
      32
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-28-31': {
    id: 148,
    code: 'bn-28-31',
    relevantSpots: [
      28,
      31
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-29-30': {
    id: 149,
    code: 'bn-29-30',
    relevantSpots: [
      29,
      30
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-29-30-32-33': {
    id: 150,
    code: 'bn-29-30-32-33',
    relevantSpots: [
      29,
      30,
      32,
      33
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-29-32': {
    id: 151,
    code: 'bn-29-32',
    relevantSpots: [
      29,
      32
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-30-33': {
    id: 152,
    code: 'bn-30-33',
    relevantSpots: [
      30,
      33
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-31-32': {
    id: 153,
    code: 'bn-31-32',
    relevantSpots: [
      31,
      32
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-31-32-33': {
    id: 154,
    code: 'bn-31-32-33',
    relevantSpots: [
      31,
      32,
      33
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-31-32-33-34-35-36': {
    id: 155,
    code: 'bn-31-32-33-34-35-36',
    relevantSpots: [
      31,
      32,
      33,
      34,
      35,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-31-32-34-35': {
    id: 156,
    code: 'bn-31-32-34-35',
    relevantSpots: [
      31,
      32,
      34,
      35
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-31-34': {
    id: 157,
    code: 'bn-31-34',
    relevantSpots: [
      31,
      34
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-32-33': {
    id: 158,
    code: 'bn-32-33',
    relevantSpots: [
      32,
      33
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-32-33-35-36': {
    id: 159,
    code: 'bn-32-33-35-36',
    relevantSpots: [
      32,
      33,
      35,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-32-35': {
    id: 160,
    code: 'bn-32-35',
    relevantSpots: [
      32,
      35
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-33-36': {
    id: 161,
    code: 'bn-33-36',
    relevantSpots: [
      33,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-34-35': {
    id: 162,
    code: 'bn-34-35',
    relevantSpots: [
      34,
      35
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-34-35-36': {
    id: 163,
    code: 'bn-34-35-36',
    relevantSpots: [
      34,
      35,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bn-35-36': {
    id: 164,
    code: 'bn-35-36',
    relevantSpots: [
      35,
      36
    ],
    isSharedWager: true,
    availableType: [
      'american',
      'european',
      'french'
    ]
  },
  'bs-voisin': {
    id: 165,
    code: 'bs-voisin',
    relevantSpots: [
      61,
      61,
      138,
      138,
      76,
      98,
      116,
      121,
      160
    ],
    isSharedWager: false,
    availableType: [
      'european',
      'french'
    ]
  },
  'bs-orphelin': {
    id: 166,
    code: 'bs-orphelin',
    relevantSpots: [
      1,
      80,
      106,
      115,
      157
    ],
    isSharedWager: false,
    availableType: [
      'european',
      'french'
    ]
  },
  'bs-tier': {
    id: 167,
    code: 'bs-tier',
    relevantSpots: [
      79,
      90,
      103,
      131,
      143,
      161
    ],
    isSharedWager: false,
    availableType: [
      'european',
      'french'
    ]
  },
  'bs-zero': {
    id: 168,
    code: 'bs-zero',
    relevantSpots: [61, 98, 26, 160],
    isSharedWager: false,
    availableType: ['european', 'french']
  }
}

export const arraySpots = _.toArray(spots)

export default spots
