import React from "react";
import {Bootstrap, DropdownButton, ButtonToolbar, MenuItem, Glyphicon} from "react-bootstrap";

export const HistoryView = (props) => {



// History Inspector
//==============================================================================
const historyInspector = (
  <div hidden={!props.showHistory}>
    <hr/>
    {/* Title of Inspector */}
    {props.selectedHistoryEntryToInspect > -1 ? (
      <h4 align="center">{"Edit # " + (props.selectedHistoryEntryToInspect + 1)}</h4>
    ):""}


    {/* Populate History Inspector */}
    <ul className="list-group items_list">
      {props.selectedHistoryEntryToInspect > -1 && props.itemLastValues[props.selectedHistoryEntryToInspect].items.length > 0 ? (
          <div>
            {props.itemLastValues[props.selectedHistoryEntryToInspect].items.map((item, i) =>

              <li
                key={"item_"+i}
                className={item.checked ?
                  "list-group-item shopping_list_item checked_shopping_list_item_history":
                  "list-group-item shopping_list_item"}>

                  {/* Item checkbox & text */}
                  {item.checked ? (
                    <div>
                      <input type="checkbox" className={"shopping_list_item_checkbox"} disabled={true} checked={true} onChange={() => props.toggleCheckItem(i)} />
                      <div className={"shopping_list_item_text_history checked_shopping_list_item_text"}>{item.value}</div>
                    </div>
                  ):(
                    <div>
                      <input type="checkbox" className={"shopping_list_item_checkbox"} disabled={true} checked={false} onChange={() => props.toggleCheckItem(i)} />
                      <div className={"shopping_list_item_text_history"}>{item.value}</div>
                    </div>
                  )}

              </li>
            )}
          </div>

        ):(
          <h5 align="center">No Items in History Version</h5>
        )}
    </ul>
  </div>
);
//==============================================================================


// History Dropdown
//==============================================================================
const historyDropdown = (
  <div className={"dropdown_container history_toolbar_item"}>
    {/* If there is history, show history dropdown */}
    {props.showHistory && props.selectedHistoryEntryToInspect > -1 ? (
      <DropdownButton id="historyDropdown" dropup={true} title={"Edit # " + (props.selectedHistoryEntryToInspect + 1)}>

        {/* Populate dropdown menu */}
        {props.itemLastValues.map((entry, i) =>
          <MenuItem eventKey={"dropdown_item_" + i} key={"dropdown_item_" + i}
            onSelect={() => props.selectHistoryEntryToInspect(i)}
            onMouseEnter={() => props.selectHistoryEntryToInspect(i)}
            title={"Edit # " + (i + 1)}>
              {"Edit # " + (i + 1)}
          </MenuItem>
        )}
      </DropdownButton>
    ):(
      <div hidden={!props.showHistory}>

        <h4 align="center">No History</h4>
      </div>
    )}
  </div>
);
//==============================================================================


// Revert to History Dropdown
//==============================================================================
const revertToHistoryEntry = (
  <div className={"dropdown_container history_toolbar_item"}>
    {/* If there is history, show revert history dropdown */}
    {props.showHistory && props.selectedHistoryEntryToInspect > -1 ? (
      <DropdownButton
        id={"revertDropdown"}
        className={"revertDropdown"} dropup={true} noCaret
        title={"Revert to Edit # " + (props.selectedHistoryEntryToInspect + 1)}>

        <div className={"revertDropdownMenuDiv"}>
          <h6 align="center">Are you sure?<br></br>Note: this can be undone by reverting again.</h6>
        </div>
        <MenuItem eventKey={"Yes"} onSelect={() => props.revertToHistoryEntry(props.selectedHistoryEntryToInspect)} title={"Yes"}>
          <h6 align="center">Yes</h6>
        </MenuItem>

      </DropdownButton>
    ):(
      <div hidden={!props.showHistory}>

        <h4 align="center">No History</h4>
      </div>

    )}
  </div>
);
//==============================================================================


// Button Toolbar
//==============================================================================
const buttonToolbar = (
  <div>

    <ButtonToolbar id="history_toolbar">

      <button
        className={"btn btn-primary history_toolbar_item"}
        onClick={() => props.toggleHistoryVisibility()}>
          <Glyphicon glyph="time"/>
          {props.showHistory ? "Hide History" : "Show History" }
      </button>

      {historyDropdown}
      {revertToHistoryEntry}


    </ButtonToolbar>


  </div>
);
//==============================================================================


return (
  <div>

    {buttonToolbar}
    {historyInspector}

  </div>

);

};
