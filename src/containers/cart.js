import React, { Component } from "react";

import CartItem from "../components/cart";

class Cart extends Component {
  render() {
    return (
      <div id="box-items">
        <h2>Cart</h2>
        <div className="shopping-cart">
          <CartItem />
        </div>
      </div>
    );
  }
}

export default Cart;
