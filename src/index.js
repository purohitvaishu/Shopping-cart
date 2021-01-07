import { Provider } from "react-redux";
import React, { Component } from "react";
import ReactDom from "react-dom";

import "./style.css";
import Login from "./components/loginForm";
import store from "./store";

class App extends Component {
  render() {
    return <Login />;
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log("initial state:", store.getState());
