import React from "react";
import {createRoot} from "react-dom/client";
import SettingsProvider from "./contexts/Settings";
import { StoreProvider } from "./contexts/Store";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </SettingsProvider>
);
