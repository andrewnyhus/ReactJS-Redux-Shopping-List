import React from "react";
import {NavLink as Link} from "react-router-dom";

/* stateless component */
export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to="/home" activeStyle={{color: "blue"}} >Home</Link></li>
            <li><Link to="/user/example_user" activeStyle={{color: "blue"}} >User</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
