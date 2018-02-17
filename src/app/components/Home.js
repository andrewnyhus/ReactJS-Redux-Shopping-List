import React from "react";

import {Routes} from "../routes/index";

export const Home = (props) => {


  return (
    <div>
      {/* Pass props to Routes */}
      <Routes
        itemResult={props.itemResult}
        itemLastValues={props.itemLastValues}
        createShoppingItem={(value) => props.createShoppingItem(value)}
        updateShoppingItem={(newValue, index) => props.updateShoppingItem(newValue, index)}
        deleteShoppingItem={(index) => props.deleteShoppingItem(index)}
        toggleCheckItem={(index) => props.toggleCheckItem(index)}
        ></Routes>

    </div>
  );
};
