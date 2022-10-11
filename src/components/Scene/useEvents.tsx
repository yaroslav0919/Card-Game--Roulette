import { tableData } from "../../config/table"
import * as PIXI from 'pixi.js'
import useStore from "../../store"
import { useRef } from "react"
import useSpriteAnimation from "./useSpriteAnimation"

export default function useEvents() {
    const { addGoldenFrame } = useSpriteAnimation()

    const app = useStore((state: any) => state.app)

    const appRef = useRef() as any
    appRef.current = app

    const calcCenterOffset = () => {
        const btn0 = tableData.find((item: any) => item.key === 'bn-0') as any
        const btnEnd = tableData.find((item: any) => item.key === 'bg-3-36') as any

        const startPos = {
            x: btn0?.bordersPos[0].x - 30,
            y: btn0?.bordersPos[0].y + 50,
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
            y: screenCenter.y - centerPoint.y,
        }

        return offset
    }

    const onPointerDownHandler = (e: any) => {
        const centerOffset = calcCenterOffset()

        const x = e.clientX - centerOffset.x
        const y = e.clientY - centerOffset.y

        const target = tableData.find((item: any) => {
            if( x >= item.x && y >= item.y && x <= item.x + item.w && y <= item.y + item.h )
                return true
            return false
        })

        if( target ) {
            const chipSprite = PIXI.Sprite.from(`/assets/chip.png`)
            chipSprite.anchor.set(0.5, 0.5)
            chipSprite.x = target.x + target.w / 2 + centerOffset.x
            chipSprite.y = target.y + target.h / 2 + centerOffset.y
            chipSprite.width = 26
            chipSprite.height = 26
            
            const app = appRef.current
            app.stage.addChild(chipSprite)

            target.bordersPos.forEach((border: any, index: number) => {
                // if( index === 0 )   return

                addGoldenFrame({
                    app,
                    x: border.x + centerOffset.x,
                    y: border.y + centerOffset.y,
                    width: border.w,
                    height: border.h
                })
            })
        }
    }

    return { onPointerDownHandler }
}