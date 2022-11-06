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

export default function Scene() {
  const ref = useRef(null);

  const { drawNormalTable, calcCenterOffset } = useNormalTable();
  const { drawRaceTrackTable } = useRaceTrackTable();
  const { onPointerDownHandler } = useEvents();
  const { addEntranceAnimation } = useEntranceAnimation();
  const { preLoadSpriteImages } = useResource();
  const { drawPolishRect } = useSelectAnimation();
  const { addSparkleAnimation } = useSparkleAnim();

  const [heatMapMode, setHeatMapMode] = useState(false);
  const numberArray = [24, 16, 5];
  const setApp = useStore((state) => state.setApp);
  const multiStore = useStore((state) => state.multiStore);
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

    // drawRaceTrackTable(app);

    const loadAndPlayAnimation = () => {
      const loader = preLoadSpriteImages();
      loader.onComplete.add(() => {
        drawNormalTable(app, heatMapMode);

        addEntranceAnimation(app);

        setTimeout(() => {
          addSparkleAnimation(app, numberArray);
          // setTimeout(() => {
          //   const numberPos = calcNumberFullPosition(24);
          //   drawPolishRect(app, numberPos);
          // }, 3000);
        }, 9000);
      });
    };
    loadAndPlayAnimation();
    // addEntranceAnimation(app);

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
