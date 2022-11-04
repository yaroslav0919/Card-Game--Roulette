import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ang2Rad } from "../../utils/math.js";
PixiPlugin.registerPIXI(PIXI);

export default function useEntranceAnimation() {
  const halfX = window.innerWidth / 2;
  const Y = window.innerHeight;
  const playAnimatedSprite = (app) => {};

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
            });
          },
        });
      },
    });

    app.stage.addChild(hat);
  };

  const addPlayBackEffect = (app) => {
    ///faded background start///
    const glareTexture = new PIXI.Texture.from("/assets/image/glare.png");
    const glare = new PIXI.Sprite(glareTexture);

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
    ///dozens of sparkle start///
    const bgSparklesTexture = new PIXI.Texture.from(
      "/assets/image/back-sparkles.png"
    );
    const bgSparkles = new PIXI.Sprite(bgSparklesTexture);

    bgSparkles.roundPixels = true;
    bgSparkles.anchor.set(0.5, 1);
    bgSparkles.x = halfX;
    bgSparkles.y = Y - 100;
    bgSparkles.width = 100;
    bgSparkles.height = 50;
    bgSparkles.alpha = 0;
    gsap.to(bgSparkles, {
      delay: 2,
      alpha: 1,
      y: Y - 180,
      width: 300,
      height: 200,
      duration: 2,
      onComplete() {
        gsap.to(bgSparkles, {
          alpha: 0,
          duration: 1,
          delay: 2,
        });
      },
    });
    app.stage.addChild(bgSparkles);
    ///dozens of sparkle start///
  };

  const addSparkleAnimations = (app) => {
    const offset = [
      [0, 0, -0, -300, -100, -200, -100, -200, -0, -300, -80, -425],
      [0, 0, -0, -300, -60, -250, -60, -250, -0, -300, -80, -425],
      [0, 0, -0, -300, -0, -300, -0, -300, -0, -300, -80, -425],
      [0, 0, -0, -300, 60, -250, 60, -250, 0, -300, -80, -425],
      [0, 0, -0, -300, 100, -200, 100, -200, 0, -300, -80, -425],
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
    addPlayBackEffect(app);
    addSparkleAnimations(app);
    addMagicHandAnimation(app);
    addHatAnimation(app);
  };

  return { addEntranceAnimation };
}
