import React from "react";

import {ItemList} from "./ItemList";
import {HistoryView} from "./HistoryView";


export const Home = (props) => {

  return (
    <div>
      {/* Pass props to ItemList */}
      <ItemList
        itemResult={props.itemResult}
        createShoppingItem={(value) => props.createShoppingItem(value)}
        updateShoppingItem={(newValue, index) => props.updateShoppingItem(newValue, index)}
        deleteShoppingItem={(index) => props.deleteShoppingItem(index)}
        toggleCheckItem={(index) => props.toggleCheckItem(index)}
        />

      <HistoryView
        itemLastValues={props.itemLastValues}
        />


    </div>
  );
};
