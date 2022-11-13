import * as PIXI from "pixi.js";
// import * as Particles from "pixi-particles";
import * as Particles from "@pixi/particle-emitter";
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
    const multis = [30, 500, 10];
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
    g.drawCircle(1, 1, 1);
    g.endFill();
    const texture = app.renderer.generateTexture(g);

    const emitter = new Particles.Emitter(container, {
      lifetime: {
        min: 1.2,
        max: 2.8,
      },
      frequency: 0.005,
      emitterLifetime: -1,
      maxParticles: 999,
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
                  value: 0.3,
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
                  value: 10,
                },
                {
                  time: 1,
                  value: 5,
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
                  value: 0.3,
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
                  value: "fff23d",
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
              radius: 0.1,
              innerRadius: 0,
              affectRotation: false,
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
          points[pointIndex - 1],
          points[pointIndex]
        ),
        duration: 2,
        delay: 0.3,
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
            numberArray[pointIndex - 1]
          );
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
