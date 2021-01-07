import React from "react";

import DeleteCart from "./deleteCart";
import UpdateCart from "./updateCart";

const Cart = ({ product, quantity, unitcost, img }) => (
  <div id="trow">
    <div id="left">
      <img
        height="100px"
        width="100px"
        src={process.env.PUBLIC_URL + img}
        alt="item"
      />
    </div>

    <div id="middle">
      <div id="md1">{product}</div>

      <div id="md2">{quantity}</div>

      <div id="md3">
        <UpdateCart
          product={product}
          unitcost={unitcost}
          img={img}
          quantity={quantity}
        />
      </div>
    </div>

    <div id="right">
      <div id="md1">{unitcost}&nbsp;Rs.</div>

      <div id="md2">{quantity * unitcost}&nbsp;Rs.</div>

      <div id="md3">
        <DeleteCart product={product} />
      </div>
    </div>
  </div>
);

export default Cart;
