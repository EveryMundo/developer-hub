import { isReady } from "@everymundo/registry-script";

import "@builder.io/qwik/qwikloader.js";

import { render } from "@builder.io/qwik";
import { App } from "./components/App";
import "./styles/global.css";

isReady().then(async (payload) => {
  render(document.getElementById("app"), <App payload={payload} />);
});
