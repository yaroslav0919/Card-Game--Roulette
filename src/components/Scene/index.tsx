import { Application } from "pixi.js"
import { useEffect, useRef, useState } from "react"
import HeatMapView from "./heatMap"
import useNormalTable from "./useNormalTable"
import useRaceTrackTable from "./useRaceTrackTable"

export const Scene = () => {
    const ref = useRef(null) as any

    const { drawNormalTable } = useNormalTable()
    const { drawRaceTrackTable } = useRaceTrackTable()

    const [heatMapMode, setHeatMapMode] = useState(true)

    useEffect(() => {
        const app = new Application({
            resizeTo: window, 
            backgroundAlpha: 0, 
            width: window.innerWidth, 
            height: window.innerHeight, 
            antialias: true
        })

        ref.current.appendChild(app.view)

        app.start()

        // drawRaceTrackTable(app)
        drawNormalTable(app, heatMapMode)

        return () => {
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