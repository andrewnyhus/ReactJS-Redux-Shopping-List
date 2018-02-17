import React from "react";

import {EditList} from "./EditList";

export const Home = (props) => {


  return (
    <div>
      {/* Pass props to EditList */}
      <EditList
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
