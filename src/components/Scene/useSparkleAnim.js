import * as PIXI from 'pixi.js'
import * as Particles from '@pixi/particle-emitter'

import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'

PixiPlugin.registerPIXI(PIXI)

export default function useSparkleAnim() {
    const addSparkleAnimation = (app, points) => {
        const container = new PIXI.Container()
        app.stage.addChild(container)

        const initPos = {
            x: window.innerWidth * 38 / 100,
            y: window.innerHeight - window.innerWidth * 30 / 100,
        }

        const emitter = new Particles.Emitter(
            container,
            {
                "lifetime": {
                    "min": 0.2,
                    "max": 0.8
                },
                "frequency": 0.0008,
                "emitterLifetime": -1,
                "maxParticles": 9999,
                "addAtBack": false,
                "pos": {
                    "x": initPos.x,
                    "y": initPos.y
                },
                "behaviors": [
                    {
                        "type": "alpha",
                        "config": {
                            "alpha": {
                                "list": [
                                    {
                                        "time": 0,
                                        "value": 0.8
                                    },
                                    {
                                        "time": 1,
                                        "value": 0.1
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "type": "moveSpeed",
                        "config": {
                            "speed": {
                                "list": [
                                    {
                                        "time": 0,
                                        "value": 20
                                    },
                                    {
                                        "time": 1,
                                        "value": 10
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "type": "scale",
                        "config": {
                            "scale": {
                                "list": [
                                    {
                                        "time": 0,
                                        "value": 0.2
                                    },
                                    {
                                        "time": 1,
                                        "value": 0.3
                                    }
                                ]
                            },
                            "minMult": 0.5
                        }
                    },
                    {
                        "type": "color",
                        "config": {
                            "color": {
                                "list": [
                                    {
                                        "time": 0,
                                        "value": "ffcf5b"
                                    },
                                    {
                                        "time": 1,
                                        "value": "ffffff"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "type": "rotationStatic",
                        "config": {
                            "min": 0,
                            "max": 360
                        }
                    },
                    {
                        "type": "textureRandom",
                        "config": {
                            "textures": [
                                "/assets/images/particle.png"
                            ]
                        }
                    },
                    {
                        "type": "spawnShape",
                        "config": {
                            "type": "torus",
                            "data": {
                                "x": 0,
                                "y": 0,
                                "radius": 1,
                                "innerRadius": 0,
                                "affectRotation": false
                            }
                        }
                    }
                ]
            }
        )

        var elapsed = Date.now()

        let pointIndex = 0
        const frameCount = 60
        const speed = {
            x: 0,
            y: 0
        }

        points = [ initPos, ...points ]

        let canStart = false
        setTimeout(() => {
            canStart = true
        }, 1000)
        
        app.ticker.add(() => {
            if( canStart && Math.ceil(emitter.spawnPos.x) === Math.ceil(points[pointIndex].x) && Math.ceil(emitter.spawnPos.y) === Math.ceil(points[pointIndex].y) ) {
                pointIndex ++
                if( pointIndex >= points.length ) {
                    speed.x = 0
                    speed.y = 0
                    pointIndex = points.length - 1
                } else {
                    speed.x = ( points[pointIndex].x - emitter.spawnPos.x ) / frameCount
                    speed.y = ( points[pointIndex].y - emitter.spawnPos.y ) / frameCount
                }
            }

            emitter.spawnPos.x += speed.x
            emitter.spawnPos.y += speed.y

            const now = Date.now()
            emitter.update((now - elapsed) * 0.001)
            elapsed = now
        })

        emitter.emit = true
    }

    return { addSparkleAnimation }
}