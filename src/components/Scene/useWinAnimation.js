import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { ang2Rad } from "../../utils/math";
export default function useWinAnimation() {
  const standardWin = (app) => {
    const container = new PIXI.Container();
    container.pivot.set(0.5);
    // container.blendMode = PIXI.BLEND_MODES.SCREEN;
    gsap.fromTo(
      container,
      {
        x: window.innerWidth / 2,
        y: 310,
      },
      {
        y: 260,
        duration: 1,
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
      dropShadow: true,
      fontWeight: 900,
      dropShadowAngle: ang2Rad(90),
      dropShadowColor: "#ff0000",
      dropShadowDistance: 3,
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
    g.beginFill(0xffffff, 0.9);
    g.drawRect(50, 0, 1, 20);
    g.endFill();
    g.beginFill(0xffffff, 0.8);
    g.drawRect(51, 0, 1, 20);
    g.endFill();
    g.beginFill(0xffffff, 0.7);
    g.drawRect(52, 0, 1, 20);
    g.endFill();
    g.beginFill(0xffffff, 0.6);
    g.drawRect(53, 0, 1, 20);
    g.endFill();
    g.beginFill(0xffffff, 0.5);
    g.drawRect(54, 0, 1, 20);
    g.endFill();
    g.beginFill(0xffffff, 0.4);
    g.drawRect(55, 0, 1, 20);
    g.endFill();
    g.beginFill(0xffffff, 0.3);
    g.drawRect(56, 0, 1, 20);
    g.endFill();
    // g.filters = [new PIXI.filters.BlurFilter(10)];
    app.stage.addChild(g);

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
      ease: "none",
    });
    const earn = 720;
    const earnText = new PIXI.Text(`$${earn}`, {
      fontFamily: "CircularStd",
      fontWeight: 500,
      fill: "white",
      fontSize: 42,
      letterSpacing: 3,
      stroke: "#8F5D0B",
      strokeThickness: 3,
    });
    console.log(earnText);
    earnText.anchor.set(0.5);
    earnText.y = 30;

    const textObj = { tex: earn };
    gsap.from(textObj, {
      duration: 2,
      delay: 1,
      tex: 0,
      onUpdate: () => {
        earnText.text = `$` + Math.floor(textObj.tex);
      },
    });

    container.addChild(earnText);
  };
  return { standardWin };
}
