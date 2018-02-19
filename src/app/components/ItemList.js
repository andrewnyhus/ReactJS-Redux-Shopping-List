import React from "react";
import {Glyphicon} from "react-bootstrap";

export const ItemList = (props) => {


  const buttonsRow = (
    <li className={"list-group-item button_row"}>

      <button id="add_new_button" className={"btn btn-default"} onClick={() => props.createShoppingItem("")}>
        <Glyphicon glyph={"plus"}/>
      </button>

      <button id="delete_all_button"
        disabled={props.itemResult.items.length > 0 ? false : true}
        className={"btn btn-danger"} onClick={() => props.deleteAllShoppingItems()}>
        <Glyphicon id="delete_all_glyph" glyph={"trash"}/>
        Delete All
      </button>

    </li>
  );


  const items = (
    <div>

      {/* Add each item to the list */}
      {/*====================================================================*/}
      {props.itemResult.items.map((item, i) =>

        <li key={"item_"+i} className={"list-group-item shopping_list_item"}>
          <div className="input-group">


            {/* Item checkbox */}
            {item.checked ? (
              <span className="input-group-addon">
                <input type="checkbox" className="shopping_list_item_checkbox" checked={true} onChange={() => props.toggleCheckItem(i)} />
              </span>
            ):(
              <span className="input-group-addon">
                <input type="checkbox" className="shopping_list_item_checkbox" checked={false} onChange={() => props.toggleCheckItem(i)} />
              </span>
            )}


            {/* Item text input/display */}
            <input
              className={item.checked ? "form-control shopping_list_item_text checked_shopping_list_item_text": "form-control shopping_list_item_text"}
              type="text"
              value={item.value}
              onChange={(event) => props.updateShoppingItem(event, i)}
              disabled={item.checked ? true : false }
              autoFocus={(i + 1 === props.itemResult.items.length) ? true : false}
              onKeyPress={(event) => {
                if(event.key === "Enter"){
                  props.createShoppingItem("");
                }
              }}/>



              {/* Delete item button */}
              <span className="input-group-btn">
                <button align="left" className="btn btn-danger"
                  onClick={() => props.deleteShoppingItem(i)}>
                  <Glyphicon glyph="trash"/>
                </button>
              </span>


          </div>
        </li>
      )}
      {/*====================================================================*/}
    </div>
  );


  return (
    <div>
      <ul className={"list-group items_list"}>
        {items}
        {buttonsRow}
      </ul>
    </div>
  );

}
