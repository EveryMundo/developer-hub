import { isReady } from "@everymundo/registry-script";

import { render } from "preact";
import { App } from "./components/App";
import "./styles/global.css";

isReady().then(async (payload) => {
  render(<App payload={payload} />, document.getElementById("app"));
});
