import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { EditList } from "../components/EditList";
import { NotFound } from "../components/NotFound";


export const Routes = (props) => {


  const globalProps = props;

  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route  path={"/"}
              render={(props) => (
                <EditList
                  itemResult={globalProps.itemResult}
                  itemLastValues={globalProps.itemLastValues}
                  createShoppingItem={(value) => globalProps.createShoppingItem(value)}
                  updateShoppingItem={(newValue, index) => globalProps.updateShoppingItem(newValue, index)}
                  deleteShoppingItem={(index) => globalProps.deleteShoppingItem(index)}
                  />
              )}
              props={props}
              />
            <Route component={NotFound}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
};
