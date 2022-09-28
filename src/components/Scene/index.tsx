import { Component, ReactNode } from "react";
import * as PIXI from 'pixi.js'
import { tableData } from "../../config/table";

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

    initScene(): void {
        this.app = new PIXI.Application({ resizeTo: window, backgroundAlpha: 0, width: window.innerWidth, height: window.innerHeight })
        document.getElementById('gameScene')?.appendChild( this.app.view )

        const graphics = new PIXI.Graphics()
        this.app.stage.addChild( graphics )

        graphics.beginFill( 0xffff00 )
        graphics.lineStyle( 1, 0xff0000, 1 )

        tableData.forEach((item: any) => {
            graphics.drawRect( item.x, item.y, item.w, item.h )
        })

        graphics.endFill()
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