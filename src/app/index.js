import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


// define app component
class App extends React.Component {

  onGreet(){
    alert("Hello");
  }


  render() {

    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink="Home"/>

          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home componentName={"Home"} initialAge={22} greet={this.onGreet}/>

          </div>
        </div>

      </div>
    );
  }
}

// tell react what to render where.
render(<App/>, window.document.getElementById("app"));
