import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { ang2Rad } from "../../utils/math";
import { fire } from "./useFireworks";
export default function useWinAnimation() {
  const standardWin = (app) => {
    fire(216, 310, 216, 200);
    const container = new PIXI.Container();
    container.pivot.set(0.5);
    // container.blendMode = PIXI.BLEND_MODES.SCREEN;

    gsap.fromTo(
      container,
      {
        x: window.innerWidth / 2,
        y: 310,
        alpha: 0,
      },
      {
        y: 260,
        duration: 0.5,
        alpha: 1,
      }
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

    const winText = new PIXI.Text("YOU WIN", {
      fontFamily: "CircularStd",
      // dropShadow: true,
      fontWeight: 900,
      // dropShadowAngle: ang2Rad(90),
      // dropShadowColor: "#ff0000",
      // dropShadowDistance: 3,
      fill: "#FFCC01",
      fontSize: 44,
    });
    winText.anchor.set(0.5);
    winText.y = -30;
    // winText.mask = mask;
    container.addChild(winText);

    // const g = new PIXI.Graphics();
    // g.beginFill(0xffff00);
    // g.drawCircle(50, 0, 100);
    // g.endFill();
    // g.filters = [new PIXI.filters.BlurFilter(50)];
    // app.stage.addChild(g);
    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    g.drawRect(0, 0, 50, 20);
    g.endFill();
    for (let i = 1; i < 10; i++) {
      g.beginFill(0xffffff, 1 - i / 10);
      g.drawRect(49, 0, 1, 20);
      g.endFill();
    }

    // g.filters = [new PIXI.filters.BlurFilter(10)];

    const maskTexture = app.renderer.generateTexture(g);
    const mask = new PIXI.Sprite(maskTexture);
    mask.x = winText.x - winText.width / 2;
    mask.y = winText.y - winText.height / 2;
    mask.width = winText.width + 50;
    mask.height = winText.height;
    mask.anchor.set(0);
    // mask.alpha = 0.6;
    container.addChild(mask);
    winText.mask = mask;
    gsap.from(mask, {
      width: 0,
      duration: 2,
      delay: 1,
      ease: "none",
    });
    const earn = 720;
    const earnText = new PIXI.Text(``, {
      fontFamily: "CircularStd",
      fontWeight: 500,
      fill: "white",
      fontSize: 42,
      letterSpacing: 3,
      stroke: "#8F5D0B",
      strokeThickness: 3,
    });
    earnText.anchor.set(0.5);
    earnText.y = 30;

    const textObj = { tex: earn };
    gsap.from(textObj, {
      duration: earn / 500,
      delay: 3,
      tex: 0,
      onUpdate: () => {
        earnText.text = `$` + Math.floor(textObj.tex);
      },
    });

    container.addChild(earnText);
  };

  const winAnim = (app, winType) => {
    // const t2 = new gsap.timeline({ ease: "none", paused: true });
    standardWin(app);
  };
  return { winAnim };
}
