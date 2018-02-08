import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


// define app component
class App extends React.Component {
    render() {

      var user = {
        name: "Andrew",
        age: 22,
        hobbies: ["Video Games", "Running"]
      };

      return(
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Header/>

            </div>
          </div>

          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Home component_name="Home" user={user} >
                <p>I am a child element of the Home component.</p>
              </Home>

            </div>
          </div>

        </div>
      );
    }
}

// tell react what to render where.
render(<App/>, window.document.getElementById("app"));
