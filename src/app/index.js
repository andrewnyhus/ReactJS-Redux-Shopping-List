import React from "react";
import { render } from "react-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";

require("./stylesheets/index.scss");


// set up reducer
// =============================================================================
const itemReducer = (state = {
    result: {items: []},
    lastValues: []
  }, action) => {


  switch (action.type) {
    case "CREATE":
      var value = action.payload.value;

      state = {
        ...state,
        result: {items: [...state.result.items, value]},
        lastValues: [...state.lastValues, state.result]
      };
      break;


    case "UPDATE":
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
                    return newValue;
              })
        },
        lastValues: [...state.lastValues, state.result]
      }
      break;


    case "DELETE":
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
  }
  return state;
};
// =============================================================================


// create store
const store = createStore(itemReducer);

store.subscribe(() => {
  console.log("store updated: ");
  console.log(store.getState());
});



// tell react what to render where.
render(<Provider store={store}><App/></Provider>, window.document.getElementById("app"));
