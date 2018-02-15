import React from "react";

export class User extends React.Component {

  onNavigateHome(){
    this.props.history.push("/home");
  }

  render(){
    return (
      <div>
        <h3>User Page</h3>
        <p>User ID: {this.props.match.params.userID}</p>
        <button onClick={() => this.onNavigateHome()} className="btn btn-primary">Go Home (Using Code to Navigate)</button>
      </div>
    );
  }
}
