import * as PIXI from "pixi.js";
// import * as Particles from "@pixi/particle-emitter";
import { Emitter } from "pixi-particles";
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
  const initPos = {
    x: window.innerWidth / 2 - 32,
    y: window.innerHeight - 205,
  };

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

    let x = btn.bordersPos[0].x + btn.bordersPos[0].w / 2 + centerOffset.x;
    let y = btn.bordersPos[0].y + btn.bordersPos[0].h / 2 + centerOffset.y;
    number === 0 && (x -= 1);
    return { x, y };
  };
  const addRound = (pos, right = true) => {
    let temp1X = right ? pos.x + 60 : pos.x - 60;
    let temp1Y = pos.y;
    let temp2X = right ? pos.x + 40 : pos.x - 40;
    let temp2Y = pos.y + 20;
    return [
      { x: temp1X, y: temp1Y },
      { x: temp2X, y: temp2Y },
    ];
  };
  const generateRandomCurve = (fromNumber, toNumber, index) => {
    const n1 = fromNumber ? fromNumber : 34;
    const n2 = toNumber;
    let p1;
    if (fromNumber === null) {
      //isInitPos
      p1 = initPos;
    } else {
      p1 = getNumberPosition(n1);
    }
    const p2 = getNumberPosition(n2);

    const posArray = [];
    posArray.push(p1);

    let randomX = getRB(p1.x, p2.x);
    let randomY = getRB(p1.y, p2.y);
    posArray.push({ x: randomX, y: randomY });
    //same col?
    if (p1.x === p2.x) {
      posArray.pop();
      let randomX = p1.x;
      index % 2 === 0 ? (randomX += getRB(50, 70)) : (randomX -= getRB(50, 70));
      let randomY = getRB(p1.y, p2.y);
      posArray.push({ x: randomX, y: randomY });
    }
    //same row?
    if (p1.y === p2.y) {
      posArray.pop();
      let randomX = getRB(p1.x, p2.x);
      let randomY = p1.y;
      index % 2 === 0 ? (randomY -= getRB(50, 70)) : (randomY += getRB(50, 70));
      posArray.push({ x: randomX, y: randomY });
    }
    // more 4 row?
    if (Math.abs(n1 - n2) >= 10) {
      let lastPos = posArray[posArray.length - 1];

      const roundPoints = addRound(lastPos);

      posArray.push(roundPoints[0]);
      posArray.push(roundPoints[1]);
    }
    //top left or right
    if (Math.abs(p1.x - p2.x) === 65 && Math.abs(p1.y - p2.y) === 34) {
      posArray.pop();
      //is left?
      if (p2.x > p1.x) {
        let randomY = getRB(p1.y, p2.y);
        let randomX = p1.x + getRB(100, 150);
        let randomPos = { x: randomX, y: randomY };
        posArray.push(randomPos);
        posArray.push(addRound(randomPos)[0], addRound(randomPos)[1]);
      } else {
        let randomY = getRB(p1.y, p2.y);
        let randomX = p1.x - getRB(100, 150);
        let randomPos = { x: randomX, y: randomY };
        posArray.push(randomPos);
        posArray.push(
          addRound(randomPos, false)[0],
          addRound(randomPos, false)[1]
        );
      }
    }
    posArray.push(p2);
    return posArray;
  };

  const addSparkleAnimation = (app, numberArray, multis) => {
    const multiCount = numberArray.length;
    const maxMultiNum = Math.max(...multis);
    const maxMultiIndex = multis.findIndex((item) => item === maxMultiNum);
    const container = new PIXI.Container();
    container.zIndex = 2;
    container.blendMode = PIXI.BLEND_MODES.SCREEN;
    app.stage.addChild(container);

    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    g.drawCircle(7, 7, 7);
    g.endFill();
    const texture = app.renderer.generateTexture(g);

    const emitter = new Emitter(container, texture, {
      alpha: {
        start: 1,
        end: 0.66,
      },
      scale: {
        start: 0.1,
        end: 0.01,
        minimumScaleMultiplier: 3,
      },
      color: {
        start: "#fff6c9",
        end: "#ffb119",
      },
      speed: {
        start: 50,
        end: 10,
        minimumSpeedMultiplier: 0.5,
      },
      acceleration: {
        x: 0,
        y: 0,
      },
      maxSpeed: 0,
      startRotation: {
        min: 0,
        max: 360,
      },
      noRotation: false,
      rotationSpeed: {
        min: 5,
        max: 5,
      },
      lifetime: {
        min: 0.3,
        max: 0.9,
      },
      blendMode: "screen",
      frequency: 0.001,
      emitterLifetime: -1,
      maxParticles: 500,
      pos: {
        x: initPos.x,
        y: initPos.y,
      },
      addAtBack: false,
      spawnType: "circle",
      spawnCircle: {
        x: 0,
        y: 0,
        r: 0,
      },
    });
    gsap.registerPlugin(MotionPathPlugin);

    const go = (pointIndex) => {
      gsap.to(emitter.spawnPos, {
        motionPath: generateRandomCurve(
          pointIndex === 1 ? null : numberArray[pointIndex - 2],
          numberArray[pointIndex - 1],
          pointIndex
        ),
        duration: 0.7,
        ease: "none",
        delay: pointIndex === 1 ? 0.5 : 0.3,
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
            multiCount,
            maxMultiIndex
          );

          if (pointIndex !== multiCount) {
            go(pointIndex + 1);
          } else {
            emitter.emit = false;
            app.stage.removeChild(container);
          }
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
