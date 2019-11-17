import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store";
import { Provider } from "react-redux";

/**
 * 项目入口 添加仓库
 */
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
