import { lazy } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import("./App"));

// create container where your app will be loaded
const container = document.getElementById("app");

if (!container) {
  throw new Error("Root container missing in index.html (id='app')");
}
// create root
const root = createRoot(container);

// render your app
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
