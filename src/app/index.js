import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import App from "./containers/App";
import store from "./store";
require("./stylesheets/index.scss");



// create one item to start the list
store.dispatch({
  type: "CREATE",
  payload: {value: ""}
});


// tell react what to render where. provide the data store
render(<Provider store={store}><App/></Provider>, window.document.getElementById("app"));
