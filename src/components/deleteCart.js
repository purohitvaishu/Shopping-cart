import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { deleteFromCart } from "../actions/cartActions";
import store from "../store";

class DeleteCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toCart: false
    };
  }

  onClick = async product => {
    store.dispatch(deleteFromCart(product));
    await this.setState({ toCart: true });
  };

  renderRedirect = () => {
    if (this.state.toCart === true) {
      return <Redirect to={{ pathname: "/Cart" }} />;
    }
  };

  render() {
    let product = this.props.product;

    return (
      <div>
        {this.renderRedirect()}
        <button onClick={() => this.onClick(product)}>Remove</button>
      </div>
    );
  }
}

export default DeleteCart;
