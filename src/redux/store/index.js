/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const devTools =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;

const middleware = compose(applyMiddleware(thunk), devTools);
const store = createStore(rootReducer, middleware);
export default store;
