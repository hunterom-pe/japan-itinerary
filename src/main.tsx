import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DayView from "./components/DayView";
import ScrollToTop from "./components/ScrollToTop";
import Phrasebook from "./components/Phrasebook";
import ExpenseTracker from "./components/ExpenseTracker";
import HubView from "./components/HubView";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Phrasebook />
      <ExpenseTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/day/:num" element={<DayView />} />
        <Route path="/hub" element={<HubView />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
