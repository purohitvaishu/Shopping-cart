//import { Redirect } from "react-router-dom";
import React, { Component } from "react";

import "../style.css";
import { logOut } from "../actions/loginActions";
import Login from "./loginForm";
import store from "../store";

class Logout extends Component {
  render() {
    store.dispatch(logOut(true));
    return <Login />;
  }
}

export default Logout;
