import * as PIXI from "pixi.js";
import { TweenLite, gsap } from "gsap";
import * as Particles from "@pixi/particle-emitter";
import useNormalTable from "./useNormalTable";
import tableData from "../../constants/table";
import { t } from "i18next";

export default function useSelectAnimation() {
  const { calcCenterOffset } = useNormalTable();
  const centerOffset = calcCenterOffset();

  const rectPath = (x, y, w, h) => {
    const x1 = x + w;
    const y1 = y + h;
    return (
      "M " +
      x +
      "," +
      y +
      " L " +
      x1 +
      "," +
      y +
      " L " +
      x1 +
      "," +
      y1 +
      " L " +
      x +
      "," +
      y1 +
      " Z"
    );
  };

  const calcNumberFullPosition = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const x = btn.area.x + centerOffset.x;
    const y = btn.area.y + centerOffset.y;

    return [x, y, btn.area.w, btn.area.h];
  };
  const calcNumberCenter = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const x = btn.area.x + btn.area.w / 2 + centerOffset.x;
    const y = btn.area.y + btn.area.h / 2 + centerOffset.y;
    return { x: x, y: y };
  };
  const drawBorder = (app, number) => {
    const rect = calcNumberFullPosition(number);
    const [xVal, yVal, w, h] = [...rect];
    const emiCont = new PIXI.Container();
    app.addChild(emiCont);

    const emitter = new Particles.Emitter(emiCont, {
      lifetime: {
        min: 1.2,
        max: 2.8,
      },
      frequency: 0.005,
      emitterLifetime: -1,
      maxParticles: 1000,
      addAtBack: false,
      pos: {
        x: xVal,
        y: yVal,
      },
      behaviors: [
        {
          type: "alpha",
          config: {
            alpha: {
              list: [
                {
                  time: 0,
                  value: 1,
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
            // minMult: 0.5,
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
        // {
        //   type: "rotationStatic",
        //   config: {
        //     min: 0,
        //     max: 360,
        //   },
        // },
        {
          type: "textureRandom",
          config: {
            textures: ["/assets/images/particle.png"],
          },
        },
        // {
        //   type: "spawnShape",
        //   config: {
        //     type: "torus",
        //     data: {
        //       x: 0,
        //       y: 0,
        //       radius: 0.1,
        //       innerRadius: 0,
        //       affectRotation: false,
        //     },
        //   },
        // },
      ],
    });
    const spotGraphic = new PIXI.Graphics();
    spotGraphic.beginFill(0xffff00);
    spotGraphic.drawCircle(5, 5, 5);
    spotGraphic.endFill();

    gsap.to(spotGraphic, {
      motionPath: rectPath(...rect),
      duration: 2,
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        emitter.spawnPos.x = spotGraphic.x;
        emitter.spawnPos.y = spotGraphic.y;
      },
    });
    emitter.emit = true;
    let elapsed = Date.now();
    const update = function () {
      requestAnimationFrame(update);
      const now = Date.now();
      emitter.update((now - elapsed) * 0.001);
      emitter.rotate(100);
      elapsed = now;
    };
    update();
    // gsap.registerPlugin(MotionPathPlugin);
  };
  const numCounter = (app, multi, pos) => {
    const text = new PIXI.Text(multi + `x`, {
      fontFamily: "Courier New",
      dropShadow: true,
      dropShadowAngle: 1.4,
      dropShadowColor: "#db4343",
      fontWeight: "bolder",
      dropShadowDistance: 2,
      fill: "white",
      fontSize: 26,
    });

    text.x = pos.x;
    text.y = pos.y;
    text.anchor.set(0.5);
    app.addChild(text);

    const textObj = { tex: multi };
    gsap.from(textObj, {
      duration: 1,
      tex: 0,
      onUpdate: () => {
        text.text = Math.floor(textObj.tex) + `x`;
      },
    });
  };
  const drawPolishRect = (app, number, multi) => {
    const pos = calcNumberCenter(number);
    const container = new PIXI.Container();
    drawBorder(container, number);
    numCounter(container, multi, pos);

    app.stage.addChild(container);
  };

  return { drawPolishRect };
}
