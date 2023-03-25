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
import {
  removeAllChildWithException,
  removeChildsWithID,
  removeContainers,
} from "./removeContainers";

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

    document.body.addEventListener("pointerdown", onPointerDownHandler);

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
          removeAllChildWithException(app.stage, ["table", "chip"]);
          addEntranceAnimation(app, sessionResult.coefficients.length);
          document.body.removeEventListener(
            "pointerdown",
            onPointerDownHandler
          );
          gsap.delayedCall(3, () =>
            addSparkleAnimation(
              app,
              map(sessionResult.coefficients, (a) => Number(a.number)),
              map(sessionResult.coefficients, (a) => Number(a.multiply))
            )
          );
          // app.view.addEventListener("pointerdown", onPointerDownHandler);
        }
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  // State Transitions
  useEffect(() => {
    return reaction(
      () => {
        return Store.GameStore.session;
      },
      (session) => {
        if (!gameStart) return;
        if (session.flag === State.Open) {
          console.log("open status");
        } else if (session.flag === State.Waiting) {
          console.log("open status");
        } else if (session.flag === State.Playing) {
          console.log("playing status");
        } else if (session.flag === State.Finish) {
          console.log("finish status");
          removeContainers(app);
          removeChildsWithID(app.stage, "chip");
          // tinyTable(app.stage.children[0]);
          // removeChildsWithID(app.stage, "chip");
          // setStartWin(true);
          // gsap.delayedCall(2, () => {
          //   winAnim(app, top, 1);
          //   gsap.delayedCall(4, () => {
          //     destroyWin(app, top);
          //     setStartWin(false);
          //     gsap.delayedCall(1, () => {
          //       bigTable(app.stage.children[0]);
          //       document.body.addEventListener(
          //         "pointerdown",
          //         onPointerDownHandler
          //       );
          //     });
          //   });
          // });
          gsap.delayedCall(7, () => {
            document.body.addEventListener("pointerdown", onPointerDownHandler);
          });
        }
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  // Winner State
  useEffect(() => {
    return reaction(
      () => {
        return Store.WinnerStore.userRewards;
      },
      (userRewards) => {
        if (userRewards.r) {
          let wonSum = 0;
          userRewards.r.forEach((e) => (wonSum += e.won));
          console.log(wonSum);

          tinyTable(app.stage.children[0]);
          setStartWin(true);
          gsap.delayedCall(2, () => {
            winAnim(app, top, wonSum);
            gsap.delayedCall(4, () => {
              destroyWin(app, top);
              setStartWin(false);
              gsap.delayedCall(1, () => {
                bigTable(app.stage.children[0]);
              });
            });
          });
        } else {
          console.log("no rewarded");
        }
      },
      {
        fireImmediately: true,
      }
    );
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
