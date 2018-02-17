import React from "react";

import {Routes} from "../routes/index";

export const Home = (props) => {


  return (
    <div>
      
      <Routes
        itemResult={props.itemResult}
        itemLastValues={props.itemLastValues}
        createShoppingItem={(value) => props.createShoppingItem(value)}
        updateShoppingItem={(newValue, index) => props.updateShoppingItem(newValue, index)}
        deleteShoppingItem={(index) => props.deleteShoppingItem(index)}
        ></Routes>

    </div>
  );
};
