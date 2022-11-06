import * as PIXI from "pixi.js";
import useStore from "../../store";
export default function useResource() {
  const setMultiStore = useStore((state) => state.setMultiStore);

  const preLoadSpriteImages = () => {
    // const multiArray = [];
    // const multiTexture1 = new PIXI.Texture.from("/assets/image/30x.png");
    // const multiTexture2 = new PIXI.Texture.from("/assets/image/500x.png");
    // const multiTexture3 = new PIXI.Texture.from("/assets/image/10x.png");
    // multiArray.push(new PIXI.Sprite(multiTexture1));
    // multiArray.push(new PIXI.Sprite(multiTexture2));
    // multiArray.push(new PIXI.Sprite(multiTexture3));
    // setMultiStore(multiArray);

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
