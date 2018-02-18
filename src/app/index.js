import React from "react";
import { render } from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import App from "./components/App";

require("./stylesheets/index.scss");


// set up items reducer
// =============================================================================
const itemReducer = (state = {
    result: {items: []},
    lastValues: [],
    selectedHistoryEntryToInspect: -1 // mutate this variable because we don't want to preserve it's state
  }, action) => {


  switch (action.type) {
    case "CREATE": // immutably creates item with given value
      var value = action.payload.value;

      state = {
        ...state,
        result: {items: [...state.result.items, {value: value, checked: false}]},
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      };
      break;


    case "UPDATE": // immutably updates item at given index with given value
      var indexToUpdate = action.payload.index;
      var newValue = action.payload.newValue;

      state = {
        ...state,
        result: {
          items:[
            ...state.result.items.slice(0, indexToUpdate),
            {value: newValue, checked: state.result.items[indexToUpdate].checked},
            ...state.result.items.slice(indexToUpdate + 1)
          ]
        },
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }
      break;


    case "DELETE": // immutably deletes item at given index
      var indexToDelete = action.payload.index;

      state = {
        ...state,
        result: {
          items:[
            ...state.result.items.slice(0, indexToDelete),
            ...state.result.items.slice(indexToDelete + 1)
          ]
        },
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }

      break;


    case "TOGGLE_CHECK": // immutably toggles checkbox at given index
      var indexToToggle = action.payload.index;

      state = {
        ...state,
        result: {
          items:[
            ...state.result.items.slice(0, indexToToggle),
            {value: state.result.items[indexToToggle].value, checked: !state.result.items[indexToToggle].checked},
            ...state.result.items.slice(indexToToggle + 1)
          ]
        },
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }

      break;

    case "REVERT_TO_HISTORY_ITEM":
      break;

    case "SELECT_HISTORY_VERSION_TO_INSPECT":
      var selectIndex = action.payload.index;

      state = {
        ...state,
        selectedHistoryEntryToInspect: selectIndex
      }
      break;

  }
  return state;
};
// =============================================================================


// set up view history reducer
// =============================================================================
const historyVisibilityReducer = (state = {
  showHistory: false
}, action) => {

  switch (action.type){
    case "TOGGLE_HISTORY_VISIBILITY":
      state = {
        ...state,
        showHistory: !state.showHistory
      }
      break;
  }

  return state;
};
// =============================================================================


const myLogger = (store) => (next) => (action) => {
  console.log("Logged action: ", action);
  next(action);
};

// combine reducers
const reducers = combineReducers({itemReducer, historyVisibilityReducer});


// create the data store
const store = createStore(reducers, {}, applyMiddleware(myLogger));

// when the state changes, print it to the console
store.subscribe(() => {
  console.log("store updated: ");
  console.log(store.getState());
});

// create one item to start the list
store.dispatch({
  type: "CREATE",
  payload: {value: ""}
});


// tell react what to render where. provide the data store
render(<Provider store={store}><App/></Provider>, window.document.getElementById("app"));
