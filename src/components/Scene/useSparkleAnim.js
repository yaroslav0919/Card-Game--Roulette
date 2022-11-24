import * as PIXI from "pixi.js";
import * as Particles from "@pixi/particle-emitter";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useState } from "react";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { delay } from "framer-motion";
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
  const centerOffset = calcCenterOffset();
  // const [arrive, setArrive] = useState();

  // const calcNumberFullPosition = (number) => {
  //   const btn = tableData.find((item) => {
  //     return item.key === `bn-${number}`;
  //   });
  //   const x = btn.area.x + centerOffset.x;
  //   const y = btn.area.y + centerOffset.y;
  //   return [x, y, btn.area.w, btn.area.h];
  // };
  const oneHeight = 36;
  const getNumberPosition = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const centerOffset = calcCenterOffset();

    const x = btn.bordersPos[0].x + btn.bordersPos[0].w / 2 + centerOffset.x;
    const y = btn.bordersPos[0].y + btn.bordersPos[0].h / 2 + centerOffset.y;

    return { x, y };
  };

  const generateRandomCurve = (n1, n2) => {
    //n1fromNumber //n2:toNumber
    const p1 = getNumberPosition(n1);
    const p2 = getNumberPosition(n2);
    const posArray = [];
    posArray.push(p1);

    if (p1.x === p2.x) {
      //same col
      const randomX =
        p1.x(Math.ceil(p1 / 3)) % 2 === 0
          ? (randomX -= getRB(100, 150))
          : (randomX += getRB(100, 150)); //is odd row?
      let randomY = getRB(p1.y, p2.y);
      posArray.push({ x: randomX, y: randomY });
      posArray.push(p2);
      return posArray;
    }
    if (p1.y === p2.y) {
      //same row
      let randomX = getRB(p1.x, p2.x);
      let randomY =
        p1.y(p1 % 3) % 2 === 0
          ? (randomY -= getRB(100, 150))
          : (randomY += getRB(100, 150)); //is odd col?
      posArray.push({ x: randomX, y: randomY });
      posArray.push(p2);
      return posArray;
    }
    // if(Math.abs(n1-n2)>=10){// more 4 row
    //   pointArray.length()===1?
    // }
    let randomX = getRB(p1.x, p2.x);
    let randomY = getRB(p1.y, p2.y);

    posArray.push({ x: randomX, y: randomY });

    posArray.push(p2);
    return posArray;
  };

  const addSparkleAnimation = (app, numberArray) => {
    const multiCount = numberArray.length;
    const multis = [30, 500, 10]; //get from api

    const initPos = {
      x: window.innerWidth / 2 - 32,
      y: window.innerHeight - 205,
    };
    // const points = [];
    // points.push(initPos);

    const container = new PIXI.Container();
    container.zIndex = 1;
    app.stage.addChild(container);
    const g = new PIXI.Graphics();
    g.beginFill(0xf7e34d);
    g.drawCircle(1, 1, 1);
    g.endFill();
    const texture = app.renderer.generateTexture(g);

    const emitter = new Particles.Emitter(container, {
      lifetime: {
        min: 0.3,
        max: 0.9,
      },
      blendMode: "screen",
      frequency: 0.001,
      emitterLifetime: -1,
      maxParticles: 500,
      maxSpeed: 0,
      // noRotation: false,
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
                  value: 1,
                  time: 0,
                },
                {
                  value: 0.66,
                  time: 1,
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
                  value: 20,
                },
                {
                  time: 1,
                  value: 5,
                },
              ],
            },
            minMult: 0.5,
          },
        },
        // {
        //   type: "alpha",
        //   config: {
        //     speed: {
        //       list: [
        //         {
        //           time: 0,
        //           value: 1,
        //         },
        //         {
        //           time: 1,
        //           value: 0.66,
        //         },
        //       ],
        //     },
        //   },
        // },
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
                  value: 0.01,
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
                  value: "FFF6C9",
                },
                {
                  time: 1,
                  value: "FFB119",
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
        // {
        //   type: "rotationSpeed",
        //   config: {
        //     min: 5,
        //     max: 5,
        //   },
        // },
        {
          type: "textureRandom",
          config: {
            textures: ["/assets/images/particle.png"],
          },
        },
        {
          type: "spawnShape",
          config: {
            type: "circle",
            data: {
              x: 0,
              y: 0,
              radius: 0,
              // innerRadius: 0,
              // affectRotation: false,
            },
          },
        },
      ],
    });

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
          numberArray[pointIndex - 1],
          numberArray[pointIndex]
        ),
        duration: 2,
        delay: 1,
        ease: "slow",
        delay: pointIndex === 1 && 1,
        onComplete: () => {
          drawPolishRect(
            app,
            numberArray[pointIndex - 1],
            multis[pointIndex - 1]
          );

          multiplierCircle(
            pointIndex,
            app,
            multis[pointIndex - 1],
            numberArray[pointIndex - 1],
            multiCount
          );

          if (pointIndex !== multiCount) {
            setTimeout(() => {
              go(pointIndex + 1);
            }, 500);
          } else emitter.emit = false;
        },
        onUpdate: () => {
          emitter.updateSpawnPos(sprite.x, sprite.y);
        },
      });
    };
    go(1);

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
