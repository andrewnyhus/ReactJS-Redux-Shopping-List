import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "Changed Link"
    };

    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);

  }

  // increments age and uses state to re-render necessary parts
  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }


  // changes link in header to the value of homeLink
  onChangeLink(){
    this.props.changeLink(this.state.homeLink);
  }


  render(){
    return (
      <div>
        {/* pass in component name prop */}
        <h2>Welcome to {this.props.componentName}, you are {this.state.age} years old.</h2>
        <p>Status: {this.state.status}</p>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Increase my age</button>
        <hr />

        {/* fires function that is passed in as a prop */ }
        <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
        <hr />

        {/* changes link in the header component */}
        <button className="btn btn-primary" onClick={() => this.onChangeLink()}>Change Header Link</button>

      </div>
    );
  }
}


// Specify prop types
Home.propTypes = {
  componentName: PropTypes.string,
  age: PropTypes.number,
  greet: PropTypes.func,
  homeLink: PropTypes.string
};
