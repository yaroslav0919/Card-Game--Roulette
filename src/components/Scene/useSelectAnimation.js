import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { Emitter } from "pixi-particles";
import useNormalTable from "./useNormalTable";
import tableData from "../../constants/table";
import { ang2Rad } from "../../utils/math";
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
  const zeroPath = (x, y, w, h) => {
    const x1 = x;
    const y1 = y + 19;
    const x2 = x + w / 2;
    const y2 = y;
    const x3 = x + w;
    const y3 = y + 19;
    const x4 = x + w;
    const y4 = y + h;
    const x5 = x;
    const y5 = y + h;
    return (
      "M " +
      x5 +
      "," +
      y5 +
      " L " +
      x1 +
      "," +
      y1 +
      " L " +
      x2 +
      "," +
      y2 +
      " L " +
      x3 +
      "," +
      y3 +
      " L " +
      x4 +
      "," +
      y4 +
      "L " +
      x5 +
      "," +
      y5 +
      " Z"
    );
  };
  const calcNumberFullPosition = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const x = btn.bordersPos[0].x + centerOffset.x;
    const y = btn.bordersPos[0].y + centerOffset.y;

    return [x, y, btn.bordersPos[0].w, btn.bordersPos[0].h];
  };

  const calcNumberCenter = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const x = btn.bordersPos[0].x + btn.bordersPos[0].w / 2 + centerOffset.x;
    const y = btn.bordersPos[0].y + btn.bordersPos[0].h / 2 + centerOffset.y;
    return { x: x, y: y };
  };
  const drawBlackRect = (container, rect) => {
    const blackRect = new PIXI.Graphics();
    blackRect.beginFill(0x000000, 0.7);
    blackRect.drawRect(...rect);
    container.addChild(blackRect);
  };
  const drawBorder = (container, number, texture) => {
    const rect = calcNumberFullPosition(number);
    const [xVal, yVal, w, h] = [...rect];
    if (number !== 0) {
      drawBlackRect(container, rect);
    } else {
      const shape = new PIXI.Graphics();
      shape.beginFill(0x000000, 0.8);
      shape.moveTo(xVal, yVal + h);
      shape.lineTo(xVal, yVal + 25);
      shape.arc(xVal + 10, yVal + 25, 10, ang2Rad(180), ang2Rad(270));
      shape.lineTo(xVal + w / 2, yVal);
      shape.lineTo(xVal + w - 10, yVal + 15);
      shape.arc(xVal + w - 10, yVal + 25, 10, ang2Rad(270), ang2Rad(360));
      shape.lineTo(xVal + w, yVal + h);
      shape.lineTo(xVal, yVal + h);
      shape.closePath();
      shape.endFill();
      container.addChild(shape);
    }

    const yellowBorder = new PIXI.Graphics();
    yellowBorder.lineStyle(2, 0xffff00);
    if (number !== 0) {
      yellowBorder.drawRect(...rect);
    } else {
      const topOffset = 15;
      const cornerRadius = 10;
      yellowBorder.moveTo(xVal, yVal + h);
      yellowBorder.lineTo(xVal, yVal + topOffset + cornerRadius);
      yellowBorder.arc(
        xVal + cornerRadius,
        yVal + topOffset + cornerRadius,
        cornerRadius,
        ang2Rad(180),
        ang2Rad(270)
      );
      yellowBorder.lineTo(xVal + w / 2, yVal);
      yellowBorder.lineTo(xVal + w - cornerRadius, yVal + topOffset);
      yellowBorder.arc(
        xVal + w - cornerRadius,
        yVal + topOffset + cornerRadius,
        cornerRadius,
        ang2Rad(270),
        ang2Rad(360)
      );
      yellowBorder.lineTo(xVal + w, yVal + h);
      yellowBorder.lineTo(xVal, yVal + h);
    }

    container.addChild(yellowBorder);

    const emiCont = new PIXI.Container();
    container.addChild(emiCont);

    const emitter = new Emitter(emiCont, texture, {
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
        start: 20,
        end: 5,
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
        x: xVal,
        y: number ? yVal : yVal + h,
      },
      addAtBack: false,
      spawnType: "circle",
      spawnCircle: {
        x: 0,
        y: 0,
        r: 0,
      },
    });
    gsap.to(emitter.spawnPos, {
      motionPath: number !== 0 ? rectPath(...rect) : zeroPath(...rect),
      duration: 2,
      repeat: -1,
      ease: "none",
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
      fontFamily: "CircularStd",
      fontWeight: 900,
      dropShadow: true,
      dropShadowAngle: ang2Rad(90),
      dropShadowColor: "#A77C28",
      dropShadowDistance: 3,
      fill: "white",
      fontSize: 44,
    });
    text.scale.x = 0.5;
    text.scale.y = 0.5;
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
    container.id = "select";
    container.zIndex = 1;
    const g = new PIXI.Graphics();
    g.beginFill(0xf7e34d);
    g.drawCircle(7, 7, 7);
    g.endFill();
    const texture = app.renderer.generateTexture(g);
    drawBorder(container, number, texture);
    numCounter(container, multi, pos);
    app.stage.addChild(container);
  };

  return { drawPolishRect };
}
