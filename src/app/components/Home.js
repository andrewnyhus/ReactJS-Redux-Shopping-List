import React from "react";

import {ItemList} from "./ItemList";

export const Home = (props) => {


  return (
    <div>
      {/* Pass props to ItemList */}
      <ItemList
        itemResult={props.itemResult}
        itemLastValues={props.itemLastValues}
        createShoppingItem={(value) => props.createShoppingItem(value)}
        updateShoppingItem={(newValue, index) => props.updateShoppingItem(newValue, index)}
        deleteShoppingItem={(index) => props.deleteShoppingItem(index)}
        toggleCheckItem={(index) => props.toggleCheckItem(index)}
        />

    </div>
  );
};
