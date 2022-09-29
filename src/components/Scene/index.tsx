import { Component, ReactNode } from "react";
import * as PIXI from 'pixi.js'
import { tableData } from "../../config/table";
import { graphicsUtils } from "pixi.js";
import { otherKeys } from "../../config/tile";

type SceneProps = {

}

export default class Scene extends Component<SceneProps> {
    app: any

    constructor( props: SceneProps ) {
        super(props)
    }

    componentDidMount(): void {
        if( this.app )  return

        this.initScene()
    }

    calcCenterOffset() {
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
            x: this.app.view.width / 2,
            y: this.app.view.height / 2
        }

        const offset = {
            x: screenCenter.x - centerPoint.x,
            y: screenCenter.y - centerPoint.y,
        }

        return offset
    }

    drawNormalTable(): void {
        const centerOffset = this.calcCenterOffset()

        const tileData = [] as any

        const btnRed = tableData.find((item: any) => (item.key === `bc-red`))
        const btnBlack = tableData.find((item: any) => (item.key === `bc-black`))

        for( let i = 0; i < 37; i++ ) {
            const btn = tableData.find((item: any) => {
                return item.key === `bn-${ i }`
            })
    
            const redIndex = btnRed?.keys.findIndex((item: any) => item === i)
            const blackIndex = btnBlack?.keys.findIndex((item: any) => item === i)

            tileData.push({
                title: `${ i }`,
                position: {
                    x: btn?.bordersPos[0].x,
                    y: btn?.bordersPos[0].y
                },
                size: {
                    width: btn?.bordersPos[0].w,
                    height: btn?.bordersPos[0].h,
                },
                tileImg: i === 0 ? `tile-${i}` : null,
                titleColor: redIndex !== -1 ? '#D44030' : blackIndex !== -1 ? '#FFFFFF' : '#20B33A'
            })
        }

        otherKeys.forEach((item: any) => {
            const btn = tableData.find((cell: any) => {
                return item.key === cell.key
            })

            tileData.push({
                title: item.title,
                position: {
                    x: btn?.bordersPos[0].x,
                    y: btn?.bordersPos[0].y
                },
                size: {
                    width: btn?.bordersPos[0].w,
                    height: btn?.bordersPos[0].h,
                },
                titleColor: '#FFFFFF',
                titleImg: item.titleImg,
                textDirection: item.textDirection,
                backgroundOpacity: item.title === '2TO1' ? 0.9 : 0.45,
                specialTitle: item.specialTitle
            })
        })

        const graphics = new PIXI.Graphics()
        this.app.stage.addChild(graphics)

        tileData.forEach((item: any) => {
            if( item.tileImg ) {
                const bunny = PIXI.Sprite.from(`/assets/tiles/${ item.tileImg }.png`)
                bunny.x = item.position.x + centerOffset.x
                bunny.y = item.position.y + centerOffset.y
                bunny.width = item.size.width
                bunny.height = item.size.height

                this.app.stage.addChild(bunny)
            } else {
                graphics.beginFill(0x090809, item.backgroundOpacity ? item.backgroundOpacity : 0.9)
                graphics.lineStyle(1, 0x888888, 1)
                graphics.drawRect(item.position.x + centerOffset.x , item.position.y + centerOffset.y, item.size.width, item.size.height)
                graphics.endFill()
            }

            if( item.titleImg ) {
                const img = PIXI.Sprite.from(`/assets/tiles/${ item.titleImg }.png`)
                img.x = item.position.x + item.size.width / 2 + centerOffset.x
                img.y = item.position.y + item.size.height / 2 + centerOffset.y
                img.anchor.set(0.5, 0.5)
                this.app.stage.addChild(img)
            } else {
                const style = new PIXI.TextStyle({
                    fontFamily: 'Circular Std',
                    fontSize: 19,
                    fontWeight: '500',
                    fill: [item.titleColor],
                })

                const smallStyle = new PIXI.TextStyle({
                    fontFamily: 'Circular Std',
                    fontSize: 10,
                    fontWeight: '500',
                    fill: [item.titleColor],
                })

                if( item.specialTitle ) {
                    const label1 = new PIXI.Text( item.title[0], style )
                    label1.anchor.set(0.5, 0.5)
                    
                    const label2 = new PIXI.Text( item.title.slice(1, 3), smallStyle )
                    label2.anchor.set(0.5, 0.5)

                    const label3 = new PIXI.Text( item.title.slice(3), style )
                    label3.anchor.set(0.5, 0.5)                    
                    
                    if( item.textDirection === 'vertical' ) {
                        const offset = 20

                        label1.x = item.position.x + item.size.width / 2  + centerOffset.x
                        label1.y = item.position.y + item.size.height / 2 - offset + centerOffset.y

                        label2.x = item.position.x + item.size.width / 2 + 2 + centerOffset.x
                        label2.y = item.position.y + item.size.height / 2 + 15 - offset + centerOffset.y
                        
                        label3.x = item.position.x + item.size.width / 2 + centerOffset.x
                        label3.y = item.position.y + item.size.height / 2 + 35 - offset + centerOffset.y
                        
                        label1.rotation = Math.PI / 2
                        label2.rotation = Math.PI / 2
                        label3.rotation = Math.PI / 2
                    } else {
                        const offset = 12

                        label1.x = item.position.x + item.size.width / 2 - offset + centerOffset.x
                        label1.y = item.position.y + item.size.height / 2 + centerOffset.y

                        label2.x = item.position.x + item.size.width / 2 + 13 - offset + centerOffset.x
                        label2.y = item.position.y + item.size.height / 2 - 2 + centerOffset.y
                        
                        label3.x = item.position.x + item.size.width / 2 + 26 - offset + centerOffset.x
                        label3.y = item.position.y + item.size.height / 2 + centerOffset.y
                    }

                    this.app.stage.addChild( label1 )
                    this.app.stage.addChild( label2 )
                    this.app.stage.addChild( label3 )
                } else {
                    const label = new PIXI.Text( item.title, style )
                    label.x = item.position.x + item.size.width / 2 + centerOffset.x
                    label.y = item.position.y + item.size.height / 2 + centerOffset.y
                    label.anchor.set(0.5, 0.5)
                    if( item.textDirection === 'vertical' )
                        label.rotation = Math.PI / 2
                    this.app.stage.addChild( label )
                }
            }
        })
    }

    initScene(): void {
        this.app = new PIXI.Application({ resizeTo: window, backgroundAlpha: 0, width: window.innerWidth, height: window.innerHeight })
        document.getElementById('gameScene')?.appendChild( this.app.view )

        this.drawNormalTable()
    }

    componentWillUnmount(): void {
        
    }

    render(): ReactNode {
        return (
            <div id="gameScene" className="w-full h-full">

            </div>
        )
    }
}