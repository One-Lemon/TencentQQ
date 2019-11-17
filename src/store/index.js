import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import Reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

// redux-devtools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
/**
 * combineReducers  多个仓库存在，否则只能有一个store
 * applyMiddleware  使用中间件
 */
export default createStore(
  combineReducers(Reducers),
  composeEnhancers(applyMiddleware(thunk, logger))
);
