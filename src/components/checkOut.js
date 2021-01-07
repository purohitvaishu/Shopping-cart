import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { checkOut } from "../actions/cartActions";
import store from "../store";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toCart: false,
      disabled: false
    };
  }

  onClick = async e => {
    e.preventDefault();

    store.dispatch(checkOut(store.getState().cartReducer.cart));

    await this.setState({
      toCart: true,
      disabled: true
    });
  };

  renderRedirect = () => {
    if (this.state.toCart === true) {
      return <Redirect to={{ pathname: "/Cart" }} />;
    }
  };

  render() {
  
    return (
      <>
        {this.renderRedirect()}
        <div id="checkout">
          <button
            onClick={this.onClick}
            id="checkout"
            disabled={this.state.disabled}
          >
            Checkout
          </button>
        </div>
      </>
    );
  }
}

export default Update;
