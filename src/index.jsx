import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { store } from "./services/store/store";
import { Provider } from "react-redux";
import { ProvideAuth } from "./services/auth";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </Provider>
  </React.StrictMode>
);
