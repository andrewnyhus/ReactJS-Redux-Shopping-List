import React from "react";
import {NavLink as Link} from "react-router-dom";

/* stateless component */
export const Header = (props) => {
  return(

    <h1 className={"header_label"}>
      <span className={"glyphicon glyphicon-shopping-cart"}></span>
      Shopping List
    </h1>
  );
}
