import React from "react";
import { render } from "react-dom";

import {Home} from "./components/Home";

require("./stylesheets/index.scss");

// tell react what to render where.
render(<Home/>, window.document.getElementById("app"));
