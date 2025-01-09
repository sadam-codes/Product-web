import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";
import "./mediaquery.css";
import "./assets/styles/mediaquery.css";
import "./assets/js/jquery.slimscroll";
import "./assets/js/app.js";
import "./assets/js/common.js";
import "./loader.js";

// if (process.env.NODE_ENV === "production") {
//   console.log = function () {};
// }

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
