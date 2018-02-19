export function createShoppingItem(value){
  return {
    type: "CREATE",
    payload: {value: value}
  };
}


export function updateShoppingItem(event, index){
  return {
    type: "UPDATE",
    payload: {newValue: event.target.value, index: index}
  };
}


export function deleteShoppingItem(index){
  return {
    type: "DELETE_SHOPPING_ITEM",
    payload: {index: index}
  };
}


export function deleteAllShoppingItems(){
  return {
    type: "DELETE_ALL_SHOPPING_ITEMS",
    payload: {}
  };
}


export function toggleCheckItem(index){
  return {
    type: "TOGGLE_CHECK",
    payload: {index: index}
  };
}


export function selectHistoryEntryToInspect(index){
  return {
    type: "SELECT_HISTORY_VERSION_TO_INSPECT",
    payload: {index: index}
  };
}


export function revertToHistoryEntry(index){
  return {
    type: "REVERT_TO_HISTORY_ENTRY",
    payload: {index: index}
  };
}
