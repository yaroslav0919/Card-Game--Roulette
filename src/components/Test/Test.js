import React, { useState, useReducer, useEffect } from 'react'
import './Test.scss'
import Hammer from 'react-hammerjs'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TableSvg from '../TableSvg/TableSvg'

import uuid from 'react-uuid'

const Test = ({}) => {
  const chips = [{
    image: 'chip-3.png',
    value: 3
  }, {
    image: 'chip-5.png',
    value: 5
  }, {
    image: 'chip-20.png',
    value: 20
  }, {
    image: 'chip-30.png',
    value: 30
  }, {
    image: 'chip-50.png',
    value: 50
  }, {
    image: 'chip-100.png',
    value: 100
  }]
  /*
    const p = [
      {
        x: 89,
        y: 2,
        w: 192,
        h: 29,
        keys: [0],
        chips: []
      },
      {
        x: 93,
        y: 31,
        w: 56,
        h: 8,
        keys: [0, 1],
        chips: []
      },
      {
        x: 157,
        y: 31,
        w: 56,
        h: 8,
        keys: [0, 2],
        chips: []
      },
      {
        x: 149,
        y: 31,
        w: 8,
        h: 8,
        keys: [0, 1, 2],
        chips: []
      },
      {
        x: 213,
        y: 31,
        w: 8,
        h: 8,
        keys: [0, 2, 3],
        chips: []
      },
      {
        x: 221,
        y: 31,
        w: 60,
        h: 8,
        keys: [0, 3],
        chips: []
      },
      {
        x: 93,
        y: 39,
        w: 56,
        h: 26,
        keys: [1],
        chips: []
      },
      {
        x: 149,
        y: 39,
        w: 8,
        h: 26,
        keys: [1, 2],
        chips: []
      },
      {
        x: 157,
        y: 39,
        w: 56,
        h: 26,
        keys: [2],
        chips: []
      },
      {
        x: 213,
        y: 39,
        w: 8,
        h: 26,
        keys: [2, 3],
        chips: []
      },
      {
        x: 221,
        y: 39,
        w: 60,
        h: 26,
        keys: [3],
        chips: []
      },
      {
        x: 221,
        y: 65,
        w: 60,
        h: 8,
        keys: [3, 6],
        chips: []
      },
      {
        x: 213,
        y: 65,
        w: 8,
        h: 8,
        keys: [2, 3, 5, 6],
        chips: []
      },
      {
        x: 157,
        y: 65,
        w: 56,
        h: 8,
        keys: [2, 5],
        chips: []
      },
      {
        x: 149,
        y: 65,
        w: 8,
        h: 8,
        keys: [1, 2, 4, 5],
        chips: []
      },
      {
        x: 93,
        y: 65,
        w: 56,
        h: 8,
        keys: [1, 4],
        chips: []
      },
      {
        x: 93,
        y: 73,
        w: 56,
        h: 26,
        keys: [4],
        chips: []
      }
    ];
  */
  const txt = [
    {
      x: 93,
      y: 39,
      w: 56,
      h: 26,
      keys: [
        1
      ],
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
      chips: []
    },
    {
      x: 149,
      y: 405,
      w: 8,
      h: 8,
      keys: [
        31, 32, 34, 45
      ],
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
      chips: []
    },
    {
      x: 213,
      y: 405,
      w: 8,
      h: 8,
      keys: [
        32, 33, 35, 26
      ],
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
      chips: []
    }
  ]
  /*
    let x = [{
      x: 213,
      y: 39,
      w: 8,
      h: 26,
      keys: [1],
      chips: []
    }];
  */
  useEffect(() => {

    /*
    for (let i = 0; i < 11; i++) {
      let item = x[0];
      item.y = item.y + (34);
      x.push({...item});
    }

    x[0].y = 39;
    console.log(JSON.stringify(x), '++++');

    //setPoints(x);
    forceUpdate();
    */
  }, [])

  const [points, setPoints] = useState(txt)
  const [activeChip, setActiveChip] = useState(null)
  const [ignore, forceUpdate] = useReducer(x => x + 1, 0)

  const test = (keys) => {
    keys.map((index) => {
      const elem = document.getElementById('p-' + index)
      elem.setAttribute('fill', elem.getAttribute('data-hover-fill'))
    })
  }

  const test2 = (keys) => {
    keys.map((index) => {
      const elem = document.getElementById('p-' + index)
      elem.setAttribute('fill', elem.getAttribute('data-default-fill'))
    })
  }

  const addUsage = (item) => {
    if (activeChip !== null) {
      item.chips.push({ chip: activeChip, uniqueId: uuid() })
      forceUpdate()
    }
  }

  const getListStyle = (isDraggingOver, item) => ({
    background: isDraggingOver ? 'lightblue' : '',
    left: item.x,
    top: item.y,
    width: item.w,
    height: item.h
  })

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle,
    transition: isDragging ? 'all 0.1s' : ''
  })

  const DragElem = ({ parentIndex, index, provided, chip }) => {
    return (
      <Draggable key={index} draggableId={chip.uniqueId} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps} className='add-chip' style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            ><img
              src={`./assets/images/chip-${chip.chip}.png`}
            />
            </div>
          )
        }}
      </Draggable>
    )
  }

  const DroppableElem = ({ parentIndex, item, id }) => {
    return (
      <Droppable
        type='PERSON' droppableId={id}
      >
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef} {...provided.droppableProps} className='item' id={id}
              style={getListStyle(snapshot.isDraggingOver, item)} onClick={() => {
                addUsage(item)
              }}
            >
              {item.chips.map((chip, index) => {
                return <DragElem parentIndex={parentIndex} index={index} provided={provided} chip={chip} />
              })}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    )
  }

  const onDragEnd = (result, a) => {
    const where = result.source.droppableId.split('-').map((i) => {
      return Number(i)
    })
    const to = result.destination.droppableId.split('-').map((i) => {
      return Number(i)
    })
    const who = result.draggableId

    if (!arrayEquals(where, to)) {
      const pointsTemp = points

      const whereData = pointsTemp.filter((item) => {
        if (arrayEquals(where, item.keys)) {
          return item
        }
      })[0]

      const whoData = whereData.chips.filter((chip) => {
        if (chip.uniqueId === who) {
          return chip
        }
      })[0]

      pointsTemp.map((item) => {
        if (arrayEquals(to, item.keys)) {
          item.chips.push(whoData)
          return item
        } else {
          return item
        }
      })
      pointsTemp.map((item) => {
        if (arrayEquals(where, item.keys)) {
          item.chips = item.chips.filter((chip) => {
            if (chip.uniqueId !== who) {
              return chip
            }
          })
          return item
        } else {
          return item
        }
      })

      setPoints(pointsTemp)
    }
  }

  const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
  }

  return (
    <div className='table'>
      <TableSvg />
      <DragDropContext onDragEnd={onDragEnd}>
        {points.map((item, parentIndex) => {
          const id = item.keys.join('-')
          return <DroppableElem parentIndex={parentIndex} id={id} item={item} />
        })}
      </DragDropContext>
      <div
        className='chips'
      >
        {chips && chips.map((chip, index) => {
          return (
            <Hammer
              key={index} onTap={() => {
                setActiveChip(chip.value)
              }}
            >
              <div className='chip'>
                <img alt='' src={`./assets/images/chip-${chip.value}.png`} />
              </div>
            </Hammer>
          )
        })}
      </div>
    </div>
  )
}

Test.propTypes = {}

export default Test
