import * as PIXI from "pixi.js";
import useNormalTable from "./useNormalTable";
import tableData from "../../constants/table";

export default function useSelectAnimation() {
  const { calcCenterOffset } = useNormalTable();

  const calcNumberFullPosition = (number) => {
    const btn = tableData.find((item) => {
      return item.key === `bn-${number}`;
    });
    const centerOffset = calcCenterOffset();
    const x = btn.area.x + centerOffset.x;
    const y = btn.area.y + centerOffset.y;

    return [x, y, btn.area.w, btn.area.h];
  };

  const drawPolishRect = (app, number) => {
    const rect = calcNumberFullPosition(number);
    const graphics = new PIXI.Graphics();
    app.stage.addChild(graphics);

    graphics.lineStyle(1, 0xffff00);
    graphics.drawRect(...rect);
  };

  return { drawPolishRect };
}
