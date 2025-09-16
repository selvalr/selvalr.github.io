import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Favicon from "react-favicon";
import selvafavicon from "./assets/favicon1.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Favicon url={selvafavicon} />
    </div>

    <App />
  </StrictMode>
);
