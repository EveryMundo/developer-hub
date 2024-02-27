import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import "./App.css";

function App({ payload = {} }) {
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
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="color">
        <i style={{ backgroundColor: color }}></i>
        <span>{label}</span>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/components/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <textarea defaultValue={JSON.stringify(payload, null, 2)}></textarea>
    </>
  );
}

export default App;
