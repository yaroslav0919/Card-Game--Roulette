import * as PIXI from "pixi.js";

export default function useResource() {
  const preLoadSpriteImages = () => {
    const loader = new PIXI.Loader();

    const loadSpriteImages = (name, path, count) => {
      for (let i = 1; i <= count; i++) {
        loader.add(`${name},${i}`, path + "(" + i + ")" + ".png");
      }
    };
    loadSpriteImages("lion", "/assets/frames/lion/l", 140);
    loadSpriteImages("fire1", "/assets/frames/fire1/f", 15);
    loadSpriteImages("fire2", "/assets/frames/fire2/f", 20);
    loadSpriteImages("fire3", "/assets/frames/fire3/f", 9);
    loadSpriteImages("fire4", "/assets/frames/fire4/f", 9);
    loadSpriteImages("fire5", "/assets/frames/fire5/f", 9);
    loadSpriteImages("fire6", "/assets/frames/fire6/f", 9);

    loader.add("assets/image/hat.png");
    loader.add("assets/image/sparkle.png");
    loader.add("assets/image/back-sparkles.png");
    loader.add("assets/image/beam.png");
    loader.add("assets/image/glare.png");
    loader.add("assets/image/hand.png");
    loader.add("assets/image/circle.png");
    loader.add("assets/image/circle-shine.png");

    loader.add("assets/tiles/tile-black.svg");
    loader.add("assets/tiles/tile-red.svg");

    loader.add("assets/image/win-light1.png");
    loader.add("assets/image/win-light2.png");
    loader.add("assets/image/win-light3.png");
    loader.add("assets/image/win-wood.png");
    return loader.load(loader);
  };

  return { preLoadSpriteImages };
}
