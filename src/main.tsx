import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import UiPreferenceProvider from "./context/UiPreference/UiPreferenceProvider";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UiPreferenceProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </UiPreferenceProvider>
    </BrowserRouter>
  </React.StrictMode>
);
