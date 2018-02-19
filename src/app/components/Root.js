import React from "react";

import {Header} from "./Header";

export const Root = (props) => {
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            {props.children}
          </div>
        </div>

      </div>

    );
}
