import * as PIXI from 'pixi.js'

export default function useSpriteAnimation() {
    const addGoldenFrame = ({app, x, y, width, height}: any) => {
        let direction = 1
        let alpha = 0

        const graphics = new PIXI.Graphics()
        app.stage.addChild(graphics)

        app.ticker.add(() => {
            alpha += 0.1 * direction

            if( alpha >= 1 )
                direction = -direction

            graphics.clear()
            graphics.beginFill(0xFFFBC7, alpha * 0.3)
            graphics.lineStyle(1.5, 0xF1E558, alpha)
            graphics.drawRect( x, y, width, height )
            graphics.endFill()

            if( alpha <= 0 )
                app.stage.removeChild(graphics)
        })
    }

    return { addGoldenFrame }
}