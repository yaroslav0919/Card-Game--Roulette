import React, { useEffect, useRef, useState } from "react";
import { Application } from "pixi.js";
import HeatMapView from "./heatMap";
import useNormalTable from "./useNormalTable";
import useRaceTrackTable from "./useRaceTrackTable";
import useEvents from "./useEvents";
import useStore from "../../store";
import useEntranceAnimation from "./useEntranceAnimation";
import useResource from "./useResource";
import useSparkleAnim from "./useSparkleAnim";
import useSelectAnimation from "./useSelectAnimation";
import useMultiplierAnimation from "./useMultiplierAnimation";
import FontFaceObserver from "fontfaceobserver";
import useSelectAnimationa from "./useSelectAnimation";
import useWinAnimation from "./useWinAnimation";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import WinningNumberWrapper from "../WinningNumberWrapper/WinningNumberWrapper";

export default function Scene() {
  const ref = useRef(null);

  const { drawNormalTable, calcCenterOffset, tinyTable } = useNormalTable();
  const { drawRaceTrackTable } = useRaceTrackTable();
  const { onPointerDownHandler } = useEvents();
  const { addEntranceAnimation } = useEntranceAnimation();
  const { preLoadSpriteImages } = useResource();
  const { drawPolishRect } = useSelectAnimation();
  const { addSparkleAnimation } = useSparkleAnim();
  const { winAnim } = useWinAnimation();
  const { asd } = useSparkleAnim();
  const { multiplierCircle } = useMultiplierAnimation();
  const [heatMapMode, setHeatMapMode] = useState(false);
  const [startWin, setStartWin] = useState();
  const winTextArray = ["STANDARD WIN", "BIG WIN", "SENSATIONAL"];
  //remove hook
  const { removeSelectCont } = useSelectAnimation();

  // const numberArray = [20];
  // const multis = [10];
  // const numberArray = [30, 28];
  // const multis = [30, 500];
  // const numberArray = [30, 28, 0];
  // const multis = [30, 500, 10];
  const numberArray = [30, 28, 8, 0];
  const multis = [30, 500, 10, 600];
  const timeOffset = { sparkle: 4.4, zoomOut: 11, win: 3 };
  // const numberArray = [30, 28, 23, 8, 0];
  // const multis = [30, 500, 10, 200, 600];
  const setApp = useStore((state) => state.setApp);
  const removeContainers = (app) => {
    let selected = [];
    app.stage.children.forEach((child) => {
      child.id === "select" && selected.push(child);
    });
    app.stage.removeChild(...selected);

    let multis = [];
    app.stage.children.forEach((child) => {
      child.id === "multi" && multis.push(child);
    });
    setTimeout(() => {
      app.stage.removeChild(...multis.splice(0, multis.length - 1));
      const topMulti = multis[multis.length - 1];
      console.log(topMulti);
      gsap.to(topMulti, {
        x: window.innerWidth / 2,
        duration: 1,
        onComplete: () => {
          gsap.to(topMulti, {
            y: window.innerHeight + 100,
            alpha: 0,
            duration: 1,
            delay: 3,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.012,-0.234 0.574,-0.107 0.584,-0.014 0.646,0.586 0.78,1 1,1 "
            ),
            onComplete: () => {
              app.stage.removeChild(1, app.stag.children.length - 1);
            },
          });
        },
      });
    }, 3000);

    app.view.removeEventListener("pointerdown", onPointerDownHandler);
  };

  useEffect(() => {
    const app = new Application({
      resizeTo: window,
      backgroundAlpha: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
    });
    setApp(app);

    ref.current.appendChild(app.view);

    app.view.addEventListener("pointerdown", onPointerDownHandler);

    app.start();
    app.stage.sortableChildren = true;

    const loadAndPlayAnimation = async () => {
      const loader = preLoadSpriteImages();

      const font1 = new FontFaceObserver("Sancreek");
      const font2 = new FontFaceObserver("CircularStdBlack");
      const font3 = new FontFaceObserver("CircularStd");
      await font1.load();
      await font2.load();
      await font3.load();
      loader.onComplete.add(() => {
        drawNormalTable(app, heatMapMode);
        addEntranceAnimation(app, multis.length);

        gsap.delayedCall(timeOffset.sparkle, () =>
          addSparkleAnimation(app, numberArray, multis)
        );
        gsap.delayedCall(timeOffset.sparkle + timeOffset.zoomOut, () => {
          removeContainers(app);
          tinyTable.play();
        });
        gsap.delayedCall(
          timeOffset.sparkle + timeOffset.zoomOut + timeOffset.win,
          () => {
            setStartWin(true);
            gsap.delayedCall(3, () => winAnim(app, winTextArray[2]));
          }
        );
      });
    };
    loadAndPlayAnimation();
    // drawNormalTable(app, heatMapMode);
    // setStartWin(true);
    // winAnim(app, winTextArray[2]);
    return () => {
      app.view.removeEventListener("pointerdown", onPointerDownHandler);
      app.destroy(true, true);
    };
  }, []);

  return (
    <>
      {heatMapMode ? <HeatMapView /> : null}
      <div className="canvasScene" ref={ref}>
        {startWin && (
          <WinningNumberWrapper vip={true} key="WinningNumberWrapper" />
        )}
      </div>
    </>
  );
}
