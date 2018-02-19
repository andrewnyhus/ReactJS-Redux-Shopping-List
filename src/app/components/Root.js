import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
  render(){
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
          <hr/>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            {this.props.children}
          </div>
        </div>

      </div>

    );
  }
}
