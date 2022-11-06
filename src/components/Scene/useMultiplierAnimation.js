import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ang2Rad } from "../../utils/math.js";
import useStore from "../../store/index";
PixiPlugin.registerPIXI(PIXI);

export default function useMultiplierAnimation() {
  const halfX = window.innerWidth / 2;
  const Y = window.innerHeight;
  const multiStore = useStore((state) => state.multiStore);
  const setMultiStore = useStore((state) => state.setMultiStore);

  const firstMultiplier = () => {
    const multiplier = multiStore[0];
    multiplier.visible = true;
    multiplier.roundPixels = true;
    multiplier.anchor.set(0.5, 0.5);
    multiplier.x = -100;
    multiplier.y = Y - 150;
    multiplier.width = 0;
    multiplier.height = 0;
    gsap.to(multiplier, {
      x: halfX,
      width: 150,
      height: 150,
      duration: 0.5,
      onComplete() {
        gsap.to(multiplier, {
          x: halfX + 100,
          width: 100,
          height: 100,
          duration: 1,
          delay: 0.5,
        });
      },
    });
    setMultiStore(multiplier);
  };
  const secondMultiplier = () => {
    const multiplier2 = multiStore[1];
    multiplier2.visible = true;
    multiplier2.roundPixels = true;
    multiplier2.anchor.set(0.5, 0.5);
    multiplier2.x = -100;
    multiplier2.y = Y - 150;
    multiplier2.width = 0;
    multiplier2.height = 0;
    gsap.to(multiplier2, {
      x: halfX,
      width: 150,
      height: 150,
      duration: 0.5,
      onComplete() {
        gsap.to(multiplier2, {
          width: 100,
          height: 100,
          duration: 1,
        });
      },
    });
    setMultiStore(multiplier2);
  };
  const thirdMultiplier = () => {
    const multiplier3 = multiStore[2];
    multiplier3.visible = true;
    multiplier3.roundPixels = true;
    multiplier3.anchor.set(0.5, 0.5);
    multiplier3.x = -100;
    multiplier3.y = Y - 150;
    multiplier3.width = 0;
    multiplier3.height = 0;
    gsap.to(multiplier3, {
      x: halfX - 100,
      width: 150,
      height: 150,
      duration: 0.5,
      onComplete() {
        gsap.to(multiplier3, {
          width: 100,
          height: 100,
          duration: 1,
        });
      },
    });
    setMultiStore(multiplier3);
  };
  const multiplierCircle = (index) => {
    console.log(index);
    index === 0 && firstMultiplier();
    index === 1 && secondMultiplier();
    index === 2 && thirdMultiplier();
  };
  return { multiplierCircle };
}
