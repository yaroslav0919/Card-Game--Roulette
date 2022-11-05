import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ang2Rad } from "../../utils/math.js";
PixiPlugin.registerPIXI(PIXI);

export default function useMultiplierAnimation() {
  const halfX = window.innerWidth / 2;
  const Y = window.innerHeight;
  const playAnimatedSprite = (app) => {};

  const firstMultiplier = (app) => {
    const multiplierTxture = new PIXI.Texture.from("/assets/image/30x.png");
    const multiplier = new PIXI.Sprite(multiplierTxture);

    multiplier.roundPixels = true;
    multiplier.anchor.set(0.5, 0.5);
    multiplier.x = -100;
    multiplier.y = Y - 150;
    multiplier.width = 50;
    multiplier.height = 50;
    multiplier.zIndex = 5;
    gsap.to(multiplier, {
      x: halfX,
      width: 150,
      height: 150,
      duration: 0.5,
      onComplete() {
        gsap.to(multiplier, {
          x: halfX + 150,
          duration: 0.5,
          onComplete() {
            secondMultiplier(app);
          },
        });
      },
    });

    app.stage.addChild(multiplier);
  };
  const secondMultiplier = (app) => {
    const multiplierTxture = new PIXI.Texture.from("/assets/image/500x.png");
    const multiplier = new PIXI.Sprite(multiplierTxture);

    multiplier.roundPixels = true;
    multiplier.anchor.set(0.5, 0.5);
    multiplier.x = -100;
    multiplier.y = Y - 150;
    multiplier.width = 50;
    multiplier.height = 50;
    gsap.to(multiplier, {
      x: halfX,
      width: 150,
      height: 150,
      duration: 1,
      onComplete() {
        thirdMultiplier(app);
      },
    });

    app.stage.addChild(multiplier);
  };
  const thirdMultiplier = (app) => {
    const multiplierTxture = new PIXI.Texture.from("/assets/image/10x.png");
    const multiplier = new PIXI.Sprite(multiplierTxture);

    multiplier.roundPixels = true;
    multiplier.anchor.set(0.5, 0.5);
    multiplier.x = -100;
    multiplier.y = Y - 150;
    multiplier.width = 50;
    multiplier.height = 50;
    gsap.to(multiplier, {
      x: halfX - 150,
      width: 150,
      height: 150,
      duration: 1,
    });
    app.stage.addChild(multiplier);
  };
  const multiplierCircle = (app) => {
    firstMultiplier(app);
  };
  return { multiplierCircle };
}
