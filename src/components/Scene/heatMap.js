import React, { useEffect, useRef } from 'react'
import tableData from '../../constants/table'
import h337 from 'heatmap.js'
import useNormalTable from './useNormalTable'

export default function HeatMapView () {
  const ref = useRef(null)

  const { calcCenterOffset } = useNormalTable()

  useEffect(() => {
    const centerOffset = calcCenterOffset()

    const heatMapInstance = h337.create({
      container: ref.current,
      radius: 40,
      maxOpacity: 0.7,
      minOpacity: 0.3,
      blur: 0.9,
      valueField: 'count',
      gradient: {
        0.14: '#751997',
        0.28: '#1115bf',
        0.42: '#1382ff',
        0.56: '#37ed37',
        0.70: '#fff000',
        0.84: '#ff7600',
        1.0: '#ff0000'
      }
    })

    const betCounts = {
      'bc-black': 1,
      'bg-25-36': 1,
      'bn-0': 5,
      'bn-0-1-2': 1,
      'bn-0-2-3': 1
    }

    const heatMapData = []
    Object.keys(betCounts).forEach((key) => {
      const item = tableData.find((item) => item.key === key)

      if (item) {
        const x = item.x + item.w / 2 + centerOffset.x
        const y = item.y + item.h / 2 + centerOffset.y
        const count = betCounts[key]
        heatMapData.push({
          x, y, count
        })
      }
    })

    const max = heatMapData.length && heatMapData.reduce((a, b) => a.count > b.count ? a : b)

    heatMapInstance.setData({
      max: max.count || 1,
      data: heatMapData
    })

    return () => {
      const canvas = heatMapInstance._renderer.canvas
      canvas.remove()
    }
  }, [])

  return (
    <div className='w-full h-full absolute top-0 left-0' ref={ref} />
  )
}
