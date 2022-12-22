import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as Particles from "@pixi/particle-emitter";
import { useState, useEffect } from "react";
import { ang2Rad, getRB } from "../../utils/math.js";
import tableData from "../../constants/table";
PixiPlugin.registerPIXI(PIXI);

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
    blackCircle.beginFill(0x000000, 0.8);
    blackCircle.drawCircle(0, 0, radius);
    container.addChild(blackCircle);
    blackCircle.width = radius;
    blackCircle.height = radius;
    blackCircle.alpha = 0.7;
    gsap.to(blackCircle, {
      width: radius * 2,
      height: radius * 2,
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
      const circlerTexture = new PIXI.Texture.from("assets/image/circle.png");
      const circle = new PIXI.Sprite(circlerTexture);
      circle.blendMode = PIXI.BLEND_MODES.ADD;
      circle.anchor.set(0.5);
      circle.width = r * 2;
      circle.height = r * 2;
      circle.x = cx;
      circle.y = cy;
      circle.tint = 0xfff6c9;
      circle.rotation = ang2Rad(getRB(0, 360));
      circle.alpha = 0.5;
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
    for (let i = 0; i < 7; i++) {
      oneCircle(getRB(-2, 2), getRB(-2, 2), radius / 2 + i / 2 - 2);
    }

    const text = new PIXI.Text(multiNum + `x`, {
      fontFamily: "CircularStdBlack",
      dropShadow: true,
      fontWeight: 900,
      dropShadowAngle: ang2Rad(90),
      dropShadowColor: "#A77C28",
      dropShadowDistance: 3,
      fill: "white",
      fontSize: 40,
    });
    text.y = -radius / 5;
    text.anchor.set(0.5);
    text.scale.x = 0.25;
    text.scale.y = 0.25;
    gsap.to(text, {
      y: -radius / 2.5,
      duration: 1,
    });
    gsap.to(text.scale, {
      x: 0.5,
      y: 0.5,
      duration: 1,
    });
    container.addChild(text);

    const selText = new PIXI.Text(selNum, {
      fontFamily: "Sancreek",
      dropShadow: true,
      dropShadowAngle: 1.4,
      dropShadowColor: isRed(selNum) ? "#BD392A" : "#6E6E6E",
      dropShadowDistance: 6,
      fill: isRed(selNum) ? "#BD392A" : "#f5f1e2",
      fontSize: 65,
      fontWeight: 400,
      stroke: isRed(selNum) ? "#E1C63F" : "#f4ff4d",
      strokeThickness: 3,
    });
    selText.y = radius / 6;
    selText.anchor.set(0.5);
    selText.scale.x = 0.25;
    selText.scale.y = 0.25;
    gsap.to(selText, {
      y: radius / 3,
      duration: 1,
    });
    gsap.to(selText.scale, {
      x: 0.5,
      y: 0.5,
      duration: 1,
    });
    container.addChild(selText);

    const glareTexture = new PIXI.Texture.from(
      "/assets/image/circle-shine.png"
    );
    const glare = new PIXI.Sprite(glareTexture);
    glare.blendMode = PIXI.BLEND_MODES.ADD;
    glare.roundPixels = true;
    glare.anchor.set(0.5);
    glare.tint = 0xffff00;
    glare.x = 0;
    glare.y = 0;
    glare.width = radius;
    glare.height = radius;

    gsap.to(glare, {
      width: radius * 2 + 10,
      height: radius * 2 + 10,
      duration: 1,
      onComplete() {
        gsap.to(glare, {
          angle: 360,
          duration: 100,
          repeate: -1,
        });
      },
    });
    container.addChild(glare);
  };
  const playAnimatedSprite = (app, pos) => {
    const path = "/assets/frames/m1/f";
    const count = 50;
    const frames = [];

    for (let i = 1; i <= count; i++) {
      const texture = PIXI.Texture.from(path + "(" + i + ")" + ".png");
      frames.push(texture);
    }

    const sprite = new PIXI.AnimatedSprite(frames);
    sprite.width = 200;
    sprite.height = 200;
    sprite.x = pos - 3;
    sprite.y = Y - 45;
    sprite.anchor.set(0.5, 1);
    sprite.loop = false;
    sprite.animationSpeed = 0.7;

    app.stage.addChild(sprite);

    const path2 = "/assets/frames/m2/s";
    const count2 = 75;
    const frames2 = [];

    for (let i = 1; i <= count2; i++) {
      const texture2 = PIXI.Texture.from(path2 + "(" + i + ")" + ".png");
      frames2.push(texture2);
    }

    const sprite2 = new PIXI.AnimatedSprite(frames2);
    sprite2.width = 200;
    sprite2.height = 200;
    sprite2.x = pos;
    sprite2.y = Y - 50;
    sprite2.anchor.set(0.5, 1);
    sprite2.loop = false;
    sprite2.animationSpeed = 0.75;
    sprite2.zIndex = -1;
    sprite2.onComplete = () => sprite2.destroy();
    app.stage.addChild(sprite2);

    sprite.play();

    sprite.onComplete = () => {
      sprite.destroy();
      sprite2.play();
    };
  };
  const multiplierCircle = (
    index,
    app,
    multiNum,
    selNum,
    multiCount,
    maxMultiNum
  ) => {
    if (!index) return;
    const circle = new PIXI.Container();
    circle.id = "multi";
    circle.x = halfX - 175;
    circle.y = Y - 120;
    const radius = 40;

    app.stage.addChild(circle);
    const firstX = xArray[multiCount - 1][index - 1].x1 - 25;
    const secondX = xArray[multiCount - 1][index - 1].x2 - 25;
    const lionPos = xArray[multiCount - 1][maxMultiNum].x2 - 25;
    gsap.to(circle, {
      x: firstX,
      duration: 1,
      onComplete: () => {
        gsap.to(circle, {
          x: secondX,
          duration: 1,
          delay: 0.7,
        });
      },
    });
    multi(circle, radius, multiNum, selNum);
    //catch biggest multi

    if (index === multiCount) {
      setTimeout(() => {
        playAnimatedSprite(app, lionPos);
      }, 1000);
    }
  };
  return { multiplierCircle };
}
