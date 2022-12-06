import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { ang2Rad } from "../../utils/math";
export default function useWinAnimation() {
  const standardWin = (app) => {
    const container = new PIXI.Container();
    container.x = window.innerWidth / 2;
    container.y = 270;
    container.pivot.set(0.5);
    container.blendMode = PIXI.BLEND_MODES.SCREEN;
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

    const borderLight = new PIXI.Sprite.from("assets/image/light1.png");
    borderLight.width = 370;
    borderLight.height = 265;
    borderLight.x = 0;
    borderLight.y = 0;
    borderLight.anchor.set(0.5);
    borderLight.blendMode = PIXI.BLEND_MODES.SCREEN;

    container.addChild(borderLight);
    const mask = new PIXI.Graphics();
    container.addChild(mask);

    const winText = new PIXI.Text("YOU WIN", {
      fontFamily: "CircularStd",
      dropShadow: true,
      fontWeight: 900,
      dropShadowAngle: ang2Rad(90),
      dropShadowColor: "#FAFD66",
      dropShadowDistance: 3,
      fill: "#FFCC01",
      fontSize: 44,
    });
    winText.anchor.set(0.5);
    winText.y = -30;
    // winText.mask = mask;
    container.addChild(winText);

    mask.beginFill(0xffff00);
    mask.drawRect(
      winText.x - winText.width / 2,
      winText.y - winText.height / 2,
      winText.width * 0.75,
      winText.height
    );

    mask.endFill();
    // gsap.to(mask, {
    //   width: 300,
    //   duration: 2,
    //   ease: "none",
    // });
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
      tex: 0,
      onUpdate: () => {
        earnText.text = `$` + Math.floor(textObj.tex);
      },
    });

    container.addChild(earnText);
  };
  return { standardWin };
}
