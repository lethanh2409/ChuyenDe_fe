import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng "react-dom/client" thay vì "react-dom"
import { Provider } from "react-redux";
import App from "./App.js";
import store from "./redux/store.js";
import "./index.css"; // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
