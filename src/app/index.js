import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


// define app component
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      homeLink: "Home"
    };
  }


  // made for passing a function as a prop to the Home child component
  onGreet(){
    alert("Hello");
  }

  // made for passing a function as a prop that allows
  // one child component to modify it's sibling component
  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }


  render() {

    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>

          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              componentName={"Home"}
              initialAge={22}
              greet={this.onGreet}
              changeLink={(newName) => this.onChangeLinkName(newName)}
              initialLinkName={this.state.homeLink}
              />

          </div>
        </div>

      </div>
    );
  }
}

// tell react what to render where.
render(<App/>, window.document.getElementById("app"));
