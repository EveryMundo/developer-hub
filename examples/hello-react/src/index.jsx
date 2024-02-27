import { isReady } from "@everymundo/registry-script";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

isReady().then(async (payload) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App payload={payload} />
    </React.StrictMode>
  );
});
