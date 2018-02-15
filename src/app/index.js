import React from "react";
import { render } from "react-dom";

import Routes from "../routes";

// tell react what to render where.
render(<Routes/>, window.document.getElementById("app"));
