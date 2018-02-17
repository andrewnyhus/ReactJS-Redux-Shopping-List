import React from "react";

/* stateless component */
export const Header = (props) => {
  return(

    <h1 className={"header_label"}>
      <span className={"glyphicon glyphicon-shopping-cart"}></span>
      Shopping List
    </h1>
  );
}
