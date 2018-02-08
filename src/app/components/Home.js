import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  render(){
    return (
      <div>
        {/* pass in component name prop */}
        <h2>Welcome to {this.props.component_name}</h2>

        {/* pass in props for name and age of user */}
        <p>Hello {this.props.user.name}, you are {this.props.user.age} years old!</p>

        <div>
          <h4>Hobbies</h4>
          <ul>
            {/*iterate through user hobbies and create a list item for each.*/}
            {this.props.user.hobbies.map((hobby, i) => <li key={"hobby_"+i}>{hobby}</li>)}
          </ul>
        </div>

        <hr/>
        {/* pass children in */}
        {this.props.children}

      </div>
    );
  }
}


// Specify prop types
Home.propTypes = {
  component_name: PropTypes.string,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};
