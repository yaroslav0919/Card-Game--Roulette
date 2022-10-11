import { Application } from "pixi.js"
import { useEffect, useRef, useState } from "react"
import HeatMapView from "./heatMap"
import useNormalTable from "./useNormalTable"
import useRaceTrackTable from "./useRaceTrackTable"
import useEvents from "./useEvents"
import useStore from "../../store"

export const Scene = () => {
    const ref = useRef(null) as any

    const { drawNormalTable } = useNormalTable()
    const { drawRaceTrackTable } = useRaceTrackTable()
    const { onPointerDownHandler } = useEvents()

    const [heatMapMode, setHeatMapMode] = useState(false)

    const setApp = useStore((state: any) => state.setApp)

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
            { heatMapMode ? <HeatMapView /> : null }
            <div className="w-full h-full absolute top-0 left-0" ref={ref}></div>
        </>
    )
}

export default Scene