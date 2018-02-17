import React from "react";

export const EditList = (props) => {


  const newItemRow = (
    <li className={"list-group-item new_item shopping_list_item"}>
      <button className={"btn btn-default"} onClick={() => props.createShoppingItem("")}>
        <span className={"glyphicon glyphicon-plus"}></span>
      </button>
    </li>
  );


  const itemsList = (
    <ul className={"list-group items_list"}>

      {/* Add each item to the list */}
      {/*====================================================================*/}
      {props.itemResult.items.map((item, i) =>

        <li key={"item_"+i} className={"list-group-item shopping_list_item"}>
          <div className="input-group">

            {/* Delete item button */}
            <span className="input-group-btn">
              <button align="left" className="btn btn-danger"
                onClick={() => props.deleteShoppingItem(i)}>
                <span className="glyphicon glyphicon-trash"></span>
              </button>
            </span>


            {/* Item text input/display */}
            {item.checked ? (
                <input className="form-control shopping_list_item_text checked_shopping_list_item_text" type="text" value={item.value}
                  onChange={(event) => props.updateShoppingItem(event, i)} disabled="true" />
            ):(
                <input className="form-control shopping_list_item_text" type="text" value={item.value}
                  onChange={(event) => props.updateShoppingItem(event, i)} />
            )}


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


          </div>
        </li>
      )}
      {/*====================================================================*/}

      {newItemRow}
    </ul>
  );


  return (
    <div>
      {itemsList}
    </div>
  );

}
