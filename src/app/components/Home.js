import React from "react";
import {Root} from "./Root";

import {createStore} from "redux";









// initialize initial state
const initialState = {
  result: {items: []},
  lastValues: []
};


// set up reducer
const reducer = (state = initialState, action) => {

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


// create store
const store = createStore(reducer);

store.subscribe(() => {
  console.log("store updated: ");
  console.log(store.getState());
});


store.dispatch({
  type: "CREATE",
  payload: {value: "Sample Value"}
});
store.dispatch({
  type: "CREATE",
  payload: {value: "Sample Value 2"}
});

store.dispatch({
  type: "UPDATE",
  payload: {newValue: "Updated Value", index: 0}
});

store.dispatch({
  type: "DELETE",
  payload: {index: 0}
});


export class Home extends React.Component {



  createShoppingItem(value){
    store.dispatch({
      type: "CREATE",
      payload: {value: value}
    });
  }


  render(){

    const items = (
      <ul className={"list-group items_list"}>
        {/*this.state.result.items.map((item, i) =>

          <li className={"list-group-item shopping_list_item"}>
            <button className="btn btn-primary">
              <span class="glyphicon glyphicon-trash"></span>
            </button>
            {item}
          </li>

        )*/}
      </ul>
    );


    return (
      <Root>

      </Root>
    );
  }
}
