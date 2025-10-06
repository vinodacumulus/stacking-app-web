import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// Prevent multiple createRoot calls during hot reloading
const container = document.getElementById("root")!;

// Use a global variable to store the root instance
declare global {
  var __REACT_ROOT__: any;
}

if (!globalThis.__REACT_ROOT__) {
  globalThis.__REACT_ROOT__ = createRoot(container);
}

globalThis.__REACT_ROOT__.render(<App />);
