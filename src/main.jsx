import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//  used to say hey I want to use routing in my app
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
