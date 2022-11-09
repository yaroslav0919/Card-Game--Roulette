import * as PIXI from "pixi.js";
import * as Particles from "pixi-particles";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import useSelectAnimation from "./useSelectAnimation";
import tableData from "../../constants/table";
import useNormalTable from "./useNormalTable";
import useMultiplierAnimation from "./useMultiplierAnimation";

import { getRB } from "../../utils/math";
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

  // const addSparkleAnimation = (app, numberArray) => {
  //   const container = new PIXI.Container();
  //   app.stage.addChild(container);
  //   const initPos = {
  //     x: window.innerWidth / 2 - 32,
  //     y: window.innerHeight - 205,
  //   };
  //   const points = [];
  //   // points.push(initPos);
  //   numberArray.forEach((number) => {
  //     points.push(getNumberPosition(number));
  //   });

  //   const emitter = new Particles.Emitter(container, {
  //     lifetime: {
  //       min: 1.2,
  //       max: 2.8,
  //     },
  //     frequency: 0.001,
  //     emitterLifetime: -1,
  //     maxParticles: 9999,
  //     addAtBack: false,
  //     pos: {
  //       x: initPos.x,
  //       y: initPos.y,
  //     },
  //     behaviors: [
  //       {
  //         type: "alpha",
  //         config: {
  //           alpha: {
  //             list: [
  //               {
  //                 time: 0,
  //                 value: 0.8,
  //               },
  //               {
  //                 time: 1,
  //                 value: 0.1,
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       {
  //         type: "moveSpeed",
  //         config: {
  //           speed: {
  //             list: [
  //               {
  //                 time: 0,
  //                 value: 15,
  //               },
  //               {
  //                 time: 1,
  //                 value: 10,
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       {
  //         type: "movePath",
  //         config: {
  //           path: "sin(x/10)*20",
  //           speed: {
  //             list: [
  //               {
  //                 time: 0,
  //                 value: 150,
  //               },
  //               {
  //                 time: 1,
  //                 value: 100,
  //               },
  //             ],
  //           },
  //           minMult: 1,
  //         },
  //       },
  //       {
  //         type: "scale",
  //         config: {
  //           scale: {
  //             list: [
  //               {
  //                 time: 0,
  //                 value: 0.1,
  //               },
  //               {
  //                 time: 1,
  //                 value: 0.05,
  //               },
  //             ],
  //           },
  //           minMult: 0.5,
  //         },
  //       },
  //       {
  //         type: "color",
  //         config: {
  //           color: {
  //             list: [
  //               {
  //                 time: 0,
  //                 value: "ffcf5b",
  //               },
  //               {
  //                 time: 1,
  //                 value: "ffffff",
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       {
  //         type: "rotationStatic",
  //         config: {
  //           min: 0,
  //           max: 360,
  //         },
  //       },
  //       {
  //         type: "textureRandom",
  //         config: {
  //           textures: ["/assets/images/particle.png"],
  //         },
  //       },
  //       {
  //         type: "spawnShape",
  //         config: {
  //           type: "torus",
  //           data: {
  //             x: 0,
  //             y: 0,
  //             radius: 1,
  //             innerRadius: 0,
  //             affectRotation: false,
  //           },
  //         },
  //       },
  //     ],
  //   });
  //   emitter.emit = true;

  //   const pathObject1 = [
  //     { x: emitter.spawnPos.x, y: emitter.spawnPos.y },
  //     { x: 500, y: 500 },
  //     { x: 400, y: 400 },
  //     { x: 400, y: 400 },
  //   ];

  //   const pathLine = new PIXI.Graphics();
  //   pathLine
  //     .lineStyle(0.5, 0xffffff, 1)
  //     .moveTo(emitter.spawnPos.x, emitter.spawnPos.y);
  //   pathLine.bezierCurveTo(500, 500, 400, 400, 400, 400);
  //   app.stage.addChild(pathLine);

  //   // const sparkleTexture = new PIXI.Texture.from("/assets/image/hat.png");
  //   // const sparkle = new PIXI.Sprite(sparkleTexture);
  //   // sparkle.x = emitter.spawnPos.x;
  //   // sparkle.y = emitter.spawnPos.y;
  //   // sparkle.width = 50;
  //   // sparkle.height = 50;
  //   // sparkle.anchor.set(0.5);

  //   gsap.registerPlugin(MotionPathPlugin);
  //   gsap.to(emitter, {
  //     duration: 2,
  //     ease: "none",
  //     motionPath: {
  //       path: pathObject1,
  //       type: "cubic",
  //     },
  //   });

  //   app.ticker.add(() => {
  //     emitter.update(0.01 * 0.001);
  //   });
  //   // var elapsed = Date.now();

  //   // let pointIndex = 0;

  //   // const frameCount = 40;
  //   // const speed = {
  //   //   x: (points[pointIndex].x - emitter.spawnPos.x) / frameCount,
  //   //   y: (points[pointIndex].y - emitter.spawnPos.y) / frameCount,
  //   // };

  //   // let canStart = false;
  //   // setTimeout(() => {
  //   //   canStart = true;
  //   // }, 1000);

  //   // app.ticker.add(() => {
  //   //   if (canStart) {
  //   //     if (Math.ceil(emitter.spawnPos.x) === Math.ceil(points[pointIndex].x)) {
  //   //       if (pointIndex === 2) {
  //   //         emitter.emit = false;
  //   //         drawPolishRect(app, numberArray[pointIndex]);
  //   //         canStart = false;
  //   //         multiplierCircle(pointIndex);
  //   //       } else {
  //   //         drawPolishRect(app, numberArray[pointIndex]);
  //   //         multiplierCircle(pointIndex);
  //   //         pointIndex++;
  //   //       }

  //   //       speed.x = (points[pointIndex].x - emitter.spawnPos.x) / frameCount;
  //   //       speed.y = (points[pointIndex].y - emitter.spawnPos.y) / frameCount;
  //   //     }
  //   //     emitter.spawnPos.x += speed.x;
  //   //     emitter.spawnPos.y += speed.y;
  //   //   }
  //   //   const now = Date.now();
  //   //   emitter.update((now - elapsed) * 0.001);
  //   //   elapsed = now;
  //   // });
  // };
  const generateRandomCurve = (firstPos, nextPos) => {
    const posArray = [];
    posArray.push(firstPos);

    for (let i = 0; i < 4; i++) {
      let randomX = getRB(firstPos.x, nextPos.x);
      let randomY = getRB(firstPos.y, nextPos.y);

      posArray.push({ x: randomX, y: randomY });
    }
    posArray.push(nextPos);
    return posArray;
  };
  const addSparkleAnimation = (app, numberArray) => {
    const multiCount = numberArray.length;

    const initPos = {
      x: window.innerWidth / 2 - 32,
      y: window.innerHeight - 205,
    };
    const points = [];
    points.push(initPos);
    numberArray.forEach((number) => {
      points.push(getNumberPosition(number));
    });

    const container = new PIXI.Container();
    app.stage.addChild(container);
    const g = new PIXI.Graphics();
    g.beginFill(0xf7e34d);
    g.drawCircle(2, 2, 2);
    g.endFill();
    const texture = app.renderer.generateTexture(g);
    const emitter = new Particles.Emitter(
      container,
      [texture],

      {
        alpha: {
          list: [
            {
              value: 0.8,
              time: 0,
            },
            {
              value: 0.1,
              time: 1,
            },
          ],
          isStepped: false,
        },
        scale: {
          list: [
            {
              value: 1,
              time: 0,
            },
            {
              value: 0.5,
              time: 1,
            },
          ],
          isStepped: false,
        },
        color: {
          list: [
            {
              value: "f7e34d",
              time: 0,
            },
            {
              value: "9df054",
              time: 1,
            },
          ],
          isStepped: false,
        },
        speed: {
          list: [
            {
              value: 6,
              time: 0,
            },
            {
              value: 5,
              time: 1,
            },
          ],
          isStepped: false,
        },
        startRotation: {
          min: 0,
          max: 360,
        },
        rotationSpeed: {
          min: 0,
          max: 0,
        },
        lifetime: {
          min: 1.2,
          max: 2.8,
        },
        frequency: 0.001,
        spawnChance: 1,
        particlesPerWave: 1,
        emitterLifetime: -1,
        maxParticles: 9999,
        pos: {
          x: initPos.x,
          y: initPos.y,
        },
        addAtBack: false,
        spawnType: "circle",
        spawnCircle: {
          x: 0,
          y: 0,
          r: 5,
        },
      }
    );

    const sprite = new PIXI.Sprite(texture);
    sprite.renderable = false;
    gsap.set(sprite, {
      x: initPos.x,
      y: initPos.y,
      anchor: 0.5,
    });

    container.addChild(sprite);

    gsap.registerPlugin(MotionPathPlugin);

    const go = (pointIndex) => {
      gsap.to(sprite, {
        motionPath: generateRandomCurve(
          points[pointIndex - 1],
          points[pointIndex]
        ),
        duration: 2,
        ease: "slow",
        delay: pointIndex === 1 && 1,
        onComplete: () => {
          drawPolishRect(app, numberArray[pointIndex - 1]);
          multiplierCircle(pointIndex);
          if (pointIndex !== 3) go(pointIndex + 1);
          else emitter.emit = false;
        },
        onUpdate: () => {
          emitter.updateSpawnPos(sprite.x, sprite.y);
        },
      });
    };
    go(1);
    // go(2);
    // go(3);

    // MotionPathHelper.create(sprite);

    let elapsed = Date.now();
    const update = function () {
      requestAnimationFrame(update);
      const now = Date.now();
      emitter.update((now - elapsed) * 0.001);
      elapsed = now;
    };
    emitter.emit = true;
    update();
  };
  return { addSparkleAnimation };
}
