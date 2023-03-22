import React, { useEffect, useRef, useState } from "react";
import { Application, TYPES_TO_BYTES_PER_PIXEL } from "pixi.js";
import { reaction, toJS } from "mobx";
import { Store, State } from "uicore";
import { map } from "lodash";
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
  const { calcCenterOffset, drawNormalTable, tinyTable, bigTable } =
    useNormalTable();

  const { onPointerDownHandler } = useEvents();
  const { addEntranceAnimation } = useEntranceAnimation();
  const { preLoadSpriteImages } = useResource();
  const { addSparkleAnimation } = useSparkleAnim();
  const { winAnim, destroyWin } = useWinAnimation();

  const [heatMapMode, setHeatMapMode] = useState(false);
  const [startWin, setStartWin] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  let gameStart = false;

  const endPoint = { entrance: 3, multipliers: 12, shrink: 14, winAnim: 19 };
  const setApp = useStore((state) => state.setApp);

  useEffect(() => {
    // ### This part block user interaction with the table
    top.view.style.zIndex = 2;
    top.view.style.position = "absolute";
    ref.current.appendChild(top.view);

    setApp(app);

    ref.current.appendChild(app.view);
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
        drawNormalTable(app, heatMapMode);
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
    return reaction(
      () => {
        return Store.GameStore.sessionResult;
      },
      (sessionResult) => {
        if (sessionResult && Store.GameStore.session.flag === State.Waiting) {
          gameStart = true;
          app.stage.removeChildren(1, app.stage.children.length - 1);
          console.log(app.stage);
          addEntranceAnimation(app, sessionResult.coefficients.length);
          gsap.delayedCall(endPoint.entrance, () =>
            addSparkleAnimation(
              app,
              map(sessionResult.coefficients, (a) => Number(a.number)),
              map(sessionResult.coefficients, (a) => Number(a.multiply))
            )
          );
          app.view.addEventListener("pointerdown", onPointerDownHandler);
        }
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  // State Transitions
  // useEffect(() => {
  //   return reaction(
  //     () => {
  //       return Store.GameStore.session;
  //     },
  //     (session) => {
  //       if (!gameStart) return;
  //       if (session.flag === State.Open) {
  //         winAnim(app, top, 2);
  //       } else if (session.flag === State.Waiting) {
  //         destroyWin(app, top);
  //         bigTable(app.stage.children[0]);
  //         setStartWin(false);
  //       } else if (session.flag === State.Playing) {
  //       } else if (session.flag === State.Finish) {
  //         removeContainers(app);
  //         tinyTable(app.stage.children[0]);
  //         app.view.removeEventListener("pointerdown", onPointerDownHandler);
  //         setStartWin(true);
  //       }
  //     },
  //     {
  //       fireImmediately: true,
  //     }
  //   );
  // }, []);

  // Winner State
  // useEffect(() => {
  //   return reaction(
  //     () => {
  //       return Store.WinnerStore.userRewards;
  //     },
  //     (userRewards) => {
  //       if (userRewards.r) {
  //         gsap.delayedCall(1, () => {
  //           winAnim(app, top, 0);
  //         });
  //         gsap.delayedCall(2, () => {
  //           destroyWin();
  //           backTable();
  //           setStartWin(false);
  //           gsap.delayedCall(1, () =>
  //             app.stage.removeChildren(1, app.stage.children.length - 1)
  //           );
  //         });
  //       }
  //     },
  //     {
  //       fireImmediately: true,
  //     }
  //   );
  // }, []);

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
