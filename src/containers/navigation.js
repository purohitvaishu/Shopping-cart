import React, { Component } from "react";
import { Link } from "react-router-dom";

import Login from "../components/loginForm";
import { logOut } from "../actions/loginActions";
import store from "../store";

class Navigation extends Component {
  onClick() {
    console.log("hy user");
    store.dispatch(logOut(false));
    return <Login />;
  }

  render() {
    return (
      <>
        <div id="menu">
          <ul>
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/Women"}>Women</Link>
            </li>
            <li>
              <Link to={"/Men"}>Men</Link>
            </li>
            <li>
              <Link to={"/Grocery"}>Grocery</Link>
            </li>
            <li id="left">
              <button onClick={this.onClick} id="logout">
                Logout
              </button>
            </li>
            <li id="left">
              <Link to={"/Cart"}>Cart</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
