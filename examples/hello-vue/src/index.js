import { isReady } from "@everymundo/registry-script";

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

isReady().then(async (payload) => {
  const app = createApp(App);
  app.provide("payload", payload);
  app.mount("#app");
});
