import create from "zustand";
import produce from "immer";
import * as PIXI from "pixi.js";

const multiArray = [];
const multiTexture1 = new PIXI.Texture.from("/assets/image/30x.png");
const multiTexture2 = new PIXI.Texture.from("/assets/image/500x.png");
const multiTexture3 = new PIXI.Texture.from("/assets/image/10x.png");
multiArray.push(new PIXI.Sprite(multiTexture1));
multiArray.push(new PIXI.Sprite(multiTexture2));
multiArray.push(new PIXI.Sprite(multiTexture3));
for (let i = 0; i < 3; i++) {
  multiArray[i].visible = false;
}

const useStore = create((set) => ({
  app: null,
  setApp: (payload) =>
    set(
      produce((state) => {
        state.app = payload;
      })
    ),

  timeLine: null,
  setTime: (payload) =>
    set(
      produce((state) => {
        state.timeLine = payload;
      })
    ),

  multiStore: multiArray,
  setMultiStore: (payload) =>
    set(
      produce((state) => {
        state.multiStore = payload;
      })
    ),
  // dragInfo: {
  // },
  // setDragInfo: (payload: any) => set(produce((state: any) => {
  // 	state.dragInfo = payload
  // })),
}));

export default useStore;
