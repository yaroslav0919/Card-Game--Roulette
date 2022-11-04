import * as PIXI from "pixi.js";

export default function useResource() {
  const preLoadSpriteImages = () => {
    // const loader = new PIXI.Loader()

    // const assetsArray = []

    // const loadSpriteImages = (path, count) => {
    //     for( let i = 1; i <= count; i++ ) {
    //         loader.add(path + i, path + (i < 10 ? '0000' : i < 100 ? '000' : '00') + i + '.png')
    //         // assetsArray.push(path + i)
    //     }
    // }

    // loadSpriteImages('/assets/images/hat/magic-1_', 161)

    // loadSpriteImages('/assets/images/magic/magic_', 149)

    // loadSpriteImages('/assets/images/sparkles/sparkles_', 74)

    // loadSpriteImages('/assets/images/hand/hand_', 110)

    // return loader.load(loader)

    const loader = new PIXI.Loader();
    loader.add("assets/image/hat.png");
    loader.add("assets/image/sparkle.png");
    loader.add("assets/image/back-sparkles.png");
    loader.add("assets/image/beam.png");
    loader.add("assets/image/glare.png");
    loader.add("assets/image/hand.png");

    return loader.load(loader);
  };

  return { preLoadSpriteImages };
}
