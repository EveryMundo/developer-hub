/* @refresh reload */
import { isReady } from "@everymundo/registry-script";

import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

isReady().then(async (payload) => {
  render(() => <App payload={payload} />, root);
});
