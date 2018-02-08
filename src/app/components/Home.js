import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    }

  }


  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }


  render(){
    return (
      <div>
        {/* pass in component name prop */}
        <h2>Welcome to {this.props.componentName}, you are {this.state.age} years old.</h2>

        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Increase my age</button>

      </div>
    );
  }
}


// Specify prop types
Home.propTypes = {
  component_name: PropTypes.string,
  age: PropTypes.number
};
