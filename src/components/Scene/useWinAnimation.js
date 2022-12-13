import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { Emitter } from "pixi-particles";
import { ang2Rad } from "../../utils/math";
import { fire, loop, stop } from "./useFireworks";
export default function useWinAnimation() {
  const addDefaultAnim = (app, winType, timeLine) => {
    const container = new PIXI.Container();
    container.pivot.set(0.5);
    // container.blendMode = PIXI.BLEND_MODES.SCREEN;
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
          duration: 1,
          delay: 1,
        }
      )
    );

    app.stage.addChild(container);

    const shadow = new PIXI.Sprite.from("assets/image/win-shadow.png");

    shadow.width = 260;
    shadow.height = 210;
    shadow.x = 0;
    shadow.y = 0;
    shadow.anchor.set(0.5);
    shadow.blendMode = PIXI.BLEND_MODES.MULTIPLY;
    container.addChild(shadow);
    const wood = new PIXI.Sprite.from("assets/image/win-wood.png");
    wood.width = 220;
    wood.height = 160;
    wood.x = 0;
    wood.y = 0;
    wood.anchor.set(0.5);
    container.addChild(wood);

    const path = "assets/image/light";
    const frames = [];
    for (let i = 1; i < 4; i++) {
      const texture = PIXI.Texture.from(path + i + ".png");
      frames.push(texture);
    }
    const borderLight = new PIXI.AnimatedSprite(frames);
    borderLight.width = 370;
    borderLight.height = 265;
    borderLight.x = 0;
    borderLight.y = 0;
    borderLight.anchor.set(0.5);
    borderLight.loop = true;
    borderLight.animationSpeed = 0.05;
    borderLight.blendMode = PIXI.BLEND_MODES.SCREEN;
    borderLight.play();
    container.addChild(borderLight);

    const winText2 = new PIXI.Text(winType, {
      fontFamily: "CircularStd",
      fill: "#ED2E22",
      fontSize: 44,
      fontWeight: 900,

      dropShadow: true,
      dropShadowAngle: ang2Rad(90),
      dropShadowDistance: 3,
      dropShadowBlur: 5,

      stroke: "#C60301",
      strokeThickness: 6,
      lineJoin: "bevel",
    });
    winText2.anchor.set(0.5);
    winText2.y = -8;
    winText2.x = 1;

    container.addChild(winText2);

    const winText = new PIXI.Text(winType, {
      fontFamily: "CircularStd",
      dropShadow: true,
      fontWeight: 900,
      dropShadowAngle: ang2Rad(250),

      dropShadowColor: "#FAFD66",

      dropShadowDistance: 1,
      fill: "#FFCC01",
      fontSize: 44,
    });
    winText.anchor.set(0.5);
    winText.y = -10;
    container.addChild(winText);

    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    g.drawRect(0, 0, 50, 20);
    g.endFill();
    const blurEffect = 30;
    for (let i = 1; i < blurEffect; i++) {
      g.beginFill(0xffffff, 1 - i / blurEffect);
      g.drawRect(49, 0, 1, 20);
      g.endFill();
    }

    const maskTexture = app.renderer.generateTexture(g);
    const mask = new PIXI.Sprite(maskTexture);
    mask.x = winText.x - winText.width / 2;
    mask.y = winText.y - winText.height / 2;
    mask.width = (winText.width * 6) / 5;
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

    const earn = 720;
    const earnText = new PIXI.Text(``, {
      fontFamily: "CircularStd",
      fontWeight: 500,
      fill: "white",
      fontSize: 42,
      letterSpacing: 3,
      stroke: "#8F5D0B",
      strokeThickness: 3,

      dropShadow: true,
      dropShadowDistance: 3,
      dropShadowAngle: ang2Rad(90),
      dropShadowBlur: 5,
    });
    earnText.anchor.set(0.5);
    earnText.y = 40;

    const textObj = { tex: earn };
    timeLine.add(
      gsap.from(textObj, {
        duration: earn / 500,
        tex: 0,
        onUpdate: () => {
          earnText.text = `$` + Math.floor(textObj.tex);
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
  };
  const addFireworksAnim = async (t2) => {
    loop();
    fire(216, 310, 216, 200);
    gsap.delayedCall(5, () => fire(216, 310, 350, 200));
    gsap.delayedCall(5.5, () => fire(216, 310, 100, 200));
    gsap.delayedCall(6, () => fire(216, 310, 350, 200));
    gsap.delayedCall(8, () => stop());
  };
  const addSign = (app, t2) => {
    const texture = new PIXI.Texture.from("/assets/image/spot.png");
    const startPos = { x: 100, y: 250 };
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
        min: 0.3,
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

    gsap.registerPlugin(MotionPathPlugin);
    emitter.emit = true;
    gsap.to(emitter.spawnPos, {
      motionPath: [
        { x: startPos.x, y: startPos.y },
        { x: startPos.x + 50, y: startPos.y - 10 },
        { x: startPos.x + 60, y: startPos.y + 10 },
        { x: startPos.x + 200, y: startPos.y - 20 },
      ],
      duration: 1,
      delay: 1,
      onComplete: () => {
        emitter.emit = false;
      },
    });

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
  const addFireframeAnim = (app) => {
    const oneFire = (num, count, upon) => {
      const path = `/assets/frames/fire${num}/f`;
      const frames = [];

      for (let i = 1; i <= count; i++) {
        const texture = PIXI.Texture.from(path + "(" + i + ")" + ".png");
        frames.push(texture);
      }
      return frames;
      // const sprite = new PIXI.AnimatedSprite(frames);
      // sprite.scale.set(1 / 5, 1 / 5);
      // sprite.anchor.set(0.5);
      // sprite.x = window.innerWidth / 2;
      // sprite.y = count > 2 ? 130 : 230;

      // sprite.zIndex = upon ? 0 : -1;
      // sprite.loop = num > 2 ? true : false;
      // sprite.animationSpeed = 0.1;

      // sprite.play();
      // app.stage.addChild(sprite);
    };
    const first = [...oneFire(1, 15, true), ...oneFire(2, 20, true)];
    // const timeline = new gsap.timeline({ ease: "none", paused: true });
    // timeline.add(() => oneFire(1, 15, true), "<3");
    // timeline.add(() => oneFire(2, 20, true), "<");
    // timeline.add(() => oneFire(3, 9, false), "<");
    // timeline.add(() => oneFire(4, 9, false), "<");
    // timeline.add(() => oneFire(5, 9, false), "<");
    // timeline.add(() => oneFire(6, 9, false), "<");

    // timeline.play();
    // oneFire(3, 9, false);
    // oneFire(4, 9, false);
    // oneFire(5, 9, false);
    // oneFire(6, 9, false);
    // oneFire(1, 15, true);
  };
  const winAnim = async (app, winType) => {
    const t2 = new gsap.timeline({ ease: "none", paused: true });
    addDefaultAnim(app, winType, t2);
    switch (winType) {
      case "BIG WIN":
        addFireworksAnim();
        addSign(app, t2);
        break;
      case "SENSATIONAL":
        addFireframeAnim(app);
        break;
    }
    t2.play();
  };
  return { winAnim };
}
