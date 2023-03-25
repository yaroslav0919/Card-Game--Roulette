import * as PIXI from "pixi.js";
import gsap from "gsap";
export default function useSpriteAnimation() {
  const addGoldenFrame = ({ app, x, y, width, height }) => {
    const graphics = new PIXI.Graphics();
    graphics.id = "goldenFrame";
    graphics.beginFill(0xfffbc7, 0.3);
    graphics.lineStyle(1.5, 0xf1e558);
    graphics.drawRect(x, y, width, height);
    graphics.endFill();
    graphics.alpha = 0;
    app.stage.addChild(graphics);

    gsap.to(graphics, {
      alpha: 1,
      repeat: 1,
      duration: 0.25,
      yoyo: true,
      onComplete: () => {
        graphics.destroy();
        app.stage.removeChild(graphics);
      },
    });
    // app.ticker.add(() => {
    //   alpha += 0.1 * direction;

    //   if (alpha >= 1) {
    //     direction = -direction;
    //   }

    //   if (alpha <= 0) {
    //     app.stage.removeChild(graphics);
    //   }
    // });
  };

  return { addGoldenFrame };
}
