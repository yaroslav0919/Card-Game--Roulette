import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'

PixiPlugin.registerPIXI(PIXI)

export default function useEntranceAnimation() {
    const playAnimatedSprite = (app, path, count, alpha = 1, width = 1080, height = 1920) => {
        const frames = []

        for( let i = 1; i <= count; i++ ) {
            const texture = PIXI.Texture.from(path + (i < 10 ? '0000' : i < 100 ? '000' : '00') + i + '.png')
            frames.push(texture)
        }

        const sprite = new PIXI.AnimatedSprite(frames)
        sprite.roundPixels = true
        sprite.width = window.innerWidth
        sprite.height = window.innerWidth * height / width
        sprite.x = window.innerWidth / 2
        sprite.y = window.innerHeight
        sprite.anchor.set(0.5, 1)
        sprite.loop = false
        sprite.animationSpeed = 0.5
        sprite.alpha = alpha
        sprite.play()
        app.stage.addChild(sprite)
    }

    const addHatAnimation = (app) => {
        playAnimatedSprite(app, '/assets/images/hat/magic-1_', 161, 1)
    }

    const addPlayBackEffect = (app) => {
        playAnimatedSprite(app, '/assets/images/magic/magic_', 149, 1)
    }

    const addSparkleEffect = (app) => {
        playAnimatedSprite(app, '/assets/images/sparkles/sparkles_', 74, 0.9)
    }

    const addMagicHandAnimation = (app) => {
        playAnimatedSprite(app, '/assets/images/hand/hand_', 110, 1)
    }

    const addEntranceAnimation = (app) => {
        addPlayBackEffect(app)
        addSparkleEffect(app)
        addMagicHandAnimation(app)
        addHatAnimation(app)
    }

    return { addEntranceAnimation }
}