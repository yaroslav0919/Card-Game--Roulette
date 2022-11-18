import * as PIXI from "pixi.js";
// import FontFaceObserver from "fontfaceobserver";
import useStore from "../../store";
export default function useResource() {
  const setMultiStore = useStore((state) => state.setMultiStore);

  const preLoadSpriteImages = () => {
    const loader = new PIXI.Loader();

    const loadSpriteImages = (path, count) => {
      for (let i = 1; i <= count; i++) {
        loader.add(
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
    return loader.load(loader);
  };

  return { preLoadSpriteImages };
}
