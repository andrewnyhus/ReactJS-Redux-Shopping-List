import React from "react";
import {Glyphicon} from "react-bootstrap";

/* stateless component */
export const Header = (props) => {
  return(

    <h1 className={"header_label"}>

      <Glyphicon glyph="shopping-cart"/>
      Shopping List
    </h1>
  );
}
