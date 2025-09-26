import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/nunito";
import "@fontsource/nunito/300.css"; // Light
import "@fontsource/nunito/400.css"; // Regular
import "@fontsource/nunito/600.css"; // Semi-bold
import "@fontsource/nunito/700.css"; // Bold
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
