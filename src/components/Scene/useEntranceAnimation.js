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
    // playAnimatedSprite(app, "/assets/images/hat/magic-1_", 161, 1);
    const hatTexture = new PIXI.Texture.from("/assets/image/hat.png");
    const hat = new PIXI.Sprite(hatTexture);
    hat.roundPixels = true;
    hat.anchor.set(0.5, 0.5);
    hat.x = halfX;
    hat.y = Y;

    gsap.to(hat, {
      y: Y - 100,
      duration: 2,
      onComplete() {
        gsap.to(hat, {
          x: halfX - 100,
          rotation: ang2Rad(40),
          delay: 4,
          duration: 2,
          // onComplete() {
          //   gsap.to(hat, {
          //     rotation: ang2Rad(45),
          //     duration: 2,
          //   });
          // },
        });
      },
    });

    app.stage.addChild(hat);
  };

  // const addPlayBackEffect = (app) => {
  //   playAnimatedSprite(app, "/assets/images/magic/magic_", 149, 1);
  // };

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
    const pathLine = new PIXI.Graphics();
    pathLine.lineStyle(1, 0xffffff, 1).moveTo(halfX, Y);
    pathLine.bezierCurveTo(
      halfX + offset[0],
      Y + offset[1],
      halfX + offset[2],
      Y + offset[3],
      halfX + offset[4],
      Y + offset[5]
    );

    app.stage.addChild(pathLine);
    pathLine.bezierCurveTo(
      halfX + offset[6],
      Y + offset[7],
      halfX + offset[8],
      Y + offset[9],
      halfX + offset[10],
      Y + offset[11]
    );
    app.stage.addChild(pathLine);

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
            app.stage.removeChild(sparkle);
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
              rotation: ang2Rad(30),
              duration: 2,
              delay: 1,
              // onComplete() {
              //   gsap.to(hand, {
              //     rotation: ang2Rad(70),
              //     duration: 1,
              //   });
              // },
            });
          },
        });
      },
    });

    app.stage.addChild(hand);
  };

  const addEntranceAnimation = (app) => {
    // addPlayBackEffect(app);
    addSparkleAnimations(app);
    addMagicHandAnimation(app);
    addHatAnimation(app);
  };

  return { addEntranceAnimation };
}
