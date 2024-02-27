import { useState } from "preact/hooks";
import preactLogo from "../../assets/preact.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function App({ payload = {} }) {
  const { settings, styles, i18n } = payload;

  // Using settings
  const title = settings?.title || "No title";

  // Using labels
  const label = i18n?.labels["example-label-key"] || "Error";

  // Using styles
  const color = styles?.value?.colors?.primary || "#333";

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
