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
// const FontFaceObserver = require("fontfaceobserver");
export default function Scene() {
  const ref = useRef(null);

  const { drawNormalTable, calcCenterOffset } = useNormalTable();
  const { drawRaceTrackTable } = useRaceTrackTable();
  const { onPointerDownHandler } = useEvents();
  const { addEntranceAnimation } = useEntranceAnimation();
  const { preLoadSpriteImages } = useResource();
  const { drawPolishRect } = useSelectAnimation();
  const { addSparkleAnimation } = useSparkleAnim();
  const { asd } = useSparkleAnim();
  const { multiplierCircle } = useMultiplierAnimation();
  const [heatMapMode, setHeatMapMode] = useState(false);
  // const numberArray = [20];
  // const multis = [10];
  // const numberArray = [30, 28];
  // const multis = [30, 500];
  // const numberArray = [30, 28, 0];
  // const multis = [30, 500, 10];
  // const numberArray = [30, 28, 8, 0];
  // const multis = [30, 500, 10, 600];
  const numberArray = [30, 28, 23, 8, 0];
  const multis = [30, 500, 10, 200, 600];
  const setApp = useStore((state) => state.setApp);

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
    // drawRaceTrackTable(app);

    const loadAndPlayAnimation = async () => {
      const loader = preLoadSpriteImages();

      const font1 = new FontFaceObserver("Sancreek");
      const font2 = new FontFaceObserver("CircularStdBlack");
      await font1.load();
      await font2.load();
      loader.onComplete.add(() => {
        drawNormalTable(app, heatMapMode);

        addEntranceAnimation(app, multis.length);

        setTimeout(() => {
          addSparkleAnimation(app, numberArray, multis);
        }, 4400);
      });
    };
    loadAndPlayAnimation();

    // addSparkleAnimation(app, numberArray);
    // multiplierCircle(1, app, 500, 19, 3);
    return () => {
      app.view.removeEventListener("pointerdown", onPointerDownHandler);
      app.destroy(true, true);
    };
  }, []);

  return (
    <>
      {heatMapMode ? <HeatMapView /> : null}
      <div className="canvasScene" ref={ref} />
    </>
  );
}
