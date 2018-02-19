// set up items reducer
export default (state = {
    result: {items: []},
    lastValues: [],
    selectedHistoryEntryToInspect: -1 // mutate this variable because we don't want to preserve it's state
  }, action) => {


  switch (action.type) {
    case "CREATE": // immutably creates item with given value
      var value = action.payload.value;

      state = {
        ...state,
        result: {items: [...state.result.items, {value: value, checked: false}]},
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      };
      break;


    case "UPDATE": // immutably updates item at given index with given value
      var indexToUpdate = action.payload.index;
      var newValue = action.payload.newValue;

      state = {
        ...state,
        result: {
          items:[
            ...state.result.items.slice(0, indexToUpdate),
            {value: newValue, checked: state.result.items[indexToUpdate].checked},
            ...state.result.items.slice(indexToUpdate + 1)
          ]
        },
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }
      break;


    case "DELETE_SHOPPING_ITEM": // immutably deletes item at given index
      var indexToDelete = action.payload.index;

      state = {
        ...state,
        result: {
          items:[
            ...state.result.items.slice(0, indexToDelete),
            ...state.result.items.slice(indexToDelete + 1)
          ]
        },
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }

      break;

    case "DELETE_ALL_SHOPPING_ITEMS": // immutably delete all shopping items
      state = {
        ...state,
        result: {items: []},
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length

      }
      break;


    case "TOGGLE_CHECK": // immutably toggles checkbox at given index
      var indexToToggle = action.payload.index;

      state = {
        ...state,
        result: {
          items:[
            ...state.result.items.slice(0, indexToToggle),
            {value: state.result.items[indexToToggle].value, checked: !state.result.items[indexToToggle].checked},
            ...state.result.items.slice(indexToToggle + 1)
          ]
        },
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }

      break;

    case "REVERT_TO_HISTORY_ENTRY": // revert to previous history version
      var index = action.payload.index;

      state = {
        ...state,
        result: state.lastValues[index],
        lastValues: [...state.lastValues, state.result],
        selectedHistoryEntryToInspect: state.lastValues.length
      }

      break;

    case "SELECT_HISTORY_VERSION_TO_INSPECT": // select history version to inspect
      var selectIndex = action.payload.index;

      state = {
        ...state,
        selectedHistoryEntryToInspect: selectIndex
      }
      break;

  }
  return state;
};
