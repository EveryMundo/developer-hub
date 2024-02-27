import { component$, useSignal } from "@builder.io/qwik";

import qwikLogo from "../../assets/qwik.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export const App = component$((props) => {
  const { payload = {} } = props;
  const { settings, styles, i18n } = payload;

  // Using settings
  const title = settings?.title || "No title";

  // Using labels
  const label = i18n?.labels["example-label-key"] || "Error";

  // Using styles
  const color = styles?.value?.colors?.primary || "#333";

  const count = useSignal(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://qwik.builder.io" target="_blank">
          <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div class="card">
        <button onClick$={() => count.value++}>count is {count.value}</button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </>
  );
});
