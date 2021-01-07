import React from "react";

import { addToCart } from "../actions/cartActions";
import store from "../store";

const Cart = ({ product, unitcost, img }) => (
  <li>
    <img
      width="250px"
      height="300px"
      src={process.env.PUBLIC_URL + img}
      alt="item"
    />
    <h1>{product}</h1>
    <p className="price">INR{unitcost}</p>
    <p>Some text about the item..</p>
    <p>
      <button
        onClick={() => store.dispatch(addToCart(product, 1, unitcost, img))}
      >
        Add to Cart
      </button>
    </p>
  </li>
);

export default Cart;
