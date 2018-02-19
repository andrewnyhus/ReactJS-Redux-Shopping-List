import React from "react";
import {connect} from "react-redux";

import {
  createShoppingItem, updateShoppingItem, deleteShoppingItem, deleteAllShoppingItems,
  toggleCheckItem, selectHistoryEntryToInspect, revertToHistoryEntry
} from "../actions/itemActions";
import {toggleHistoryVisibility} from "../actions/historyVisibilityActions";

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
      dispatch(createShoppingItem(value));
    },

    updateShoppingItem: (event, index) => {
      dispatch(updateShoppingItem(event, index));
    },

    deleteShoppingItem: (index) => {
      dispatch(deleteShoppingItem(index));
    },

    deleteAllShoppingItems: () => {
      dispatch(deleteAllShoppingItems());
    },

    toggleCheckItem: (index) => {
      dispatch(toggleCheckItem(index));
    },

    selectHistoryEntryToInspect: (index) => {
      dispatch(selectHistoryEntryToInspect(index));
    },

    revertToHistoryEntry: (index) => {
      dispatch(revertToHistoryEntry(index));
    },

    toggleHistoryVisibility: () => {
      dispatch(toggleHistoryVisibility());
    }


  };
};


// connects App component with mapped props
export default connect(mapStateToProps, mapDispatchToProps)(App);
