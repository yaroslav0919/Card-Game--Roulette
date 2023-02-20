import React, { useEffect, useRef, useState } from "react";
import { Application, TYPES_TO_BYTES_PER_PIXEL } from "pixi.js";
import { reaction, toJS } from "mobx";
import { Store, State } from 'uicore'
import { map } from 'lodash'
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
import { removeContainers } from "./removeContainers";

import WinningNumberWrapper from "../WinningNumberWrapper/WinningNumberWrapper";

const app = new Application({
  resizeTo: window,
  backgroundAlpha: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});

const top = new Application({
  resizeTo: window,
  backgroundAlpha: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});

export default function Scene() {
  const ref = useRef(null);
  const { calcCenterOffset, drawNormalTable, tinyTable, backTable } =
    useNormalTable();

  const { onPointerDownHandler } = useEvents();
  const { addEntranceAnimation } = useEntranceAnimation();
  const { preLoadSpriteImages } = useResource();
  const { addSparkleAnimation } = useSparkleAnim();
  const { winAnim, destroyWin } = useWinAnimation();

  const [heatMapMode, setHeatMapMode] = useState(false);
  const [startWin, setStartWin] = useState(false);

  // const numberArray = [20];
  // const multis = [10];h
  // const numberArray = [30, 28];
  // const multis = [30, 500];
  // const numberArray = [30, 28, 0];
  // const multis = [30, 500, 10];
  // const numberArray = [30, 28, 8, 0];
  // const multis = [30, 500, 10, 600];

  const numberArray = [30, 28, 23, 8, 0];
  const multis = [30, 500, 10, 200, 600];
  const endPoint = { entrance: 3, multipliers: 12, shrink: 14, winAnim: 19 };
  const setApp = useStore((state) => state.setApp);

  useEffect(() => {
    // ### This part block user interaction with the table
    // top.view.style.zIndex = 2;
    // top.view.style.position = "absolute";
    // ref.current.appendChild(top.view);

    setApp(app);

    ref.current.appendChild(app.view);

    app.view.addEventListener("pointerdown", onPointerDownHandler);

    app.stage.sortableChildren = true;

    const loadAndPlayAnimation = async () => {
      const loader = preLoadSpriteImages();

      const font1 = new FontFaceObserver("Sancreek");
      const font2 = new FontFaceObserver("CircularStdBlack");
      const font3 = new FontFaceObserver("CircularStd");
      const font4 = new FontFaceObserver("CircularStdMedium");
      await font1.load();
      await font2.load();
      await font3.load();
      await font4.load();
      loader.onComplete.add(() => {
        drawNormalTable(app, heatMapMode)
      });
    };

    loadAndPlayAnimation();

    return () => {
      app.view.removeEventListener("pointerdown", onPointerDownHandler);
      app.destroy(true, true);
      top.destroy(true, true);
    };
  }, []);
 
  // Multiplier Update
  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.sessionResult
    }, (sessionResult) => {
      if(sessionResult && Store.GameStore.session.flag === State.Waiting){
        addEntranceAnimation(app, sessionResult.coefficients.length);
        gsap.delayedCall(endPoint.entrance, () =>
          addSparkleAnimation(app, map(sessionResult.coefficients, a => Number(a.number)), map(sessionResult.coefficients, a => Number(a.multiply)))
        );
        gsap.delayedCall(endPoint.multipliers, () => {
          removeContainers(app);
          tinyTable.play();
          app.view.removeEventListener("pointerdown", onPointerDownHandler);
          setStartWin(true);
        });
      }
    }, {
      fireImmediately: true
    })
  }, [])

  // State Transitions
  useEffect(() => {
    return reaction(() => {
      return Store.GameStore.session
    }, (session) => {
      if(session.flag === State.Open){
        // Session on betting state
        // we need to clear previous session rewards/numbers etc.
        // we need to make table bigger
      }else if(session.flag === State.Waiting){
        // Session on multiplier animation state
        
      }else if(session.flag === State.Playing){
        // Session on playing state
        // we need to make table smaller
      }else if(session.flag === State.Finish){
        // Session on finish state, show winning number etc
        // table will stay small and we need to show winning number and also user rewards
      }
    }, {
      fireImmediately: true
    })
  }, [])

  // Winner State
  useEffect(() => {
    return reaction(() => {
      return Store.WinnerStore.userRewards
    }, (userRewards) => {
      if(userRewards.r){
        gsap.delayedCall(1, () => {
          winAnim(app, top, 0);
        });
        gsap.delayedCall(2, () => {
          destroyWin();
          backTable.play();
          setStartWin(false);
          gsap.delayedCall(1, () =>
            app.stage.removeChildren(1, app.stage.children.length - 1)
          );
        });
      }
    }, {
      fireImmediately: true
    })
  }, [])

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
