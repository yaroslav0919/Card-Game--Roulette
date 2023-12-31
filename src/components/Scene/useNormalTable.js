import tableData from "../../constants/table";
import otherKeys from "../../constants/tile";
import * as PIXI from "pixi.js";
import { ang2Rad } from "../../utils/math";
import { gsap, Timeline, Tween } from "gsap";

export default function useNormalTable() {
  const calcCenterOffset = () => {
    const btn0 = tableData.find((item) => item.key === "bn-0");
    const btnEnd = tableData.find((item) => item.key === "bg-3-36");

    const startPos = {
      x: btn0?.bordersPos[0].x - 30,
      y: btn0?.bordersPos[0].y + 50,
    };

    const endPos = {
      x: btnEnd?.bordersPos[0].x + btnEnd?.bordersPos[0].w,
      y: btnEnd?.bordersPos[0].y + btnEnd?.bordersPos[0].h,
    };

    const centerPoint = {
      x: startPos.x + (endPos.x - startPos.x) / 2,
      y: startPos.y + (endPos.y - startPos.y) / 2,
    };

    const screenCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const offset = {
      x: screenCenter.x - centerPoint.x,
      y: screenCenter.y - centerPoint.y,
    };

    return offset;
  };

  const drawOnce = (container, graphics, heatMapMode, tileTexture) => {
    // const centerOffset = calcCenterOffset();
    const centerOffset = { x: 0, y: 0 };
    const tileData = [];

    const btnRed = tableData.find((item) => item.key === "bc-red");
    const btnBlack = tableData.find((item) => item.key === "bc-black");

    for (let i = 0; i < 37; i++) {
      const btn = tableData.find((item) => {
        return item.key === `bn-${i}`;
      });

      const redIndex = btnRed?.keys.findIndex((item) => item === i);
      const blackIndex = btnBlack?.keys.findIndex((item) => item === i);

      tileData.push({
        title: `${i}`,
        position: {
          x: btn?.bordersPos[0].x,
          y: btn?.bordersPos[0].y,
        },
        size: {
          width: btn?.bordersPos[0].w,
          height: btn?.bordersPos[0].h,
        },
        tileImg: i === 0 ? `tile-${i}` : null,
        titleColor:
          redIndex !== -1
            ? "#D44030"
            : blackIndex !== -1
            ? "#FFFFFF"
            : "#20B33A",
      });
    }

    otherKeys.forEach((item) => {
      const btn = tableData.find((cell) => {
        return item.key === cell.key;
      });

      tileData.push({
        key: item.key,
        title: item.title,
        position: {
          x: btn?.bordersPos[0].x,
          y: btn?.bordersPos[0].y,
        },
        size: {
          width: btn?.bordersPos[0].w,
          height: btn?.bordersPos[0].h,
        },
        titleColor: "#FFFFFF",
        tile: item.tile,
        textDirection: item.textDirection,
        backgroundOpacity: item.title === "2TO1" ? 0.9 : 0.45,
        specialTitle: item.specialTitle,
      });
    });

    // container.addChild(graphics);

    tileData.forEach((item) => {
      if (!heatMapMode) {
        graphics.beginFill(
          0x090809,
          item.backgroundOpacity ? item.backgroundOpacity : 0.9
        );
      }
      graphics.lineStyle(1.5, heatMapMode ? 0xffffff : 0x888888, 1);

      const cornerRadius = 10;
      if (item.title === "1-18") {
        graphics.moveTo(
          item.position.x + cornerRadius + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + centerOffset.x,
          item.position.y + cornerRadius + centerOffset.y
        );
        graphics.arc(
          item.position.x + cornerRadius + centerOffset.x,
          item.position.y + cornerRadius + centerOffset.y,
          cornerRadius,
          ang2Rad(180),
          ang2Rad(270),
          false
        );
      } else if (item.title === "19-36" || item.key === "bg-1-34") {
        graphics.moveTo(
          item.position.x + centerOffset.x,
          item.position.y + item.size.height - cornerRadius + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + cornerRadius + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.arc(
          item.position.x + cornerRadius + centerOffset.x,
          item.position.y + item.size.height - cornerRadius + centerOffset.y,
          cornerRadius,
          ang2Rad(90),
          ang2Rad(180)
        );
      } else if (item.key === "bg-3-36") {
        graphics.moveTo(
          item.position.x + item.size.width - cornerRadius + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + item.size.height - cornerRadius + centerOffset.y
        );
        graphics.arc(
          item.position.x + item.size.width - cornerRadius + centerOffset.x,
          item.position.y + item.size.height - cornerRadius + centerOffset.y,
          cornerRadius,
          ang2Rad(0),
          ang2Rad(90)
        );
      } else if (item.title === "0") {
        const topOffset = 15;
        graphics.moveTo(
          item.position.x + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + centerOffset.x,
          item.position.y + topOffset + cornerRadius + centerOffset.y
        );
        graphics.arc(
          item.position.x + cornerRadius + centerOffset.x,
          item.position.y + topOffset + cornerRadius + centerOffset.y,
          cornerRadius,
          ang2Rad(180),
          ang2Rad(270)
        );
        graphics.lineTo(
          item.position.x + item.size.width / 2 + centerOffset.x,
          item.position.y + centerOffset.y
        );
        graphics.lineTo(
          item.position.x + item.size.width - cornerRadius + centerOffset.x,
          item.position.y + topOffset + centerOffset.y
        );
        graphics.arc(
          item.position.x + item.size.width - cornerRadius + centerOffset.x,
          item.position.y + topOffset + cornerRadius + centerOffset.y,
          cornerRadius,
          ang2Rad(270),
          ang2Rad(360)
        );
        graphics.lineTo(
          item.position.x + item.size.width + centerOffset.x,
          item.position.y + item.size.height + centerOffset.y
        );
      } else {
        graphics.drawRect(
          item.position.x + centerOffset.x,
          item.position.y + centerOffset.y,
          item.size.width,
          item.size.height
        );
      }

      graphics.closePath();

      if (!heatMapMode) {
        graphics.endFill();
      }

      if (item.tile) {
        const texture =
          item.tile === "red" ? tileTexture.red : tileTexture.black;
        const img = new PIXI.Sprite(texture);

        img.x = item.position.x + item.size.width / 2 + centerOffset.x;
        img.y = item.position.y + item.size.height / 2 + centerOffset.y;
        img.width = 20;
        img.height = 50;
        img.anchor.set(0.5);
        container.addChild(img);
      } else {
        const style = new PIXI.TextStyle({
          fontFamily: "CircularStd",
          fontSize: 22,
          fontWeight: "100",
          fill: [heatMapMode ? 0xffffff : item.titleColor],
        });

        const smallStyle = new PIXI.TextStyle({
          fontFamily: "CircularStd",
          fontSize: 12,
          fontWeight: "100",
          fill: [heatMapMode ? 0xffffff : item.titleColor],
        });

        if (item.specialTitle) {
          const label1 = new PIXI.Text(item.title[0], style);
          label1.anchor.set(0.5);

          const label2 = new PIXI.Text(item.title.slice(1, 3), smallStyle);
          label2.anchor.set(0.5);

          const label3 = new PIXI.Text(item.title.slice(3), style);
          label3.anchor.set(0.5);
          if (item.textDirection === "vertical") {
            const offset = 20;

            label1.x = item.position.x + item.size.width / 2 + centerOffset.x;
            label1.y =
              item.position.y + item.size.height / 2 - offset + centerOffset.y;

            label2.x =
              item.position.x + item.size.width / 2 + 2 + centerOffset.x;
            label2.y =
              item.position.y +
              item.size.height / 2 +
              15 -
              offset +
              centerOffset.y;

            label3.x = item.position.x + item.size.width / 2 + centerOffset.x;
            label3.y =
              item.position.y +
              item.size.height / 2 +
              35 -
              offset +
              centerOffset.y;

            label1.rotation = Math.PI / 2;
            label2.rotation = Math.PI / 2;
            label3.rotation = Math.PI / 2;
          } else {
            const offset = 12;

            label1.x =
              item.position.x + item.size.width / 2 - offset + centerOffset.x;
            label1.y = item.position.y + item.size.height / 2 + centerOffset.y;

            label2.x =
              item.position.x +
              item.size.width / 2 +
              15 -
              offset +
              centerOffset.x;
            label2.y =
              item.position.y + item.size.height / 2 - 2 + centerOffset.y;

            label3.x =
              item.position.x +
              item.size.width / 2 +
              30 -
              offset +
              centerOffset.x;
            label3.y = item.position.y + item.size.height / 2 + centerOffset.y;
          }

          container.addChild(label1);
          container.addChild(label2);
          container.addChild(label3);
        } else {
          const label = new PIXI.Text(item.title, style);
          label.x = item.position.x + item.size.width / 2 + centerOffset.x;
          label.y = item.position.y + item.size.height / 2 + centerOffset.y;
          label.anchor.set(0.5);
          if (item.textDirection === "vertical") {
            label.rotation = Math.PI / 2;
          }
          container.addChild(label);
        }
      }
    });
  };

  // const tinyTable = new gsap.timeline({ ease: "none", paused: true });
  const backTable = new gsap.timeline({ ease: "none", paused: true });

  const drawNormalTable = (app, heatMapMode) => {
    const whole = new PIXI.Container();
    whole.id = "table";
    const container = new PIXI.Container();
    container.id = "table_cont";

    const graphics = new PIXI.Graphics();
    graphics.id = "table_grap";

    const getTileTexture = (color) => {
      const g = new PIXI.Graphics();
      g.lineStyle(2, 0xffffff);
      g.beginFill(color);
      g.drawRoundedRect(0, 0, 20, 20, 2);
      g.endFill();
      g.x = 10;
      g.y = 0;
      g.angle = 45;

      const con = new PIXI.Container();
      con.x = -100;
      con.y = 100;
      con.addChild(g);

      app.stage.addChild(con);
      const tileTexture = app.renderer.generateTexture(con);
      con.removeChildren();
      app.stage.removeChild(con);
      return tileTexture;
    };

    drawOnce(container, graphics, heatMapMode, {
      red: getTileTexture(0xff0000),
      black: getTileTexture(0x000000),
    });

    whole.x = calcCenterOffset().x;
    whole.y = calcCenterOffset().y;

    whole.addChild(graphics);
    whole.addChild(container);
    whole.zIndex = -1;
    app.stage.addChild(whole);
  };
  const tinyTable = (table) => {
    gsap.to(table, {
      x: 15,
      y: window.innerHeight - 350,
      duration: 0.5,
      ease: "none",
      onComplete: () => {
        gsap.to(table, {
          y: window.innerHeight - 250,
          duration: 0.5,
          delay: 1,
          ease: "none",
        });
      },
    });
    gsap.to(table.children[0], {
      width: table.children[0].width / 2.6,
      height: table.children[0].height / 2.6,
      duration: 0.5,
      ease: "none",
    });
    gsap.to(table.children[1], {
      width: table.children[1].width / 2.6,
      height: table.children[1].height / 2.6,
      duration: 0.5,
      ease: "none",
    });
  };

  const bigTable = (table) => {
    gsap.to(table, {
      x: calcCenterOffset().x,
      y: calcCenterOffset().y,
      duration: 0.5,
      ease: "none",
    });
    gsap.to(table.children[0], {
      width: table.children[0].width * 2.6,
      height: table.children[0].height * 2.6,
      duration: 0.5,
      ease: "none",
    });
    gsap.to(table.children[1], {
      width: table.children[1].width * 2.6,
      height: table.children[1].height * 2.6,
      duration: 0.5,
      ease: "none",
    });
  };
  return { calcCenterOffset, drawNormalTable, tinyTable, bigTable };
}
