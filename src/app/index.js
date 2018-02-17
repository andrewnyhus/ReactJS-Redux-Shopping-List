import React from "react";
import { render } from "react-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";

require("./stylesheets/index.scss");


// set up reducer to handle actions
// =============================================================================
const itemReducer = (state = {
    result: {items: []},
    lastValues: []
  }, action) => {


  switch (action.type) {
    case "CREATE": // immutably creates item with given value
      var value = action.payload.value;

      state = {
        ...state,
        result: {items: [...state.result.items, {value: value, checked: false}]},
        lastValues: [...state.lastValues, state.result]
      };
      break;


    case "UPDATE": // immutably updates item at given index with given value
      var indexToUpdate = action.payload.index;
      var newValue = action.payload.newValue;

      state = {
        ...state,
        result: {
          items:
            state.result.items.map(
              (item, index) => {
                    if(index !== indexToUpdate) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }
                    // Otherwise, this is the one we want - return an updated value
                    var newItem = item;
                    newItem.value = newValue;
                    return newItem;
              })
        },
        lastValues: [...state.lastValues, state.result]
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
        lastValues: [...state.lastValues, state.result]
      }

      break;


    case "TOGGLE_CHECK": // immutably toggles checkbox at given index
      var indexToToggle = action.payload.index;

      state = {
        ...state,
        result: {
          items:
            state.result.items.map(
              (item, index) => {
                    if(index !== indexToToggle) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }
                    // Otherwise, this is the one we want - return an updated value
                    var newItem = item;
                    newItem.checked = !newItem.checked;
                    return newItem;
              })
        },
        lastValues: [...state.lastValues, state.result]
      }

      break;

  }
  return state;
};
// =============================================================================


// create the data store
const store = createStore(itemReducer);

// when the state changes, print it to the console
store.subscribe(() => {
  console.log("store updated: ");
  console.log(store.getState());
});



// tell react what to render where. provide the data store
render(<Provider store={store}><App/></Provider>, window.document.getElementById("app"));
