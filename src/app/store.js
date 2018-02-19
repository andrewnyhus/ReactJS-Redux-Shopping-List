import {createStore, combineReducers, applyMiddleware} from "redux";

import itemReducer from "./reducers/itemReducer";
import historyVisibilityReducer from "./reducers/historyVisibilityReducer";


const myLogger = (store) => (next) => (action) => {
  console.log("Logged action: ", action);
  next(action);
};

// create the data store
export default createStore(
  combineReducers({itemReducer, historyVisibilityReducer}),
  {},
  applyMiddleware(myLogger)
);
