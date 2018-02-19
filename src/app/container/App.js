import React from "react";
import {connect} from "react-redux";
import {Home} from "../components/Home";
import {Root} from "../components/Root";

export class App extends React.Component{


  render(){

    return (
      <Root>
        <Home
          itemResult={this.props.item.itemReducer.result}
          itemLastValues={this.props.item.itemReducer.lastValues}
          createShoppingItem={(value) => this.props.createShoppingItem(value)}
          updateShoppingItem={(newValue, index) => this.props.updateShoppingItem(newValue, index)}
          deleteShoppingItem={(index) => this.props.deleteShoppingItem(index)}
          deleteAllShoppingItems={() => this.props.deleteAllShoppingItems()}
          toggleCheckItem={(index) => this.props.toggleCheckItem(index)}
          showHistory={this.props.item.historyVisibilityReducer.showHistory}
          toggleHistoryVisibility={() => this.props.toggleHistoryVisibility()}
          selectHistoryEntryToInspect={(index) => this.props.selectHistoryEntryToInspect(index)}
          selectedHistoryEntryToInspect={this.props.item.itemReducer.selectedHistoryEntryToInspect}
          revertToHistoryEntry={(index) => this.props.revertToHistoryEntry(index)}
          />
      </Root>
    );
  }
}

// maps the state into props :)
const mapStateToProps = (state) => {
  return {
    item: state
  };
};

// maps actions to props
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
        type: "DELETE_SHOPPING_ITEM",
        payload: {index: index}
      });
    },

    deleteAllShoppingItems: () => {
      dispatch({
        type: "DELETE_ALL_SHOPPING_ITEMS",
        payload: {}
      });
    },

    toggleCheckItem: (index) => {
      dispatch({
        type: "TOGGLE_CHECK",
        payload: {index: index}
      })
    },

    toggleHistoryVisibility: () => {
      dispatch({
        type: "TOGGLE_HISTORY_VISIBILITY",
        payload: {}
      })
    },

    selectHistoryEntryToInspect: (index) => {
      dispatch({
        type: "SELECT_HISTORY_VERSION_TO_INSPECT",
        payload: {index: index}
      })
    },

    revertToHistoryEntry: (index) => {
      dispatch({
        type: "REVERT_TO_HISTORY_ENTRY",
        payload: {index: index}
      })
    }


  };
};


// connects App component with mapped props
export default connect(mapStateToProps, mapDispatchToProps)(App);
