import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { Root } from "../app/components/Root";
import { Home } from "../app/components/Home";
import { User } from "../app/components/User";
import { Header } from "../app/components/Header";
import { NotFound } from "../app/components/NotFound";

export default () => (
  <BrowserRouter>
    <div>
      <Root>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/home"} component={Home}/>
          <Route path={"/user/:userID"} component={User} />
          <Route component={NotFound}/>
        </Switch>
      </Root>
    </div>
  </BrowserRouter>
);
