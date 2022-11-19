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
  const firstMultiplier = (app, multiNum, selNum) => {
    const circle = new PIXI.Container();
    circle.x = halfX - 175;
    circle.y = Y - 170;
    circle.width = 100;
    circle.height = 100;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 50;

    app.stage.addChild(circle);

    gsap.to(circle, {
      x: halfX,
      duration: 1,
      onComplete: () => {
        gsap.to(circle, {
          x: halfX + 150,
          duration: 2,
        });
      },
    });
    multi(circle, radius, multiNum, selNum);
  };
  const secondMultiplier = (app, multiNum, selNum) => {
    const circle = new PIXI.Container();
    circle.x = halfX - 175;
    circle.y = Y - 170;
    circle.width = 100;
    circle.height = 100;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 50;

    app.stage.addChild(circle);

    gsap.to(circle, {
      x: halfX,
      duration: 1,
      onComplete: () => {},
    });
    multi(circle, radius, multiNum, selNum);
  };
  const thirdMultiplier = (app, multiNum, selNum) => {
    const circle = new PIXI.Container();
    circle.x = halfX - 175;
    circle.y = Y - 170;
    circle.width = 100;
    circle.height = 100;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 50;

    app.stage.addChild(circle);

    gsap.to(circle, {
      x: halfX - 150,
      duration: 1,
      onComplete: () => {
        // delay(playAnimatedSprite(app, radius), 0.5);
        playAnimatedSprite(app, radius);
      },
    });
    multi(circle, radius, multiNum, selNum);
  };
  const multi = (container, radius, multiNum, selNum) => {
    gsap.registerPlugin(MotionPathPlugin);
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
    for (let i = 0; i < 5; i++) {
      // oneCircle(getRB(-5, 5), getRB(-5, 5), radius / 2 - getRB(-3, 3));
      oneCircle(getRB(-5, 5), getRB(-5, 5), radius / 2 + i - 2);
    }

    const text = new PIXI.Text(multiNum + `x`, {
      dropShadow: true,
      dropShadowAngle: 1.7,
      dropShadowColor: "#63a215",
      dropShadowDistance: 2,
      fill: "white",
      fontFamily: "CircularStd",
      fontSize: 22,
      fontWeight: 100,
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
      fontSize: 44,
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

    // const glareTexture = new PIXI.Texture.from("/assets/image/glare.png");
    // const glare = new PIXI.Sprite(glareTexture);
    // glare.blendMode = PIXI.BLEND_MODES.SCREEN;
    // glare.roundPixels = true;
    // glare.anchor.set(0);
    // glare.x = -50;
    // glare.y = 0;
    // glare.width = 20;
    // glare.height = 10;
    // container.addChild(glare);
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

  const multiplierCircle = (index, app, multiNum, selNum) => {
    if (!index) return;
    index === 1 && firstMultiplier(app, multiNum, selNum);
    index === 2 && secondMultiplier(app, multiNum, selNum);
    index === 3 && thirdMultiplier(app, multiNum, selNum);
  };
  return { multiplierCircle };
}
