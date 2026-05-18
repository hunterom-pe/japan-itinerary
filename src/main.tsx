import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DayView from "./components/DayView";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/day/:num" element={<DayView />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
