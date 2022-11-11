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
              value: 2,
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
              value: 2,
              time: 0,
            },
            {
              value: 3,
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
          min: 3,
          max: 3,
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
        spawnType: "torus",

        spawnCircle: {
          x: 0,
          y: 0,
          r: 1,
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
        delay: 0.3,
        ease: "slow",
        delay: pointIndex === 1 && 1,
        onComplete: () => {
          drawPolishRect(
            app,
            numberArray[pointIndex - 1],
            multis[pointIndex - 1]
          );
          multiplierCircle(pointIndex, app);
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
