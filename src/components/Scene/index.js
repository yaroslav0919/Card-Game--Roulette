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

    console.log(Application, app)

    setApp(app)

    ref.current.appendChild(app.view)

    app.start()
    app.view.addEventListener('pointerdown', onPointerDownHandler)

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
      <div className='w-full h-full absolute top-0 left-0' ref={ref} />
    </>
  )
}
