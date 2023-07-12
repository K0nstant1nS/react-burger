import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { store } from "./services/store/store";
import { Provider } from "react-redux";
import "./index.css";

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error()
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
