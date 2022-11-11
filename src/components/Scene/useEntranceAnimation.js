import * as PIXI from "pixi.js";

import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as Particles from "@pixi/particle-emitter";
import { useEffect } from "react";
import useStore from "../../store/index";
import { getRB, ang2Rad } from "../../utils/math";

PixiPlugin.registerPIXI(PIXI);

export default function useEntranceAnimation() {
  const halfX = window.innerWidth / 2;
  const Y = window.innerHeight;
  const multiStore = useStore((state) => state.multiStore);

  const addHatAnimation = (app) => {
    const hatTexture = new PIXI.Texture.from("/assets/image/hat.png");
    const hat = new PIXI.Sprite(hatTexture);
    hat.roundPixels = true;
    hat.anchor.set(0.5, 0.5);
    hat.x = halfX;
    hat.y = Y;
    hat.width = 250;
    hat.height = 200;

    gsap.to(hat, {
      y: Y - 100,
      duration: 2,
      onComplete() {
        gsap.to(hat, {
          x: halfX - 100,
          rotation: ang2Rad(40),
          delay: 4,
          duration: 2,
          onComplete() {
            gsap.to(hat, {
              x: 50,
              width: (hat.width * 3) / 4,
              height: (hat.height * 3) / 4,
              duration: 1,
              delay: 1,
              onComplete() {
                gsap.to(hat, {
                  x: -200,
                  duration: 1,
                  delay: 3,
                });
              },
            });
          },
        });
      },
    });
    const hatContainer = new PIXI.Container();
    hatContainer.addChild(hat);
    app.stage.addChild(hatContainer);
  };

  const addPlayBackEffect = (app) => {
    ///faded background start///
    const glareTexture = new PIXI.Texture.from("/assets/image/glare.png");
    const glare = new PIXI.Sprite(glareTexture);
    glare.blendMode = PIXI.BLEND_MODES.ADD;
    glare.roundPixels = true;
    glare.anchor.set(0.5, 1);
    glare.x = halfX;
    glare.y = Y;
    glare.alpha = 0;
    gsap.to(glare, {
      alpha: 1,
      duration: 3,
      onComplete() {
        gsap.to(glare, {
          duration: 3,
          delay: 3,
          alpha: 0,
        });
      },
    });
    app.stage.addChild(glare);
    ///faded background end///
    ///beam start///
    const beamTexture = new PIXI.Texture.from("/assets/image/beam.png");
    const beam = new PIXI.Sprite(beamTexture);
    beam.blendMode = PIXI.BLEND_MODES.ADD;
    beam.roundPixels = true;
    beam.anchor.set(0.5, 1);
    beam.x = halfX;
    beam.y = Y;
    beam.alpha = 0;
    beam.width = 600;
    beam.height = 400;
    gsap.to(beam, {
      alpha: 1,
      duration: 3,
      onComplete() {
        gsap.to(beam, {
          duration: 3,
          delay: 3,
          alpha: 0,
        });
      },
    });
    app.stage.addChild(beam);
    ///beam end///
  };
  const addDozenSparkleEffect = (app) => {
    const spotGraphic = new PIXI.Graphics();
    spotGraphic.beginFill(0xffff00);
    spotGraphic.drawCircle(5, 5, 5);
    spotGraphic.endFill();
    const spotTexture = app.renderer.generateTexture(spotGraphic);

    const w = 250;
    const h = 300;

    const spotContainer = new PIXI.Container();
    spotContainer.x = halfX - w / 2;
    spotContainer.y = Y - 400;
    spotContainer.width = w;
    spotContainer.height = h;

    spotContainer.blendMode = PIXI.BLEND_MODES.ADD;

    for (let i = 0; i < 100; i++) {
      const spot = new PIXI.Sprite(spotTexture);

      const scale = getRB(0, 4);
      gsap.set(spot, { x: w / 2, y: h, width: scale, height: scale });
      gsap.to(spot, {
        x: getRB(0, w),
        y: getRB(0, h),
        duration: 1,
        alpha: getRB(0.4, 1),
        delay: 1,
        onComplete() {
          gsap.to(spot, {
            duration: 3,
            x: getRB(0, w),
            y: getRB(0, h),
          });
        },
      });

      gsap.to(spot, {
        repeat: -1,
        alpha: getRB(0.5, 1),
      });

      spotContainer.addChild(spot);
    }

    gsap.to(spotContainer, {
      delay: 5,
      alpha: 0,
      duration: 1,
    });

    app.stage.addChild(spotContainer);

    // const tl = gsap.timeline({ repeat: 1, yoyo: true });
    // const part = spotContainer.children;
    // const p = Math.sqrt(w * w + h * h);
    // tl.fromTo(
    //   part,
    //   { scaleX: 0, scaleY: 0, x: halfX, y: Y - 200 },
    //   {
    //     scaleX: 0.5,
    //     scaleY: 0.5,
    //     x: part.x + getRB(-w / 2, w / 2),
    //     y: part.y + getRB(-h / 2, h / 2),
    //     duration: 1,
    //     // onComplete(part, gsap)
    //   }
    // );
  };

  const addSparkleAnimations = (app) => {
    const offset = [
      [0, 0, -0, -300, -100, -250, -100, -250, -0, -300, -82, -423],
      [0, 0, -0, -300, -60, -300, -60, -300, -0, -300, -82, -423],
      [0, 0, -0, -300, -0, -350, -0, -350, -0, -300, -82, -423],
      [0, 0, -0, -300, 60, -300, 60, -300, 0, -300, -82, -423],
      [0, 0, -0, -300, 100, -250, 100, -250, 0, -300, -82, -423],
    ];
    sparkleAnimation(app, offset[0], 40);
    sparkleAnimation(app, offset[1], 60);
    sparkleAnimation(app, offset[2], 80);
    sparkleAnimation(app, offset[3], 60);
    sparkleAnimation(app, offset[4], 40);
  };

  const sparkleAnimation = (app, offset, size) => {
    // const pathLine = new PIXI.Graphics();
    // pathLine.lineStyle(1, 0xffffff, 1).moveTo(halfX, Y);
    // pathLine.bezierCurveTo(
    //   halfX + offset[0],
    //   Y + offset[1],
    //   halfX + offset[2],
    //   Y + offset[3],
    //   halfX + offset[4],
    //   Y + offset[5]
    // );

    // app.stage.addChild(pathLine);
    // pathLine.bezierCurveTo(
    //   halfX + offset[6],
    //   Y + offset[7],
    //   halfX + offset[8],
    //   Y + offset[9],
    //   halfX + offset[10],
    //   Y + offset[11]
    // );
    // app.stage.addChild(pathLine);
    const sparkleTexture = new PIXI.Texture.from("/assets/image/sparkle.png");
    const sparkle = new PIXI.Sprite(sparkleTexture);
    sparkle.blendMode = PIXI.BLEND_MODES.ADD;
    sparkle.width = size;
    sparkle.height = size;
    sparkle.roundPixels = true;
    sparkle.anchor.set(0.5, 0.5);
    sparkle.x = halfX;
    sparkle.y = Y;

    const pathObject1 = [{ x: halfX + offset[0], y: Y + offset[1] }];
    const pathObject2 = [{ x: halfX + offset[6], y: Y + offset[7] }];
    for (let i = 0; i < 6; i += 2) {
      pathObject1.push({ x: halfX + offset[i], y: Y + offset[i + 1] });
      pathObject2.push({ x: halfX + offset[i + 6], y: Y + offset[i + 7] });
    }

    gsap.registerPlugin(MotionPathPlugin);
    gsap.to(sparkle, {
      duration: 2,
      ease: "none",
      motionPath: {
        path: pathObject1,
        type: "cubic",
      },
      onComplete() {
        gsap.to(sparkle, {
          ease: "none",
          motionPath: {
            path: pathObject2,
            type: "cubic",
          },
          width: 20,
          height: 20,
          delay: 2,
          duration: 1,
          onComplete() {
            gsap.to(sparkle, {
              delay: 0.5,
              onComplete() {
                app.stage.removeChild(sparkle);
              },
            });
          },
        });
      },
    });
    app.stage.addChild(sparkle);
  };

  const addMagicHandAnimation = (app) => {
    const handTexture = new PIXI.Texture.from("/assets/image/hand.png");
    const hand = new PIXI.Sprite(handTexture);
    hand.roundPixels = true;
    hand.anchor.set(0.5, 0.5);
    hand.x = halfX;
    hand.y = Y;

    gsap.to(hand, {
      y: Y - 350,
      duration: 2,
      delay: 2,
      rotation: ang2Rad(60),
      onComplete() {
        gsap.to(hand, {
          x: halfX + 10,
          rotation: ang2Rad(120),
          duration: 1,
          onComplete() {
            gsap.to(hand, {
              x: halfX + 80,
              y: Y - 250,
              rotation: ang2Rad(60),
              duration: 2,
              delay: 1,
              onComplete() {
                gsap.to(hand, {
                  rotation: ang2Rad(70),
                  duration: 0.5,
                  onComplete() {
                    gsap.to(hand, {
                      rotation: ang2Rad(60),
                      duration: 0.5,
                      onComplete() {
                        gsap.to(hand, {
                          x: window.innerWidth + 100,
                          y: Y + 100,
                          duration: 1,
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });

    app.stage.addChild(hand);
  };
  const addEntranceAnimation = (app) => {
    app.stage.addChild(multiStore[0]);
    app.stage.addChild(multiStore[1]);
    app.stage.addChild(multiStore[2]);
    addPlayBackEffect(app);
    addSparkleAnimations(app);
    addDozenSparkleEffect(app);
    addMagicHandAnimation(app);

    addHatAnimation(app);
  };

  return { addEntranceAnimation };
}
