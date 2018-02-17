import React from "react";

export const Home = (props) => {

    const newItem = (
      <li className={"list-group-item new_item shopping_list_item"}>
        <button className={"btn btn-default"} onClick={() => props.createShoppingItem("")}>
          <span className={"glyphicon glyphicon-plus"}></span>
        </button>
      </li>
    );

    const items = (
      <ul className={"list-group items_list"}>
        {props.itemResult.items.map((item, i) =>

          <li key={"item_"+i} className={"list-group-item shopping_list_item"}>

            <div className="trash_div">
              <button align="left" className="btn btn-danger"
                onClick={() => props.deleteShoppingItem(i)}>
                <span className="glyphicon glyphicon-trash"></span>
              </button>
            </div>

            <input className="shopping_list_item_text" type="text" value={item}
              onChange={(event) => props.updateShoppingItem(event, i)} />

          </li>

        )}
        {newItem}
      </ul>
    );


    return (
      <div>
        {items}
      </div>
    );
};
