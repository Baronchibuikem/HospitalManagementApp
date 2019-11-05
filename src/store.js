import { createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

const initialState = {};

const middleware = [thunk];

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhances(applyMiddleware(...middleware))
);

export default store;
