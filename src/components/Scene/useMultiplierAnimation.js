import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as Particles from "@pixi/particle-emitter";
// import { Assets } from "@pixi/assets";
// import FontFaceObserver from "fontfaceobserver";
import { useState, useEffect } from "react";
import { ang2Rad, getRB } from "../../utils/math.js";
import tableData from "../../constants/table";
PixiPlugin.registerPIXI(PIXI);
// const FontFaceObserver = require("fontfaceobserver");

export default function useMultiplierAnimation() {
  const halfX = window.innerWidth / 2;
  const Y = window.innerHeight;
  const xArray = [
    [{ x1: halfX, x2: halfX }],
    [
      { x1: halfX, x2: halfX + 80 },
      { x1: halfX - 80, x2: halfX - 80 },
    ],
    [
      { x1: halfX, x2: halfX + 100 },
      { x1: halfX, x2: halfX },
      { x1: halfX - 100, x2: halfX - 100 },
    ],
    [
      { x1: halfX, x2: halfX + 140 },
      { x1: halfX, x2: halfX + 47.5 },
      { x1: halfX - 47.5, x2: halfX - 47.5 },
      { x1: halfX - 140, x2: halfX - 140 },
    ],
    [
      { x1: halfX, x2: halfX + 150 },
      { x1: halfX, x2: halfX + 75 },
      { x1: halfX, x2: halfX },
      { x1: halfX - 75, x2: halfX - 75 },
      { x1: halfX - 150, x2: halfX - 150 },
    ],
  ];
  function circlePath(cx, cy, r) {
    return (
      "M " +
      cx +
      " " +
      cy +
      " m -" +
      r +
      ", 0 a " +
      r +
      "," +
      r +
      " 0 1,0 " +
      r * 2 +
      ",0 a " +
      r +
      "," +
      r +
      " 0 1,0 -" +
      r * 2 +
      ",0"
    );
  }
  function isRed(num) {
    const btnRed = tableData.find((item) => item.key === "bc-red");
    const redIndex = btnRed?.keys.findIndex((item) => item === num);
    return redIndex !== -1;
  }

  const multi = (container, radius, multiNum, selNum) => {
    gsap.registerPlugin(MotionPathPlugin);

    const blackCircle = new PIXI.Graphics();
    blackCircle.beginFill(0x000000, 0.7);
    blackCircle.drawCircle(0, 0, radius);
    container.addChild(blackCircle);
    blackCircle.scaleX = 0.5;
    blackCircle.scaleY = 0.5;
    gsap.to(blackCircle, {
      scaleX: 1,
      scaleY: 1,
      duration: 1,
    });
    const emiCont = new PIXI.Container();
    emiCont.x = radius;
    emiCont.y = radius;
    emiCont.pivot.x = radius;
    emiCont.pivot.y = radius;
    const emitter = new Particles.Emitter(emiCont, {
      lifetime: {
        min: 1.2,
        max: 2.8,
      },
      frequency: 0.005,
      emitterLifetime: -1,
      maxParticles: 100,
      addAtBack: false,
      pos: {
        x: radius,
        y: 0,
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
                  value: 6,
                },
                {
                  time: 1,
                  value: 3,
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
    const spotGraphic = new PIXI.Graphics();
    spotGraphic.beginFill(0xffff00);
    spotGraphic.drawCircle(5, 5, 5);
    spotGraphic.endFill();
    gsap.to(spotGraphic, {
      motionPath: circlePath(0, 0, radius),
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
    container.addChild(emiCont);

    const oneCircle = (cx, cy, r) => {
      const circlerTexture = new PIXI.Texture.from("assets/image/multi.png");
      const circle = new PIXI.Sprite(circlerTexture);
      circle.anchor.set(0.5);
      circle.width = r * 2;
      circle.height = r * 2;
      circle.x = cx;
      circle.y = cy;
      circle.tint = 0xfff6c9;
      circle.angle = getRB(0, 90);
      gsap.to(circle, {
        width: r * 4,
        height: r * 4,
        duration: 1,
        onComplete: () => {
          gsap.to(circle, {
            angle: circle.angle + 360,
            duration: getRB(3, 5),
            ease: "none",
            tint: 0xffb119,
            repeat: -1,
          });
        },
      });
      container.addChild(circle);
    };
    // for (let i = 0; i < 5; i++) {
    //   oneCircle(getRB(-3, 3), getRB(-3, 3), radius / 2 + i - 2);
    // }

    const oneArc = (cx, cy, r, v) => {
      const arc = new PIXI.Graphics();
      arc.lineStyle(0.5, 0xfff6c9, 1);
      arc.arc(cx, cy, r, 0, getRB(5, 8), false);
      arc.width = r;
      arc.height = r;
      // arc.pivot.set(0.5);
      // arc.tint = 0xfff6c9;
      arc.angle = getRB(0, 360);

      gsap.to(arc, {
        width: r * 2,
        height: r * 2,
        duration: 1,
        onComplete: () => {
          gsap.to(arc, {
            angle: arc.angle + 360,
            duration: v,
            ease: "none",
            tint: 0xffb119,
            repeat: -1,
          });
        },
      });
      container.addChild(arc);
    };
    for (let i = 0; i < 5; i++) {
      oneArc(getRB(-4, 4), getRB(-4, 4), radius + i - 2, getRB(1, 3));
    }
    const text = new PIXI.Text(multiNum + `x`, {
      dropShadow: true,
      dropShadowAngle: 1.7,
      dropShadowColor: "#63a215",
      dropShadowDistance: 2,
      fill: "white",
      fontFamily: "CircularStd",
      fontSize: 20,
    });
    text.y = -radius / 6;
    text.anchor.set(0.5);
    text.scale.x = 0.5;
    text.scale.y = 0.5;
    gsap.to(text, {
      y: -radius / 3,
      duration: 1,
    });
    gsap.to(text.scale, {
      x: 1,
      y: 1,
      duration: 1,
    });
    container.addChild(text);
    const selText = new PIXI.Text(selNum, {
      fontFamily: "Sancreek",
      dropShadow: true,
      dropShadowAngle: 1.4,
      dropShadowColor: "#db4343",
      dropShadowDistance: 2,
      fill: isRed(selNum) ? "red" : "white",
      fontSize: 36,
    });
    selText.y = radius / 6;
    selText.anchor.set(0.5);
    selText.scale.x = 0.5;
    selText.scale.y = 0.5;
    gsap.to(selText, {
      y: radius / 3,
      duration: 1,
    });
    gsap.to(selText.scale, {
      x: 1,
      y: 1,
      duration: 1,
    });
    container.addChild(selText);

    const glareTexture = new PIXI.Texture.from("/assets/image/multi-fade2.png");
    const glare = new PIXI.Sprite(glareTexture);
    glare.blendMode = PIXI.BLEND_MODES.ADD;
    glare.tilt = 0xffff00;
    glare.roundPixels = true;
    glare.anchor.set(0.5);
    // const filter = new PIXI.filters.ColorMatrixFilter();
    // filter.colorTone(1, 1, 0xffff00, 0xff0000, true);
    // glare.filters = filter;
    glare.tint = 0xffff00;
    glare.x = 0;
    glare.y = 0;
    glare.width = radius;
    glare.height = radius;
    container.addChild(glare);
    gsap.to(glare, {
      width: radius * 2,
      height: radius * 2,
      duration: 1,
    });
  };
  const playAnimatedSprite = (app, radius) => {
    const path = "/assets/images/lion/Lion_";
    const count = 140;
    const frames = [];

    for (let i = 1; i <= count; i++) {
      const texture = PIXI.Texture.from(
        path + (i < 10 ? "0000" : i < 100 ? "000" : "00") + i + ".png"
      );
      frames.push(texture);
    }

    const sprite = new PIXI.AnimatedSprite(frames);
    sprite.width = 260;
    sprite.height = 250;
    sprite.x = halfX;
    sprite.y = Y - 85;
    sprite.anchor.set(0.5, 1);
    sprite.loop = false;
    sprite.animationSpeed = 0.5;
    sprite.play();
    app.stage.addChild(sprite);
  };
  const multiplierCircle = (index, app, multiNum, selNum, multiCount) => {
    if (!index) return;
    console.log(index, app, multiNum, selNum, multiCount);
    const circle = new PIXI.Container();
    circle.x = halfX - 175;
    circle.y = Y - 170;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 40;

    app.stage.addChild(circle);
    const firstX = xArray[multiCount - 1][index - 1].x1;
    const secondX = xArray[multiCount - 1][index - 1].x2;

    gsap.to(circle, {
      x: firstX,
      duration: 1,
      onComplete: () => {
        gsap.to(circle, {
          x: secondX,
          duration: 2,
        });
      },
    });
    multi(circle, radius, multiNum, selNum);
    setTimeout(playAnimatedSprite, multiCount * 3);
  };
  return { multiplierCircle };
}
