import * as PIXI from "pixi.js";
import * as Particles from "@pixi/particle-emitter";

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import useSelectAnimation from "./useSelectAnimation";
import tableData from "../../constants/table";
import useNormalTable from "./useNormalTable";
import useMultiplierAnimation from "./useMultiplierAnimation";
PixiPlugin.registerPIXI(PIXI);

export default function useSparkleAnim() {
  const { drawPolishRect } = useSelectAnimation();
  const { calcCenterOffset } = useNormalTable();
  const { multiplierCircle } = useMultiplierAnimation();
  const getNumberPosition = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const centerOffset = calcCenterOffset();

    const x = btn.bordersPos[0].x + btn.bordersPos[0].w / 2 + centerOffset.x;
    const y = btn.bordersPos[0].y + btn.bordersPos[0].h / 2 + centerOffset.y;

    return { x, y };
  };

  const addSparkleAnimation = (app, numberArray) => {
    const container = new PIXI.Container();
    app.stage.addChild(container);
    const initPos = {
      x: window.innerWidth / 2 - 32,
      y: window.innerHeight - 205,
    };
    const points = [];
    // points.push(initPos);
    numberArray.forEach((number) => {
      points.push(getNumberPosition(number));
    });

    const emitter = new Particles.Emitter(container, {
      lifetime: {
        min: 1.2,
        max: 2.8,
      },
      frequency: 0.001,
      emitterLifetime: -1,
      maxParticles: 9999,
      addAtBack: false,
      pos: {
        x: initPos.x,
        y: initPos.y,
      },
      behaviors: [
        {
          type: "alpha",
          config: {
            alpha: {
              list: [
                {
                  time: 0,
                  value: 0.8,
                },
                {
                  time: 1,
                  value: 0.1,
                },
              ],
            },
          },
        },
        {
          type: "moveSpeed",
          config: {
            speed: {
              list: [
                {
                  time: 0,
                  value: 15,
                },
                {
                  time: 1,
                  value: 10,
                },
              ],
            },
          },
        },
        {
          type: "scale",
          config: {
            scale: {
              list: [
                {
                  time: 0,
                  value: 0.1,
                },
                {
                  time: 1,
                  value: 0.05,
                },
              ],
            },
            minMult: 0.5,
          },
        },
        {
          type: "color",
          config: {
            color: {
              list: [
                {
                  time: 0,
                  value: "ffcf5b",
                },
                {
                  time: 1,
                  value: "ffffff",
                },
              ],
            },
          },
        },
        {
          type: "rotationStatic",
          config: {
            min: 0,
            max: 360,
          },
        },
        {
          type: "textureRandom",
          config: {
            textures: ["/assets/images/particle.png"],
          },
        },
        {
          type: "spawnShape",
          config: {
            type: "torus",
            data: {
              x: 0,
              y: 0,
              radius: 1,
              innerRadius: 0,
              affectRotation: false,
            },
          },
        },
      ],
    });
    emitter.emit = true;
    const pathObject1 = [
      { x: emitter.spawnPos.x, y: emitter.spawnPos.y },
      { x: 500, y: 500 },
      { x: 400, y: 400 },
      { x: 400, y: 400 },
    ];
    gsap.to(emitter, {
      duration: 2,
      ease: "none",
      motionPath: {
        path: pathObject1,
        type: "cubic",
      },
    });
    // var elapsed = Date.now();

    // let pointIndex = 0;

    // const frameCount = 40;
    // const speed = {
    //   x: (points[pointIndex].x - emitter.spawnPos.x) / frameCount,
    //   y: (points[pointIndex].y - emitter.spawnPos.y) / frameCount,
    // };

    // let canStart = false;
    // setTimeout(() => {
    //   canStart = true;
    // }, 1000);

    // app.ticker.add(() => {
    //   if (canStart) {
    //     if (Math.ceil(emitter.spawnPos.x) === Math.ceil(points[pointIndex].x)) {
    //       if (pointIndex === 2) {
    //         emitter.emit = false;
    //         drawPolishRect(app, numberArray[pointIndex]);
    //         canStart = false;
    //         multiplierCircle(pointIndex);
    //       } else {
    //         drawPolishRect(app, numberArray[pointIndex]);
    //         multiplierCircle(pointIndex);
    //         pointIndex++;
    //       }

    //       speed.x = (points[pointIndex].x - emitter.spawnPos.x) / frameCount;
    //       speed.y = (points[pointIndex].y - emitter.spawnPos.y) / frameCount;
    //     }
    //     emitter.spawnPos.x += speed.x;
    //     emitter.spawnPos.y += speed.y;
    //   }
    //   const now = Date.now();
    //   emitter.update((now - elapsed) * 0.001);
    //   elapsed = now;
    // });
  };

  return { addSparkleAnimation };
}
