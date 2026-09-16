import "./globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from ".";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
