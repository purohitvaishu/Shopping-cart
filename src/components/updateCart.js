import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import store from "../store";
import { updateCart } from "../actions/cartActions";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toCart: false
    };
  }

  onClick = async (product, img, unitcost, event) => {
    event.preventDefault();

    if (document.getElementById(product).value < 1) {
      store.dispatch(updateCart(product, 1, unitcost, img));

      await this.setState({
        toCart: true
      });
    } else {
      store.dispatch(
        updateCart(
          product,
          parseInt(document.getElementById(product).value),
          unitcost,
          img
        )
      );

      await this.setState({
        toCart: true
      });
    }
  };

  renderRedirect = () => {
    if (this.state.toCart === true) {
      return <Redirect to={{ pathname: "/Cart" }} />;
    }
  };

  render() {
    let product = this.props.product,
      img = this.props.img,
      unitcost = this.props.unitcost;

    return (
      <div>
        {this.renderRedirect()}
        <input type="text" id={product} />
        <button onClick={event => this.onClick(product, img, unitcost, event)}>
          Add
        </button>
      </div>
    );
  }
}

export default Update;
