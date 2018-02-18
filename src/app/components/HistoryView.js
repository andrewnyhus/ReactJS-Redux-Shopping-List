import React from "react";
import {Bootstrap, DropdownButton, MenuItem, Glyphicon} from "react-bootstrap";

export const HistoryView = (props) => {

  {console.log("History  props")}
  {console.log(props.itemLastValues.length)}



const toggleHistoryVisibility = (
  <div>
    <button
      className={"btn btn-primary"}
      onClick={() => props.toggleHistoryVisibility()}>
        <Glyphicon glyph="time"/>
        {props.showHistory ? "Hide History" : "Show History" }
    </button>
  </div>
);


const historyInspector = (
  <ul className="list-group">
    {/* Populate History Inspector */}
    {props.selectedHistoryEntryToInspect > -1 && props.itemLastValues[props.selectedHistoryEntryToInspect].items.length > 0 ? (
        <div>
          {props.itemLastValues[props.selectedHistoryEntryToInspect].items.map((item, i) =>

            <li key={"item_"+i} className={"list-group-item shopping_list_item"}>

                {/* Item checkbox & text */}
                {item.checked ? (
                  <div>
                    <input type="checkbox" className={"shopping_list_item_checkbox"} disabled={true} checked={true} onChange={() => props.toggleCheckItem(i)} />
                    <div className={"checked_shopping_list_item_text"}>{item.value}</div>
                  </div>
                ):(
                  <div>
                    <input type="checkbox" className={"shopping_list_item_checkbox"} disabled={true} checked={false} onChange={() => props.toggleCheckItem(i)} />
                    <div>{item.value}</div>
                  </div>
                )}



            </li>
          )}
        </div>

      ):(
        <h6 align="center">No Items in History Version</h6>
      )}
  </ul>
);



const historyDropdown = (
  <div>
    {/* Show dropdown of history versions */}
    {props.selectedHistoryEntryToInspect > -1 ? (
      <div>
        <DropdownButton id="historyDropdown" title={"Edit # " + (props.selectedHistoryEntryToInspect + 1)}>

          {/* Populate dropdown menu */}
          {props.itemLastValues.map((entry, i) =>
            <MenuItem
              eventKey={"dropdown_item_" + i}
              key={"dropdown_item_" + i}
              onSelect={() => props.selectHistoryEntryToInspect(i)}
              title={"Edit # " + (i + 1)}
              >
                {"Edit # " + (i + 1)}
            </MenuItem>
          )}
        </DropdownButton>


        {historyInspector}

      </div>

    ):(
      <h6 align="center">No History</h6>
    )}
  </div>
);


const historyView = (

  <div hidden={!props.showHistory}>
      <br></br>
      {historyDropdown}
  </div>
);



return (
  <div>

    {toggleHistoryVisibility}
    {historyView}

  </div>

);

};
