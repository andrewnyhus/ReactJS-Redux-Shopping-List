import React from "react";
import {connect} from "react-redux";
import {Home} from "./Home";
import {Root} from "./Root";

export class App extends React.Component{


  render(){
    return (
      <Root>
        <Home
          itemResult={this.props.item.result}
          itemLastValues={this.props.item.lastValues}
          createShoppingItem={(value) => this.props.createShoppingItem(value)}
          updateShoppingItem={(newValue, index) => this.props.updateShoppingItem(newValue, index)}
          deleteShoppingItem={(index) => this.props.deleteShoppingItem(index)}
          />
      </Root>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    item: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {


    createShoppingItem: (value) => {
      dispatch({
        type: "CREATE",
        payload: {value: value}
      });
    },

    updateShoppingItem: (event, index) => {
      dispatch({
        type: "UPDATE",
        payload: {newValue: event.target.value, index: index}
      });
    },

    deleteShoppingItem: (index) => {
      dispatch({
        type: "DELETE",
        payload: {index: index}
      });
    },

    checkItem: (index) => {
      dispatch({
        type: "CHECK",
        payload: {index: index}
      })
    }

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
