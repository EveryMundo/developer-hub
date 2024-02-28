import { isReady } from "@everymundo/registry-script";

import "./styles/global.css";
import App from "./App.svelte";

isReady().then(async (payload) => {
  new App({
    target: document.getElementById("app"),
    props: {
      payload,
    },
  });
});
