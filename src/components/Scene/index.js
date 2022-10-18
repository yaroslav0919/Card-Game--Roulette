import React, { useEffect, useRef, useState } from 'react'
import { Application } from 'pixi.js'
import HeatMapView from './heatMap'
import useNormalTable from './useNormalTable'
import useRaceTrackTable from './useRaceTrackTable'
import useEvents from './useEvents'
import useStore from '../../store'

export default function Scene () {
  const ref = useRef(null)

  const { drawNormalTable } = useNormalTable()
  const { drawRaceTrackTable } = useRaceTrackTable()
  const { onPointerDownHandler } = useEvents()

  const [heatMapMode, setHeatMapMode] = useState(false)

  const setApp = useStore((state) => state.setApp)

  useEffect(() => {
    const app = new Application({
      resizeTo: window,
      backgroundAlpha: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true
    })

    setApp(app)

    ref.current.appendChild(app.view)

    app.view.addEventListener('pointerdown', onPointerDownHandler)

    app.start()

    // drawRaceTrackTable(app)
    drawNormalTable(app, heatMapMode)

    return () => {
      app.view.removeEventListener('pointerdown', onPointerDownHandler)
      app.destroy(true, true)
    }
  }, [])

  return (
    <>
      {heatMapMode ? <HeatMapView /> : null}
      <div className='canvasScene' ref={ref} />
    </>
  )
}
