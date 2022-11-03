import React from "react";
import { createRoot } from "react-dom/client";
import Initializer from "./initializer";
import "./assets/css/_styles.scss";

import MobileLayout from "./layouts/mobile";
// import Homepage from "./layouts/desktop"
// import route from './routes'
const GameContainer = document.getElementById("root");
const GameRoot = createRoot(GameContainer);

GameRoot.render(
  <React.Suspense loading={<div>Loading</div>}>
    <MobileLayout />
  </React.Suspense>
);

Initializer.init();
