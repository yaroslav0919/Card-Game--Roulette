import * as PIXI from "pixi.js";
import { TweenLite, gsap } from "gsap";

import useNormalTable from "./useNormalTable";
import tableData from "../../constants/table";
import { t } from "i18next";

export default function useSelectAnimation() {
  const { calcCenterOffset } = useNormalTable();
  const centerOffset = calcCenterOffset();
  const calcNumberFullPosition = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const x = btn.area.x + centerOffset.x;
    const y = btn.area.y + centerOffset.y;

    return [x, y, btn.area.w, btn.area.h];
  };
  const calcNumberCenter = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });

    const x = btn.area.x + btn.area.w / 2 + centerOffset.x;
    const y = btn.area.y + btn.area.h / 2 + centerOffset.y;
    return { x: x, y: y };
  };
  const drawBorder = (app, number) => {
    const rect = calcNumberFullPosition(number);
    const graphics = new PIXI.Graphics();
    app.addChild(graphics);
    graphics.lineStyle(1, 0xffff00);
    graphics.drawRect(...rect);
  };
  const numCounter = (app, multi, pos) => {
    const text = new PIXI.Text(multi + `x`, {
      fontFamily: "Georgia, serif",
      dropShadow: true,
      dropShadowAngle: 1.4,
      dropShadowColor: "#db4343",
      dropShadowDistance: 2,
      fill: "white",
      fontSize: 26,
    });

    text.x = pos.x;
    text.y = pos.y;
    text.anchor.set(0.5);
    app.addChild(text);

    const textObj = { tex: multi };
    gsap.from(textObj, {
      duration: 1,
      tex: 0,
      onUpdate: () => {
        text.text = Math.floor(textObj.tex) + `x`;
      },
    });
  };
  const drawPolishRect = (app, number, multi) => {
    const pos = calcNumberCenter(number);
    const container = new PIXI.Container();
    drawBorder(container, number);
    numCounter(container, multi, pos);

    app.stage.addChild(container);
  };

  return { drawPolishRect };
}
