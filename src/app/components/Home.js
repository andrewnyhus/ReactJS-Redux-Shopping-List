import React from "react";
import {Root} from "./Root";

import {createStore} from "redux";


// set up reducer
const reducer = (state, action) => {

  switch (action.type) {
    case "CREATE":
      var value = action.payload.value;

      state.items.push(value);
      break;

    case "UPDATE":
      var indexToUpdate = action.payload.index;
      var newValue = action.payload.newValue;

      state.items[indexToUpdate] = newValue;
      break;

    case "DELETE":
      var indexToDelete = action.payload.index;

      state.items.pop(indexToDelete);
      break;
  }
  return state;
};


// create store
const store = createStore(reducer, {items:[]});


// subscribe to state changes
store.subscribe(() => {
  console.log("Store updated!", store.getState());
});


store.dispatch({
  type: "CREATE",
  payload: {value: "Example shopping item value"}
});

/*store.dispatch({
  type: "UPDATE",
  payload: {index: 0, newValue: "Updated example value"}
});

store.dispatch({
  type: "DELETE",
  payload: {index: 0}
});*/




export class Home extends React.Component {
  render(){

    const items = (
      <ul className={"list-group items_list"}>

      </ul>
    );


    return (
      <Root>

      </Root>
    );
  }
}
