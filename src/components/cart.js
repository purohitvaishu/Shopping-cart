import React, { Component } from "react";

import CheckOut from "./checkOut";
import count from "../js/count";
import Heading from "../containers/heading";
import Item from "./items";
import store from "../store";

class CartItem extends Component {
  render() {
    const { cart } = store.getState().cartReducer;

    return (
      <div className="items">
        <div id="table">
          <Heading />
          <br />

          {cart.map(post => (
            <Item
              key={post.product}
              product={post.product}
              quantity={post.quantity}
              unitcost={post.unitcost}
              img={post.img}
            />
          ))}
        </div>

        <div id="total">
          <hr />
          <b>GrandTotal:&nbsp;</b>
          {count(cart)}&nbsp;Rs.
        </div>

        <CheckOut cnt={count(cart)}/>
      </div>
    );
  }
}

export default CartItem;
