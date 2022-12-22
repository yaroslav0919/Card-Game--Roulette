import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { Emitter } from "pixi-particles";
import { ang2Rad } from "../../utils/math";
import { fire, loop, stop } from "./useFireworks";
import { getRB } from "../../utils/math";
export default function useWinAnimation() {
  const container = new PIXI.Container();
  const addDefaultAnim = (app, winType, timeLine) => {
    container.pivot.set(0.5);

    timeLine.add(
      gsap.fromTo(
        container,
        {
          x: window.innerWidth / 2,
          y: 310,
          alpha: 0,
        },
        {
          y: 230,

          alpha: 1,
          duration: 0.5,
          delay: 1,
        }
      )
    );

    app.stage.addChild(container);

    const shadow = new PIXI.Sprite.from("assets/image/win-shadow.png");

    shadow.width = 260;
    shadow.height = 200;

    shadow.x = 0;
    shadow.y = 0;
    shadow.anchor.set(0.48);
    shadow.blendMode = PIXI.BLEND_MODES.MULTIPLY;

    container.addChild(shadow);
    const wood = new PIXI.Sprite.from("assets/image/win-wood.png");
    wood.width = 220;
    wood.height = 160;
    wood.x = 0;
    wood.y = 0;
    wood.anchor.set(0.5);

    container.addChild(wood);

    const path = "assets/image/win-light";
    const frames = [];
    for (let i = 1; i < 4; i++) {
      const texture = PIXI.Texture.from(path + i + ".png");
      texture.baseTexture.premultipliedAlpha = false;
      frames.push(texture);
    }
    const borderLight = new PIXI.AnimatedSprite(frames);
    borderLight.width = 220;
    borderLight.height = 160;
    borderLight.x = 0;
    borderLight.y = 0;
    borderLight.anchor.set(0.5);

    borderLight.loop = true;
    borderLight.animationSpeed = 0.05;
    borderLight.tint = 0xfdff5b;
    borderLight.blendMode = PIXI.BLEND_MODES.SCREEN;

    borderLight.play();

    container.addChild(borderLight);
    const winText2 = new PIXI.Text(winType, {
      fontFamily: "CircularStd",
      fill: "#ED2E22",
      fontSize: 88,
      fontWeight: 900,

      dropShadow: true,
      dropShadowAngle: ang2Rad(90),
      dropShadowDistance: 6,
      dropShadowBlur: 5,

      stroke: "#C60301",
      strokeThickness: 8,
      lineJoin: "bevel",
    });
    winText2.anchor.set(0.5);
    winText2.scale.x = 0.5;
    winText2.scale.y = 0.5;
    winText2.y = -13;
    winText2.x = 1;

    container.addChild(winText2);

    const winText = new PIXI.Text(winType, {
      fontFamily: "CircularStd",
      dropShadow: true,
      fontWeight: 900,
      dropShadowAngle: ang2Rad(250),

      dropShadowColor: "#FAFD66",

      dropShadowDistance: 2,
      fill: "#FFCC01",
      fontSize: 88,
    });
    winText.anchor.set(0.5);
    winText.scale.x = 0.5;
    winText.scale.y = 0.5;
    winText.y = -15;
    container.addChild(winText);

    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    g.drawRect(0, 0, 50, 20);
    g.endFill();
    const blurEffect = 30;
    for (let i = 1; i < blurEffect; i++) {
      g.beginFill(0xffffff, 1 - i / blurEffect);
      g.drawRect(49 + i, 0, 1, 20);
      g.endFill();
    }
    // app.stage.addChild(g);
    const maskTexture = app.renderer.generateTexture(g);
    const mask = new PIXI.Sprite(maskTexture);
    mask.x = winText.x - winText.width / 2 - 5;
    mask.y = winText.y - winText.height / 2;
    mask.width = (winText.width * 8) / 5 + 5;
    mask.height = winText.height;
    mask.anchor.set(0);
    container.addChild(mask);
    winText.mask = mask;
    winText2.mask = mask;
    timeLine.add(
      gsap.from(mask, {
        width: 0,
        duration: 1.5,
        delay: 1,
        ease: "none",
      }),
      "<"
    );

    const earn = 824;
    const earnText = new PIXI.Text(``, {
      fontFamily: "CircularStdMedium, Arial",
      fontWeight: 300,
      fill: "white",
      fontSize: 84,
      stroke: "#8F5D0B",
      strokeThickness: 6,

      dropShadow: true,
      dropShadowDistance: 20,
      dropShadowAlpha: 0.4,
      dropShadowAngle: ang2Rad(90),
      dropShadowBlur: 5,
    });
    earnText.anchor.set(0.5);
    earnText.y = 40;
    earnText.scale.x = 0.5;
    earnText.scale.y = 0.5;
    const textObj = { tex: earn };
    timeLine.add(
      gsap.from(textObj, {
        duration: earn / 500,
        tex: 0,
        onUpdate: () => {
          earnText.text = `₺ ` + Math.floor(textObj.tex);
        },
        onComplete: () => {
          gsap.to(earnText, {
            duration: 0.5,
            delay: 0.5,
            width: earnText.width * 1.2,
            height: earnText.height * 1.2,
            repeat: 1,
            yoyo: true,
          });
        },
      }),
      ">-0.5"
    );

    container.addChild(earnText);
    return container;
  };
  const addFireworksAnim = async (t2) => {
    loop();
    const X = window.innerWidth / 2;
    fire(X, 310, X, 200);
    gsap.delayedCall(6, () => fire(X, 310, X + 140, 200));
    gsap.delayedCall(6.5, () => fire(X, 310, X - 130, 200));
    gsap.delayedCall(7, () => fire(X, 310, X + 140, 200));
    gsap.delayedCall(10, () => stop());
  };
  const addSign = (app, t2) => {
    const startPos = { x: 100, y: 250 };
    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    g.drawCircle(7, 7, 7);
    g.endFill();
    const texture = app.renderer.generateTexture(g);
    const emitter = new Emitter(app.stage, texture, {
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
        min: 0.6,
        max: 0.9,
      },
      blendMode: "screen",
      frequency: 0.001,
      emitterLifetime: -1,
      maxParticles: 500,
      pos: {
        x: startPos.x,
        y: startPos.y,
      },
      addAtBack: false,
      spawnType: "circle",
      spawnCircle: {
        x: 0,
        y: 0,
        r: 0,
      },
    });
    emitter.emit = false;
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(emitter.spawnPos, {
      motionPath: [
        { x: startPos.x, y: startPos.y },
        { x: startPos.x + 50, y: startPos.y - 20 },
        { x: startPos.x + 40, y: startPos.y + 20 },
        { x: startPos.x + 200, y: startPos.y - 20 },
      ],
      duration: 1.5,
      delay: 1,
      ease: "none",
      onComplete: () => {
        emitter.emit = false;
        emitter.destroy();
      },
      onStart: () => {
        emitter.emit = true;
      },
    });

    let elapsed = Date.now();
    const update = function () {
      requestAnimationFrame(update);
      const now = Date.now();
      emitter.update((now - elapsed) * 0.001);
      elapsed = now;
    };
    // emitter.emit = true;
    update();
  };
  const addFireframeAnim = (app, top, speed = 0.3, repeate = 14) => {
    const oneFire = (num, count) => {
      const path = `/assets/frames/fire${num}/f`;
      const frames = [];

      for (let i = 1; i <= count; i++) {
        const texture = PIXI.Texture.from(path + "(" + i + ")" + ".png");
        frames.push(texture);
      }
      return frames;
    };
    const firstFire = () => {
      const firstFlames = [...oneFire(1, 15), ...oneFire(2, 20)];
      const sprite = new PIXI.AnimatedSprite(firstFlames);
      sprite.scale.set(1 / 4, 1 / 4);
      sprite.anchor.set(0.5);
      sprite.x = window.innerWidth / 2;
      sprite.y = 220;

      sprite.zIndex = 0;
      sprite.loop = false;
      sprite.animationSpeed = speed;

      sprite.play();
      sprite.onComplete = () => {
        sprite.destroy();
        secondFire();
      };
      top.stage.addChild(sprite);
    };
    const secondFire = (index = 3) => {
      if (index > 6) return;
      const secondFlames = oneFire(index, 5);
      const sprite = new PIXI.AnimatedSprite(secondFlames);
      sprite.scale.set(1 / 5, 1 / 5);
      sprite.anchor.set(0.5);
      sprite.x = window.innerWidth / 2;
      sprite.y = 100;

      sprite.zIndex = -1;
      sprite.loop = true;
      sprite.animationSpeed = speed;

      let loopCount = repeate;
      sprite.gotoAndPlay(getRB(0, 8));
      sprite.onComplete = () => {
        sprite.destroy();
      };
      const random = Math.floor(getRB(0, 3));
      sprite.onLoop = () => {
        if (loopCount == repeate - random) secondFire(index + 1);
        if (loopCount-- === 0) sprite.loop = false;
      };

      app.stage.addChild(sprite);
    };

    gsap.delayedCall(1.5, () => firstFire());
  };

  const winAnim = async (app, top, winType) => {
    const t2 = new gsap.timeline({ ease: "none", paused: true });
    addDefaultAnim(app, winType, t2);
    switch (winType) {
      case "BIG WIN":
        addFireworksAnim();
        addSign(app, t2);
        break;
      case "SENSATIONAL WIN":
        addFireworksAnim();
        addFireframeAnim(app, top);
        break;
    }
    t2.play();
  };
  const destroyWin = () => {
    container.destroy();
  };
  return { winAnim, destroyWin };
}
