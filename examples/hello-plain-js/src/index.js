import { isReady } from "@everymundo/registry-script";

import "./styles/global.css";
import { startApp } from "./scripts/app";

isReady().then(async (payload) => {
  startApp(payload);
});
