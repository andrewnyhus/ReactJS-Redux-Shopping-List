// set up view history reducer
export default (state = {
  showHistory: false
}, action) => {

  switch (action.type){
    case "TOGGLE_HISTORY_VISIBILITY":
      state = {
        ...state,
        showHistory: !state.showHistory
      }
      break;
  }

  return state;
};
