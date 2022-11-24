import * as PIXI from "pixi.js";

export default function useResource() {
  const preLoadSpriteImages = () => {
    const loader = new PIXI.Loader();

    const loadSpriteImages = (path, count) => {
      for (let i = 1; i <= count; i++) {
        loader.add(
          `lion+${i}`,
          path + (i < 10 ? "0000" : i < 100 ? "000" : "00") + i + ".png"
        );
      }
    };
    loadSpriteImages("/assets/images/lion/Lion_", 140);
    loader.add("assets/image/hat.png");
    loader.add("assets/image/sparkle.png");
    loader.add("assets/image/back-sparkles.png");
    loader.add("assets/image/beam.png");
    loader.add("assets/image/glare.png");
    loader.add("assets/image/hand.png");
    loader.add("assets/image/circle.png");
    loader.add("assets/image/circle-shine.png");
    return loader.load(loader);
  };

  return { preLoadSpriteImages };
}
