import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ang2Rad, getRB } from "../../utils/math.js";
import useStore from "../../store/index";
import { AppLoaderPlugin } from "pixi.js";
import * as Particles from "@pixi/particle-emitter";
import { delay } from "framer-motion";

PixiPlugin.registerPIXI(PIXI);

export default function useMultiplierAnimation() {
  const halfX = window.innerWidth / 2;
  const Y = window.innerHeight;
  const multiStore = useStore((state) => state.multiStore);
  const setMultiStore = useStore((state) => state.setMultiStore);
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

  const firstMultiplier = (app, multiNum, selNum) => {
    const circle = new PIXI.Container();
    circle.x = halfX - 150;
    circle.y = Y - 185;
    circle.width = 100;
    circle.height = 100;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 50;

    app.stage.addChild(circle);

    gsap.to(circle, {
      x: halfX,
      duration: 2,
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
    circle.x = halfX - 150;
    circle.y = Y - 185;
    circle.width = 100;
    circle.height = 100;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 50;

    app.stage.addChild(circle);

    gsap.to(circle, {
      x: halfX,
      duration: 2,
      onComplete: () => {},
    });
    multi(circle, radius, multiNum, selNum);
  };
  const thirdMultiplier = (app, multiNum, selNum) => {
    const circle = new PIXI.Container();
    circle.x = 0;
    circle.y = Y - 185;
    circle.width = 100;
    circle.height = 100;
    circle.blendMode = PIXI.BLEND_MODES.ADD;
    const radius = 50;

    app.stage.addChild(circle);

    gsap.to(circle, {
      x: halfX - 150,
      duration: 2,
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
      motionPath: circlePath(0, 0, 45),
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

    const arc1 = new PIXI.Graphics();
    arc1.lineStyle(2, 0x0000ff, 1);
    arc1.arc(radius, radius, radius, 0, ang2Rad(100));
    arc1.pivot.x = radius;
    arc1.pivot.y = radius;
    gsap.to(arc1, {
      rotation: ang2Rad(-360),
      duration: Math.random(),
      ease: "none",
      repeat: -1,
    });
    container.addChild(arc1);

    const arc2 = new PIXI.Graphics();
    arc2.lineStyle(2, 0xff0000, 1);
    arc2.arc(radius - 10, radius - 10, radius, ang2Rad(124), ang2Rad(244));
    arc2.pivot.x = radius - 10;
    arc2.pivot.y = radius - 10;
    gsap.to(arc2, {
      rotation: ang2Rad(-360),
      duration: getRB(0.5, 1),
      ease: "none",
      repeat: -1,
    });
    container.addChild(arc2);

    const arc3 = new PIXI.Graphics();
    arc3.lineStyle(2, 0xffff00, 1);
    arc3.arc(radius + 10, radius + 10, radius, ang2Rad(240), ang2Rad(300));
    arc3.pivot.x = radius + 10;
    arc3.pivot.y = radius + 10;
    gsap.to(arc3, {
      rotation: ang2Rad(-360),
      duration: getRB(0.5, 1),
      ease: "none",
      repeat: -1,
    });
    container.addChild(arc3);

    const text = new PIXI.Text(multiNum + `x`, {
      fontFamily: "Courier New",
      dropShadow: true,
      strokeThickness: 3,
      dropShadowAngle: 1.4,
      dropShadowColor: "#db4343",
      dropShadowDistance: 2,
      fill: "white",
      fontSize: 22,
    });
    text.y = -(radius * 1) / 3;
    text.anchor.set(0.5);
    container.addChild(text);

    const selText = new PIXI.Text(selNum, {
      fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      dropShadow: true,
      dropShadowAngle: 1.4,
      dropShadowColor: "#db4343",
      dropShadowDistance: 2,
      fill: "white",
      fontSize: 44,
    });
    selText.y = (radius * 1) / 3;
    selText.anchor.set(0.5);
    container.addChild(selText);
    const glareTexture = new PIXI.Texture.from("/assets/image/glare.png");
    const glare = new PIXI.Sprite(glareTexture);
    glare.blendMode = PIXI.BLEND_MODES.SCREEN;
    glare.roundPixels = true;
    glare.anchor.set(0);
    glare.x = -50;
    glare.y = 0;
    glare.width = 20;
    glare.height = 10;
    container.addChild(glare);
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
    sprite.width = 250;
    sprite.height = 250;
    sprite.x = halfX;
    sprite.y = Y - 100;
    sprite.anchor.set(0.5, 1);
    sprite.loop = false;
    sprite.animationSpeed = 0.5;
    sprite.play();
    app.stage.addChild(sprite);
  };

  const hatRender = (app) => {};
  const multiplierCircle = (index, app, multiNum, selNum) => {
    if (!index) return;
    hatRender(app);
    index === 1 && firstMultiplier(app, multiNum, selNum);
    index === 2 && secondMultiplier(app, multiNum, selNum);
    index === 3 && thirdMultiplier(app, multiNum, selNum);
  };
  return { multiplierCircle };
}
