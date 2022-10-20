import React, { useEffect, useRef, useState } from 'react'
import { Application } from 'pixi.js'
import HeatMapView from './heatMap'
import useNormalTable from './useNormalTable'
import useRaceTrackTable from './useRaceTrackTable'
import useEvents from './useEvents'
import useStore from '../../store'
import useEntranceAnimation from './useEntranceAnimation'
import useResource from './useResource'
import useSparkleAnim from './useSparkleAnim'

import tableData from '../../constants/table'

export default function Scene () {
	const ref = useRef(null)

	const { drawNormalTable } = useNormalTable()
	const { drawRaceTrackTable } = useRaceTrackTable()
	const { onPointerDownHandler } = useEvents()
	const { addEntranceAnimation } = useEntranceAnimation()
	const { preLoadSpriteImages } = useResource()

	const { addSparkleAnimation } = useSparkleAnim()

	const [heatMapMode, setHeatMapMode] = useState(false)

	const setApp = useStore((state) => state.setApp)

  const playSparkleAnimation = (app) => {
		const calcCenterOffset = () => {
			const btn0 = tableData.find((item) => item.key === 'bn-0')
			const btnEnd = tableData.find((item) => item.key === 'bg-3-36')
		
			const startPos = {
				x: btn0?.bordersPos[0].x - 30,
				y: btn0?.bordersPos[0].y + 50
			}
		
			const endPos = {
				x: (btnEnd?.bordersPos[0].x + btnEnd?.bordersPos[0].w),
				y: (btnEnd?.bordersPos[0].y + btnEnd?.bordersPos[0].h)
			}
		
			const centerPoint = {
				x: startPos.x + (endPos.x - startPos.x) / 2,
				y: startPos.y + (endPos.y - startPos.y) / 2
			}
		
			const screenCenter = {
				x: window.innerWidth / 2,
				y: window.innerHeight / 2
			}
		
			const offset = {
				x: screenCenter.x - centerPoint.x,
				y: screenCenter.y - centerPoint.y
			}
		
			return offset
		}

		const getNumberPosition = (number) => {
			const btn = tableData.find((item) => {
				return item.key === `bn-${number}`
			})

			const centerOffset = calcCenterOffset()
			
			const x = btn.bordersPos[0].x + btn.bordersPos[0].w / 2 + centerOffset.x
			const y = btn.bordersPos[0].y + btn.bordersPos[0].h / 2 + centerOffset.y

			return { x, y }
		}

		const points = []
		points.push(getNumberPosition(24))
		points.push(getNumberPosition(16))
		points.push(getNumberPosition(5))

    	addSparkleAnimation(app, points)
  }

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

		const loadAndPlayAnimation = () => {
			const loader = preLoadSpriteImages()
			loader.onComplete.add(() => {
				drawNormalTable(app, heatMapMode)
				addEntranceAnimation(app)

				setTimeout(() => {
					playSparkleAnimation(app)
				}, 3000)
			})
		}

		loadAndPlayAnimation()

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
