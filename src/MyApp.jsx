import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// When it comes to rendering HTML, React cannot render more than one element because it requires a single parent element
// This is why we wrap everything in a single div/main/section/article element